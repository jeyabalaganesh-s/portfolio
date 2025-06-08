import React from "react";

export default function CertificatesSection() {
  const certificates = [
    {
      name: "NPTEL Course Certificate",
      url: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS60S34630022801292168"
    },
    {
      name: "IBM Cognitive Class Certificate",
      url: "https://courses.ibmcep.cognitiveclass.ai/certificates/c74e982be0084a94b91dce9b66812744"
    }
  ];

  return (
    <section id="certificates" className="bg-black px-6 py-12">
      <h3 className="text-3xl font-bold text-white-400 mb-6">Certificate Courses</h3>
      <div className="space-y-4">
        {certificates.map((cert, idx) => (
          <div key={idx} className="bg-white/10 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-orange-800 hover:text-orange-900">View Certificate</a>
          </div>
        ))}
      </div>
    </section>
  );
}
