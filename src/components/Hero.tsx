'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import {
  Shield,
  Cpu,
  Database,
  Terminal,
  Server,
  Cloud,
  ArrowRight,
  Download,
  CheckCircle2,
  Code2
} from 'lucide-react';

export default function Hero() {
  const { isRecruiterMode, setIsCVModalOpen } = useTheme();

  const floatingBadges = [
    { name: 'Python', icon: Code2, delay: 0, duration: 4.2 },
    { name: 'Next.js & React', icon: Terminal, delay: 0.8, duration: 4.8 },
    { name: 'SQL & Data', icon: Database, delay: 1.4, duration: 5.2 },
    { name: 'Cybersecurity', icon: Shield, delay: 0.4, duration: 4.5 },
    { name: 'Linux & Cloud', icon: Server, delay: 1.8, duration: 5.0 },
    { name: 'AI & LLMs', icon: Cpu, delay: 1.0, duration: 4.6 },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow in both modes */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className={`w-[600px] h-[600px] rounded-full blur-[140px] transition-all duration-500 ${
          isRecruiterMode ? 'bg-blue-400/20 opacity-60' : 'bg-cyan-500/10 opacity-60'
        }`} />
        <div className={`w-[450px] h-[450px] rounded-full blur-[160px] -translate-y-20 transition-all duration-500 ${
          isRecruiterMode ? 'bg-sky-400/20 opacity-50' : 'bg-blue-600/10 opacity-40'
        }`} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono mb-8 border backdrop-blur-md"
          style={{
            borderColor: isRecruiterMode ? 'rgba(37, 99, 235, 0.3)' : 'rgba(0, 243, 255, 0.35)',
            background: isRecruiterMode ? 'rgba(239, 246, 255, 0.9)' : 'rgba(0, 243, 255, 0.05)',
            color: isRecruiterMode ? '#1d4ed8' : '#00f3ff',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wide uppercase font-semibold">
            {isRecruiterMode
              ? 'Candidate Profile: Open to ICT & Systems Roles'
              : 'SYS_INITIALIZED // TSAKANE OS v2.4'}
          </span>
        </motion.div>

        {/* Main Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4 mb-6"
        >
          <p className={`text-xs sm:text-sm font-mono tracking-widest uppercase ${
            isRecruiterMode ? 'text-blue-700 font-semibold' : 'text-slate-400'
          }`}>
            Information Systems // AI Engineering // Data Operations
          </p>
          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight ${
            isRecruiterMode ? 'text-slate-900' : 'text-white'
          }`}>
            <span>TSAKANE </span>
            <span
              className={
                isRecruiterMode
                  ? 'text-blue-600'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500'
              }
            >
              SITHOLE
            </span>
          </h1>
          <p
            className={`max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-normal leading-relaxed ${
              isRecruiterMode ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            BCom Honours in Information Systems graduate from{' '}
            <span className={isRecruiterMode ? 'text-slate-900 font-medium' : 'text-cyan-300 font-medium'}>
              Midlands State University
            </span>{' '}
            with real-world experience supporting digital channels and merchant services at{' '}
            <span className={isRecruiterMode ? 'text-slate-900 font-medium' : 'text-cyan-300 font-medium'}>
              Metbank
            </span>
            . Building intelligent automation, data analytics, and resilient IT infrastructure.
          </p>
        </motion.div>

        {/* Floating Zero-Gravity Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 my-8 max-w-4xl mx-auto"
        >
          {floatingBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.name}
                animate={{
                  y: isRecruiterMode ? [-3, 3, -3] : [-5, 6, -5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: badge.duration,
                  delay: badge.delay,
                  ease: 'easeInOut',
                }}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono border backdrop-blur-md transition-all duration-300 ${
                  isRecruiterMode
                    ? 'bg-white/90 border-blue-200/80 text-slate-800 shadow-sm hover:border-blue-400 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)]'
                    : 'bg-slate-900/60 border-cyan-500/20 text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,243,255,0.25)]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
                <span>{badge.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className={`w-full sm:w-auto px-7 py-3 rounded-xl text-sm font-mono font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
              isRecruiterMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                : 'btn-cyber-primary'
            }`}
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/Tsakane_Sithole_CV.pdf"
            download="Stanford_Tsakane_Sithole_CV.pdf"
            className={`w-full sm:w-auto px-7 py-3 rounded-xl text-sm font-mono font-medium flex items-center justify-center gap-2 border transition-all duration-300 ${
              isRecruiterMode
                ? 'bg-white hover:bg-blue-50 text-slate-800 border-blue-200 shadow-sm'
                : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 border-slate-700 hover:border-cyan-500/50'
            }`}
          >
            <Download className={`w-4 h-4 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
            <span>Download CV (PDF)</span>
          </a>

          <button
            onClick={() => setIsCVModalOpen(true)}
            className={`w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-mono transition-colors ${
              isRecruiterMode
                ? 'text-blue-600 hover:text-blue-700'
                : 'text-cyan-400 hover:text-cyan-300'
            }`}
          >
            <span>Preview Online →</span>
          </button>

          <a
            href="#contact"
            className={`w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-mono transition-colors ${
              isRecruiterMode
                ? 'text-slate-600 hover:text-blue-600'
                : 'text-slate-400 hover:text-cyan-400'
            }`}
          >
            <span>Inquiry</span>
          </a>
        </motion.div>

        {/* Verification Checkpoint Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`mt-12 pt-8 border-t flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono ${
            isRecruiterMode ? 'border-blue-200/80 text-slate-600' : 'border-slate-800 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className={`w-4 h-4 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
            <span>BCom Honours (MSU)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className={`w-4 h-4 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
            <span>Metbank Digital Operations</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className={`w-4 h-4 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
            <span>AI Voice & Offline Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className={`w-4 h-4 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
            <span>Zimbabwean Domain Verified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
