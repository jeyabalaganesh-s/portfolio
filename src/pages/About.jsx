import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cpu, Cloud, Smartphone } from "lucide-react";

export default function About() {

  const skills = [
    { icon: <Code className="w-4 h-4" />, name: "React" },
    { icon: <Database className="w-4 h-4" />, name: "Node.js" },
    { icon: <Cpu className="w-4 h-4" />, name: "AI / ML" },
    { icon: <Cloud className="w-4 h-4" />, name: "Cloud" },
    { icon: <Smartphone className="w-4 h-4" />, name: "Optimization" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black px-6 sm:px-12 py-28 overflow-hidden"
    >

      {/* Subtle Tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] 
      [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] 
      [background-size:40px_40px]" />

      {/* Accent Vertical Line */}
      <div className="absolute left-12 top-32 bottom-32 w-[2px] bg-orange-500/40 hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase mb-4">
            About
          </h2>

          <h3 className="text-4xl font-bold text-white leading-tight">
            Building Scalable Systems <br />
            <span className="text-orange-500">
              With Clean Architecture
            </span>
          </h3>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 max-w-3xl"
        >
          <p className="text-white/80 leading-relaxed text-lg">
            I'm <span className="text-orange-400 font-semibold">
              Jeyabalaganesh S
            </span>, a Full-Stack Developer focused on SaaS platforms,
            multi-tenant systems, and AI-powered automation tools.
          </p>

          <p className="text-white/60 leading-relaxed">
            My approach combines performance, structured architecture,
            and real-world business logic to build scalable digital products
            that solve meaningful problems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 max-w-3xl"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 px-4 py-3 
              border border-white/10 rounded-md 
              bg-white/5 text-white text-sm
              hover:border-orange-500/50 transition"
            >
              <span className="text-orange-500">
                {skill.icon}
              </span>
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}