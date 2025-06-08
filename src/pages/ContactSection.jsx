import React from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black px-6 py-12">
      <h3 className="text-3xl font-bold text-white-400 mb-6">Contact</h3>
      <div className="space-y-3 text-white/80">
        <p><Mail className="inline mr-2 text-orange-400" /> jeyabalaganesh2003@gmail.com</p>
        <p><Github className="inline mr-2 text-orange-400" /> <a href="https://github.com/jeyabalaganesh-s" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p><Linkedin className="inline mr-2 text-orange-400" /> <a href="https://www.linkedin.com/in/jeyabalaganesh-s/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><Instagram className="inline mr-2 text-orange-400" /> <a href="https://www.instagram.com/jeyabalaganesh.s/" target="_blank" rel="noopener noreferrer">@jeyabalaganesh.s</a></p>
      </div>
    </section>
  );
}
