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
      <div className="hidden lg:flex fixed right-10 top-1/2 -translate-y-1/2 z-50 flex-col gap-8">

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
                  ? "bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)] scale-125"
                  : "bg-white/30"
              }`}
            />

            {/* Tooltip */}
            <span
              className="absolute right-7 top-1/2 -translate-y-1/2 
              opacity-0 group-hover:opacity-100 
              transition-all duration-300 
              text-xs tracking-widest text-white/80 
              bg-black px-3 py-1 rounded-md border border-white/10"
            >
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* FLOATING RESUME BUTTON */}
     {/* ================= RESUME BUTTON ================= */}

{/* Desktop → Vertical */}
<motion.button
  onClick={() => setShowResumeModal(true)}
  whileHover={{ x: -6 }}
  whileTap={{ scale: 0.95 }}
  className="hidden lg:flex fixed right-10 bottom-[10vh] -translate-y-1/2 z-50 
  flex-row items-center gap-3 px-4 py-6 
  hover:border-orange-500/50 
  text-white transition-all duration-300 rounded-l-lg"
>
  <FaDownload className="text-orange-500 text-lg" />
  <span className="tracking-widest text-xs">
    RESUME
  </span>
</motion.button>

{/* Mobile → Horizontal Bottom */}
<motion.button
  onClick={() => setShowResumeModal(true)}
 

  className="lg:hidden fixed bottom-12 right-0 z-50 
  flex items-center gap-3 px-2 py-3 rotate-90
  text-white rounded-full shadow-lg transition-all duration-300"
>
  <FaDownload />
  <span className="text-sm">
   Resume
  </span>
</motion.button>

      {/* RESUME MODAL */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl h-[85vh] bg-black rounded-xl shadow-2xl overflow-hidden border border-white/10"
            >
              {/* Close */}
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-5 right-5 text-white/60 hover:text-orange-500 z-10"
              >
                <FaTimes size={18} />
              </button>

              {/* Download */}
              <a
                href="/resume.pdf"
                download
                className="absolute top-5 left-5 flex items-center gap-2 text-xs tracking-widest 
                bg-orange-500 hover:bg-orange-600 
                px-4 py-2 rounded-md text-white transition"
              >
                <FaDownload />
                DOWNLOAD
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