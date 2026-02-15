import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
  title: "Websence AI",
  desc: "Opinion Mining + Generative AI Platform",
  preview:
    "AI-powered sentiment analysis platform that extracts insights from large-scale textual data and generates intelligent summaries.",
  fullDesc: `
Websence AI is an intelligent web platform that integrates sentiment analysis 
and generative AI to extract meaningful insights from unstructured text data.

The system processes user reviews, feedback, and textual inputs using NLP 
techniques, identifies sentiment polarity, and generates AI-powered summaries 
and contextual outputs.

Key Features: Real-time sentiment detection
• Opinion clustering & insight extraction
• AI-generated summaries
• REST API architecture
• Interactive analytics dashboard

Tech Stack:
Next.js, Node.js, NLP models, AI APIs

Impact:
Automates large-scale text analysis and enhances decision-making using AI.
`,
  tags: ["AI", "NLP", "Next.js", "Node.js"]
},
{
  title: "Token Management Portal",
  desc: "Healthcare Queue & Appointment System",
  preview:
    "A healthcare SaaS application that streamlines appointment scheduling and patient queue management for clinics and hospitals.",
  fullDesc: `
Token Management Portal is a healthcare SaaS application that streamlines 
appointment scheduling and patient queue management for clinics and hospitals.

The system assigns real-time tokens, manages doctor availability, and tracks 
patient interactions to reduce waiting time and optimize clinic operations.

Key Features: Real-time token generation
• Appointment scheduling system
• Queue monitoring dashboard
• Doctor availability tracking
• Administrative analytics

Tech Stack:
Node.js, Express, MongoDB, React

Impact:
Enhances operational efficiency and reduces manual scheduling overhead.
`,
  tags: ["Healthcare", "Node.js", "MongoDB", "SaaS"]
},
{
  title: "Lone Wolf",
  desc: "Full-stack E-commerce Platform",
  preview:
    "A complete e-commerce solution built using PHP and MySQL, featuring product management, shopping cart functionality, and secure checkout.",
  fullDesc: `
Lone Wolf is a complete e-commerce solution built using PHP and MySQL.

It includes product management, shopping cart functionality, secure checkout, 
order tracking, and admin panel for inventory control.

Key Features: Product catalog management
• Cart & checkout flow
• Payment gateway integration
• Order tracking
• Admin inventory system

Tech Stack:
PHP, MySQL, HTML, CSS

Impact:
Delivered a functional online retail platform with scalable backend logic.
`,
  tags: ["PHP", "MySQL", "E-commerce"]
},
{
  title: "Blismera Shop",
  desc: "Custom Jewelry E-commerce Platform",
  preview:
    "A modern jewelry e-commerce platform specializing in custom-designed bracelets and accessories, featuring dynamic product customization and responsive UI design.",
  fullDesc: `
Blismera is a modern jewelry e-commerce platform specializing in 
custom-designed bracelets and accessories.

It features dynamic product customization, responsive UI design, 
and seamless user checkout experience.

Key Features: Product customization flow
• Responsive UI
• Cart & order management
• SEO-friendly architecture

Tech Stack:
React, Tailwind CSS

Impact:
Provides a modern and visually engaging online shopping experience.
`,
  tags: ["React", "Tailwind", "E-Commerce"]
},
{
  title: "DiGi School Portal",
  desc: "School Management SaaS Platform",
  preview:
    "A centralized education management system that digitizes student records, attendance tracking, staff management, and academic reporting for educational institutions.",
  fullDesc: `
DiGi School Portal is a centralized education management system that 
digitizes student records, attendance tracking, staff management, 
and academic reporting.

The system provides role-based access for administrators and teachers 
to manage academic operations efficiently.

Key Features: Student database management
• Attendance tracking
• Staff management
• Academic performance reports
• Admin dashboard

Tech Stack:
PHP, MySQL, HTML, CSS

Impact:
Improves operational efficiency for educational institutions.
`,
  tags: ["Education", "PHP", "MySQL"]
}


];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  /* Vertical → Horizontal Scroll */
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const horizontal = horizontalRef.current;

      if (!section || !horizontal) return;

      const scrollTop = window.scrollY;
      const offsetTop = section.offsetTop;
      const totalHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      if (
        scrollTop >= offsetTop &&
        scrollTop <= offsetTop + totalHeight - windowHeight
      ) {
        const progress =
          (scrollTop - offsetTop) / (totalHeight - windowHeight);

        const maxTranslate =
          horizontal.scrollWidth - window.innerWidth;

        horizontal.style.transform = `translateX(-${
          progress * maxTranslate
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Portfolio Section */}
      <section
        id="projects"
        ref={sectionRef}
        className="relative bg-black"
        style={{ height: `${projects.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">

          {/* Title */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10">
            <h2 className="text-5xl font-bold text-white">
              My Projects
            </h2>
            <p className="text-gray-400 mt-3">
              Click a project to explore details
            </p>
          </div>

          {/* Horizontal Track */}
          <div
            ref={horizontalRef}
            className="flex gap-16 px-24 transition-transform duration-75 ease-linear"
          >
            {projects.map((project, index) => (
              <motion.div
  key={index}
  onClick={() => setSelectedProject(project)}
  className="cursor-pointer min-w-[550px] max-w-[550px] 
  bg-black/60 p-10 rounded-3xl 
  border border-gray-800 
  backdrop-blur-md 
  hover:scale-105 
  hover:bg-black/80 
  hover:shadow-orange-500/20
  hover:shadow-2xl
  transition-all duration-500 
  shadow-xl"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Title */}
  <h3 className="text-2xl font-bold text-white mb-3">
    {project.title}
  </h3>

  {/* Short Category */}
  <p className="text-orange-400 text-sm font-medium mb-3">
    {project.desc}
  </p>

  {/* Small Preview Description */}
  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
    {project.preview}
  </p>

  {/* Tags */}
  <div className="flex flex-wrap gap-2 mb-6">
    {project.tags.map((tag) => (
      <span
        key={tag}
        className="text-xs px-3 py-1 rounded-full 
        bg-orange-600/20 text-orange-400 
        border border-orange-500/30"
      >
        {tag}
      </span>
    ))}
  </div>

  {/* Explore Hint */}
  <div className="text-sm text-gray-500 group-hover:text-orange-400 transition">
    Click to explore →
  </div>
</motion.div>

            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {/* Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-xl 
      flex items-center justify-center z-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="relative bg-black max-w-3xl w-full 
        max-h-[90vh] overflow-y-auto 
        p-10 rounded-3xl border border-gray-700 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="text-4xl font-bold text-white mb-6">
          {selectedProject.title}
        </h3>

        {/* Description Structured */}
        <div className="space-y-6 text-gray-300 leading-relaxed">

          {/* Overview */}
          <div>
            <h4 className="text-orange-400 font-semibold mb-2">
              Overview
            </h4>
            <p>
              {selectedProject.fullDesc.split("Key Features:")[0]}
            </p>
          </div>

          {/* Features */}
          {selectedProject.fullDesc.includes("Key Features:") && (
            <div>
              <h4 className="text-orange-400 font-semibold mb-2">
                Key Features
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                {selectedProject.fullDesc
                  .split("Key Features:")[1]
                  ?.split("Tech Stack:")[0]
                  ?.split("•")
                  .filter(Boolean)
                  .map((feature, i) => (
                    <li key={i}>{feature.trim()}</li>
                  ))}
              </ul>
            </div>
          )}

        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {selectedProject.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full 
              bg-orange-600/20 text-orange-400 border border-orange-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Visit Button */}
        <div className="mt-8">
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 
            rounded-lg text-white font-medium transition inline-block"
          >
            Visit Live Project →
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}
