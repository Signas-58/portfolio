'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GraduationCap, Building2, Layers, Compass } from 'lucide-react';

export default function MetricsBar() {
  const { isRecruiterMode } = useTheme();

  const metrics = [
    {
      icon: GraduationCap,
      label: 'Academic Qualification',
      value: 'BCom Honours',
      sub: 'Information Systems, MSU (2021–2025)',
    },
    {
      icon: Building2,
      label: 'Industry Experience',
      value: 'Metbank Limited',
      sub: 'Digital Banking (Feb 2024–Jan 2025)',
    },
    {
      icon: Layers,
      label: 'Engineering Focus',
      value: '5+ Systems & Labs',
      sub: 'AI, Offline-First & Security',
    },
    {
      icon: Compass,
      label: 'Career Readiness',
      value: 'ICT & Systems Roles',
      sub: 'Graduate Trainee / Analyst',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-16 relative z-20">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          isRecruiterMode
            ? 'bg-white border-slate-200 shadow-md'
            : 'bg-[#060c19]/80 border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        }`}
      >
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-4 rounded-xl flex items-center gap-4 transition-all duration-200 ${
                isRecruiterMode
                  ? 'hover:bg-slate-50'
                  : 'hover:bg-cyan-950/20 hover:border-cyan-500/30'
              }`}
            >
              <div
                className={`p-3 rounded-lg flex-shrink-0 ${
                  isRecruiterMode
                    ? 'bg-blue-50 text-blue-600'
                    : 'bg-cyan-950/60 border border-cyan-500/30 text-cyan-400'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {item.label}
                </p>
                <h4 className="text-base sm:text-lg font-bold tracking-tight">
                  {item.value}
                </h4>
                <p
                  className={`text-xs ${
                    isRecruiterMode ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {item.sub}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
