import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-20"
    >
          {/* Floating background blobs */}
            <motion.div
              className="absolute top-[vh] left-[25vw] w-[50vw] h-[50vw] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-30 animate-blob"
              animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
            />
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_350px] items-center">
        {/* Profile + Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Profile Image */}
          <div className="relative w-[260px] sm:w-[380px] md:w-[480px] lg:w-[650px] rounded-xl overflow-hidden 
                          lg:left-[25vw] lg:mx-0 mx-auto">
            <img
              src="/homeprofile.png"
              alt="Profile"
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Desktop Overlay Text */}
          <div className="hidden lg:block absolute left-1 top-[45vh] mt-8 space-y-4 max-w-[50vw]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              I’m <span className="text-orange-500">Jeyabalaganesh</span>, <br />
              a Full-Stack Developer
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              I build modern web applications with clean UI, smooth animations,
              and scalable backend systems. Always learning, always innovating.
            </p>
          </div>

          {/* Mobile & Tablet Text (below image) */}
          <div className="lg:hidden mt-6 space-y-4 max-w-md">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              I’m <span className="text-orange-500">Jeyabalaganesh</span>, <br />
              a Full-Stack Developer
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I build modern web applications with clean UI, smooth animations,
              and scalable backend systems. Always learning, always innovating.
            </p>
          </div>

        </motion.div>
        {/* Right Narrow Info Section */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-10 max-w-sm mx-auto z-10 lg:mx-0 mt-12 lg:mt-0 text-center lg:text-left"
        >
          {/* About Me */}
          <div className="space-y-2 border-b border-gray-700 pb-6">
            <h3 className="text-lg font-bold">ABOUT ME</h3>
            <p className="text-gray-400">
              Passionate developer skilled in JavaScript, React, Node.js, and
              AI-driven applications. Focused on building elegant and
              high-performing solutions.
            </p>
            <a
              href="#about"
              className="flex items-center justify-center lg:justify-start gap-2 text-orange-400 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* My Work */}
          <div className="space-y-2 border-b border-gray-700 pb-6">
            <h3 className="text-lg font-bold">MY WORK</h3>
            <p className="text-gray-400">
              Explore projects including SaaS apps, CRM platforms, and creative
              portfolios built with cutting-edge tools.
            </p>
            <a
              href="#projects"
              className="flex items-center justify-center lg:justify-start gap-2 text-orange-400 hover:underline"
            >
              Browse Portfolio →
            </a>
          </div>

          {/* Contact Icons */}
          {/* Contact Icons */}
          <div className="space-y-4 left-20">
            <div className="flex justify-center lg:justify-start space-x-6 text-2xl">
              <a
                href="mailto:jeyabalaganesh2003@gmail.com"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/jeyabalaganesh-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/jeyabalaganesh-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/jeyabalaganesh.s/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/jeyabalaganesh3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 text-gray-400 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://jeyabalaganesh.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 text-gray-400 transition-colors"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
