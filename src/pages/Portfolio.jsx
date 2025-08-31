import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Websence AI',
    desc: 'Opinion mining + generative AI website',
    overview:
      'A web application that combines opinion mining (sentiment analysis) with generative AI to analyze and create insightful content.',
    link: '#',
    tags: ['AI', 'NLP', 'Next.js'],
  },
  {
    title: 'Lone Wolf',
    desc: 'E-commerce clothing site (PHP/MySQL)',
    overview:
      'An online clothing store built using PHP and MySQL, featuring cart, payment gateway, and admin management.',
    link: 'https://lonewolf-jikq.onrender.com/',
    tags: ['PHP', 'MySQL', 'E-commerce'],
  },
  {
    title: 'Blismera Shop',
    desc: 'Custom jewelry e-commerce platform',
    overview:
      'Blismera is a jewelry e-commerce platform specializing in custom-designed bracelets and accessories.',
    link: 'https://blismera.in',
    tags: ['React', 'Tailwind', 'E-Cart'],
  },
  {
  title: 'Marketing Hub CRM',
  desc: 'A SaaS CRM for healthcare professionals with campaigns, referrals, patient management, and built-in social media manager.',
  link: 'https://marketinghub.leada360.com',
  tags: ['CRM', 'Campaigns', 'Referrals', 'Social Media Manager', 'Healthcare'],
},

  {
    title: 'Token Management Portal',
    desc: 'Healthcare SaaS for managing tokens, appointments, and patient interactions efficiently.',
    overview:
      'An appointment and token management system for clinics, hospitals, and doctors to streamline patient queues.',
    link: 'https://token.leada360.com',
    tags: ['Node.js', 'MongoDB', 'Healthcare'],
  },
{
  title: 'DiGi School Portal',
  desc: 'A SaaS platform for schools to manage student records, classes, and staff efficiently.',
  overview:
    'A complete school management system built with PHP, HTML, CSS, and MySQL. It helps schools manage student records, attendance, staff, and academic activities with ease.',
  link: '#',
  tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'Education'],
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
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden text-left bg-gray-900/60 p-8  rounded-xl border  border-gray-800 hover:bg-gray-900/80 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2">
                  {p.desc}
                </p>
                <motion.p
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {p.overview}
                </motion.p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-orange-600/20 text-orange-400 border border-orange-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
