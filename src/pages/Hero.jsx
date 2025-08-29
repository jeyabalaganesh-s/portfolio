import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4 sm:px-6 py-12"
    >
      {/* Floating Gradient Blobs */}
      <motion.div
        className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-40 animate-blob"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-30 animate-blob"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="relative z-30 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-500 mb-2 text-lg font-medium tracking-wide">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
            Jeyabalaganesh
          </h1>
          <p className="text-gray-400 mb-6 text-base sm:text-lg max-w-md">
            Full‑Stack Developer & AI Enthusiast building intelligent and scalable web solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="border border-gray-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              My Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 sm:w-80 md:w-[500px] md:h-[700px] rounded-full overflow-hidden hover:scale-105 transition-transform">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full relative z-10 shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent rounded-full z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
