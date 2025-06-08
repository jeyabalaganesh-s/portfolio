import React from 'react';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ResumeSection from "./pages/ResumeSection";
import ContactSection from "./pages/ContactSection";
import CertificatesSection from "./pages/CertificatesSection";
import PublicationsSection from "./pages/PublicationsSection";
import About from "./pages/About";

import "./styles/global.css";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
         { <Navbar /> }
      {<Hero /> }
      {<Services /> }
      {<About /> }
      {<Portfolio /> }
      <ResumeSection />
      {<CertificatesSection /> }
      {<PublicationsSection />}
      { <ContactSection /> }
      </main>
    </div>
  );
}
