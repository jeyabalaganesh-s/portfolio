import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

    {
    title: "CRM",
    image: "/images/projects/crm.png",
    desc: "AI-First Healthcare CRM Platform",
    category: "Healthcare / SaaS / AI",
    preview:
      "A full-stack CRM platform designed for healthcare professionals to manage contacts, leads, appointments, interactions, and business workflows from a centralized system.",
    fullDesc: `
CRM is a full-stack healthcare CRM platform designed to help healthcare professionals and teams manage their business relationships and daily workflows from a centralized system.

The platform provides structured management of healthcare professionals, leads, appointments, interactions, and organizational activities with role-based access and scalable multi-tenant architecture.

Key Features: Contact & healthcare professional management
• Lead and enquiry management
• Appointment scheduling
• Interaction and activity tracking
• Role-based access control
• Multi-tenant architecture
• Centralized analytics dashboard

Tech Stack:
React, TypeScript, FastAPI, Python, PostgreSQL, SQLAlchemy, Alembic

Impact:
Centralizes healthcare business operations into a scalable SaaS platform while reducing manual workflow and improving visibility across teams.
`,
    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "AI",
      "SaaS",
    ],
  },

  {
    title: "JEMI",
    image: "/images/projects/jemi.png",
    desc: "AI-Powered Lead Qualification Agent",
    category: "AI / Agents / CRM",
    preview:
      "An AI agent that automatically analyzes, qualifies, and prioritizes leads using conversational data and business-defined qualification criteria.",
    fullDesc: `
JEMI is an AI-powered lead qualification system designed to automate the initial evaluation of incoming leads.

The AI agent analyzes lead information, understands conversational context, evaluates qualification criteria, and helps sales teams prioritize high-value opportunities.

Key Features: AI-powered lead qualification
• Conversational lead analysis
• Automated lead scoring
• Qualification based on business rules
• Lead prioritization
• Structured data extraction
• CRM workflow integration
• AI agent orchestration

Tech Stack:
React, TypeScript, Node.js, AI APIs, LangGraph

Impact:
Automates repetitive lead qualification workflows and helps sales teams focus their time on leads with higher potential.
`,
    tags: [
      "AI Agent",
      "LangGraph",
      "React",
      "TypeScript",
      "Node.js",
      "CRM",
    ],
  },

  {
    title: "Event OS",
    image: "/images/projects/event-os.png",
    desc: "Complete Event Monitoring & Management Platform",
    category: "Event Tech / SaaS",
    preview:
      "A centralized event operations platform for planning, monitoring, and managing complete event workflows, activities, teams, and real-time operational status.",
    fullDesc: `
Event OS is a centralized event operations platform designed to monitor and manage the complete lifecycle of an event from a single dashboard.

The platform brings event planning, task management, team coordination, schedules, activities, and real-time monitoring into one operational workspace.

Key Features: Complete event lifecycle management
• Event planning and scheduling
• Real-time event monitoring
• Task and activity management
• Team and role management
• Event status tracking
• Centralized operations dashboard
• Notifications and alerts
• Analytics and reporting

Tech Stack:
React, TypeScript, Node.js, Express, MongoDB

Impact:
Provides a centralized command center for event teams to coordinate operations, monitor progress, and manage events more efficiently.
`,
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "SaaS",
      "Event OS",
    ],
  },
  {
    title: "Websence AI",
    image: "/images/projects/websenseai.png",
    desc: "Opinion Mining + Generative AI Platform",
    category: "AI / NLP",
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
    tags: ["AI", "NLP", "Next.js", "Node.js"],
  },

  {
    title: "Token Management Portal",
    desc: "Healthcare Queue & Appointment System",
    image: "/images/projects/token.png",
    category: "Healthcare / SaaS",
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
    tags: ["Healthcare", "Node.js", "MongoDB", "SaaS"],
  },

  {
    title: "Lone Wolf",
    desc: "Full-stack E-commerce Platform",
    category: "E-commerce",
    image: "/images/projects/lonewolf.png",
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
    tags: ["PHP", "MySQL", "E-commerce"],
  },



  {
    title: "Blismera Shop",
    desc: "Custom Jewelry E-commerce Platform",
    image: "/images/projects/blismera.png",
    category: "E-commerce / UI",
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
    tags: ["React", "Tailwind", "E-Commerce"],
  },

  {
    title: "DiGi School Portal",
    desc: "School Management SaaS Platform",
    image: "/images/projects/digi-school.png",
    category: "Education / SaaS",
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
    tags: ["Education", "PHP", "MySQL"],
  },
];


/* =========================================================
   PROJECT VISUAL
========================================================= */

