import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaCogs,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Sidebar() {
  const items = [
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "services", icon: <FaCogs />, label: "Services" },
    { id: "projects", icon: <FaBriefcase />, label: "Projects" },
    { id: "resume", icon: <FaFileAlt />, label: "Resume" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-[25vh] -translate-y-1/2 left-4 z-50 flex flex-col items-center gap-6 p-3 rounded-3xl shadow-lg transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-black/50"
      }`}
    >
      {items.map((item) => (
        <motion.button
          key={item.id}
          whileHover={{ scale: 1.2 }}
          onClick={() => handleScroll(item.id)}
          className="relative flex items-center justify-center w-12 h-12 text-white hover:text-orange-500 transition group"
        >
          {item.icon}
          {/* Tooltip */}
          <span className="absolute left-14 bg-black text-white px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap">
            {item.label}
          </span>
        </motion.button>
      ))}
    </motion.aside>
  );
}
