'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Terminal,
  Briefcase,
  FileText,
  Menu,
  X,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Navbar() {
  const { isRecruiterMode, toggleRecruiterMode, setIsCVModalOpen } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI Lab', href: '#ai-lab' },
    { name: 'GitHub', href: '#github' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isRecruiterMode
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
            : 'bg-[#030712]/85 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Status Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 ${
                isRecruiterMode
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-cyan-500/10 border border-cyan-400 text-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.5)]'
              }`}
            >
              TS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm tracking-widest font-semibold uppercase">
                  TSAKANE.OS
                </span>
                <span
                  className={`w-2 h-2 rounded-full animate-ping ${
                    isRecruiterMode ? 'bg-blue-600' : 'bg-cyan-400'
                  }`}
                />
              </div>
              <p
                className={`text-[10px] font-mono tracking-tight ${
                  isRecruiterMode ? 'text-slate-500' : 'text-cyan-400/70'
                }`}
              >
                {isRecruiterMode ? 'RECRUITER REVIEW MODE' : 'SYS_STATUS: ONLINE'}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono uppercase tracking-wider transition-colors duration-200 ${
                  isRecruiterMode
                    ? 'text-slate-600 hover:text-blue-600 font-medium'
                    : 'text-slate-400 hover:text-cyan-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions: Recruiter Toggle & CV Trigger */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Recruiter Mode Switch */}
            <button
              onClick={toggleRecruiterMode}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border ${
                isRecruiterMode
                  ? 'bg-blue-50 border-blue-300 text-blue-700 shadow-sm hover:bg-blue-100'
                  : 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/30'
              }`}
              title="Toggle Recruiter Mode for a clean, high-contrast resume layout"
            >
              {isRecruiterMode ? (
                <>
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  <span>Recruiter Mode: ON</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Recruiter View</span>
                </>
              )}
            </button>

            {/* CV Modal Trigger */}
            <button
              onClick={() => setIsCVModalOpen(true)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${
                isRecruiterMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                  : 'btn-cyber-primary'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View CV</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleRecruiterMode}
              className={`p-2 rounded-lg border text-xs ${
                isRecruiterMode
                  ? 'border-blue-300 bg-blue-50 text-blue-700'
                  : 'border-cyan-500/40 bg-cyan-950/40 text-cyan-400'
              }`}
            >
              {isRecruiterMode ? 'Recruiter' : 'Cyber'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isRecruiterMode
                  ? 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  : 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/30'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden border-b px-4 py-4 space-y-3 ${
            isRecruiterMode
              ? 'bg-white border-slate-200'
              : 'bg-[#060c18] border-cyan-500/30'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-md text-xs font-mono uppercase tracking-wider ${
                  isRecruiterMode
                    ? 'text-slate-700 hover:bg-slate-100'
                    : 'text-slate-300 hover:bg-cyan-950/40 hover:text-cyan-400'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-cyan-500/20 flex gap-2">
              <button
                onClick={() => {
                  setIsCVModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-lg text-xs font-mono font-medium flex items-center justify-center gap-2 bg-blue-600 text-white"
              >
                <FileText className="w-4 h-4" />
                View & Download CV
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
