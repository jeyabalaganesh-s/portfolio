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
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black/80 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="relative group overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="text-gray-300">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
