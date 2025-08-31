import React from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const skills = ["React", "Node.js", "MongoDB", "AI/ML", "Tailwind", "SaaS"];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Leada360",
    period: "2025 - Present",
    desc: "Built SaaS solutions including CRM, patient management, and AI integrations.",
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2022 - 2025",
    desc: "Created responsive web applications using React, Tailwind, and APIs.",
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
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
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

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Resume
        </motion.h2>

        {/* Intro */}
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
          className="flex flex-wrap justify-center gap-3 mb-12"
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

        {/* Experience Section */}
        <div className="grid md:grid-cols-2 gap-10 text-left mb-12">
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-semibold mb-4 text-orange-400">
              <Briefcase className="w-6 h-6" /> Experience
            </h3>
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h4 className="text-lg font-bold">{exp.role}</h4>
                <p className="text-white/70 text-sm">
                  {exp.company} • {exp.period}
                </p>
                <p className="mt-1 text-white/80">{exp.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-semibold mb-4 text-orange-400">
              <GraduationCap className="w-6 h-6" /> Education
            </h3>
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="mb-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h4 className="text-lg font-bold">{edu.degree}</h4>
                <p className="text-white/70 text-sm">
                  {edu.school} • {edu.period}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

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
