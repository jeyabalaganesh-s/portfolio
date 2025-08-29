import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const skills = ["React", "Node.js", "MongoDB", "AI/ML", "Tailwind", "SaaS"];

const ResumeSection = () => {
  return (
    <section id="resume" className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-15 animate-blob"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Resume
        </motion.h2>

        <motion.p
          className="mb-6 text-white/70 text-lg sm:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Download a copy of my latest resume to see my full professional
          experience, projects, and skills. I specialize in full-stack web
          development, AI-driven applications, and SaaS platforms.
        </motion.p>

        {/* Skills Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-900/60 border border-gray-700 rounded-full text-sm text-white"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5" /> Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default ResumeSection;
