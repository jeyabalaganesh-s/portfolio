import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

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
  const [isOpen, setIsOpen] = useState(false);
  const refs = useRef({});
  const menuRef = useRef(null); // ref for dropdown

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close on click
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

  // Update underline (desktop only)
  useEffect(() => {
    const el = refs.current[activeSection];
    if (el) {
      setPositions({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeSection]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:block fixed top-4 left-[20vw] -translate-x-1/2 z-50 
                   bg-black/40 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl border border-white/10"
      >
        <div className="flex gap-8 relative">
          {items.map((item) => (
            <button
              key={item.id}
              ref={(el) => (refs.current[item.id] = el)}
              onClick={() => handleScroll(item.id)}
              className={`relative text-sm sm:text-base font-medium transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-purple-400"
                  : "text-white/70 hover:text-purple-300"
              }`}
            >
              {item.label}

              {activeSection === item.id && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-md bg-purple-500/10 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}

          <motion.div
            className="absolute bottom-0 h-[2px] bg-purple-400 rounded-full"
            animate={{ left: positions.left, width: positions.width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-4 right-4 z-50" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-black/50 backdrop-blur-md border border-white/10 text-white text-xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-14 right-0 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-4 space-y-3"
            >
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`block w-full text-left text-sm font-medium ${
                    activeSection === item.id
                      ? "text-purple-400"
                      : "text-white/70 hover:text-purple-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
