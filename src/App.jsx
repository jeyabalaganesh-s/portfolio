import React from 'react';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ResumeSection from "./pages/ResumeSection";
import ContactSection from "./pages/ContactSection";
import CertificatesSection from "./pages/CertificatesSection";
import PublicationsSection from "./pages/PublicationsSection";
import Education from "./pages/Education";
import About from "./pages/About";
import Footer from './pages/Footer';

import "./styles/global.css";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
         { <Navbar /> }
      {<Hero /> }
      {<About /> }      
      {<Services /> }
      {<Portfolio /> }
      <ResumeSection />
      {<Education /> }
      {<CertificatesSection /> }
      {<PublicationsSection />}
      { <ContactSection /> }
      {<Footer />}
      </main>
    </div>
  );
}
