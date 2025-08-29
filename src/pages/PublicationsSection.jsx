import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const publications = [
  {
    title: "Websence AI: Enhancing Website Evaluation with Opinion Mining and Generative AI",
    url: "https://ijsrem.com/download/websense-ai-enhancing-website-evaluation-with-opinion-mining-and-generative-ai/",
  },
  {
    title: "Develop an Online Cloth Retail Webpage using HTML, CSS, JavaScript, PHP, and MySQL",
    url: "https://ijsrem.com/download/develop-an-online-cloth-retail-webpage-using-html-css-javascript-php-and-mysql/",
  },
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full filter blur-3xl opacity-20 animate-blob"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-15 animate-blob"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.h3
          className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Journal Publications
        </motion.h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 flex flex-col gap-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-orange-500" />
                <h4 className="text-lg font-semibold text-white">{pub.title}</h4>
              </div>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                Read Journal
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
