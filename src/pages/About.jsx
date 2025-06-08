import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-8 py-12 max-w-4xl mx-auto">
      <motion.h3
        className="text-3xl font-bold text-white-400 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h3>
      <motion.p
        className="text-white/80 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I'm Jeyabalaganesh S, a passionate full-stack developer who builds
        scalable, modern web applications with a focus on usability and performance.
        With experience in React, Node.js, Flask, and MongoDB, I enjoy turning
        innovative ideas into real products. Currently, I’m focused on
        building multi-tenant SaaS platforms and AI-driven applications.
      </motion.p>
    </section>
  );
}
