import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Cloud, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 text-orange-500" />,
    title: 'Frontend Development',
    desc: 'Creating responsive, modern, and interactive UIs using React, Tailwind, and Next.js.',
  },
  {
    icon: <Database className="w-10 h-10 text-orange-500" />,
    title: 'Backend Development',
    desc: 'Building robust APIs and databases with Node.js, Express, Flask, MySQL, and MongoDB.',
  },
  {
    icon: <Cpu className="w-10 h-10 text-orange-500" />,
    title: 'AI Integration',
    desc: 'Implementing ML pipelines, chatbots, and opinion mining solutions for intelligent apps.',
  },
  {
    icon: <Cloud className="w-10 h-10 text-orange-500" />,
    title: 'Cloud & DevOps',
    desc: 'Deploying scalable applications on cloud platforms with CI/CD and monitoring setups.',
  },
  {
    icon: <Smartphone className="w-10 h-10 text-orange-500" />,
    title: 'Mobile Optimization',
    desc: 'Designing mobile-first web applications with performance and UX in mind.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-black px-6 overflow-hidden">
      {/* Floating background blobs */}
      <motion.div
        className="absolute top-[vh] left-[35vw] w-96 h-96 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full filter blur-3xl opacity-30 animate-blob"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((srv, i) => (
            <motion.div
              key={srv.title}
              className="bg-gray-900/60 p-8 rounded-xl border border-gray-800 hover:bg-gray-900/80 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="mb-6">{srv.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{srv.title}</h3>
              <p className="text-gray-400 text-base">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
