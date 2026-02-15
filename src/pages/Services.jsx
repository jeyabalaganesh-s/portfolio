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
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-90" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            What I Build
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I engineer full-stack SaaS products, AI-driven systems, and scalable 
            cloud applications with clean architecture and modern UI design.
          </p>

          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((srv, i) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 shadow-lg"
              >
                {/* Hover Gradient Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 blur-xl" />

                <div className="relative z-10">
                  <Icon className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  
                  <h3 className="text-xl font-semibold mb-3">
                    {srv.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
