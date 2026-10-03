import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

/* =========================================================
   CURSOR-TRACKED CHARACTER
   Required:
   public/frames/00.webp ... public/frames/63.webp
   public/frames/center.webp

   Notes:
   - Uses only pre-extracted WebP frames.
   - No runtime MP4 seeking/playback.
   - No CSS 3D transforms.
========================================================= */

function CharacterFrameCanvas() {
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const centerRef = useRef(null);
  const rafRef = useRef(null);

  const angleRef = useRef(0);
  const targetAngleRef = useRef(null);
  const currentFrameRef = useRef(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: false,
      desynchronized: true,
    });

    if (!ctx) return;

    const FRAME_COUNT = 64;
    const RESPONSE = 0.2;
    const DEADZONE = 55;

    const SOURCE_W = 1280;
    const SOURCE_H = 720;

    // Face location inside the original 1280x720 frame.
    const FACE_X = 0.5;
    const FACE_Y = 0.3;

    let mounted = true;
    let resizeObserver = null;

    const frames = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const image = new Image();
      image.decoding = "async";
      image.src = `/frames/${String(index).padStart(2, "0")}.webp`;
      return image;
    });

    const centerImage = new Image();
    centerImage.decoding = "async";
    centerImage.src = "/frames/center.webp";

    framesRef.current = frames;
    centerRef.current = centerImage;

    const getCoverMetrics = () => {
      const rect = canvas.getBoundingClientRect();

      const sourceRatio = SOURCE_W / SOURCE_H;
      const canvasRatio = rect.width / Math.max(rect.height, 1);

      let width;
      let height;
      let x;
      let y;

      if (canvasRatio > sourceRatio) {
        width = rect.width;
        height = width / sourceRatio;
        x = 0;
        y = (rect.height - height) / 2;
      } else {
        height = rect.height;
        width = height * sourceRatio;
        x = (rect.width - width) / 2;
        y = 0;
      }

      return { rect, width, height, x, y };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Redraw the current frame immediately after resize.
      const current = currentFrameRef.current;

      if (current === -2) {
        draw(centerRef.current);
      } else if (current >= 0) {
        draw(framesRef.current[current]);
      }
    };

    const draw = (image) => {
      if (!image || !image.complete || image.naturalWidth === 0) {
        return;
      }

      const { rect, width, height, x, y } = getCoverMetrics();

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(image, x, y, width, height);
    };

    const getTargetAngle = (event) => {
      const { rect, width, height, x, y } = getCoverMetrics();

      const faceX = rect.left + x + width * FACE_X;
      const faceY = rect.top + y + height * FACE_Y;

      const dx = event.clientX - faceX;
      const dy = event.clientY - faceY;

      if (Math.hypot(dx, dy) < DEADZONE) {
        return null;
      }

      let angle = Math.atan2(dx, -dy);

      if (angle < 0) {
        angle += Math.PI * 2;
      }

      return angle;
    };

    const handleMouseMove = (event) => {
      targetAngleRef.current = getTargetAngle(event);
    };

    const lerpAngle = (current, target, amount) => {
      let difference = target - current;

      if (difference > Math.PI) {
        difference -= Math.PI * 2;
      }

      if (difference < -Math.PI) {
        difference += Math.PI * 2;
      }

      return current + difference * amount;
    };

    const findLoadedFrame = (preferredIndex) => {
      const images = framesRef.current;

      for (let offset = 0; offset < FRAME_COUNT; offset += 1) {
        const candidates = [
          (preferredIndex + offset) % FRAME_COUNT,
          (preferredIndex - offset + FRAME_COUNT) % FRAME_COUNT,
        ];

        for (const index of candidates) {
          const image = images[index];

          if (
            image?.complete &&
            image.naturalWidth > 0
          ) {
            return { image, index };
          }
        }
      }

      return null;
    };

    const render = () => {
      if (!mounted) return;

      const target = targetAngleRef.current;

      if (target === null) {
        const center = centerRef.current;

        if (
          center?.complete &&
          center.naturalWidth > 0 &&
          currentFrameRef.current !== -2
        ) {
          draw(center);
          currentFrameRef.current = -2;
        }
      } else if (target !== undefined) {
        angleRef.current = lerpAngle(
          angleRef.current,
          target,
          RESPONSE
        );

        const normalized =
          ((angleRef.current % (Math.PI * 2)) + Math.PI * 2) %
          (Math.PI * 2);

        const frameIndex =
          Math.round(
            (normalized / (Math.PI * 2)) * FRAME_COUNT
          ) % FRAME_COUNT;

        const result = findLoadedFrame(frameIndex);

        if (
          result &&
          currentFrameRef.current !== result.index
        ) {
          draw(result.image);
          currentFrameRef.current = result.index;
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const start = () => {
      if (!mounted) return;

      resize();

      const center = centerRef.current;

      if (
        center?.complete &&
        center.naturalWidth > 0
      ) {
        draw(center);
        currentFrameRef.current = -2;
      }

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    window.addEventListener("resize", resize);

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(canvas);
    }

    if (centerImage.complete) {
      start();
    } else {
      centerImage.addEventListener("load", start, { once: true });
    }

    return () => {
      mounted = false;

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);

      resizeObserver?.disconnect();

      centerImage.removeEventListener("load", start);

      cancelAnimationFrame(rafRef.current);

      frames.forEach((image) => {
        image.onload = null;
        image.onerror = null;
        image.src = "";
      });

      centerImage.onload = null;
      centerImage.onerror = null;
      centerImage.src = "";

      framesRef.current = [];
      centerRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Interactive cursor-tracked character"
      className="
        absolute inset-0
        w-full h-full
        block
        pointer-events-none
        select-none
      "
    />
  );
}

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    url: "https://github.com/jeyabalaganesh-s",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/jeyabalaganesh-s/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://www.instagram.com/jeyabalaganesh.s/",
  },
  {
    icon: FaTwitter,
    label: "X",
    url: "https://x.com/jeyabalaganesh3",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    url: "mailto:jeyabalaganesh2003@gmail.com",
  },
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const roles = [
    "FULL-STACK DEVELOPER",
    "SAAS BUILDER",
    "AI SYSTEMS DEVELOPER",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % roles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100svh]
        h-[100svh]
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* =====================================================
          CHARACTER BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 z-0">
        <CharacterFrameCanvas />
      </div>

     
      {/* =====================================================
          JEYA / BALA
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          top-[55%]
          -translate-y-1/2
          z-[5]
          pointer-events-none
          select-none
        "
      >
        <div className="relative w-full">

          {/* JEYA — LEFT */}

          <div
            className="
              absolute
              left-[2vw]
              sm:left-[4vw]
              md:left-[4.5vw]
              lg:left-[4vw]
              top-0
              -translate-y-1/2
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.09em]
              whitespace-nowrap
              text-[15vw]
              sm:text-[14vw]
              md:text-[11vw]
              lg:text-[9vw]
              text-white
            "
          >
            JEYA
          </div>

          {/* BALA — RIGHT */}

          <div
            className="
              absolute
              right-[2vw]
              sm:right-[4vw]
              md:right-[4.5vw]
              lg:right-[4vw]
              top-0
              -translate-y-1/2
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.09em]
              whitespace-nowrap
              text-[15vw]
              sm:text-[14vw]
              md:text-[11vw]
              lg:text-[9vw]
              text-white
            "
          >
            BALA
          </div>

          {/* Subtle name guide */}

          <div
            className="
              absolute
              left-[4vw]
              right-[4vw]
              top-[7vw]
              sm:top-[6vw]
              md:top-[4.5vw]
              lg:top-[3.8vw]
              h-px
              bg-white/[0.07]
            "
          />
        </div>
      </div>

      {/* =====================================================
          GANESH + ROLE
          IMPORTANT:
          These are one centered responsive group.
          This prevents the mobile role from drifting left.
      ====================================================== */}

      <div
        className="
          absolute
          left-1/2
          bottom-[5.5%]
          sm:bottom-[5%]
          md:bottom-[4.5%]
          lg:bottom-[4%]
          -translate-x-1/2
          z-[20]
          w-[94vw]
          sm:w-auto
          max-w-full
          text-center
          pointer-events-none
          select-none
        "
      >
        {/* GANESH */}

        <div
          className="
            font-black
            uppercase
            leading-[0.82]
            tracking-[-0.075em]
            whitespace-nowrap
            text-[14vw]
            sm:text-[13vw]
            md:text-[10vw]
            lg:text-[8.5vw]
            text-transparent
            [-webkit-text-stroke:1.4px_rgba(255,142,0,0.92)]
            drop-shadow-[0_0_20px_rgba(255,102,0,0.18)]
          "
        >
          GANESH<span className="text-orange-500/90">.</span>
        </div>

        {/* Divider */}

        <div
          className="
            mt-1.5
            sm:mt-2
            flex
            items-center
            justify-center
            gap-2.5
            sm:gap-3
          "
        >
          <span className="w-8 sm:w-12 md:w-16 h-px bg-orange-500/70" />
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span className="w-8 sm:w-12 md:w-16 h-px bg-orange-500/70" />
        </div>

        {/* ROLE — ALWAYS CENTERED UNDER GANESH */}

        <div className="mt-2.5 sm:mt-3 min-h-[16px] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={roles[roleIndex]}
              initial={{
                opacity: 0,
                y: 5,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -5,
                filter: "blur(4px)",
              }}
              transition={{ duration: 0.35 }}
              className="
                text-[7px]
                min-[380px]:text-[8px]
                sm:text-[9px]
                md:text-[10px]
                uppercase
                tracking-[0.24em]
                sm:tracking-[0.30em]
                md:tracking-[0.34em]
                font-semibold
                text-white/90
                whitespace-nowrap
              "
            >
              {roles[roleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =====================================================
          VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute inset-0
          z-[6]
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.10)_48%,rgba(0,0,0,0.72)_100%)]
        "
      />

      <div
        className="
          absolute inset-0
          z-[4]
          pointer-events-none
          bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.20)_25%,transparent_42%,transparent_58%,rgba(0,0,0,0.20)_75%,rgba(0,0,0,0.78)_100%)]
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[48%]
          z-[6]
          pointer-events-none
          bg-gradient-to-t
          from-black/[0.58]
          via-black/[0.16]
          to-transparent
        "
      />

     
      {/* =====================================================
          LEFT INFORMATION
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="
          absolute
          left-5
          sm:left-8
          md:left-10
          lg:left-14
          top-[28%]
          sm:top-[29%]
          z-20
          w-[190px]
          min-[380px]:w-[205px]
          sm:w-[245px]
        "
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="w-8 sm:w-10 h-px bg-orange-500 shrink-0" />

          <span
            className="
              text-[7px]
              min-[380px]:text-[8px]
              sm:text-[9px]
              uppercase
              tracking-[0.22em]
              sm:tracking-[0.28em]
              text-white/70
              whitespace-nowrap
            "
          >
            Software Developer
          </span>
        </div>

        <p
          className="
            mt-4
            sm:mt-5
            text-[10px]
            min-[380px]:text-[11px]
            sm:text-xs
            md:text-sm
            leading-5
            sm:leading-6
            text-white/60
          "
        >
          Building scalable software, SaaS
          products and AI-powered systems.
        </p>
      </motion.div>

      {/* =====================================================
          RIGHT WORK INFORMATION
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="
          absolute
          right-4
          sm:right-8
          md:right-10
          lg:right-14
          top-[27.5%]
          sm:top-[28%]
          z-20
          text-right
          pr-3
          sm:pr-4
          border-r
          border-white/25
        "
      >
        <div
          className="
            text-[7px]
            min-[380px]:text-[8px]
            sm:text-[9px]
            uppercase
            tracking-[0.22em]
            sm:tracking-[0.3em]
            text-white/50
          "
        >
          Based in India
        </div>

        <a
          href="#portfolio"
          className="
            mt-4
            sm:mt-5
            inline-flex
            items-center
            gap-2
            sm:gap-3
            text-[8px]
            sm:text-[10px]
            uppercase
            tracking-[0.15em]
            sm:tracking-[0.2em]
            font-medium
            text-white
            hover:text-orange-500
            transition-colors
          "
        >
          Explore Work
          <span className="text-orange-500 text-xs sm:text-sm">
            ↗
          </span>
        </a>
      </motion.div>

      {/* =====================================================
          SOCIAL LINKS
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15 }}
        className="
          absolute
          left-5
          sm:left-8
          md:left-10
          lg:left-14
          bottom-4
          sm:bottom-6
          z-30
          flex
          items-center
          gap-3
          sm:gap-4
        "
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;

          return (
            <motion.a
              key={link.label}
              href={link.url}
              target={
                link.url.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                link.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              whileHover={{
                y: -3,
                scale: 1.08,
              }}
              className="
                text-white/45
                hover:text-orange-500
                transition-colors
              "
              aria-label={link.label}
            >
              <Icon
                size={14}
                className="sm:w-[15px] sm:h-[15px]"
              />
            </motion.a>
          );
        })}
      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div
        className="
          absolute
          right-4
          sm:right-8
          md:right-10
          lg:right-14
          bottom-4
          sm:bottom-6
          z-30
          flex
          items-center
          gap-2
          sm:gap-4
        "
      >
        <span
          className="
            hidden
            sm:block
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/35
          "
        >
          Scroll to explore
        </span>

        <div
          className="
            w-5
            h-8
            border
            border-white/25
            rounded-full
            flex
            justify-center
            pt-1.5
          "
        >
          <motion.span
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.25, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              w-[2px]
              h-1.5
              bg-orange-500
              rounded-full
            "
          />
        </div>

        <span
          className="
            text-[8px]
            sm:text-[9px]
            tracking-[0.15em]
            sm:tracking-[0.2em]
            text-white/40
          "
        >
          01 / 05
        </span>
      </div>

      {/* =====================================================
          TOP CENTER ACCENT
      ====================================================== */}

    
    </section>
  );
}
