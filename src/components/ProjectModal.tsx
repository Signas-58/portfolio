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
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-cyan-500/30 text-cyan-400">
                {project.codeId}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                // {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-400 font-mono mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-cyan-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
          </button>
        </div>

        {/* Case Study Content */}
        <div className="mt-6 space-y-6 text-xs sm:text-sm">
          {/* Overview */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-cyan-400" />
              <span>Project Executive Summary</span>
            </h4>
            <p className="leading-relaxed text-slate-300 dark:text-slate-300">
              {project.description}
            </p>
          </div>

          {/* The Problem */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <h4 className="font-mono text-xs uppercase tracking-wider text-amber-400 mb-1.5">
              The Real-World Problem
            </h4>
            <p className="leading-relaxed text-slate-300">
              {project.caseStudy.problem}
            </p>
          </div>

          {/* Architecture & Flow */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-cyan-500/20">
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-1.5 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>System Architecture & Pipeline</span>
            </h4>
            <p className="leading-relaxed text-slate-300 font-mono text-xs">
              {project.caseStudy.architecture}
            </p>
          </div>

          {/* Key Technical Trade-Offs */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <h4 className="font-mono text-xs uppercase tracking-wider text-sky-400 mb-1.5">
              Engineering Trade-Offs & Decisions
            </h4>
            <p className="leading-relaxed text-slate-300">
              {project.caseStudy.tradeOffs}
            </p>
          </div>

          {/* Outcomes & Current Status */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-emerald-500/20">
            <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Impact & Verification Milestone</span>
            </h4>
            <p className="leading-relaxed text-slate-300">
              {project.caseStudy.outcomes}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
              Integrated Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