function ProjectVisual({ project, index, active }) {
  return (
    <div className="relative w-full h-[250px] xl:h-[300px] overflow-hidden border border-white/[0.08] bg-[#0b0b0b] group">

      {/* Project Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
        "
        animate={{
          scale: active ? 1.06 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Dark overlay */}
      <div
        className={`
          absolute
          inset-0
          bg-black/35
          transition-all
          duration-500
          ${active ? "bg-black/20" : "bg-black/40"}
        `}
      />

      {/* Orange gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-orange-500/20
          via-transparent
          to-black/50
          pointer-events-none
        "
      />

      {/* Grid overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          pointer-events-none
          bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Orange indicator */}
      <motion.div
        animate={
          active
            ? {
                scale: [1, 1.4, 1],
              }
            : {
                scale: 1,
              }
        }
        transition={{
          duration: 1.3,
          repeat: active ? Infinity : 0,
        }}
        className="
          absolute
          top-7
          right-7
          w-3
          h-3
          rounded-full
          bg-orange-500
          shadow-[0_0_25px_rgba(255,90,0,0.5)]
        "
      />

      {/* Project number */}
      <div
        className="
          absolute
          bottom-6
          left-6
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-white/60
          z-10
        "
      >
        SYSTEM / {String(index + 1).padStart(2, "0")}
      </div>

      {/* Explore */}
      <div
        className={`
          absolute
          bottom-6
          right-6
          text-[9px]
          uppercase
          tracking-[0.3em]
          transition-colors
          duration-300
          z-10
          ${
            active
              ? "text-orange-500"
              : "text-white/50"
          }
        `}
      >
        {active ? "Open Project →" : "Explore"}
      </div>

    </div>
  );
}


/* =========================================================
   MAIN PORTFOLIO
========================================================= */

