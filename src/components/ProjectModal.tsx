'use client';

import React from 'react';
import { Project } from '@/types';
import { useTheme } from '@/context/ThemeContext';
import { GithubIcon } from './Icons';
import {
  X,
  ExternalLink,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  FileCode2
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { isRecruiterMode } = useTheme();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full max-w-3xl my-8 rounded-2xl border p-6 sm:p-8 overflow-hidden z-10 transition-all duration-300 max-h-[90vh] overflow-y-auto ${
          isRecruiterMode
            ? 'bg-white border-slate-300 text-slate-800 shadow-2xl'
            : 'bg-[#060c18] border-cyan-500/40 text-slate-200 shadow-[0_0_50px_rgba(0,243,255,0.25)]'
        }`}
      >
        {/* Header Bar */}
        <div className={`flex items-start justify-between gap-4 pb-4 border-b ${
          isRecruiterMode ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                isRecruiterMode
                  ? 'border-blue-300 bg-blue-50 text-blue-700 font-semibold'
                  : 'border-cyan-500/30 text-cyan-400'
              }`}>
                {project.codeId}
              </span>
              <span className={`text-[10px] font-mono ${
                isRecruiterMode ? 'text-slate-600 font-medium' : 'text-slate-400'
              }`}>
                // {project.status}
              </span>
            </div>
            <h3 className={`text-2xl font-bold tracking-tight ${
              isRecruiterMode ? 'text-slate-900' : 'text-white'
            }`}>
              {project.title}
            </h3>
            <p className={`text-xs sm:text-sm font-mono mt-0.5 ${
              isRecruiterMode ? 'text-blue-700 font-semibold' : 'text-cyan-400'
            }`}>
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-lg border transition-colors ${
              isRecruiterMode
                ? 'border-slate-300 hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                : 'border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Case Study Content */}
        <div className="mt-6 space-y-6 text-xs sm:text-sm">
          {/* Overview */}
          <div>
            <h4 className={`font-mono text-xs uppercase tracking-wider mb-2 flex items-center gap-2 ${
              isRecruiterMode ? 'text-blue-700 font-bold' : 'text-slate-400'
            }`}>
              <FileCode2 className={`w-4 h-4 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
              <span>Project Executive Summary</span>
            </h4>
            <p className={`leading-relaxed ${
              isRecruiterMode ? 'text-slate-700 text-sm' : 'text-slate-300'
            }`}>
              {project.description}
            </p>
          </div>

          {/* The Problem */}
          <div className={`p-4 rounded-xl border ${
            isRecruiterMode
              ? 'bg-amber-50/70 border-amber-200'
              : 'bg-slate-900/40 border-slate-800'
          }`}>
            <h4 className={`font-mono text-xs uppercase tracking-wider mb-1.5 ${
              isRecruiterMode ? 'text-amber-800 font-bold' : 'text-amber-400'
            }`}>
              The Real-World Problem
            </h4>
            <p className={`leading-relaxed ${
              isRecruiterMode ? 'text-slate-800' : 'text-slate-300'
            }`}>
              {project.caseStudy.problem}
            </p>
          </div>

          {/* Architecture & Flow */}
          <div className={`p-4 rounded-xl border ${
            isRecruiterMode
              ? 'bg-blue-50/70 border-blue-200'
              : 'bg-slate-900/40 border-cyan-500/20'
          }`}>
            <h4 className={`font-mono text-xs uppercase tracking-wider mb-1.5 flex items-center gap-2 ${
              isRecruiterMode ? 'text-blue-800 font-bold' : 'text-cyan-400'
            }`}>
              <Layers className="w-4 h-4" />
              <span>System Architecture & Pipeline</span>
            </h4>
            <p className={`leading-relaxed font-mono text-xs ${
              isRecruiterMode ? 'text-slate-800' : 'text-slate-300'
            }`}>
              {project.caseStudy.architecture}
            </p>
          </div>

          {/* Key Technical Trade-Offs */}
          <div className={`p-4 rounded-xl border ${
            isRecruiterMode
              ? 'bg-slate-50 border-slate-200'
              : 'bg-slate-900/40 border-slate-800'
          }`}>
            <h4 className={`font-mono text-xs uppercase tracking-wider mb-1.5 ${
              isRecruiterMode ? 'text-sky-800 font-bold' : 'text-sky-400'
            }`}>
              Engineering Trade-Offs & Decisions
            </h4>
            <p className={`leading-relaxed ${
              isRecruiterMode ? 'text-slate-800' : 'text-slate-300'
            }`}>
              {project.caseStudy.tradeOffs}
            </p>
          </div>

          {/* Outcomes & Current Status */}
          <div className={`p-4 rounded-xl border ${
            isRecruiterMode
              ? 'bg-emerald-50/70 border-emerald-200'
              : 'bg-slate-900/40 border-emerald-500/20'
          }`}>
            <h4 className={`font-mono text-xs uppercase tracking-wider mb-1.5 flex items-center gap-2 ${
              isRecruiterMode ? 'text-emerald-800 font-bold' : 'text-emerald-400'
            }`}>
              <CheckCircle className="w-4 h-4" />
              <span>Impact & Verification Milestone</span>
            </h4>
            <p className={`leading-relaxed ${
              isRecruiterMode ? 'text-slate-800' : 'text-slate-300'
            }`}>
              {project.caseStudy.outcomes}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className={`font-mono text-xs uppercase tracking-wider mb-2 ${
              isRecruiterMode ? 'text-slate-800 font-bold' : 'text-slate-400'
            }`}>
              Integrated Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 rounded text-xs font-mono border ${
                    isRecruiterMode
                      ? 'bg-blue-50 border-blue-200 text-blue-700 font-medium'
                      : 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={`mt-8 pt-4 border-t flex items-center justify-between flex-wrap gap-3 ${
          isRecruiterMode ? 'border-slate-200' : 'border-slate-800'
        }`}>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium border transition-colors ${
                  isRecruiterMode
                    ? 'border-blue-300 text-blue-700 hover:bg-blue-50'
                    : 'border-cyan-500/40 hover:border-cyan-400 text-cyan-300'
                }`}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className={`px-5 py-2 rounded-lg text-xs font-mono transition-colors ${
              isRecruiterMode
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-medium'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
            }`}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
