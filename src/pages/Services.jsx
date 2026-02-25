import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Cloud, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Engineering",
    desc: "Crafting immersive, scalable interfaces using React, Tailwind, and Next.js with smooth animations.",
  },
  {
    icon: Database,
    title: "Backend Architecture",
    desc: "Designing secure APIs, multi-tenant systems, and optimized databases using Node.js & MongoDB.",
  },
  {
    icon: Cpu,
    title: "AI Systems",
    desc: "Building AI-powered automation, sentiment analysis engines, and intelligent SaaS workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    desc: "Deploying production-grade applications with CI/CD pipelines and cloud scalability.",
  },
  {
    icon: Smartphone,
    title: "Performance Optimization",
    desc: "Creating fast, mobile-first experiences with optimized loading & modern UX practices.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-black text-white px-6 lg:px-20 py-28 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] 
      [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] 
      [background-size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase mb-4">
            Services
          </h2>

          <h3 className="text-5xl font-bold leading-tight">
            What I Build
          </h3>

          <p className="text-white/60 text-lg leading-relaxed mt-6">
            I engineer scalable SaaS platforms, AI-driven systems, and 
            performance-focused cloud applications with clean architecture.
          </p>

          <div className="h-[2px] w-24 bg-orange-500 mt-8" />
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, i) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-xl border border-white/10 
                bg-white/[0.03] hover:border-orange-500/50 
                transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-orange-500 mb-6" />

                <h3 className="text-lg font-semibold mb-3">
                  {srv.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {srv.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}