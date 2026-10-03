import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Database,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      label: "Email",
      value: "jeyabalaganesh2003@gmail.com",
      link: "mailto:jeyabalaganesh2003@gmail.com",
      external: false,
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-orange-500" />,
      label: "WhatsApp",
      value: "+91 74483 80381",
      link: "https://wa.me/917448380381",
      external: true,
    },
    {
      icon: <Github className="w-6 h-6 text-orange-500" />,
      label: "GitHub",
      value: "jeyabalaganesh-s",
      link: "https://github.com/jeyabalaganesh-s",
      external: true,
    },
    {
      icon: <Linkedin className="w-6 h-6 text-orange-500" />,
      label: "LinkedIn",
      value: "jeyabalaganesh-s",
      link: "https://www.linkedin.com/in/jeyabalaganesh-s/",
      external: true,
    },
    {
      icon: <Code2 className="w-6 h-6 text-orange-500" />,
      label: "LeetCode",
      value: "jeyabalaganesh-s",
      link: "https://leetcode.com/u/jeyabalaganesh-s/",
      external: true,
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      label: "Kaggle",
      value: "jeyabalaganesh",
      link: "https://www.kaggle.com/jeyabalaganesh",
      external: true,
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

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase mb-4">
            Contact
          </h2>

          <h3 className="text-5xl font-bold text-white leading-tight">
            Let’s Connect
          </h3>

          <p className="text-white/60 mt-6 text-lg max-w-2xl mx-auto">
            Open to collaborations, freelance work, and full-time
            opportunities.
          </p>

          <div className="h-[2px] w-24 bg-orange-500 mx-auto mt-8" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, idx) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target={contact.external ? "_blank" : "_self"}
              rel={
                contact.external
                  ? "noopener noreferrer"
                  : undefined
              }
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.1,
                duration: 0.5,
              }}
              className="
                group
                flex items-center gap-4
                p-6
                border border-white/10
                rounded-xl
                bg-white/[0.03]
                hover:border-orange-500/50
                hover:bg-orange-500/[0.03]
                transition-all duration-300
                text-left
              "
            >
              {/* Icon */}
              <div
                className="
                  w-12 h-12
                  flex-shrink-0
                  flex items-center justify-center
                  rounded-full
                  border border-orange-500/30
                  bg-orange-500/[0.05]
                  group-hover:border-orange-500
                  transition-all duration-300
                "
              >
                {contact.icon}
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="text-white font-semibold">
                  {contact.label}
                </p>

                <p className="text-white/50 text-sm truncate mt-1">
                  {contact.value}
                </p>
              </div>

              {/* External Icon */}
              {contact.external && (
                <ExternalLink
                  className="
                    w-4 h-4
                    text-white/20
                    group-hover:text-orange-500
                    transition-colors
                    flex-shrink-0
                  "
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14"
        >
          <div
            className="
              inline-flex items-center gap-3
              px-5 py-3
              rounded-full
              border border-white/10
              bg-white/[0.03]
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-50 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
            </span>

            <span className="text-sm text-white/60">
              Open to opportunities
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}