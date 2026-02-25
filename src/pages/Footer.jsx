// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 py-16 overflow-hidden">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] 
        [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] 
        [background-size:40px_40px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8">

        {/* Name */}
        <h2 className="text-2xl font-semibold text-orange-500 tracking-wide">
          Jeyabalaganesh S
        </h2>

        {/* Short Bio */}
        <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
          Full-Stack Developer & AI Enthusiast — building scalable SaaS,
          CRM systems, and AI-powered digital platforms with clean architecture.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-xl pt-4">
          <a
            href="https://github.com/jeyabalaganesh-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-orange-500 transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/jeyabalaganesh-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-orange-500 transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/jeyabalaganesh3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-orange-500 transition-all duration-300 hover:-translate-y-1"
          >
            <FaTwitter />
          </a>

          <a
            href="https://jeyabalaganesh.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-orange-500 transition-all duration-300 hover:-translate-y-1"
          >
            <FaGlobe />
          </a>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-24 bg-orange-500 mx-auto mt-6" />

        {/* Copyright */}
        <p className="text-white/40 text-sm pt-4">
          © {new Date().getFullYear()} Bala. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;