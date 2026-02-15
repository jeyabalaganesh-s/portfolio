import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";
import Hero3D from "./Hero3D";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const links = [
  { icon: FaEnvelope, url: "mailto:jeyabalaganesh2003@gmail.com" },
  { icon: FaGithub, url: "https://github.com/jeyabalaganesh-s" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/jeyabalaganesh-s/" },
  { icon: FaInstagram, url: "https://www.instagram.com/jeyabalaganesh.s/" },
  { icon: FaTwitter, url: "https://x.com/jeyabalaganesh3" },
  { icon: FaGlobe, url: "https://jeyabalaganesh.in/" },
];

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  /* 🔥 Rotating Roles */
  const roles = [
    "Full-Stack Developer",
    "AI Agent Builder",
    "SaaS Architect",
    "Automation Enthusiast",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-20 overflow-hidden"
    >
      {/* Background Animated Gradient Blob */}
      <motion.div
        className="absolute top-[10vh] left-[25vw] w-[50vw] h-[50vw] 
        bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 
        rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_350px] items-center relative z-10">
        
        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* 3D Avatar */}
          <motion.div
            variants={item}
            className="relative w-[260px] sm:w-[380px] md:w-[480px] 
            lg:w-[650px] lg:left-[20vw] mx-auto lg:mx-0"
          >
            <div className="w-full h-[600px]">
              <Hero3D />
            </div>

            
          </motion.div>

          {/* TEXT OVERLAY */}
<motion.div
  variants={container}
  className="hidden lg:flex flex-col items-start space-y-6 
  absolute left-0 top-1/2 -translate-y-1/2 max-w-[45vw]"
>

  {/* Small I'M */}
  <motion.div
    variants={item}
    className="text-sm tracking-[0.4em] text-gray-400 uppercase"
  >
    I’m
  </motion.div>

  {/* Big Name */}
  <motion.h1
    variants={item}
    className="text-6xl font-extrabold leading-tight 
    bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 
    bg-clip-text text-transparent"
  >
    Jeyabalaganesh
  </motion.h1>

  {/* Animated Role */}
  <div className="h-[50px] overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.div
        key={roles[index]}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-white relative"
      >
        {roles[index]}

        {/* Animated underline */}
        <motion.div
          layoutId="underline"
          className="h-[3px] bg-gradient-to-r from-orange-500 to-pink-500 mt-2"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </AnimatePresence>
  </div>

  {/* About */}
  <motion.p
    variants={item}
    className="text-gray-400 text-lg leading-relaxed max-w-xl"
  >
    I build scalable SaaS platforms, AI-powered systems and automation-driven
    digital products with performance and clean architecture.
  </motion.p>

</motion.div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-10 max-w-sm mx-auto lg:mx-0 mt-12 lg:mt-0 text-center lg:text-left"
        >
          {/* ABOUT SECTION */}
          <motion.div
            variants={item}
            className="space-y-2 border-b border-gray-700 pb-6"
          >
            <h3 className="text-lg font-bold">ABOUT ME</h3>
            <p className="text-gray-400">
              Passionate about building scalable SaaS products, AI systems,
              automation workflows, and modern digital experiences.
            </p>
            <a href="#about" className="text-orange-400 hover:underline">
              Learn More →
            </a>
          </motion.div>

          {/* WORK SECTION */}
          <motion.div
            variants={item}
            className="space-y-2 border-b border-gray-700 pb-6"
          >
            <h3 className="text-lg font-bold">MY WORK</h3>
            <p className="text-gray-400">
              Explore CRM systems, Expo OS, AI Agents, automation tools,
              and full-stack SaaS platforms.
            </p>
            <a href="#projects" className="text-orange-400 hover:underline">
              Browse Portfolio →
            </a>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            variants={item}
            className="flex justify-center lg:justify-start space-x-6 text-2xl"
          >
            {[FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaGlobe].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  href={links[i]?.url || "#"}
                >
                  <Icon />
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
