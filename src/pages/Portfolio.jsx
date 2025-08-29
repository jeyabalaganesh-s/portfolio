import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Websence AI',
    desc: 'Opinion mining + generative AI website',
    img: '/proj-websence.png',
    link: '#',
  },
  {
    title: 'Lone Wolf',
    desc: 'E‑commerce clothing site (PHP/MySQL)',
    img: '/proj-lonewolf.png',
    link: '#',
  },
  {
    title: 'Blismera Shop',
    desc: 'Custom jewelry e-commerce platform',
    img: '/proj-blismera.png',
    link: 'https://blismera.in',
  },
  {
    title: 'Marketing Hub CRM',
    desc: 'Healthcare-focused SaaS CRM platform',
    img: '/proj-crm.png',
    link: 'https://marketinghub.leada360.com',
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="relative py-24 bg-black px-6 overflow-hidden">


      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="relative group overflow-hidden rounded-xl border border-gray-800 shadow-lg"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {p.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-sm sm:text-base"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {p.desc}
                </motion.p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