export default function Portfolio() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* =======================================================
     RESPONSIVE
  ======================================================= */

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);


  /* =======================================================
     DESKTOP HORIZONTAL SCROLL
  ======================================================= */

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const horizontal = horizontalRef.current;

    if (!section || !horizontal) return;

    let maxTranslate = 0;

    const updateDimensions = () => {
      const trackWidth = horizontal.scrollWidth;
      const viewportWidth = window.innerWidth;

      maxTranslate = Math.max(
        trackWidth - viewportWidth,
        0
      );

      /*
        IMPORTANT:

        The section height is based on the actual
        horizontal distance.

        This gives us:

        vertical scroll
              ↓
        horizontal movement
      */

      section.style.height = `${
        maxTranslate + window.innerHeight
      }px`;
    };


    const handleScroll = () => {
      const rect =
        section.getBoundingClientRect();

      const sectionHeight =
        section.offsetHeight;

      const viewportHeight =
        window.innerHeight;

      const scrollableDistance =
        sectionHeight - viewportHeight;

      if (scrollableDistance <= 0) {
        return;
      }


      /*
        How far we have travelled through
        the portfolio section.
      */

      const distanceFromStart =
        -rect.top;


      let progress =
        distanceFromStart /
        scrollableDistance;


      progress = Math.max(
        0,
        Math.min(progress, 1)
      );


      /*
        Horizontal translation
      */

      const translateX =
        progress * maxTranslate;


      horizontal.style.transform =
        `translate3d(${-translateX}px, 0, 0)`;


      /*
        Progress indicator
      */

      setScrollProgress(progress);


      /*
        Active project
      */

     const currentProject = Math.min(
  projects.length - 1,
  Math.floor(progress * projects.length)
);

setActiveProject(currentProject);

     
    };


    updateDimensions();
    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateDimensions
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateDimensions
      );
    };
  }, [isMobile]);


  /* =======================================================
     LOCK BODY WHEN MODAL OPEN
  ======================================================= */

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);


  /* =======================================================
     ESC CLOSE
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" &&
        selectedProject
      ) {
        setSelectedProject(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedProject]);


  return (
    <>
      {/* =====================================================
          PORTFOLIO SECTION
      ===================================================== */}

      <section
        id="portfolio"
        ref={sectionRef}
        className="
          relative
          bg-[#080808]
          text-white
        "
      >

        {/* =================================================
            BACKGROUND GRID
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            opacity-[0.035]
            bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />


        {/* =================================================
            ORANGE AMBIENT GLOW
        ================================================= */}

        <div
          className="
            absolute
            top-[20%]
            right-[10%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-orange-500/[0.025]
            blur-[140px]
            pointer-events-none
          "
        />


        {/* =================================================
            SECTION HEADER

            IMPORTANT:
            Absolute so it does NOT push the sticky
            horizontal area down.
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            absolute
            top-0px
            left-12
            right-0
            z-30
            px-6
            md:px-10
            lg:px-16
            pt-0
            pointer-events-none
          "
        >

          <div className="max-w-[1500px] mx-auto">

            {/* Small label */}

            <div className="flex items-center gap-4 mb-5">


              <span
                className="
                  text-[15px]
                  uppercase
                  tracking-[0.4em]
                  text-white/35
                "
              >
                Selected Work
              </span>

            </div>


            {/* Main title */}

            <h2
              className="
                text-6xl
                md:text-7xl
                lg:text-[3vw]
                font-black
                tracking-[0.1em]
                leading-[0.8]
              "
            >
              Work
            </h2>


            {/* Description */}

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-6
                text-white/35
              "
            >
              A collection of systems,
              platforms and digital products
              I have designed and built.
            </p>


            {/* Progress line */}

            <div
              className="
                mt-6
                h-px
                w-48
                bg-white/[0.08]
                overflow-hidden
              "
            >
              <div
                className="
                  h-full
                  bg-orange-500
                  transition-[width]
                  duration-100
                "
                style={{
                  width: isMobile
                    ? "100%"
                    : `${scrollProgress * 100}%`,
                }}
              />
            </div>

          </div>
        </motion.div>


        {/* =================================================
            DESKTOP HORIZONTAL EXPERIENCE
        ================================================= */}

        {!isMobile && (
          <div
            className="
              sticky
              top-0
              left-0
              w-full
              h-screen
              overflow-hidden
            "
          >

            {/* =============================================
                VIEWPORT
            ============================================== */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
              "
            >

              {/* =========================================
                  HORIZONTAL TRACK
              ========================================== */}

             <div
  ref={horizontalRef}
  className="
    flex
    items-center
    gap-[7vw]
    px-[8vw]
    pt-32
    pr-[15vw]
    will-change-transform
  "
>

                {projects.map(
                  (project, index) => (

                    <motion.article
                      key={project.title}
                      onClick={() =>
                        setSelectedProject(
                          project
                        )
                      }
                      onMouseEnter={() =>
                        setActiveProject(
                          index
                        )
                      }
                      className="
                        group
                        relative
                        flex-shrink-0
                        w-[620px]
                        xl:w-[720px]
                        cursor-pointer
                      "
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.04,
                      }}
                    >

                      {/* =================================
                          META
                      ================================== */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          mb-5
                        "
                      >

                        <span
                          className="
                            text-[10px]
                            tracking-[0.35em]
                            text-orange-500
                          "
                        >
                          PROJECT{" "}
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.3em]
                            text-white/25
                          "
                        >
                          {project.category}
                        </span>

                      </div>


                      {/* =================================
                          VISUAL
                      ================================== */}

                      <ProjectVisual
  project={project}
  index={index}
  active={activeProject === index}
/>


                      {/* =================================
                          INFO
                      ================================== */}

                      <div
                        className="
                          pt-7
                          pb-7
                          border-b
                          border-white/[0.08]
                        "
                      >

                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-8
                          "
                        >

                          <div>

                            <h3
                              className="
                                text-4xl
                                xl:text-5xl
                                font-black
                                uppercase
                                tracking-[-0.05em]
                                leading-[0.9]
                                text-white
                                group-hover:text-orange-500
                                transition-colors
                                duration-300
                              "
                            >
                              {project.title}
                            </h3>

                            <p
                              className="
                                mt-4
                                text-sm
                                text-white/40
                              "
                            >
                              {project.desc}
                            </p>

                          </div>


                          {/* Arrow */}

                          <motion.div
                            animate={
                              activeProject ===
                              index
                                ? {
                                    x: 6,
                                    y: -6,
                                  }
                                : {
                                    x: 0,
                                    y: 0,
                                  }
                            }
                            transition={{
                              duration: 0.25,
                            }}
                            className="
                              flex-shrink-0
                              text-2xl
                              text-white/20
                              group-hover:text-orange-500
                              transition-colors
                            "
                          >
                            ↗
                          </motion.div>

                        </div>


                        {/* Tags */}

                        <div
                          className="
                            flex
                            flex-wrap
                            gap-2
                            mt-6
                          "
                        >

                          {project.tags.map(
                            (tag) => (

                              <span
                                key={tag}
                                className="
                                  px-3
                                  py-1.5
                                  text-[9px]
                                  uppercase
                                  tracking-[0.15em]
                                  text-white/30
                                  border
                                  border-white/[0.08]
                                  group-hover:text-orange-500
                                  group-hover:border-orange-500/30
                                  transition-all
                                  duration-300
                                "
                              >
                                {tag}
                              </span>

                            )
                          )}

                        </div>

                      </div>

                    </motion.article>

                  )
                )}

              </div>
            </div>


            {/* =============================================
                LEFT EDGE FADE
            ============================================== */}

            <div
              className="
                absolute
                inset-y-0
                left-0
                w-28
                z-20
                pointer-events-none
                bg-gradient-to-r
                from-[#080808]
                via-[#080808]/80
                to-transparent
              "
            />


            {/* =============================================
                RIGHT EDGE FADE
            ============================================== */}

            <div
              className="
                absolute
                inset-y-0
                right-0
                w-28
                z-20
                pointer-events-none
                bg-gradient-to-l
                from-[#080808]
                via-[#080808]/80
                to-transparent
              "
            />


            {/* =============================================
                PROJECT INDICATOR
            ============================================== */}

            <div
              className="
                absolute
                right-8
                top-1/2
                -translate-y-1/2
                z-30
                hidden
                lg:flex
                flex-col
                gap-4
              "
            >

              {projects.map(
                (project, index) => (

                  <button
                    key={project.title}
                    type="button"
                    onClick={() =>
                      setActiveProject(
                        index
                      )
                    }
                    className="
                      flex
                      items-center
                      gap-3
                      group
                    "
                  >

                    <span
                      className={`
                        text-[8px]
                        tracking-[0.2em]
                        transition-colors
                        ${
                          activeProject ===
                          index
                            ? "text-orange-500"
                            : "text-white/20"
                        }
                      `}
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span
                      className={`
                        block
                        w-2
                        h-2
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          activeProject ===
                          index
                            ? "bg-orange-500 scale-125 shadow-[0_0_12px_rgba(255,90,0,0.6)]"
                            : "bg-white/20"
                        }
                      `}
                    />

                  </button>

                )
              )}

            </div>

          </div>
        )}


        {/* =================================================
            MOBILE
        ================================================= */}

        {isMobile && (

          <div
            className="
              px-6
              pt-[380px]
              pb-24
              space-y-16
            "
          >

            {projects.map(
              (project, index) => (

                <motion.article
                  key={project.title}
                  onClick={() =>
                    setSelectedProject(
                      project
                    )
                  }
                  className="
                    group
                    cursor-pointer
                  "
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                >

                  {/* Meta */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      mb-4
                    "
                  >

                    <span
                      className="
                        text-[10px]
                        tracking-[0.3em]
                        text-orange-500
                      "
                    >
                      PROJECT{" "}
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-white/25
                      "
                    >
                      {project.category}
                    </span>

                  </div>


                  {/* Visual */}

                  <ProjectVisual
  project={project}
  index={index}
  active={false}
/>


                  {/* Content */}

                  <div
                    className="
                      pt-6
                      pb-8
                      border-b
                      border-white/[0.08]
                    "
                  >

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >

                      <h3
                        className="
                          text-3xl
                          font-black
                          uppercase
                          tracking-[-0.04em]
                          leading-[0.9]
                        "
                      >
                        {project.title}
                      </h3>

                      <span
                        className="
                          text-xl
                          text-orange-500
                        "
                      >
                        ↗
                      </span>

                    </div>


                    <p
                      className="
                        mt-4
                        text-sm
                        text-white/40
                      "
                    >
                      {project.desc}
                    </p>


                    <p
                      className="
                        mt-4
                        text-sm
                        leading-6
                        text-white/35
                      "
                    >
                      {project.preview}
                    </p>


                    {/* Tags */}

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                        mt-5
                      "
                    >

                      {project.tags.map(
                        (tag) => (

                          <span
                            key={tag}
                            className="
                              px-3
                              py-1.5
                              text-[9px]
                              uppercase
                              tracking-[0.15em]
                              text-white/30
                              border
                              border-white/[0.08]
                            "
                          >
                            {tag}
                          </span>

                        )
                      )}

                    </div>

                  </div>

                </motion.article>

              )
            )}

          </div>

        )}

      </section>


      {/* =====================================================
          PROJECT MODAL
      ====================================================== */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              bg-black/85
              backdrop-blur-xl
              flex
              items-center
              justify-center
              p-4
              md:p-8
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedProject(null)
            }
          >

            <motion.div
              className="
                relative
                w-full
                max-w-4xl
                max-h-[90vh]
                overflow-y-auto
                bg-[#0a0a0a]
                border
                border-white/[0.1]
                shadow-2xl
              "
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {/* Orange top line */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-[2px]
                  bg-orange-500
                "
              />


              {/* Close */}

              <button
                type="button"
                onClick={() =>
                  setSelectedProject(
                    null
                  )
                }
                className="
                  absolute
                  top-6
                  right-6
                  z-10
                  w-10
                  h-10
                  border
                  border-white/10
                  text-white/40
                  hover:text-orange-500
                  hover:border-orange-500/40
                  transition-all
                "
              >
                ×
              </button>


              <div className="p-7 md:p-12">

                {/* Number */}

                <div
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-orange-500
                    mb-5
                  "
                >
                  PROJECT /{" "}
                  {String(
                    projects.indexOf(
                      selectedProject
                    ) + 1
                  ).padStart(2, "0")}
                </div>


                {/* Title */}

                <h3
                  className="
                    text-5xl
                    md:text-7xl
                    font-black
                    uppercase
                    tracking-[-0.06em]
                    leading-[0.85]
                    pr-12
                  "
                >
                  {selectedProject.title}
                  <span className="text-orange-500">
                    .
                  </span>
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-6
                    text-sm
                    uppercase
                    tracking-[0.12em]
                    text-orange-500
                  "
                >
                  {selectedProject.desc}
                </p>


                {/* Divider */}

                <div
                  className="
                    h-px
                    bg-white/[0.08]
                    my-10
                  "
                />


                {/* Overview */}

                <div
                  className="
                    grid
                    md:grid-cols-[150px_1fr]
                    gap-5
                    mb-10
                  "
                >

                  <h4
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-white/30
                    "
                  >
                    Overview
                  </h4>

                  <p
                    className="
                      text-sm
                      md:text-base
                      leading-7
                      text-white/55
                      whitespace-pre-line
                    "
                  >
                    {
                      selectedProject.fullDesc
                        .split(
                          "Key Features:"
                        )[0]
                        .trim()
                    }
                  </p>

                </div>


                {/* Features */}

                {selectedProject.fullDesc.includes(
                  "Key Features:"
                ) && (

                  <div
                    className="
                      grid
                      md:grid-cols-[150px_1fr]
                      gap-5
                      mb-10
                    "
                  >

                    <h4
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-white/30
                      "
                    >
                      Features
                    </h4>

                    <ul className="space-y-3">

                      {selectedProject.fullDesc
                        .split(
                          "Key Features:"
                        )[1]
                        ?.split(
                          "Tech Stack:"
                        )[0]
                        ?.split("•")
                        .filter(Boolean)
                        .map(
                          (
                            feature,
                            index
                          ) => (

                            <li
                              key={index}
                              className="
                                flex
                                gap-3
                                text-sm
                                text-white/55
                              "
                            >

                              <span
                                className="
                                  mt-2
                                  w-1.5
                                  h-1.5
                                  rounded-full
                                  bg-orange-500
                                  flex-shrink-0
                                "
                              />

                              {feature.trim()}

                            </li>

                          )
                        )}

                    </ul>

                  </div>

                )}


                {/* Tech Stack */}

                {selectedProject.fullDesc.includes(
                  "Tech Stack:"
                ) && (

                  <div
                    className="
                      grid
                      md:grid-cols-[150px_1fr]
                      gap-5
                      mb-10
                    "
                  >

                    <h4
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-white/30
                      "
                    >
                      Tech Stack
                    </h4>

                    <p
                      className="
                        text-sm
                        text-white/55
                      "
                    >
                      {selectedProject.fullDesc
                        .split(
                          "Tech Stack:"
                        )[1]
                        ?.split("Impact:")[0]
                        ?.trim()}
                    </p>

                  </div>

                )}


                {/* Impact */}

                {selectedProject.fullDesc.includes(
                  "Impact:"
                ) && (

                  <div
                    className="
                      grid
                      md:grid-cols-[150px_1fr]
                      gap-5
                      mb-10
                    "
                  >

                    <h4
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-white/30
                      "
                    >
                      Impact
                    </h4>

                    <p
                      className="
                        text-sm
                        leading-7
                        text-white/55
                      "
                    >
                      {selectedProject.fullDesc
                        .split("Impact:")[1]
                        ?.trim()}
                    </p>

                  </div>

                )}


                {/* Tags */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    pt-6
                    border-t
                    border-white/[0.08]
                  "
                >

                  {selectedProject.tags.map(
                    (tag) => (

                      <span
                        key={tag}
                        className="
                          px-3
                          py-1.5
                          text-[9px]
                          uppercase
                          tracking-[0.15em]
                          text-orange-500
                          border
                          border-orange-500/20
                        "
                      >
                        {tag}
                      </span>

                    )
                  )}

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}