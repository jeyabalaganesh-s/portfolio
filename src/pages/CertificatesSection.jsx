import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  {
    name: "NPTEL Course Certificate",
    url: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS60S34630022801292168",
  },
  {
    name: "IBM Cognitive Class Certificate",
    url: "https://courses.ibmcep.cognitiveclass.ai/certificates/c74e982be0084a94b91dce9b66812744",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background blobs */}


      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.h3
          className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Certificate Courses
        </motion.h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 flex flex-col items-start gap-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-orange-500" />
                <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
