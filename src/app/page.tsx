'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MetricsBar from '@/components/MetricsBar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import AILab from '@/components/AILab';
import GithubDashboard from '@/components/GithubDashboard';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CVModal from '@/components/CVModal';

export default function Home() {
  const { isRecruiterMode } = useTheme();

  return (
    <main
      className={`relative min-h-screen cyber-grid overflow-hidden transition-colors duration-300 ${
        isRecruiterMode ? 'bg-[#f0f4f9] text-slate-900' : 'bg-[#030712] text-slate-100'
      }`}
    >
      {/* Zero-G Particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Telemetry Metrics Bar */}
      <MetricsBar />

      {/* About & Profile Narrative */}
      <About />

      {/* Track Record & Experience */}
      <Experience />

      {/* Featured Projects & Case Studies */}
      <Projects />

      {/* My AI Lab (FRIDAY Terminal Preview) */}
      <AILab />

      {/* Open Source & GitHub Telemetry */}
      <GithubDashboard />

      {/* Technical Skills & Competencies */}
      <Skills />

      {/* Direct Contact & Hiring */}
      <Contact />

      {/* System Footer */}
      <Footer />

      {/* Interactive Curriculum Vitae Modal */}
      <CVModal />
    </main>
  );
}
