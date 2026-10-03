import React, { useState } from 'react';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ResumeSection from "./pages/ResumeSection";
import ContactSection from "./pages/ContactSection";
import CertificatesSection from "./pages/CertificatesSection";
import PublicationsSection from "./pages/PublicationsSection";
import Education from "./pages/Education";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Footer from './pages/Footer';
import LoadingScreen from "./pages/LoadingScreen";
import CodingProfilesSection from "./pages/CodingProfilesSection";

import "./styles/global.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ResumeSection />
        <Education />
        <CertificatesSection />
        <PublicationsSection />
        <CodingProfilesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
