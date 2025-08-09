import React from 'react';
import Navigation from './components/Navigation';
import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <section id="home">
        <Hero3D />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="education">
        <EducationSection />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <footer className="bg-black text-white py-8 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-400">
            © 2025 Shaik Azimunnisa. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with React, Three.js, and Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;