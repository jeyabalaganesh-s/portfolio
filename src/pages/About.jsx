import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cpu, Cloud, Smartphone } from "lucide-react";
import Hero3D from "./Hero3D";

export default function About() {

  const skills = [
    { icon: <Code className="w-5 h-5 text-orange-500" />, name: "React" },
    { icon: <Database className="w-5 h-5 text-orange-500" />, name: "Node.js" },
    { icon: <Cpu className="w-5 h-5 text-orange-500" />, name: "AI / ML" },
    { icon: <Cloud className="w-5 h-5 text-orange-500" />, name: "Cloud" },
    { icon: <Smartphone className="w-5 h-5 text-orange-500" />, name: "Optimization" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black px-6 sm:px-12 py-28 overflow-hidden"
    >

      {/* Subtle Orange Glow */}
      <div className="absolute right-1/4 top-1/3 w-[500px] h-[500px] 
      bg-orange-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-orange-500 uppercase tracking-wide">
            About Me
          </h2>

          <p className="text-white/80 leading-relaxed text-lg">
            I'm <span className="text-orange-400 font-semibold">Jeyabalaganesh S</span>, 
            a Full-Stack Developer building scalable SaaS platforms and 
            performance-driven web applications.
          </p>

          <p className="text-white/70 leading-relaxed">
            I specialize in React, Node.js, MongoDB, and AI integrations. 
            My focus is on clean architecture, multi-tenant systems, 
            and building real-world business solutions.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-4 pt-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 
                border border-orange-500/30 rounded-lg 
                bg-white/5 backdrop-blur-sm"
              >
                {skill.icon}
                <span className="text-white text-sm">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT 3D MODEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-[420px] h-[500px]"
          >
            <Hero3D />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
