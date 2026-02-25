import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const publications = [
  {
    title:
      "Websence AI: Enhancing Website Evaluation with Opinion Mining and Generative AI",
    url:
      "https://ijsrem.com/download/websense-ai-enhancing-website-evaluation-with-opinion-mining-and-generative-ai/",
  },
  {
    title:
      "Develop an Online Cloth Retail Webpage using HTML, CSS, JavaScript, PHP, and MySQL",
    url:
      "https://ijsrem.com/download/develop-an-online-cloth-retail-webpage-using-html-css-javascript-php-and-mysql/",
  },
];

export default function PublicationsSection() {
  return (
    <section
      id="publications"
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
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase mb-4">
            Publications
          </h2>

          <h3 className="text-5xl font-bold text-white leading-tight">
            Journal Publications
          </h3>

          <p className="text-white/60 mt-6 text-lg">
            Research contributions in AI systems and full-stack web engineering.
          </p>

          <div className="h-[2px] w-24 bg-orange-500 mt-8" />
        </motion.div>

        {/* Publication Cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-xl border border-white/10 
              bg-white/[0.03] hover:border-orange-500/50 
              transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center 
                rounded-full border border-orange-500/40">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                </div>

                <h4 className="text-lg font-semibold text-white leading-snug">
                  {pub.title}
                </h4>
              </div>

              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 text-sm font-medium 
                hover:text-orange-400 transition"
              >
                Read Journal →
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}