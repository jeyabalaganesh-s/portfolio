import React from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const skills = ["React", "Node.js", "MongoDB", "AI/ML", "Tailwind", "SaaS"];

const experiences = [
  {
    role: "Full stack Developer",
    company: "Freelance",
    period: "Feb 2026 - Present",
    desc: "Created responsive web applications using React, Tailwind, and APIs.",
  },
  {
    role: "Full Stack Developer",
    company: "Leada360",
    period: "May 2025 - Feb 2026",
    desc: "Built SaaS solutions including CRM, patient management, and AI integrations.",
  },
];

const education = [
  {
    degree: "Master of Computer Application",
    school: "Nehru College of Management",
    period: "2023 - 2025",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "Vivekananda College of Arts and Science",
    period: "2020 - 2023",
  },
];

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] 
      [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] 
      [background-size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase mb-4">
            Resume
          </h2>

          <h3 className="text-5xl font-bold leading-tight">
            Experience & Education
          </h3>

          <p className="mt-6 text-white/60 text-lg">
            A snapshot of my professional journey, technical expertise,
            and academic background.
          </p>

          <div className="h-[2px] w-24 bg-orange-500 mt-8" />
        </motion.div>

        {/* Skills */}
        <motion.div
          className="flex flex-wrap gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border border-white/10 
              bg-white/[0.04] rounded-md text-sm 
              hover:border-orange-500/50 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Experience */}
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-8 text-orange-400">
              <Briefcase className="w-6 h-6" /> Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="border-l-2 border-orange-500/40 pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <h4 className="text-lg font-bold">{exp.role}</h4>
                  <p className="text-white/60 text-sm mb-2">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-white/70">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-8 text-orange-400">
              <GraduationCap className="w-6 h-6" /> Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="border-l-2 border-orange-500/40 pl-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <h4 className="text-lg font-bold">{edu.degree}</h4>
                  <p className="text-white/60 text-sm">
                    {edu.school} • {edu.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 
            bg-orange-500 hover:bg-orange-600 
            rounded-md text-white font-semibold 
            transition"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ResumeSection;