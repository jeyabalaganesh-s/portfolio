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
  const [isMobile, setIsMobile] = useState(false);

  /* Detect screen size */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Scroll logic ONLY for desktop */
  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const horizontal = horizontalRef.current;

    if (!section || !horizontal) return;

    let maxScroll = 0;

    const setHeight = () => {
      const totalWidth = horizontal.scrollWidth;
      const viewportWidth = window.innerWidth;

      maxScroll = Math.max(totalWidth - viewportWidth, 0);

      section.style.height = `${maxScroll + window.innerHeight}px`;
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = section.offsetTop;
      const totalHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const total = totalHeight - windowHeight;
      if (total <= 0) return;

      let progress = (scrollTop - offsetTop) / total;
      progress = Math.max(0, Math.min(progress, 1));

      horizontal.style.transform = `translate3d(-${
        progress * maxScroll
      }px, 0, 0)`;
    };

    setHeight();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", setHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setHeight);
    };
  }, [isMobile]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-black"
        style={{
          height: isMobile ? "auto" : `${projects.length * 100}vh`
        }}
      >
        
  {/* Grid Background */}
  <div className="absolute inset-0 opacity-[0.03] 
  [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] 
  [background-size:40px_40px]" />

{/* Section Header */}
<div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 max-w-screen px-8 lg:px-32 mx-auto"
>
  {/* Small Label */}
  <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase mb-4">
    Projects
  </h2>

  {/* Main Title */}
  <h3 className="text-5xl font-bold text-white leading-tight">
    Selected Work
  </h3>



  {/* Subtitle */}
  <p className="text-white/50 mt-6 max-w-xl">
    A collection of systems, platforms, and products I have designed and built.
  </p>
    {/* Accent Line */}
  <div className="h-[2px] w-24 bg-orange-500 mt-8" />
</div>

        {/* Desktop Layout */}
{!isMobile && (
  <>
    
  
  <div className="sticky top-0 h-screen flex items-center overflow-hidden">
    
    <div
      ref={horizontalRef}
      className="flex gap-14 px-24 will-change-transform"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          onClick={() => setSelectedProject(project)}
          className="cursor-pointer min-w-[420px] p-8 rounded-2xl
          border border-white/10 bg-white/[0.03]
          hover:border-orange-500/50 hover:bg-white/[0.05]
          transition-all duration-300"
          whileHover={{ y: -8 }}
        >
          {/* Index */}
          <p className="text-orange-400 text-sm mb-3">
            0{index + 1}
          </p>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-white mb-2">
            {project.title}
          </h3>

          {/* Desc */}
          <p className="text-orange-400 text-sm mb-3">
            {project.desc}
          </p>

          {/* Preview */}
          <p className="text-white/60 text-sm mb-6 leading-relaxed">
            {project.preview}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full
                bg-orange-600/20 text-orange-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  </>
)}

        {/* Mobile Layout (vertical) */}
{isMobile && (
  <div className="px-6 py-20 space-y-6">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        onClick={() => setSelectedProject(project)}
        className="p-6 rounded-2xl border border-white/10 
        bg-white/[0.03] cursor-pointer
        active:scale-[0.98] transition"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        {/* Index */}
        <p className="text-orange-400 text-xs mb-2">
          0{index + 1}
        </p>

        {/* Title */}
        <h3 className="text-white text-lg font-semibold mb-2">
          {project.title}
        </h3>

        {/* Desc */}
        <p className="text-orange-400 text-sm mb-2">
          {project.desc}
        </p>

        {/* Preview */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.preview}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 rounded-full 
              bg-orange-600/20 text-orange-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
)}
      </section>

     <AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="relative bg-black max-w-3xl w-full max-h-[90vh] overflow-y-auto p-10 rounded-3xl border border-gray-700 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-6 right-6 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h3 className="text-4xl font-bold text-white mb-8">
          {selectedProject.title}
        </h3>

        <div className="space-y-8 text-gray-300 leading-relaxed">

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
              <ul className="list-disc pl-5 space-y-2">
                {selectedProject.fullDesc
                  .split("Key Features:")[1]
                  ?.split("Tech Stack:")[0]
                  ?.split("•")
                  .filter(Boolean)
                  .map((f, i) => (
                    <li key={i}>{f.trim()}</li>
                  ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {selectedProject.fullDesc.includes("Tech Stack:") && (
            <div>
              <h4 className="text-orange-400 font-semibold mb-2">
                Tech Stack
              </h4>
              <p>
                {selectedProject.fullDesc
                  .split("Tech Stack:")[1]
                  ?.split("Impact:")[0]
                  ?.trim()}
              </p>
            </div>
          )}

          {/* Impact */}
          {selectedProject.fullDesc.includes("Impact:") && (
            <div>
              <h4 className="text-orange-400 font-semibold mb-2">
                Impact
              </h4>
              <p>
                {selectedProject.fullDesc
                  .split("Impact:")[1]
                  ?.trim()}
              </p>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {selectedProject.tags.map((tag) => (
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
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}