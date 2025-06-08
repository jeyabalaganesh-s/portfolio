import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8 text-orange-500" />,
    title: 'Frontend',
    desc: 'React, Tailwind, Responsive UIs',
  },
  {
    icon: <Database className="w-8 h-8 text-orange-500" />,
    title: 'Backend',
    desc: 'Node.js, Flask, PHP, MySQL, MongoDB',
  },
  {
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
    title: 'AI Integration',
    desc: 'Opinion Mining, Chatbots, ML Pipelines',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, i) => (
            <motion.div
              key={srv.title}
              className="bg-gray-900/60 p-6 rounded-lg border border-gray-800 hover:bg-gray-900/80 transition"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="mb-4">{srv.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-400">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
