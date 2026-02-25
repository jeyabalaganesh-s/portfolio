// src/pages/Education.tsx
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { year: "2025", degree: "MCA - Master of Computer Applications", school: "Nehru College of Management" },
  { year: "2023", degree: "B.Sc. Computer Science", school: "Vivekananda College of Arts and Science" },
  { year: "2020", degree: "Higher Secondary (12th)", school: "Gomathi Ambal Govt Hr Sec School" },
  { year: "2018", degree: "SSLC (10th)", school: "Vaniga Vaishiya Sanka High School" },
];

export default function Education() {
  return (
    <section id="education" className="relative bg-black py-28 px-6 overflow-hidden">

      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] 
      [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] 
      [background-size:40px_40px]" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase mb-4">
            Education
          </h2>

          <h3 className="text-5xl font-bold text-white leading-tight">
            Academic Journey
          </h3>

          <div className="h-[2px] w-24 bg-orange-500 mt-8" />
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-10 space-y-16">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Icon Dot */}
              <div className="absolute -left-[26px] top-1 flex items-center justify-center w-10 h-10 rounded-full border border-orange-500 bg-black">
                <GraduationCap className="w-5 h-5 text-orange-500" />
              </div>

              {/* Year Badge */}
              <span className="text-xs text-orange-400 tracking-widest">
                {edu.year}
              </span>

              {/* Content */}
              <h4 className="text-xl font-semibold text-white mt-2">
                {edu.degree}
              </h4>

              <p className="text-white/60 mt-1">
                {edu.school}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}