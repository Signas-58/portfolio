'use client';

import React, { useState } from 'react';
import { Project } from '@/types';
import { useTheme } from '@/context/ThemeContext';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Bot,
  GraduationCap,
  BarChart3,
  TerminalSquare
} from 'lucide-react';

export default function Projects() {
  const { isRecruiterMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      id: 'friday-ai',
      title: 'FRIDAY — Intelligent Voice Assistant & Automation Engine',
      codeId: 'SYS_01 // FRIDAY',
      category: 'AI & Automation',
      tagline: 'Voice-Activated AI Assistant inspired by Tony Stark technology',
      description:
        'A multimodal personal AI assistant combining local speech recognition, LLM reasoning, text-to-speech synthesis, and OS-level system automation tools.',
      status: 'In Development',
      tags: ['Python', 'LLM Integration', 'Speech Recognition', 'Automation', 'AsyncIO'],
      githubUrl: 'https://github.com/Signas-58/friday-demo',
      caseStudy: {
        problem:
          'Standard voice assistants are locked into proprietary cloud ecosystems with rigid commands, high latency, and zero deep customization for developer workflows.',
        architecture:
          'Microphone Input → VAD (Voice Activity Detection) → Speech-to-Text Pipeline → Local/Cloud LLM Router → Tool Execution Engine (System APIs/Scripts) → Audio Output Synthesizer.',
        tradeOffs:
          'Balancing speech-to-text response latency against natural language accuracy. Decided on local processing for intent triggers with fallback to high-reasoning LLMs for complex questions.',
        outcomes:
          'Working prototype capable of voice activation, answering queries, launching applications, and executing developer commands with sub-1.2s local response time.',
        techStack: ['Python 3.11', 'OpenAI Whisper', 'FastAPI', 'PyTTSx3', 'uv'],
      },
    },
    {
      id: 'dzidza-ai',
      title: 'DzidzaAI — Offline-First Multilingual Primary Learning Platform',
      codeId: 'SYS_02 // DZIDZA',
      category: 'AI & Automation',
      tagline: 'AI-assisted education tailored for Zimbabwean primary school curricula',
      description:
        'An accessible educational platform designed for primary learners in low-bandwidth and offline environments, featuring multilingual assistance in English, Shona, and Ndebele.',
      status: 'Production Prototype',
      tags: ['Offline-First', 'SQLite Sync', 'Multilingual AI', 'PWA', 'Education Tech'],
      githubUrl: 'https://github.com/Signas-58',
      caseStudy: {
        problem:
          'Severe bandwidth constraints and intermittent internet in Zimbabwean primary schools make traditional cloud-only e-learning platforms inaccessible to the majority of students.',
        architecture:
          'Progressive Web App (PWA) → Local IndexedDB / SQLite Store → Offline Content Engine → Background Sync Worker → Lightweight API Gateway for updates.',
        tradeOffs:
          'Opted for client-side local caching and lightweight rule-based/quantized AI inference over continuous cloud streaming to ensure full usability during network blackouts.',
        outcomes:
          'Offline curriculum browsing, interactive quiz engines, and multilingual explanations verified to operate with zero active internet connection.',
        techStack: ['React', 'TypeScript', 'PWA / Service Workers', 'SQLite / IndexedDB', 'Tailwind CSS'],
      },
    },
    {
      id: 'campus-safety',
      title: 'Campus Safety & Incident Alert System',
      codeId: 'SYS_03 // SAFE_CAMPUS',
      category: 'Web & Systems',
      tagline: 'Real-time emergency incident reporting & security escalation platform',
      description:
        'A proposed mobile-first incident reporting and emergency alert framework for Midlands State University, featuring location sharing and administrative role escalation.',
      status: 'System Proposed',
      tags: ['Systems Analysis', 'Incident Response', 'Role Escalation', 'Security', 'Database Design'],
      githubUrl: 'https://github.com/Signas-58',
      caseStudy: {
        problem:
          'Traditional campus emergency hotlines suffer from delayed dispatch times, lack of precise GPS location data, and poor centralized incident auditing during emergencies.',
        architecture:
          'Student Mobile Interface → Geolocation Extraction → Incident Dispatch Queue → Role-Based Security Dashboard (Real-time WebSockets) → Audit Log Repository.',
        tradeOffs:
          'Prioritized student data privacy and ephemeral location logging to comply with institutional security regulations while maintaining rapid emergency response dispatch.',
        outcomes:
          'Comprehensive systems design blueprint, entity-relationship models, and high-fidelity interface prototypes completed for administrative evaluation.',
        techStack: ['Systems Analysis & Design', 'PostgreSQL', 'RESTful API', 'Node.js', 'Role-Based Access Control (RBAC)'],
      },
    },
    {
      id: 'banking-analytics',
      title: 'Banking Operations & POS Analytics Dashboard',
      codeId: 'SYS_04 // BANK_OPS',
      category: 'Data & Security',
      tagline: 'Synthetic operational intelligence for transaction volumes & failure analysis',
      description:
        'An analytical dashboard and SQL pipeline modeling digital banking transaction throughput, merchant POS terminal availability, failure rates, and settlement reconciliation.',
      status: 'Production Prototype',
      tags: ['SQL Analytics', 'Data Visualization', 'Digital Banking', 'POS Monitoring', 'Python'],
      githubUrl: 'https://github.com/Signas-58',
      caseStudy: {
        problem:
          'Banking operations teams require instant visibility into merchant POS connection failures, network timeouts, and anomalous rejection rates across digital payment rails.',
        architecture:
          'Synthetic Transaction Log Ingestion → SQL Transformation Pipeline (Aggregation & Window Functions) → Metric Extraction → Interactive Dashboard & Alert Thresholds.',
        tradeOffs:
          'Used synthetic banking datasets to safely simulate real-world Metbank digital banking scenarios without compromising confidential customer or financial data.',
        outcomes:
          'Identified peak failure windows, analyzed merchant terminal heartbeat patterns, and established automated alerts for error spikes exceeding 3% per interval.',
        techStack: ['SQL', 'Python Pandas', 'Chart.js', 'PostgreSQL', 'Operational Telemetry'],
      },
    },
    {
      id: 'cybersecurity-k8s',
      title: 'Kubernetes Service Operations & Defensive Security Labs',
      codeId: 'SYS_05 // SEC_OPS',
      category: 'Data & Security',
      tagline: 'Containerized service health monitoring, fault recovery, and defensive labs',
      description:
        'Documented labs and monitoring scripts reflecting hands-on systems administration: Kubernetes pod health tracking, controlled service restarts, network routing, and access controls.',
      status: 'Production Prototype',
      tags: ['Kubernetes', 'Linux', 'Network Troubleshooting', 'Access Control', 'Docker'],
      githubUrl: 'https://github.com/Signas-58',
      caseStudy: {
        problem:
          'Maintaining high availability in distributed services requires automated recovery routines, precise logs, and rapid diagnostics during connectivity interruptions.',
        architecture:
          'Docker Containers → Kubernetes Pod Orchestration → Service Health Checkers → Log Aggregator → Automated Pod Restart Scripts & Notification Webhooks.',
        tradeOffs:
          'Focused on defensive resilience and fault-tolerant restarts to ensure digital banking microservices gracefully recover from unexpected network disconnects.',
        outcomes:
          'Configured self-healing deployment manifests, monitored pod crash-loops, and documented standardized runbooks for production incident triage.',
        techStack: ['Kubernetes', 'Docker', 'Linux Bash', 'Networking Protocols', 'Security Hardening'],
      },
    },
    {
      id: 'aegis-btc',
      title: 'aegisBTC — Algorithmic & Crypto Trading Automation Engine',
      codeId: 'SYS_06 // AEGIS_BTC',
      category: 'Data & Security',
      tagline: 'Quantitative trading engine, MT5 automation, arbitrage & risk management',
      description:
        'A quantitative trading automation framework in Python and MT5 designed for automated order execution, crypto market arbitrage, trailing stop risk management, and backtesting.',
      status: 'Production Prototype',
      tags: ['Python', 'Quantitative Finance', 'Crypto Arbitrage', 'MT5 Automation', 'Risk Management'],
      githubUrl: 'https://github.com/Signas-58/aegisBTC',
      caseStudy: {
        problem:
          'Manual trading execution incurs high slippage and latency, while lack of automated risk-capping exposes portfolios to sudden crypto market volatility.',
        architecture:
          'Market Data Ingestion (Tick Streams) → Quantitative Alpha Signal Generator → Risk & Position Sizing Engine → MT5 / Exchange REST API Execution → Trade Telemetry Logger.',
        tradeOffs:
          'Prioritized deterministic execution latency and strict stop-loss guardrails over multi-asset concurrency to ensure maximum capital protection.',
        outcomes:
          'Automated execution latency reduced to sub-50ms with comprehensive risk guardrails, drawdown monitors, and live trade journaling.',
        techStack: ['Python 3.11', 'MetaTrader 5 API', 'NumPy & Pandas', 'Exchange WebSockets', 'Automated Backtesting'],
      },
    },
  ];

  const categories = ['All', 'AI & Automation', 'Web & Systems', 'Data & Security'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              03 // FEATURED WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Systems & Case Studies
          </h2>
          <p
            className={`mt-2 text-sm sm:text-base max-w-2xl ${
              isRecruiterMode ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            Detailed engineering case studies walking through real-world problems, technical architecture, and verified outcomes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                selectedCategory === cat
                  ? isRecruiterMode
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,243,255,0.3)]'
                  : isRecruiterMode
                  ? 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden backdrop-blur-xl ${
              isRecruiterMode
                ? 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg text-slate-800'
                : 'bg-[#060c19]/80 border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] text-slate-200'
            }`}
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono tracking-wider text-cyan-400 uppercase">
                  {project.codeId}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    project.status === 'Production Prototype'
                      ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                      : project.status === 'In Development'
                      ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                      : 'border-purple-500/30 bg-purple-500/10 text-purple-400'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p
                className={`text-xs leading-relaxed mb-4 line-clamp-3 ${
                  isRecruiterMode ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                {project.description}
              </p>
            </div>

            {/* Bottom Tech Tags & CTAs */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className={`text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
                    isRecruiterMode
                      ? 'text-blue-600 hover:text-blue-700'
                      : 'text-cyan-400 hover:text-cyan-300'
                  }`}
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
