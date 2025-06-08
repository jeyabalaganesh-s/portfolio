import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-500 mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Jeyabalaganesh 
          </h1>
          <p className="text-gray-400 mb-6">
            Full‑Stack Developer & AI Enthusiast building intelligent and scalable web solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-orange-700 px-5 py-2 rounded-lg font-semibold hover:bg-orange-800 transition"
            >
              Download Resume
            </a>
            <a
              href="#portfolio"
              className="border border-gray-400 px-5 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              My Work
            </a>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-68">
         
          <div className="relative w-[500px] h-[700px] rounded-full overflow-hidden ">
        <div className="relative inset-0 rounded-full bg-orange-500 blur-3xl opacity-30"></div>
  <img
    src="/profile.png"
    alt="Your Alt Text"
    className="w-full h-full object-cover rounded-full"
  />
  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent rounded-full" />
</div>
     </div>
        </motion.div>
      </div>
    </section>
  );
}
