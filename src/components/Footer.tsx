'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';
import { ArrowUp, Terminal, Shield, Globe, Heart } from 'lucide-react';

export default function Footer() {
  const { isRecruiterMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 px-4 sm:px-6 lg:px-8 transition-colors ${
        isRecruiterMode
          ? 'bg-[#e4ebf5]/80 border-blue-200/80 text-slate-700'
          : 'bg-[#02050e] border-cyan-500/20 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Telemetry */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className={`font-mono text-xs font-bold uppercase tracking-wider ${
              isRecruiterMode ? 'text-slate-900' : 'text-slate-200'
            }`}>
              TSAKANE.OS // SYS_STATUS: OPERATIONAL
            </span>
          </div>
          <p className={`text-[11px] font-mono ${isRecruiterMode ? 'text-slate-600' : 'text-slate-500'}`}>
            Designed & Engineered for Information Systems, AI & Data Operations.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-5 text-xs font-mono">
          <a
            href="https://github.com/Signas-58"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tsakane-sithole-b39276197"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://t.me/Mxtaker"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
          >
            <TelegramIcon className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>
          <span className="text-slate-400">|</span>
          <span className={`text-[11px] font-mono ${isRecruiterMode ? 'text-blue-600 font-semibold' : 'text-cyan-400'}`}>
            tsakane.co.zw
          </span>
        </div>

        {/* Right Scroll-to-top */}
        <button
          onClick={scrollToTop}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono border transition-all ${
            isRecruiterMode
              ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 shadow-xs'
              : 'bg-slate-900 border-cyan-500/30 text-cyan-300 hover:border-cyan-400'
          }`}
        >
          <span>Return to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
        <p>© 2026 Tsakane Sithole. All Rights Reserved.</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
}
