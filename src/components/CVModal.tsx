'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GithubIcon } from './Icons';
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  FileCheck2
} from 'lucide-react';

export default function CVModal() {
  const { isCVModalOpen, setIsCVModalOpen } = useTheme();

  if (!isCVModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsCVModalOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* CV Document Container */}
      <div className="relative w-full max-w-4xl my-6 bg-white text-slate-900 rounded-2xl shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden border border-slate-300">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-100 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-blue-600" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700">
              Curriculum Vitae Preview // Tsakane Sithole
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => setIsCVModalOpen(false)}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans space-y-8 text-sm text-slate-800 leading-normal">
          {/* Header */}
          <div className="border-b border-slate-300 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                Tsakane Sithole
              </h1>
              <p className="text-base font-semibold text-blue-700 mt-1">
                Information Systems Graduate | IT Systems & Digital Operations
              </p>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                BCom Honours in Information Systems graduate with proven industry experience in Digital Banking & Merchant Services at Metbank. Focused on IT support, SQL data analytics, and resilient systems.
              </p>
            </div>

            <div className="text-xs font-mono space-y-1 text-slate-600 text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Harare, Zimbabwe</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>tsakane.1578@gmail.com</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>github.com/Signas-58</span>
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Education & Qualifications</span>
            </h2>

            <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
              <div>
                <h3 className="font-bold text-slate-900">
                  Bachelor of Commerce Honours in Information Systems
                </h3>
                <p className="text-xs text-blue-700 font-medium">
                  Midlands State University (MSU)
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500">Completed Honours Degree</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Core Coursework:</strong> Database Management Systems, Systems Analysis & Design, Information Security & Risk Management, Business Intelligence, Computer Networks, Software Project Management.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Digital Banking & Merchant Services Officer
                  </h3>
                  <p className="text-xs text-blue-700 font-medium">Metbank</p>
                </div>
                <span className="text-xs font-mono text-slate-500">Harare, Zimbabwe</span>
              </div>

              <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-700">
                <li>
                  Maintained and supported digital banking channels, mobile banking portals, and electronic transaction settlement infrastructure.
                </li>
                <li>
                  Provided frontline operational support and technical troubleshooting for Point of Sale (POS) merchant terminals.
                </li>
                <li>
                  Assisted in monitoring Kubernetes-managed services and executed controlled service restarts to recover degraded digital payment channels.
                </li>
                <li>
                  Diagnosed network connectivity, gateway timeout exceptions, and reconciled daily operational transaction logs.
                </li>
                <li>
                  Maintained strict alignment with banking security protocols, audit trails, and risk management guidelines.
                </li>
              </ul>
            </div>
          </div>

          {/* Featured Technical Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>Key Technical Projects</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900">FRIDAY Voice Assistant</h4>
                <p className="text-slate-600 mt-1">
                  Voice-activated multimodal AI engine utilizing Python, speech recognition, local LLM routing, and automated system commands.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900">DzidzaAI Learning Platform</h4>
                <p className="text-slate-600 mt-1">
                  Offline-first educational PWA for Zimbabwean primary schools featuring local SQLite synchronization and multilingual explanations.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900">Campus Safety Alert System</h4>
                <p className="text-slate-600 mt-1">
                  Real-time emergency incident reporting blueprint with GPS dispatch and role-based security escalation for Midlands State University.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900">Banking Analytics & POS Dashboard</h4>
                <p className="text-slate-600 mt-1">
                  SQL-driven analytical pipeline analyzing transaction throughput, terminal heartbeat trends, and anomaly detection.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Technical Skills Summary
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <p>
                <strong>Languages:</strong> Python, SQL, JavaScript, TypeScript, HTML5/CSS3, Bash
              </p>
              <p>
                <strong>Databases:</strong> PostgreSQL, MySQL, SQLite, MongoDB
              </p>
              <p>
                <strong>Infrastructure:</strong> Linux, Kubernetes (Monitoring), Docker, Git/GitHub
              </p>
              <p>
                <strong>Operations:</strong> Digital Banking Channels, POS Troubleshooting, Incident Logging
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
