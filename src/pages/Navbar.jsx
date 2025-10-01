import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function TopNavBar() {
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

  const [activeSection, setActiveSection] = useState("about");
  const [positions, setPositions] = useState({ left: 0, width: 0 });
  const refs = useRef({});

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Track active section
  useEffect(() => {
    const handleActive = () => {
      let current = "about";
      items.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = item.id;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleActive);
    return () => window.removeEventListener("scroll", handleActive);
  }, []);

  // Update underline
  useEffect(() => {
    const el = refs.current[activeSection];
    if (el) {
      setPositions({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeSection]);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-[20vw] -translate-x-1/2 z-50 
                 bg-black/40 backdrop-blur-lg rounded-full 
                 px-3 sm:px-6 py-2 sm:py-3 shadow-xl border border-white/10 
                 w-[95%] sm:w-auto overflow-x-auto"
    >
      <div className="flex gap-4 sm:gap-8 relative min-w-max">
        {items.map((item) => (
          <button
            key={item.id}
            ref={(el) => (refs.current[item.id] = el)}
            onClick={() => handleScroll(item.id)}
            className={`relative px-2 sm:px-0 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300 ${
              activeSection === item.id
                ? "text-purple-400"
                : "text-white/70 hover:text-purple-300"
            }`}
          >
            {item.label}

            {/* active pill background */}
            {activeSection === item.id && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 rounded-md bg-purple-500/10 -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}

        {/* underline slider */}
        <motion.div
          className="absolute bottom-0 h-[2px] bg-purple-400 rounded-full"
          animate={{ left: positions.left, width: positions.width }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>
    </motion.div>
  );
}
