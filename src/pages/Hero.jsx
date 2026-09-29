import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import Hero3D from "./Hero3D";

export default function Hero() {
  const roles = [
    "Full-Stack Developer",
    "SaaS Builder",
    "AI Systems Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  // =========================================================
  // ROLE ROTATION
  // =========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  // =========================================================
  // MOUSE INTERACTION
  // =========================================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  // 3D model subtle parallax
  const modelX = useTransform(
    smoothX,
    [-500, 500],
    [-12, 12]
  );

  const modelY = useTransform(
    smoothY,
    [-500, 500],
    [-8, 8]
  );

  // Name parallax
  const firstNameX = useTransform(
    smoothX,
    [-500, 500],
    [-4, 4]
  );

  const lastNameX = useTransform(
    smoothX,
    [-500, 500],
    [4, -4]
  );

  // Background spotlight
  const spotlightX = useTransform(
    smoothX,
    [-window.innerWidth / 2, window.innerWidth / 2],
    [-150, 150]
  );

  const spotlightY = useTransform(
    smoothY,
    [-window.innerHeight / 2, window.innerHeight / 2],
    [-150, 150]
  );

  const handleMouseMove = (e) => {
    const x =
      e.clientX - window.innerWidth / 2;

    const y =
      e.clientY - window.innerHeight / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  // =========================================================
  // SOCIAL LINKS
  // =========================================================

  const links = [
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

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080808]
        text-white
        flex
        items-center
      "
    >

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          pointer-events-none
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* =====================================================
          MOUSE ORANGE SPOTLIGHT
      ====================================================== */}

      <motion.div
        style={{
          x: spotlightX,
          y: spotlightY,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          w-[520px]
          h-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-500/[0.045]
          blur-[130px]
          pointer-events-none
        "
      />

      {/* =====================================================
          3D MODEL AMBIENT GLOW
      ====================================================== */}

      <div
        className="
          absolute
          right-[13%]
          top-[25%]
          w-[320px]
          h-[320px]
          rounded-full
          bg-orange-500/[0.035]
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =====================================================
          TOP NAVIGATION
      ====================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          right-0
          z-30
          px-6
          md:px-10
          lg:px-16
          py-7
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}

        <motion.a
          href="#hero"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            text-sm
            font-semibold
            tracking-[0.25em]
            uppercase
          "
        >
          JB
          <span className="text-orange-500">
            .
          </span>
        </motion.a>


        {/* NAVIGATION */}

        <nav className="hidden md:flex items-center gap-8">

          {[
            ["About", "#about"],
            ["Work", "#portfolio"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (

            <motion.a
              key={label}
              href={href}
              whileHover={{
                y: -2,
              }}
              className="
                group
                relative
                text-xs
                uppercase
                tracking-[0.18em]
                text-neutral-500
                hover:text-white
                transition-colors
                duration-300
              "
            >
              {label}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  w-0
                  h-[1px]
                  bg-orange-500
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

            </motion.a>

          ))}

        </nav>


        {/* AVAILABLE */}

        <div className="flex items-center gap-2">

          <span
            className="
              relative
              flex
              h-2
              w-2
            "
          >

            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                rounded-full
                bg-orange-500
                opacity-60
                animate-ping
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2
                w-2
                rounded-full
                bg-orange-500
              "
            />

          </span>

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-neutral-500
            "
          >
            Available
          </span>

        </div>

      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1600px]
          mx-auto
          px-6
          md:px-10
          lg:px-16
          pt-24
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.15fr_0.85fr]
            min-h-[calc(100vh-100px)]
            items-center
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-20
              max-w-4xl
            "
          >

            {/* EYEBROW */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                flex
                items-center
                gap-4
                mb-7
              "
            >

              <span
                className="
                  w-10
                  h-[1px]
                  bg-orange-500
                "
              />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  text-neutral-500
                "
              >
                Software Developer
              </span>

            </motion.div>


            {/* =================================================
                NAME
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              {/* JEYABALA */}

              <motion.h1
                style={{
                  x: firstNameX,
                }}
                className="
                  text-[15vw]
                  sm:text-[12vw]
                  lg:text-[8vw]
                  xl:text-[7.5vw]
                  font-black
                  uppercase
                  leading-[0.82]
                  tracking-[-0.07em]
                  whitespace-nowrap
                  text-white
                "
              >
                JEYABALA
              </motion.h1>


              {/* GANESH */}

              <motion.h1
                style={{
                  x: lastNameX,
                }}
                className="
                  text-[15vw]
                  sm:text-[12vw]
                  lg:text-[8vw]
                  xl:text-[7.5vw]
                  font-black
                  uppercase
                  leading-[0.82]
                  tracking-[-0.07em]
                  text-transparent
                  [-webkit-text-stroke:1px_#444]
                  hover:[-webkit-text-stroke:1px_#ff5a00]
                  transition-all
                  duration-500
                "
              >
                GANESH

                <span className="text-orange-500">
                  .
                </span>

              </motion.h1>

            </motion.div>


            {/* =================================================
                ROLE
            ================================================== */}

            <div className="mt-10">

              <AnimatePresence
                mode="wait"
              >

                <motion.div
                  key={roles[roleIndex]}
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-medium
                    text-neutral-300
                  "
                >
                  {roles[roleIndex]}
                </motion.div>

              </AnimatePresence>

            </div>


            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="
                mt-6
                max-w-xl
                text-sm
                sm:text-base
                leading-7
                text-neutral-500
              "
            >
              I build scalable SaaS platforms,
              AI-powered systems and automation-driven
              digital products with clean architecture
              and meaningful user experiences.
            </motion.p>


            {/* =================================================
                BUTTONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-4
              "
            >

              {/* EXPLORE */}

              <motion.a
                href="#portfolio"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  flex
                  items-center
                  gap-3
                  px-6
                  py-3.5
                  bg-orange-500
                  text-black
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                "
              >

                <span className="relative z-10">
                  Explore Work
                </span>

                <span
                  className="
                    relative
                    z-10
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

                {/* Hover layer */}

                <span
                  className="
                    absolute
                    inset-0
                    bg-white
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-300
                  "
                />

              </motion.a>


              {/* LET'S TALK */}

              <motion.a
                href="#contact"
                whileHover={{
                  x: 5,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  px-3
                  py-3
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-neutral-400
                  hover:text-white
                  transition-colors
                "
              >
                Let's Talk

                <span
                  className="
                    text-orange-500
                  "
                >
                  ↗
                </span>

              </motion.a>

            </motion.div>


            {/* =================================================
                SOCIAL ICONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.3,
                duration: 0.8,
              }}
              className="
                mt-12
                flex
                items-center
                gap-5
              "
            >

              {links.map((link) => {

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
                      y: -4,
                      color: "#ff5a00",
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      text-neutral-600
                      text-lg
                    "
                    aria-label={link.label}
                  >
                    <Icon />
                  </motion.a>
                );

              })}

            </motion.div>

          </div>


          {/* =================================================
              RIGHT / 3D
          ================================================== */}

          <div
            className="
              relative
              hidden
              lg:flex
              h-[700px]
              items-center
              justify-center
            "
          >

            {/* OUTER CIRCLE */}

            <motion.div
              style={{
                rotate: useTransform(
                  smoothX,
                  [-500, 500],
                  [-4, 4]
                ),
              }}
              className="
                absolute
                w-[480px]
                h-[480px]
                rounded-full
                border
                border-white/[0.07]
              "
            />


            {/* INNER CIRCLE */}

            <motion.div
              style={{
                scale: useTransform(
                  smoothX,
                  [-500, 500],
                  [0.98, 1.02]
                ),
              }}
              className="
                absolute
                w-[350px]
                h-[350px]
                rounded-full
                border
                border-orange-500/[0.12]
              "
            />


            {/* ROTATING ORANGE RING */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[500px]
                h-[500px]
                rounded-full
                border-t
                border-orange-500/40
              "
            />


            {/* SMALL ORANGE ORBIT DOT */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[500px]
                h-[500px]
                rounded-full
              "
            >

              <span
                className="
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  w-2
                  h-2
                  rounded-full
                  bg-orange-500
                  shadow-[0_0_20px_rgba(255,90,0,0.6)]
                "
              />

            </motion.div>


            {/* =================================================
                3D MODEL
            ================================================== */}

            <motion.div
              style={{
                x: modelX,
                y: modelY,
              }}
              className="
                relative
                z-10
                w-[600px]
                h-[700px]
              "
            >
              <Hero3D />
            </motion.div>


            {/* =================================================
                RIGHT FLOATING LABEL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="
                absolute
                right-0
                top-[25%]
                z-20
                flex
                items-center
                gap-3
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-neutral-600
              "
            >

              <span
                className="
                  w-8
                  h-[1px]
                  bg-neutral-700
                "
              />

              Building digital products

            </motion.div>


            {/* =================================================
                BOTTOM FLOATING LABEL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.4,
                duration: 0.8,
              }}
              className="
                absolute
                left-0
                bottom-[20%]
                z-20
                flex
                items-center
                gap-3
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-neutral-600
              "
            >

              Code

              <span
                className="
                  w-8
                  h-[1px]
                  bg-neutral-700
                "
              />

              Create

            </motion.div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
        }}
        className="
          absolute
          bottom-7
          left-6
          md:left-10
          lg:left-16
          z-20
          flex
          items-center
          gap-4
        "
      >

        <div
          className="
            relative
            w-5
            h-8
            border
            border-neutral-700
            rounded-full
            flex
            justify-center
            pt-1.5
          "
        >

          <motion.span
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1],
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
            hidden
            sm:block
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-neutral-600
          "
        >
          Scroll to explore
        </span>

      </motion.div>


      {/* =====================================================
          PAGE NUMBER
      ====================================================== */}

      <div
        className="
          absolute
          bottom-8
          right-6
          md:right-10
          lg:right-16
          text-[10px]
          tracking-[0.2em]
          text-neutral-700
        "
      >
        01 / 05
      </div>

    </section>
  );
}