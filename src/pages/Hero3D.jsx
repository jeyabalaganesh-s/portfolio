import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useEffect } from "react";

function BalaModel() {
  const { scene } = useGLTF("/models/bala.glb");

  const headRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  const blinkMeshRef = useRef();


  // 🔥 Track mouse globally
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      mouseRef.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Find bones once
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isBone) {
        if (child.name === "Head") headRef.current = child;
        if (child.name === "LeftArm") leftArmRef.current = child;
        if (child.name === "RightArm") rightArmRef.current = child;
        if (child.isMesh && child.morphTargetDictionary) { blinkMeshRef.current = child;
        }
    }
    });
    

    // Casual arm drop
    if (leftArmRef.current)
      leftArmRef.current.rotation.x = 1.1;

    if (rightArmRef.current)
      rightArmRef.current.rotation.x = 1.1;

  }, [scene]);

  // 🔥 Head follow entire screen
useFrame(() => {
  if (headRef.current) {
    const targetY = mouseRef.current.x * 0.4;
    const targetX = -mouseRef.current.y * 0.25; // 👈 fixed

    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      targetY,
      0.08
    );

    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      targetX,
      0.08
    );
  }
});

useEffect(() => {
  if (!scene) return;

  let mesh;

  scene.traverse((child) => {
    if (child.isMesh && child.morphTargetDictionary) {
      mesh = child;
    }
  });

  if (!mesh) return;

  const dict = mesh.morphTargetDictionary;

  const leftIndex =
    dict["eyeBlinkLeft"] ?? dict["EyeBlinkLeft"];

  const rightIndex =
    dict["eyeBlinkRight"] ?? dict["EyeBlinkRight"];

  if (leftIndex === undefined || rightIndex === undefined) {
    console.log("Blink morph targets not found");
    return;
  }

  const blink = () => {
    mesh.morphTargetInfluences[leftIndex] = 1;
    mesh.morphTargetInfluences[rightIndex] = 1;

    setTimeout(() => {
      mesh.morphTargetInfluences[leftIndex] = 0;
      mesh.morphTargetInfluences[rightIndex] = 0;
    }, 150);
  };

  const interval = setInterval(blink, 3000 + Math.random() * 2000);

  return () => clearInterval(interval);

}, [scene]);



  return (
    <group position={[0, -2.9, 0]}>
      <primitive object={scene} scale={1.8} />
    </group>
  );
}



export default function Hero3D() {
  return (
    <div className="w-full h-[800px]">
      <Canvas camera={{ position: [0, 0, 2], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[3, 4, 5]} intensity={2} />
          <directionalLight
            position={[-3, 3, 5]}
            intensity={1.2}
            color="#ff7a18"
          />
          <BalaModel />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
