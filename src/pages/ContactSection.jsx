import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      label: "Email",
      value: "jeyabalaganesh2003@gmail.com",
      link: "mailto:jeyabalaganesh2003@gmail.com",
    },
    {
      icon: <Github className="w-6 h-6 text-orange-500" />,
      label: "GitHub",
      value: "jeyabalaganesh-s",
      link: "https://github.com/jeyabalaganesh-s",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-orange-500" />,
      label: "LinkedIn",
      value: "jeyabalaganesh-s",
      link: "https://www.linkedin.com/in/jeyabalaganesh-s/",
    },
    {
      icon: <Instagram className="w-6 h-6 text-orange-500" />,
      label: "Instagram",
      value: "@jeyabalaganesh.s",
      link: "https://www.instagram.com/jeyabalaganesh.s/",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-black py-28 px-6 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] 
        [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] 
        [background-size:40px_40px]"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase mb-4">
            Contact
          </h2>

          <h3 className="text-5xl font-bold text-white leading-tight">
            Let’s Connect
          </h3>

          <p className="text-white/60 mt-6 text-lg">
            Open to collaborations, freelance work, and full-time opportunities.
          </p>

          <div className="h-[2px] w-24 bg-orange-500 mx-auto mt-8" />
        </motion.div>

        {/* Contact Cards */}
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
              whileHover={{ y: -6 }}
              className="flex items-center gap-4 p-6 
              border border-white/10 rounded-xl 
              bg-white/[0.03] 
              hover:border-orange-500/50 
              transition-all duration-300"
            >
              {c.icon}

              <div className="text-left">
                <p className="text-white font-semibold">
                  {c.label}
                </p>
                <p className="text-white/60 text-sm">
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}