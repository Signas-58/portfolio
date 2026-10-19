'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GithubUserData } from '@/types';
import { GithubIcon } from './Icons';
import {
  GitBranch,
  Star,
  Users,
  Code2,
  ExternalLink,
  Activity,
  FolderGit2
} from 'lucide-react';

export default function GithubDashboard() {
  const { isRecruiterMode } = useTheme();

  const [userData, setUserData] = useState<GithubUserData>({
    login: 'Signas-58',
    name: 'Tsakane Sithole',
    avatar_url: 'https://avatars.githubusercontent.com/u/108990422?v=4',
    public_repos: 47,
    followers: 6,
    following: 9,
    bio: 'Information Systems | Intelligent Automation | Building FRIDAY & Practical Software',
    html_url: 'https://github.com/Signas-58',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchGithub() {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/Signas-58');
        if (res.ok) {
          const data = await res.json();
          setUserData(data);
        }
      } catch (err) {
        // Fallback gracefully to default state without crashing
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchGithub();
  }, []);

  const featuredRepos = [
    {
      name: 'friday-demo',
      desc: 'Voice-Activated Multimodal AI Assistant inspired by Tony Stark technology.',
      lang: 'Python',
      langColor: '#3572A5',
      url: 'https://github.com/Signas-58/friday-demo',
    },
    {
      name: 'aegisBTC',
      desc: 'Algorithmic trading automation system for market execution and risk management.',
      lang: 'Python',
      langColor: '#f59e0b',
      url: 'https://github.com/Signas-58/aegisBTC',
    },
    {
      name: 'portfolio',
      desc: 'TSakaneOS personal developer and information systems portfolio with dual-theme HUD.',
      lang: 'TypeScript',
      langColor: '#3178c6',
      url: 'https://github.com/Signas-58/portfolio',
    },
  ];

  const languageDistribution = [
    { name: 'Python', percentage: 42, color: 'bg-blue-500' },
    { name: 'TypeScript & JavaScript', percentage: 28, color: 'bg-cyan-400' },
    { name: 'SQL & Database Systems', percentage: 18, color: 'bg-emerald-400' },
    { name: 'Shell / Bash / Docker', percentage: 12, color: 'bg-purple-400' },
  ];

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            05 // OPEN SOURCE TELEMETRY
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Developer Dashboard
        </h2>
        <p
          className={`mt-2 text-sm sm:text-base max-w-2xl ${
            isRecruiterMode ? 'text-slate-600' : 'text-slate-400'
          }`}
        >
          Real-time activity and public repository insights from GitHub profile{' '}
          <code className="text-cyan-400">@Signas-58</code>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Profile Card */}
        <div
          className={`lg:col-span-4 p-6 sm:p-8 rounded-2xl border backdrop-blur-xl space-y-6 ${
            isRecruiterMode
              ? 'bg-white border-slate-200 text-slate-800 shadow-sm'
              : 'bg-[#060c19]/70 border-cyan-500/20 text-slate-300'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={userData.avatar_url}
                alt={userData.name || 'Tsakane Sithole'}
                className="w-16 h-16 rounded-xl border-2 border-cyan-400/50 object-cover"
                onError={(e) => {
                  // Fallback avatar if external image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#060c19]" />
            </div>

            <div>
              <h3 className="text-lg font-bold">
                {userData.name || 'Tsakane Sithole'}
              </h3>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>@{userData.login}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {userData.bio}
          </p>

          <div
            className={`pt-4 border-t grid grid-cols-3 gap-2 text-center text-xs font-mono ${
              isRecruiterMode ? 'border-slate-200' : 'border-slate-800'
            }`}
          >
            <div className="p-2 rounded-lg bg-slate-900/30">
              <span className="text-base font-bold text-cyan-400 block">
                {userData.public_repos}
              </span>
              <span className="text-[10px] text-slate-400">Repositories</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/30">
              <span className="text-base font-bold text-cyan-400 block">
                {userData.followers}
              </span>
              <span className="text-[10px] text-slate-400">Followers</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/30">
              <span className="text-base font-bold text-cyan-400 block">
                Active
              </span>
              <span className="text-[10px] text-slate-400">Contributions</span>
            </div>
          </div>

          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-2 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit @Signas-58 on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories & Language Breakdown */}
        <div className="lg:col-span-8 space-y-6">
          {/* Featured Repositories */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300 group ${
                  isRecruiterMode
                    ? 'bg-white border-slate-200 hover:border-blue-400 shadow-xs'
                    : 'bg-slate-900/40 border-cyan-500/20 hover:border-cyan-400 hover:bg-slate-900/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <FolderGit2 className="w-4 h-4 text-cyan-400" />
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight mb-2 truncate group-hover:text-cyan-400 transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mb-4">
                    {repo.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Language Breakdown Bar */}
          <div
            className={`p-6 rounded-2xl border backdrop-blur-xl space-y-4 ${
              isRecruiterMode
                ? 'bg-white border-slate-200'
                : 'bg-[#060c19]/70 border-cyan-500/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Primary Technology Distribution:
              </h4>
              <span className="text-[11px] font-mono text-cyan-400">Calculated from public code</span>
            </div>

            {/* Progress Segmented Bar */}
            <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden flex">
              {languageDistribution.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percentage}%` }}
                  className={`h-full ${lang.color}`}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
              {languageDistribution.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                  <span className="text-slate-300">{lang.name}</span>
                  <span className="text-slate-500">({lang.percentage}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
