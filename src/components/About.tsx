'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Server,
  Database,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Building,
  CheckCircle,
  FileCheck
} from 'lucide-react';

export default function About() {
  const { isRecruiterMode } = useTheme();

  const competencies = [
    {
      title: 'Information Systems & IT Support',
      desc: 'Operational management of digital services, hardware and software troubleshooting, user account administration, and service continuity.',
      icon: Server,
    },
    {
      title: 'Digital Banking & Merchant Services',
      desc: 'Hands-on exposure at Metbank supporting digital channels, POS merchant terminals, transaction monitoring, and Kubernetes-managed service restarts.',
      icon: Building,
    },
    {
      title: 'Data Analytics & Databases',
      desc: 'Formulating SQL queries, synthesizing operational datasets, data cleaning, and creating analytical dashboards to track transaction volumes.',
      icon: Database,
    },
    {
      title: 'AI & Automation Engineering',
      desc: 'Developing voice assistants (FRIDAY), offline-first educational systems (DzidzaAI), and automating repetitive operational workflows.',
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className={`w-2 h-2 rounded-full ${isRecruiterMode ? 'bg-blue-600' : 'bg-cyan-400'}`} />
          <span className={`text-xs font-mono uppercase tracking-widest ${
            isRecruiterMode ? 'text-blue-700 font-bold' : 'text-slate-400'
          }`}>
            01 // PROFILE & BACKGROUND
          </span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
          isRecruiterMode ? 'text-slate-900' : 'text-white'
        }`}>
          Professional Biography
        </h2>
        <p
          className={`mt-2 text-sm sm:text-base max-w-2xl ${
            isRecruiterMode ? 'text-slate-700' : 'text-slate-400'
          }`}
        >
          Bridging Information Systems management, IT support, and modern AI automation to build practical enterprise solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Narrative Card */}
        <div
          className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border backdrop-blur-xl space-y-6 ${
            isRecruiterMode
              ? 'bg-white/90 border-blue-200/70 text-slate-800 shadow-sm'
              : 'bg-[#060c19]/70 border-cyan-500/20 text-slate-300'
          }`}
        >
          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              I am an Information Systems graduate from{' '}
              <strong className={isRecruiterMode ? 'text-blue-700' : 'text-cyan-300'}>
                Midlands State University
              </strong>{' '}
              holding a Bachelor of Commerce Honours degree, with practical industry experience gained in{' '}
              <strong className={isRecruiterMode ? 'text-blue-700' : 'text-cyan-300'}>
                Digital Banking and Merchant Services at Metbank
              </strong>
              .
            </p>
            <p>
              My professional focus lies at the intersection of IT systems support, systems administration, data analytics, cybersecurity, and artificial intelligence. Having supported live banking channels and POS merchant terminals, I understand the critical balance between system uptime, data security, and seamless user experience.
            </p>
            <p>
              I actively build practical software systems—ranging from{' '}
              <strong className={isRecruiterMode ? 'text-slate-900' : 'text-white'}>
                FRIDAY
              </strong>{' '}
              (a voice-activated AI automation engine) to{' '}
              <strong className={isRecruiterMode ? 'text-slate-900' : 'text-white'}>
                DzidzaAI
              </strong>{' '}
              (an offline-first learning platform for low-connectivity primary schools) and campus incident reporting platforms.
            </p>
          </div>

          {/* Key Facts list */}
          <div
            className={`pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 ${
              isRecruiterMode ? 'border-blue-100' : 'border-slate-800'
            }`}
          >
            <div className="flex items-start gap-3">
              <FileCheck className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
              <div>
                <p className={`text-xs font-mono font-semibold uppercase ${isRecruiterMode ? 'text-slate-800' : 'text-slate-200'}`}>Academic Qualification</p>
                <p className={`text-xs ${isRecruiterMode ? 'text-slate-600' : 'text-slate-400'}`}>BCom Honours in Information Systems</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
              <div>
                <p className={`text-xs font-mono font-semibold uppercase ${isRecruiterMode ? 'text-slate-800' : 'text-slate-200'}`}>Enterprise Experience</p>
                <p className={`text-xs ${isRecruiterMode ? 'text-slate-600' : 'text-slate-400'}`}>Digital Banking & Merchant Services (Metbank)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Competencies 2x2 Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          {competencies.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className={`p-5 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                  isRecruiterMode
                    ? 'bg-white/90 border-blue-200/70 hover:border-blue-400 hover:shadow-[0_4px_20px_rgba(37,99,235,0.1)] shadow-xs'
                    : 'bg-slate-900/50 border-cyan-500/15 hover:border-cyan-400/40 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`p-2 rounded-lg ${
                      isRecruiterMode
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-cyan-950/70 border border-cyan-500/30 text-cyan-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-sm font-bold tracking-tight ${isRecruiterMode ? 'text-slate-900' : 'text-slate-100'}`}>
                    {c.title}
                  </h3>
                </div>
                <p className={`text-xs leading-relaxed ${isRecruiterMode ? 'text-slate-600' : 'text-slate-400'}`}>
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
