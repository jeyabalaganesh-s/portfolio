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
    <section id ="education">
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Education <span className="text-orange-500">Timeline</span>
        </motion.h1>

        {/* Timeline */}
        <div className="mt-12 relative border-l-2 border-orange-500">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              {/* Icon */}
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full ring-4 ring-black">
                <GraduationCap className="w-4 h-4 text-white" />
              </span>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="text-gray-300">{edu.school}</p>
              <span className="text-sm text-orange-400 font-medium">{edu.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
