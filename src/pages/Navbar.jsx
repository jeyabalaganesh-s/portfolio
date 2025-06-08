import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const items = ['About', 'Services', 'Projects', 'Resume', 'Contact'];

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-gray-800 py-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-orange-500">
          Jeya<span className="text-white">balaganesh</span>
        </a>
        <ul className="hidden md:flex gap-6">
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-500 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">☰</div>
      </div>
    </motion.nav>
  );
}
