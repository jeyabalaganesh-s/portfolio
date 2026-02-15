import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const items = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

export default function TopNavBar() {

  const [activeSection, setActiveSection] = useState("about");

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Detect active section
  useEffect(() => {
    const handleActive = () => {
      let current = "about";

      items.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleActive);
    return () => window.removeEventListener("scroll", handleActive);
  }, []);

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
      {items.map((item) => (
        <motion.div
          key={item.id}
          onClick={() => handleScroll(item.id)}
          whileHover={{ scale: 1.3 }}
          className="group relative cursor-pointer"
        >
          {/* Dot */}
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-gradient-to-r from-orange-400 to-pink-500 shadow-lg scale-125"
                : "bg-white/40"
            }`}
          />

          {/* Hover Label */}
          <span
            className="absolute right-6 top-1/2 -translate-y-1/2 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 
            text-sm text-white whitespace-nowrap"
          >
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
