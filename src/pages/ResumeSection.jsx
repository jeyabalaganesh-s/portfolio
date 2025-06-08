import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export default function ResumeSection() {
  return (
    <section id="resume" className="px-6 sm:px-8 py-12 max-w-4xl mx-auto">
      <motion.h3 className="text-3xl font-bold text-white-400 mb-4">
        Resume
      </motion.h3>
      <motion.p className="text-white/70 mb-6">
        Download my resume to explore my education, experience, and tech stack.
      </motion.p>
      <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 w-full sm:w-auto">
        Download Resume
      </Button>
    </section>
  );
}
