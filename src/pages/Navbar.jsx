import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaTimes } from "react-icons/fa";

const items = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

export default function TopNavBar() {
  const [activeSection, setActiveSection] = useState("about");
  const [showResumeModal, setShowResumeModal] = useState(false);

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
    <>
      {/* SIDE DOT NAV */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => handleScroll(item.id)}
            whileHover={{ scale: 1.3 }}
            className="group relative cursor-pointer"
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-orange-400 to-pink-500 shadow-lg scale-125"
                  : "bg-white/40"
              }`}
            />

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

      {/* ================= FLOATING RESUME BUTTON ================= */}
      <motion.button
        onClick={() => setShowResumeModal(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden lg:flex fixed bottom-8 right-8 z-50 
        items-center gap-2 px-5 py-3 hover:text-gray-300"
      >
        <FaDownload />
        RESUME
      </motion.button>
      {/* ================= RESUME MODAL ================= */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-[80vh] bg-black rounded-xl shadow-2xl overflow-hidden border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 text-white hover:text-orange-500 z-10"
              >
                <FaTimes size={20} />
              </button>

              {/* Download Button */}
              <a
                href="/resume.pdf"
                download
                className="absolute top-4 left-4 flex items-center gap-2 text-sm bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-white transition"
              >
                <FaDownload />
                Download
              </a>

              {/* PDF Preview */}
              <iframe
                src="/resume.pdf"
                title="Resume"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
