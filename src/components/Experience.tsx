'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Building2,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Server,
  Layers,
  Award
} from 'lucide-react';

export default function Experience() {
  const { isRecruiterMode } = useTheme();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            02 // TRACK RECORD
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Experience & Education
        </h2>
        <p
          className={`mt-2 text-sm sm:text-base max-w-2xl ${
            isRecruiterMode ? 'text-slate-600' : 'text-slate-400'
          }`}
        >
          Industry experience in digital financial channels and formal academic background in Information Systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-xl space-y-6 ${
            isRecruiterMode
              ? 'bg-white border-slate-200 text-slate-800 shadow-sm'
              : 'bg-[#060c19]/70 border-cyan-500/20 text-slate-300'
          }`}
        >
          <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-lg ${
                  isRecruiterMode
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-400'
                }`}
              >
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  Digital Banking & Merchant Services
                </h3>
                <p className="text-xs font-mono text-cyan-400">Metbank</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>Industry Experience</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Provided front-line technical and operational support across core digital banking platforms and POS merchant infrastructure, ensuring high availability and seamless customer transactions.
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Responsibilities & Contributions:
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
                <span>
                  Supported digital banking operations, mobile channels, internet banking portals, and electronic transaction processing.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
                <span>
                  Assisted with monitoring and restarting Kubernetes-managed services to maintain service availability and resolve connectivity faults.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
                <span>
                  Troubleshot Point of Sale (POS) merchant terminals, network communication issues, and transactional reconciliation anomalies.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
                <span>
                  Maintained strict adherence to banking operational security, audit logs, and data integrity procedures.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
            {['Kubernetes Monitoring', 'POS Operations', 'Digital Channels', 'System Availability', 'Network Troubleshooting'].map((t) => (
              <span
                key={t}
                className={`px-2.5 py-1 rounded-md border ${
                  isRecruiterMode
                    ? 'bg-slate-100 border-slate-200 text-slate-700'
                    : 'bg-slate-900 border-cyan-500/20 text-cyan-300'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-xl space-y-6 ${
            isRecruiterMode
              ? 'bg-white border-slate-200 text-slate-800 shadow-sm'
              : 'bg-[#060c19]/70 border-cyan-500/20 text-slate-300'
          }`}
        >
          <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-lg ${
                  isRecruiterMode
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-400'
                }`}
              >
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  BCom Honours in Information Systems
                </h3>
                <p className="text-xs font-mono text-cyan-400">Midlands State University (MSU)</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <Award className="w-3.5 h-3.5" />
              <span>Honours Degree</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Four-year comprehensive degree covering enterprise information systems, database architectures, software engineering methodologies, information security, and IT project management.
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Academic Coursework & Focus Areas:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                'Database Management Systems',
                'Systems Analysis & Design',
                'Information Security & Risk',
                'Business Intelligence & Analytics',
                'Computer Networks & Protocols',
                'Software Project Management',
                'Enterprise Architecture',
                'Applied Research & Systems Dev'
              ].map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${isRecruiterMode ? 'bg-blue-600' : 'bg-cyan-400'}`} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Target Career Pathways:
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Equipped to excel in ICT Graduate Trainee schemes, Systems Support Engineering, Data & BI Analysis, Junior DevOps/Cloud Administration, and Cybersecurity Operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
