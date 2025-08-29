import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cpu, Cloud, Smartphone } from "lucide-react";

export default function About() {
  const skills = [
    { icon: <Code className="w-6 h-6 text-orange-500" />, name: "React" },
    { icon: <Database className="w-6 h-6 text-orange-500" />, name: "Node.js" },
    { icon: <Cpu className="w-6 h-6 text-orange-500" />, name: "AI/ML" },
    { icon: <Cloud className="w-6 h-6 text-orange-500" />, name: "Cloud" },
    { icon: <Smartphone className="w-6 h-6 text-orange-500" />, name: "Mobile Optimization" },
  ];

  return (
    <section id="about" className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden">
      {/* Background gradient blobs */}
      <motion.div
        className="absolute top-200 left-[10vw] w-96 h-96 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-15 animate-blob"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative z-20 max-w-screen mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
<div
  className="w-[400px] h-[500px] overflow-hidden shadow-2xl border-4 border-orange-500"
  style={{
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 80%)', // slanted triangle
  }}
>
  <img
    src="/profile.png"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>


        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h3>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            I'm <span className="text-orange-500 font-semibold">Jeyabalaganesh S</span>, a passionate full-stack developer building scalable, modern web applications with a focus on usability, performance, and AI integration.
            I specialize in React, Node.js, Flask, and MongoDB. Currently, I’m focused on building multi-tenant SaaS platforms and AI-driven applications.
          </p>

          <p className="text-white/70 mb-6">
            I enjoy collaborating with cross-functional teams, turning innovative ideas into real products, and continuously learning emerging technologies to stay at the forefront of web development.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800 hover:bg-gray-900/80 transition cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {skill.icon}
                <span className="text-white">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
