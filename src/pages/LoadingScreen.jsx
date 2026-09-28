import React from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onFinish }) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
      }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="
        fixed
        inset-0
        z-[9999]
        bg-[#050505]
        text-white
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {/* Subtle grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          pointer-events-none
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Main typography */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
        
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            mb-6
            text-center
            text-[10px]
            md:text-xs
            uppercase
            tracking-[0.5em]
            text-neutral-600
          "
        >
          Welcome to my
        </motion.div>

        {/* JEYABALAGANESH */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{
              y: "100%",
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              text-center
              text-[13vw]
              sm:text-[12vw]
              md:text-[11vw]
              lg:text-[9vw]
              xl:text-[8.5vw]
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.07em]
              whitespace-nowrap
            "
          >
            JEYABALAGANESH
            <span className="text-orange-500">.</span>
          </motion.h1>
        </div>

        {/* PORTFOLIO */}
        <div className="overflow-hidden mt-4">
          <motion.h2
            initial={{
              y: "100%",
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              text-center
              text-[13vw]
              sm:text-[12vw]
              md:text-[11vw]
              lg:text-[9vw]
              xl:text-[8.5vw]
              font-black
              uppercase
              leading-[0.8]
              tracking-[-0.07em]
              text-transparent
              [-webkit-text-stroke:1px_#444]
              md:[-webkit-text-stroke:2px_#444]
            "
          >
            PORTFOLIO
          </motion.h2>
        </div>

        {/* Bottom information */}
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
            delay: 0.5,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-4
            text-[9px]
            md:text-[10px]
            uppercase
            tracking-[0.3em]
            text-neutral-600
          "
        >
          <span>Full-Stack Developer</span>

          <span className="w-1 h-1 rounded-full bg-orange-500" />

          <span>AI · SaaS · Automation</span>
        </motion.div>
      </div>

      {/* Corner details */}
      <div
        className="
          absolute
          bottom-6
          left-6
          text-[9px]
          font-mono
          text-neutral-800
        "
      >
        JG / 2026
      </div>

      <div
        className="
          absolute
          bottom-6
          right-6
          text-[9px]
          font-mono
          text-neutral-800
        "
      >
        PORTFOLIO
      </div>
    </motion.div>
  );
}