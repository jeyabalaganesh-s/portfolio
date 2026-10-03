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

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

    handleActive();

    window.addEventListener("scroll", handleActive);

    return () => {
      window.removeEventListener("scroll", handleActive);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          TOP NAVBAR
      ====================================================== */}

      <header className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 md:px-12 lg:px-16 pt-5">
        <div
          className="
            mx-auto max-w-[95vw]
            flex items-center justify-between
            px-5 py-4
            bg-transparent
            backdrop-blur-xl
            border border-white/10
            rounded-xl
          "
        >
          {/* LOGO */}
          <motion.button
            onClick={() => handleScroll("about")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              text-xl sm:text-2xl
              font-bold
              tracking-tight
              text-white
              cursor-pointer
            "
          >
            JB<span className="text-orange-500">.</span>
          </motion.button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {items.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative
                  text-[11px]
                  lg:text-xs
                  uppercase
                  tracking-[0.2em]
                  transition-colors
                  duration-300
                  ${
                    activeSection === item.id
                      ? "text-orange-500"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {item.label}

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-[1px]
                    bg-orange-500
                    transition-all
                    duration-300
                    ${
                      activeSection === item.id
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                />
              </motion.button>
            ))}
          </nav>

          {/* AVAILABLE + RESUME */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* AVAILABLE */}
            <motion.button
              onClick={() => handleScroll("contact")}
              whileHover={{ scale: 1.03 }}
              className="
                hidden sm:flex
                items-center
                gap-2
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/70
                hover:text-white
                transition-colors
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-orange-500
                    opacity-60
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-orange-500
                  "
                />
              </span>

              Available
            </motion.button>

            {/* RESUME */}
            <motion.button
              onClick={() => setShowResumeModal(true)}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(249,115,22,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="
                flex
                items-center
                gap-2
                px-3
                sm:px-4
                py-2
                border
                border-white/10
                rounded-md
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/80
                hover:text-white
                transition-all
                duration-300
              "
            >
              <FaDownload className="text-orange-500" />
              <span className="hidden sm:inline">
                Resume
              </span>
            </motion.button>
          </div>
        </div>
      </header>

      
      {/* =====================================================
          RESUME MODAL
      ====================================================== */}

      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/85
              backdrop-blur-xl
              z-[100]
              flex
              items-center
              justify-center
              p-4
              sm:p-6
            "
          >
            <motion.div
              initial={{
                scale: 0.94,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.94,
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                relative
                w-full
                max-w-5xl
                h-[88vh]
                bg-black
                rounded-xl
                overflow-hidden
                border
                border-white/10
                shadow-[0_0_60px_rgba(0,0,0,0.8)]
              "
            >
              {/* TOP BAR */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  z-10
                  flex
                  items-center
                  justify-between
                  px-4
                  sm:px-5
                  py-4
                  bg-black/80
                  backdrop-blur-md
                  border-b
                  border-white/10
                "
              >
                {/* DOWNLOAD */}
                <a
                  href="/resume.pdf"
                  download
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    bg-orange-500
                    hover:bg-orange-600
                    px-4
                    py-2
                    rounded-md
                    text-white
                    transition-all
                    duration-300
                  "
                >
                  <FaDownload />
                  DOWNLOAD
                </a>

                {/* CLOSE */}
                <motion.button
                  onClick={() => setShowResumeModal(false)}
                  whileHover={{
                    rotate: 90,
                    color: "#f97316",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="
                    text-white/50
                    transition-colors
                  "
                  aria-label="Close resume"
                >
                  <FaTimes size={18} />
                </motion.button>
              </div>

              {/* PDF */}
              <iframe
                src="/resume.pdf"
                title="Resume"
                className="w-full h-full pt-[58px]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE RESUME BUTTON
      ====================================================== */}

      <motion.button
        onClick={() => setShowResumeModal(true)}
        whileTap={{ scale: 0.95 }}
        className="
          md:hidden
          fixed
          bottom-8
          right-0
          z-50
          flex
          items-center
          gap-2
          px-4
          py-3
          bg-black/80
          backdrop-blur-xl
          border
          border-white/10
          border-r-0
          rounded-l-lg
          text-white
          shadow-[0_0_25px_rgba(0,0,0,0.5)]
        "
      >
        <FaDownload className="text-orange-500 text-sm" />

        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.18em]
          "
        >
          Resume
        </span>
      </motion.button>
    </>
  );
}