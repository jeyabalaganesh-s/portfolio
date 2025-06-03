import React from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import profilePic from "./assets/profile.jpg";
import "./styles/global.css";
import Typewriter from "typewriter-effect";
import { Mail, Github, Globe, Linkedin, Instagram } from "lucide-react";


const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-black text-white font-sans">
      {/* Layered radial gradients for glowing background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#7c3aed,_#1e40af_80%,_transparent_90%)] opacity-70 blur-3xl"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_#db2777,_#000_70%)] opacity-60 blur-2xl"></div>

      {/* Navbar */}
      <motion.nav
        className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-purple-900/20 border-b border-purple-700 shadow-sm"
        initial="hidden"
        animate="visible"
        variants={fadeIn()}
      >
        <h1 className="text-xl md:text-2xl font-extrabold text-purple-400 tracking-wide mb-2 md:mb-0">
          Jeyabalaganesh
        </h1>
        <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm md:text-base">
          {["About", "Skills", "Projects", "Resume", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-purple-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-28 pb-16 text-center relative z-10 px-6 sm:px-8 md:px-4 max-w-3xl mx-auto">
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-purple-500 shadow-xl object-cover mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 drop-shadow-lg min-h-[3rem]">
          <Typewriter
            options={{
              strings: ["Jeyabalaganesh 👋", "Full-Stack Developer", "AI Enthusiast"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <motion.p
          className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto drop-shadow-md mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          MCA Graduate | Full-Stack Developer | Passionate about AI, Web Apps, and Multilingual Experiences.
        </motion.p>
        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeIn(0.6)}
          initial="hidden"
          animate="visible"
        >
          <Button className="bg-purple-600 hover:bg-purple-700 transition text-white shadow-lg px-6 py-2 text-sm sm:text-base">
            Download Resume
          </Button>
          <Button
            variant="outline"
            className="border-purple-400 text-purple-300 hover:bg-purple-800/40 shadow-lg px-6 py-2 text-sm sm:text-base"
          >
            Contact Me
          </Button>
        </motion.div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 mb-16 border border-purple-700 shadow-xl"
      >
        <motion.h3
          className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4"
          variants={fadeIn(0.1)}
          initial="hidden"
          whileInView="visible"
        >
          About Me
        </motion.h3>
        <motion.p
          className="text-white/80 text-sm sm:text-base leading-relaxed"
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
        >
          I'm a passionate developer based in Coimbatore, India. I build scalable, secure and elegant full-stack applications using React, Node.js, Flask, and PHP. I love combining tech and creativity to solve real-world problems.
        </motion.p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <motion.h3
          className="text-2xl sm:text-3xl font-bold text-purple-300 mb-8"
          variants={fadeIn()}
          initial="hidden"
          whileInView="visible"
        >
          Skills
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            "React.js",
            "Node.js",
            "Flask",
            "PHP",
            "MongoDB",
            "Tailwind CSS",
            "i18next",
            "MySQL",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-purple-900/20 p-3 sm:p-4 rounded-xl border border-purple-700 text-center hover:bg-purple-900/40 transition-shadow duration-300 shadow-lg text-sm sm:text-base"
              variants={fadeIn(index * 0.1)}
              initial="hidden"
              whileInView="visible"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-purple-950/20 py-12 sm:py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-purple-300 mb-8"
            variants={fadeIn()}
            initial="hidden"
            whileInView="visible"
          >
            Projects
          </motion.h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Leada Digital Dynamics Dashboard",
                desc: "Subdomain-based multilingual analytics dashboard for clinics.",
              },
              {
                title: "Websence AI",
                desc: "Website evaluation using opinion mining + generative AI.",
              },
              {
                title: "Lone Wolf",
                desc: "E-commerce clothing site built with PHP, MySQL and Bootstrap.",
              },
            ].map((proj, i) => (
              <motion.div
                key={proj.title}
                className="rounded-2xl bg-white/10 backdrop-blur-md p-5 sm:p-6 border border-purple-700 hover:scale-[1.05] transition shadow-xl"
                variants={fadeIn(i * 0.2)}
                initial="hidden"
                whileInView="visible"
              >
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{proj.title}</h4>
                <p className="text-white/70 text-sm sm:text-base">{proj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Certifications */}
<section id="publications-certifications" className="bg-purple-950/20 py-12 sm:py-16 px-6 sm:px-8">
  <div className="max-w-4xl mx-auto">
    {/* Publications */}
    <motion.h3
      className="text-2xl sm:text-3xl font-bold text-purple-300 mb-8"
      variants={fadeIn()}
      initial="hidden"
      whileInView="visible"
    >
      Publications
    </motion.h3>
    <div className="space-y-6 mb-12">
      <motion.div
        className="rounded-2xl bg-white/10 backdrop-blur-md p-5 sm:p-6 border border-purple-700 hover:scale-[1.05] transition shadow-xl"
        variants={fadeIn(0.1)}
        initial="hidden"
        whileInView="visible"
      >
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
          Websence AI: Enhancing Website Evaluation with Opinion Mining and Generative AI
        </h4>
        <a
          href="https://ijsrem.com/download/websense-ai-enhancing-website-evaluation-with-opinion-mining-and-generative-ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline text-sm sm:text-base"
        >
          Read Journal
        </a>
      </motion.div>

      <motion.div
        className="rounded-2xl bg-white/10 backdrop-blur-md p-5 sm:p-6 border border-purple-700 hover:scale-[1.05] transition shadow-xl"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
      >
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
          Develop an Online Cloth Retail Webpage using HTML, CSS, JavaScript, PHP, and MySQL
        </h4>
        <a
          href="https://ijsrem.com/download/develop-an-online-cloth-retail-webpage-using-html-css-javascript-php-and-mysql/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline text-sm sm:text-base"
        >
          Read Journal
        </a>
      </motion.div>
    </div>

    {/* Certifications */}
    <motion.h3
      className="text-2xl sm:text-3xl font-bold text-purple-300 mb-8"
      variants={fadeIn()}
      initial="hidden"
      whileInView="visible"
    >
      Certifications
    </motion.h3>
    <div className="space-y-6">
      <motion.div
        className="rounded-2xl bg-white/10 backdrop-blur-md p-5 sm:p-6 border border-purple-700 hover:scale-[1.05] transition shadow-xl"
        variants={fadeIn(0.3)}
        initial="hidden"
        whileInView="visible"
      >
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
          NPTEL Course Certificate
        </h4>
        <a
          href="https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS60S34630022801292168"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline text-sm sm:text-base"
        >
          View Certificate
        </a>
      </motion.div>

      <motion.div
        className="rounded-2xl bg-white/10 backdrop-blur-md p-5 sm:p-6 border border-purple-700 hover:scale-[1.05] transition shadow-xl"
        variants={fadeIn(0.4)}
        initial="hidden"
        whileInView="visible"
      >
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
          IBM Cognitive Class Certificate
        </h4>
        <a
          href="https://courses.ibmcep.cognitiveclass.ai/certificates/c74e982be0084a94b91dce9b66812744"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline text-sm sm:text-base"
        >
          View Certificate
        </a>
      </motion.div>
    </div>
  </div>
</section>


      {/* Resume */}
      <section id="resume" className="px-6 sm:px-8 py-12 max-w-4xl mx-auto">
        <motion.h3
          className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4"
          variants={fadeIn()}
          initial="hidden"
          whileInView="visible"
        >
          Resume
        </motion.h3>
        <motion.p
          className="text-white/70 mb-6 text-sm sm:text-base"
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
        >
          Download my resume to explore my education, experience, and tech stack.
        </motion.p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg px-6 py-3 text-sm sm:text-base w-full sm:w-auto">
          Download Resume
        </Button>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-purple-950/10 px-6 sm:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-purple-300 mb-6"
            variants={fadeIn()}
            initial="hidden"
            whileInView="visible"
          >
            Contact
          </motion.h3>
       {/* Footer with Social Links */}
<motion.div
  className="space-y-3 text-white/80"
  variants={fadeIn(0.2)}
  initial="hidden"
  whileInView="visible"
>
  <p>
    <Mail className="inline mr-2 text-purple-400" /> jeyabalaganesh2003@gmail.com
  </p>
  <p>
    <Github className="inline mr-2 text-purple-400" />{" "}
    <a
      href="https://github.com/jeyabalaganesh-s"
      className="hover:text-purple-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      github.com/jeyabalaganesh-s
    </a>
  </p>
  <p>
    <Linkedin className="inline mr-2 text-purple-400" />{" "}
    <a
      href="https://www.linkedin.com/in/jeyabalaganesh-s-13607a244/?trk=people_directory&originalSubdomain=in"
      className="hover:text-purple-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn Profile
    </a>
  </p>
  <p>
    <Instagram className="inline mr-2 text-purple-400" />{" "}
    <a
      href="https://www.instagram.com/jeyabalaganesh.s/"
      className="hover:text-purple-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      @jeyabalaganesh.s
    </a>
  </p>
</motion.div>

 </div>
      </section>

{/* Footer */}
      <footer className="py-6 text-center text-purple-600 border-t border-purple-700 mt-12 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Jeyabalaganesh S. All rights reserved.
      </footer>


    </div>
  );
}
