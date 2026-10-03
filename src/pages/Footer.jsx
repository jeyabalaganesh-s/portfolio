// src/components/Footer.jsx
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiKaggle,
} from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/jeyabalaganesh-s",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jeyabalaganesh-s",
      icon: <FaLinkedin />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/jeyabalaganesh-s/",
      icon: <SiLeetcode />,
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/jeyabalaganesh",
      icon: <SiKaggle />,
    },
    {
      name: "Portfolio",
      url: "https://jeyabalaganesh.site",
      icon: <FaGlobe />,
    },
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/10 py-16 overflow-hidden">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]
        [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Name */}
        <h2 className="text-2xl font-semibold text-orange-500 tracking-wide">
          Jeyabalaganesh S
        </h2>

        {/* Short Bio */}
        <p className="text-white/60 max-w-2xl mx-auto leading-relaxed mt-6">
          Full-Stack Developer & AI Enthusiast — building scalable SaaS,
          CRM systems, and AI-powered digital platforms with clean architecture.
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-5 sm:gap-7 mt-8 flex-wrap">

          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              title={link.name}
              className="
                group
                w-11 h-11
                flex items-center justify-center
                rounded-full
                border border-white/10
                bg-white/[0.03]
                text-white/50
                hover:text-orange-500
                hover:border-orange-500/50
                hover:bg-orange-500/[0.05]
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </span>
            </a>
          ))}

        </div>

        {/* Profile Labels */}
        <div className="flex justify-center gap-5 sm:gap-7 mt-3 flex-wrap">
          {socialLinks.map((link) => (
            <span
              key={link.name}
              className="text-[10px] uppercase tracking-wider text-white/30"
            >
              {link.name}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-24 bg-orange-500 mx-auto mt-10" />

        {/* Copyright */}
        <p className="text-white/40 text-sm mt-6">
          © {new Date().getFullYear()} Bala. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;