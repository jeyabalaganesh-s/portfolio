import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cpu, Cloud, Smartphone, Briefcase } from "lucide-react";

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
        className="absolute top-40 left-[10vw] w-96 h-96 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-15 animate-blob"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative z-20 max-w-5xl mx-auto text-center md:text-left">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent text-center">
            About Me
          </h3>

          <p className="text-white/80 text-lg leading-relaxed mb-6">
            I'm <span className="text-orange-500 font-semibold">Jeyabalaganesh S</span>, a passionate{" "}
            <span className="text-pink-500 font-semibold">Full-Stack Developer</span> dedicated to building 
            scalable, user-friendly, and modern web applications. I specialize in{" "}
            <span className="text-orange-400">React, Node.js, Flask, and MongoDB</span> while also working 
            with emerging technologies like <span className="text-purple-400">AI/ML</span>.
          </p>

          <p className="text-white/70 mb-6">
            Currently, I’m working at <span className="text-orange-500 font-semibold">Leada Digital Dynamic</span>, 
            where I contribute to creating innovative SaaS platforms, AI-driven solutions, 
            and cloud-native applications tailored for businesses in dynamic industries.
          </p>

          <p className="text-white/70 mb-6">
            Beyond coding, I enjoy collaborating with cross-functional teams, 
            architecting multi-tenant SaaS systems, and constantly exploring 
            new technologies to stay ahead in this fast-paced digital landscape.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
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

          {/* Current Role Highlight */}
          <motion.div
            className="mt-10 flex items-center justify-center md:justify-start gap-3 text-orange-400 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Briefcase className="w-6 h-6" />
            <span>Currently @ Leada Digital Dynamic</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
