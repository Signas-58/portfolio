'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Code,
  Database,
  Server,
  BarChart2,
  Cpu,
  Building2,
  Compass,
  CheckCircle2
} from 'lucide-react';

export default function Skills() {
  const { isRecruiterMode } = useTheme();

  const skillGroups = [
    {
      title: 'Programming & Scripting',
      code: 'DEV_STACK',
      icon: Code,
      skills: [
        { name: 'Python', level: 'Proficient' },
        { name: 'SQL', level: 'Proficient' },
        { name: 'JavaScript & TypeScript', level: 'Practical Experience' },
        { name: 'HTML5 & Modern CSS', level: 'Proficient' },
        { name: 'Bash / Shell Scripting', level: 'Working Knowledge' },
      ],
    },
    {
      title: 'Databases & Storage',
      code: 'DATA_LAYER',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 'Proficient' },
        { name: 'MySQL', level: 'Proficient' },
        { name: 'SQLite (Offline-First)', level: 'Practical Experience' },
        { name: 'MongoDB', level: 'Working Knowledge' },
        { name: 'Relational Schema Design', level: 'Proficient' },
      ],
    },
    {
      title: 'Infrastructure & Systems',
      code: 'INFRA_SEC',
      icon: Server,
      skills: [
        { name: 'Linux System Administration', level: 'Practical Experience' },
        { name: 'Kubernetes (Monitoring & Restarts)', level: 'Practical Experience' },
        { name: 'Docker Containerization', level: 'Working Knowledge' },
        { name: 'Network Connectivity Triage', level: 'Proficient' },
        { name: 'Git & GitHub Version Control', level: 'Proficient' },
      ],
    },
    {
      title: 'Data Analytics & Reporting',
      code: 'ANALYTICS',
      icon: BarChart2,
      skills: [
        { name: 'Operational Data Cleaning', level: 'Proficient' },
        { name: 'SQL Window & Aggregation', level: 'Proficient' },
        { name: 'Python (Pandas, Matplotlib)', level: 'Practical Experience' },
        { name: 'Dashboarding & KPIs', level: 'Practical Experience' },
        { name: 'Business Intelligence Analysis', level: 'Proficient' },
      ],
    },
    {
      title: 'AI & Automation Engineering',
      code: 'AI_AGENT',
      icon: Cpu,
      skills: [
        { name: 'LLM API Integration', level: 'Practical Experience' },
        { name: 'Prompt Design & Guardrails', level: 'Proficient' },
        { name: 'Speech Recognition & Audio VAD', level: 'Practical Experience' },
        { name: 'Process Workflow Automation', level: 'Proficient' },
        { name: 'AI Voice Synthesis', level: 'Practical Experience' },
      ],
    },
    {
      title: 'Enterprise & Digital Banking',
      code: 'FIN_OPS',
      icon: Building2,
      skills: [
        { name: 'Digital Banking Channels', level: 'Practical Experience' },
        { name: 'POS Merchant Terminal Operations', level: 'Practical Experience' },
        { name: 'Incident Logging & Audit Trails', level: 'Proficient' },
        { name: 'System Availability & Uptime', level: 'Proficient' },
        { name: 'ITIL Support Fundamentals', level: 'Working Knowledge' },
      ],
    },
  ];

  const exploringSkills = [
    'Retrieval-Augmented Generation (RAG)',
    'Cloud Security & Compliance Frameworks',
    'Advanced Kubernetes Operator Patterns',
    'FinTech Payment Gateway APIs',
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            06 // TECHNICAL PROFICIENCY
          </span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
          isRecruiterMode ? 'text-slate-900' : 'text-white'
        }`}>
          Skills & Competencies
        </h2>
        <p
          className={`mt-2 text-sm sm:text-base max-w-2xl ${
            isRecruiterMode ? 'text-slate-600' : 'text-slate-400'
          }`}
        >
          Practical technical skills grounded in Information Systems academic training, enterprise digital banking operations, and applied projects.
        </p>
      </div>

      {/* 6 Skill Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.title}
              className={`p-6 rounded-2xl border backdrop-blur-xl space-y-4 transition-all duration-300 ${
                isRecruiterMode
                  ? 'bg-white/90 border-blue-200/70 hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] shadow-xs text-slate-800'
                  : 'bg-[#060c19]/80 border-cyan-500/20 hover:border-cyan-400/40 text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isRecruiterMode
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-cyan-950/70 border border-cyan-500/30 text-cyan-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-sm font-bold tracking-tight ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                    {group.title}
                  </h3>
                </div>
                <span className={`text-[10px] font-mono ${isRecruiterMode ? 'text-blue-700 font-bold' : 'text-cyan-400'}`}>
                  {group.code}
                </span>
              </div>

              <div className="space-y-2.5 pt-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className={`font-medium ${isRecruiterMode ? 'text-slate-700 font-semibold' : 'text-slate-300'}`}>
                      {skill.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        skill.level === 'Proficient'
                          ? isRecruiterMode
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 font-medium'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : skill.level === 'Practical Experience'
                          ? isRecruiterMode
                            ? 'bg-blue-50 text-blue-700 border border-blue-300 font-medium'
                            : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : isRecruiterMode
                          ? 'bg-slate-100 text-slate-600 border border-slate-300'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Currently Exploring Radar */}
      <div
        className={`mt-10 p-6 rounded-2xl border backdrop-blur-xl ${
          isRecruiterMode
            ? 'bg-white/90 border-blue-200/70 shadow-sm'
            : 'bg-gradient-to-r from-slate-900/60 to-cyan-950/20 border-cyan-500/20'
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <Compass className={`w-4 h-4 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
          <h4 className={`text-xs font-mono uppercase tracking-wider ${isRecruiterMode ? 'text-blue-700 font-bold' : 'text-cyan-400'}`}>
            Active Research & Continuous Learning Radar:
          </h4>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {exploringSkills.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${
                isRecruiterMode
                  ? 'bg-blue-50/80 border-blue-200 text-blue-900 font-medium'
                  : 'bg-slate-900/80 border-cyan-500/30 text-slate-300'
              }`}
            >
              ⚡ {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
