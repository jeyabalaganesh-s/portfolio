import React from "react";

const ResumeSection = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white-400 mb-4">Resume</h2>
        <p className="mb-6 text-white/70">
          Download a copy of my latest resume in PDF format.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
