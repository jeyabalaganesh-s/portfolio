import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const items = ['About', 'Services', 'Projects', 'Resume', 'Contact'];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-5 w-[96vw] z-50 left-[2vw] border rounded-[3vh] py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur shadow-lg border-b border-gray-800'
          : 'bg-transparent border-transparent'
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('hero');
          }}
          className="text-2xl font-bold text-orange-500 transition-transform"
        >
          Jeya<span className="text-white">balaganesh</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {items.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.toLowerCase());
                }}
                className="text-white scale-100 hover:text-orange-500"
              >
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        <div
          className="md:hidden cursor-pointer text-2xl select-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur flex flex-col items-center gap-6 py-6 rounded-b-xl mt-2"
          >
            {items.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.toLowerCase());
                  }}
                  className="text-white text-lg hover:text-orange-500 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
