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

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  const roles = [
    "Full-Stack Developer",
    "SaaS Architect",
    "AI Enthusiast",
  ];

  const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % roles.length);
  }, 2500);

  return () => clearInterval(interval);
}, [roles.length]);

  const links = [
    { icon: FaEnvelope, url: "mailto:jeyabalaganesh2003@gmail.com" },
    { icon: FaGithub, url: "https://github.com/jeyabalaganesh-s" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/jeyabalaganesh-s/" },
    { icon: FaInstagram, url: "https://www.instagram.com/jeyabalaganesh.s/" },
    { icon: FaTwitter, url: "https://x.com/jeyabalaganesh3" },
    { icon: FaGlobe, url: "https://jeyabalaganesh.in/" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white px-4 sm:px-6 lg:px-20 overflow-hidden"
    >
      {/* ================= MOBILE HERO ================= */}
      {/* ================= MOBILE HERO ================= */}
<div className="lg:hidden absolute inset-0 z-0">

  {/* 3D MODEL CENTERED */}
  <div className="absolute inset-0 top-[20vh] flex items-center justify-center">
    <Hero3D />
  </div>

  {/* CINEMATIC GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

  {/* HELLO TEXT */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="absolute top-[18vh] left-6 text-orange-400 text-lg"
  >
    Hello! I’m
  </motion.div>

  {/* BIG NAME */}
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="absolute top-[22vh] left-6 text-4xl font-bold uppercase text-white"
  >
    JEYABALAGANESH S
  </motion.h1>

  {/* BOTTOM TITLE */}
  <div className="absolute bottom-24 w-full text-center">
    <p className="text-orange-400 text-lg tracking-widest">
      A Creative
    </p>

    <AnimatePresence mode="wait">
      <motion.h2
        key={roles[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-white"
      >
        {roles[index].split(" ")[0]}
        <br />
        {roles[index].split(" ").slice(1).join(" ")}
      </motion.h2>
    </AnimatePresence>
  </div>
</div>

      {/* ================= DESKTOP HERO (UNCHANGED) ================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_350px] items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
        >

          {/* DESKTOP 3D */}
          <motion.div
            variants={item}
            className="hidden lg:block relative w-[260px] sm:w-[380px] md:w-[480px] 
            lg:w-[650px] lg:left-[20vw] mx-auto lg:mx-0"
          >
            <div className="w-full relative top-[10vh] h-[600px]">
              <Hero3D />
            </div>
          </motion.div>

          {/* TEXT OVERLAY (DESKTOP ONLY) */}
          <motion.div
            variants={container}
            className="hidden lg:flex flex-col items-start space-y-6 
            absolute left-0 top-1/2 -translate-y-1/2 max-w-[45vw]"
          >
            <motion.div
              variants={item}
              className="text-sm tracking-[0.4em] text-gray-400 "
            >
              Hello I’m
            </motion.div>

            <motion.h1
              variants={item}
              className="text-6xl font-extrabold leading-tight 
              bg-orange-500
              bg-clip-text text-transparent uppercase"
            >
              Jeyabalaganesh s
            </motion.h1>

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

            <motion.p
              variants={item}
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              I build scalable SaaS platforms, AI-powered systems and automation-driven
              digital products with performance and clean architecture.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={container}
          className="hidden lg:block"
        >
          {/* RIGHT SIDE */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-10 max-w-sm mx-auto lg:mx-0 mt-12 lg:mt-0 text-center lg:text-left"
          >
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

          </motion.div>

          <motion.div
            variants={item}
            className="flex justify-center lg:justify-start space-x-6 text-2xl"
          >
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  href={link.url}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
