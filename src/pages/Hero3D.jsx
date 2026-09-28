import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

function BalaModel() {
  const { scene } = useGLTF("/models/bala.glb");

  const headRef = useRef(null);
  const leftArmRef = useRef(null);
  const rightArmRef = useRef(null);

  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  // Mouse position
  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  // Original eye rotations
  const leftEyeRotation = useRef({
    x: 0,
    y: 0,
    z: 0,
  });

  const rightEyeRotation = useRef({
    x: 0,
    y: 0,
    z: 0,
  });

  // Original eye scales
  const leftEyeScale = useRef({
    x: 1,
    y: 1,
    z: 1,
  });

  const rightEyeScale = useRef({
    x: 1,
    y: 1,
    z: 1,
  });

  // Blink state
  const blinkRef = useRef(0);

  // =====================================================
  // MOUSE TRACKING
  // =====================================================

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth) * 2 - 1;

      const y =
        -(event.clientY / window.innerHeight) * 2 + 1;

      mouseRef.current.x = x;
      mouseRef.current.y = y;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  // =====================================================
  // FIND BONES
  // =====================================================

  useEffect(() => {
    scene.traverse((child) => {
      // -----------------------------------------------
      // HEAD
      // -----------------------------------------------

      if (
        child.isBone &&
        child.name === "Head"
      ) {
        headRef.current = child;
      }

      // -----------------------------------------------
      // ARMS
      // -----------------------------------------------

      if (
        child.isBone &&
        child.name === "LeftArm"
      ) {
        leftArmRef.current = child;
      }

      if (
        child.isBone &&
        child.name === "RightArm"
      ) {
        rightArmRef.current = child;
      }

      // -----------------------------------------------
      // LEFT EYE
      // -----------------------------------------------

      if (
        child.isBone &&
        child.name === "LeftEye"
      ) {
        leftEyeRef.current = child;

        leftEyeRotation.current = {
          x: child.rotation.x,
          y: child.rotation.y,
          z: child.rotation.z,
        };

        leftEyeScale.current = {
          x: child.scale.x,
          y: child.scale.y,
          z: child.scale.z,
        };

        console.log(
          "LeftEye bone ready"
        );
      }

      // -----------------------------------------------
      // RIGHT EYE
      // -----------------------------------------------

      if (
        child.isBone &&
        child.name === "RightEye"
      ) {
        rightEyeRef.current = child;

        rightEyeRotation.current = {
          x: child.rotation.x,
          y: child.rotation.y,
          z: child.rotation.z,
        };

        rightEyeScale.current = {
          x: child.scale.x,
          y: child.scale.y,
          z: child.scale.z,
        };

        console.log(
          "RightEye bone ready"
        );
      }
    });

    // =================================================
    // ARM POSITION
    // =================================================

    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = 1.1;
    }

    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = 1.1;
    }
  }, [scene]);

  // =====================================================
  // HEAD + EYES
  // =====================================================

  useFrame((state, delta) => {
    const mouseX = mouseRef.current.x;
    const mouseY = mouseRef.current.y;

    // ===================================================
    // HEAD
    // ===================================================

    if (headRef.current) {
      const targetHeadY =
        mouseX * 0.20;

      const targetHeadX =
        -mouseY * 0.35;

      headRef.current.rotation.y =
        THREE.MathUtils.lerp(
          headRef.current.rotation.y,
          targetHeadY,
          0.08
        );

      headRef.current.rotation.x =
        THREE.MathUtils.lerp(
          headRef.current.rotation.x,
          targetHeadX,
          0.01
        );
    }

    // ===================================================
    // EYES
    // ===================================================

    /*
      Eyes move more than the head.

      Head:
      0.40 horizontal
      0.25 vertical

      Eyes:
      0.55 horizontal
      0.35 vertical
    */

    const eyeTargetY =
      mouseX * 0.55;

    const eyeTargetX =
      -mouseY * -0.1;

    // -----------------------------------------------
    // LEFT EYE
    // -----------------------------------------------

    if (leftEyeRef.current) {
      leftEyeRef.current.rotation.y =
        THREE.MathUtils.lerp(
          leftEyeRef.current.rotation.y,
          leftEyeRotation.current.y +
            eyeTargetY,
          0.15
        );

      leftEyeRef.current.rotation.x =
        THREE.MathUtils.lerp(
          leftEyeRef.current.rotation.x,
          leftEyeRotation.current.x +
            eyeTargetX,
          0.15
        );
    }

    // -----------------------------------------------
    // RIGHT EYE
    // -----------------------------------------------

    if (rightEyeRef.current) {
      rightEyeRef.current.rotation.y =
        THREE.MathUtils.lerp(
          rightEyeRef.current.rotation.y,
          rightEyeRotation.current.y +
            eyeTargetY,
          0.15
        );

      rightEyeRef.current.rotation.x =
        THREE.MathUtils.lerp(
          rightEyeRef.current.rotation.x,
          rightEyeRotation.current.x +
            eyeTargetX,
          0.15
        );
    }

    // ===================================================
    // BLINK
    // ===================================================

    /*
      Your GLB doesn't have eyelid morph targets.

      Therefore we simulate a blink by vertically
      compressing the eye bones very quickly.
    */

    if (
      leftEyeRef.current &&
      rightEyeRef.current
    ) {
      const blinkAmount = blinkRef.current;

      const normalLeftY =
        leftEyeScale.current.y;

      const normalRightY =
        rightEyeScale.current.y;

      const closedLeftY =
        normalLeftY * 0.08;

      const closedRightY =
        normalRightY * 0.08;

      const targetLeftScale =
        THREE.MathUtils.lerp(
          normalLeftY,
          closedLeftY,
          blinkAmount
        );

      const targetRightScale =
        THREE.MathUtils.lerp(
          normalRightY,
          closedRightY,
          blinkAmount
        );

      leftEyeRef.current.scale.y =
        targetLeftScale;

      rightEyeRef.current.scale.y =
        targetRightScale;
    }
  });

  // =====================================================
  // NATURAL BLINK LOOP
  // =====================================================

  useEffect(() => {
    let cancelled = false;
    let blinkTimeout;

    const sleep = (ms) =>
      new Promise((resolve) =>
        setTimeout(resolve, ms)
      );

    const blink = async () => {
      if (cancelled) return;

      // -----------------------------------------------
      // CLOSE
      // -----------------------------------------------

      for (let i = 0; i <= 1; i += 0.2) {
        if (cancelled) return;

        blinkRef.current = i;

        await sleep(15);
      }

      // -----------------------------------------------
      // CLOSED
      // -----------------------------------------------

      await sleep(60);

      // -----------------------------------------------
      // OPEN
      // -----------------------------------------------

      for (let i = 1; i >= 0; i -= 0.2) {
        if (cancelled) return;

        blinkRef.current = i;

        await sleep(15);
      }

      blinkRef.current = 0;

      // -----------------------------------------------
      // RANDOM NEXT BLINK
      // -----------------------------------------------

      const nextBlink =
        2500 +
        Math.random() * 3000;

      blinkTimeout = setTimeout(
        blink,
        nextBlink
      );
    };

    // First blink
    blinkTimeout = setTimeout(
      blink,
      1800
    );

    return () => {
      cancelled = true;
      clearTimeout(blinkTimeout);
    };
  }, []);

  // =====================================================
  // MODEL
  // =====================================================

  return (
    <group position={[0, -2.9, 0]}>
      <primitive
        object={scene}
        scale={1.8}
      />
    </group>
  );
}

// =========================================================
// HERO 3D
// =========================================================

export default function Hero3D() {
  return (
    <div className="w-full h-[800px]">
      <Canvas
        camera={{
          position: [0, 0, 2],
          fov: 35,
        }}
      >
        <Suspense fallback={null}>

          <ambientLight intensity={1.2} />

          <directionalLight
            position={[3, 4, 5]}
            intensity={2}
          />

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