// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        {/* Name and Short Bio */}
        <h2 className="text-2xl font-semibold text-orange-700">Jeyabalaganesh</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Full-Stack Developer & AI Enthusiast — passionate about building
          scalable SaaS, CRM, and AI-powered solutions.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://github.com/jeyabalaganesh-s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jeyabalaganesh-s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/jeyabalaganesh3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://jeyabalaganesh.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaGlobe />
          </a>
        </div>

        {/* Copyright and Credits */}
        <div className="text-sm text-gray-500 mt-6 space-y-2">
          <p>
            © {new Date().getFullYear()} <span className="text-white">Bala</span>{" "}
            | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
