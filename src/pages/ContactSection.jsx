import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6 text-orange-400" />,
      label: "Email",
      value: "jeyabalaganesh2003@gmail.com",
      link: "mailto:jeyabalaganesh2003@gmail.com",
    },
    {
      icon: <Github className="w-6 h-6 text-orange-400" />,
      label: "GitHub",
      value: "GitHub",
      link: "https://github.com/jeyabalaganesh-s",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-orange-400" />,
      label: "LinkedIn",
      value: "LinkedIn",
      link: "https://www.linkedin.com/in/jeyabalaganesh-s/",
    },
    {
      icon: <Instagram className="w-6 h-6 text-orange-400" />,
      label: "Instagram",
      value: "@jeyabalaganesh.s",
      link: "https://www.instagram.com/jeyabalaganesh.s/",
    },
  ];

  return (
    <section id="contact" className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background blobs */}


      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <motion.h3
          className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h3>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {contacts.map((c, idx) => (
            <motion.a
              key={idx}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:bg-gray-900/70 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {c.icon}
              <div className="text-left">
                <p className="text-white font-semibold">{c.label}</p>
                <p className="text-gray-300">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
