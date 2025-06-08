import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 py-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-500 mb-2 text-lg">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Jeyabalaganesh
          </h1>
          <p className="text-gray-400 mb-6 text-base sm:text-lg">
            Full‑Stack Developer & AI Enthusiast building intelligent and scalable web solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="bg-orange-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-800 transition"
            >
              Download Resume
            </a>
            <a
              href="#portfolio"
              className="border border-gray-400 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
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
          <div className="relative w-64 sm:w-80 md:w-[500px] md:h-[700px] rounded-full overflow-hidden">

            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full relative z-10"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent rounded-full z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
