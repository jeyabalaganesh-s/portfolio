import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  {
    name: "NPTEL Course Certificate",
    image: "/certificates/nptel.jpg",
    url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs60/Course/NPTEL25CS60S34630022801292168.pdf",
  },
  {
    name: "IBM Cognitive Class Certificate",
    image: "/certificates/ibm.jpg",
    url: "https://courses.ibmcep.cognitiveclass.ai/certificates/c74e982be0084a94b91dce9b66812744",
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative bg-black py-28 px-6 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]
        [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase mb-4">
            Certifications
          </h2>

          <h3 className="text-5xl font-bold text-white leading-tight">
            Professional Certifications
          </h3>

          <div className="h-[2px] w-24 bg-orange-500 mt-8" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              className="group overflow-hidden rounded-xl border border-white/10
              bg-white/[0.03] hover:border-orange-500/50
              transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >

              {/* Certificate Image */}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden bg-white/5"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-64 object-cover object-top
                  transition-transform duration-500
                  group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center
                  bg-black/60 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300"
                >
                  <span className="px-5 py-2 rounded-full
                  border border-orange-500 text-orange-400
                  bg-black/70 text-sm font-medium">
                    View Certificate →
                  </span>
                </div>
              </a>

              {/* Card Content */}
              <div className="p-8">

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 flex-shrink-0
                    flex items-center justify-center rounded-full
                    border border-orange-500/40"
                  >
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {cert.name}
                  </h4>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 text-sm font-medium
                  hover:text-orange-400 transition"
                >
                  View Certificate →
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
} 