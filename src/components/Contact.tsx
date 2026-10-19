'use client';

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './Icons';
import {
  Mail,
  Send,
  MessageSquare,
  Globe,
  CheckCircle2,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';

export default function Contact() {
  const { isRecruiterMode } = useTheme();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    category: 'Recruitment / Graduate Programme',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  const contactMethods = [
    {
      label: 'Direct Email',
      value: 'tsakane.1578@gmail.com',
      href: 'mailto:tsakane.1578@gmail.com',
      icon: Mail,
    },
    {
      label: 'Direct Cell / WhatsApp',
      value: '+263 77 798 5546',
      href: 'tel:+263777985546',
      icon: Phone,
    },
    {
      label: 'Professional Network',
      value: 'linkedin.com/in/tsakane-sithole-b39276197',
      href: 'https://www.linkedin.com/in/tsakane-sithole-b39276197',
      icon: LinkedinIcon,
    },
    {
      label: 'GitHub Profile',
      value: 'github.com/Signas-58',
      href: 'https://github.com/Signas-58',
      icon: GithubIcon,
    },
    {
      label: 'Telegram Channel',
      value: 't.me/Mxtaker (@Mxtaker)',
      href: 'https://t.me/Mxtaker',
      icon: TelegramIcon,
    },
    {
      label: 'Location & Timezone',
      value: 'Harare & Gweru, Zimbabwe (CAT / UTC+2)',
      href: '#',
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            07 // SECURE COMMUNICATION
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Direct Inquiries & Hiring
        </h2>
        <p
          className={`mt-2 text-sm sm:text-base max-w-2xl ${
            isRecruiterMode ? 'text-slate-600' : 'text-slate-400'
          }`}
        >
          Open to ICT Graduate Trainee positions, Systems Support, Data & BI Analysis, and AI integration engineering roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-xl space-y-6 ${
              isRecruiterMode
                ? 'bg-white border-slate-200 text-slate-800 shadow-sm'
                : 'bg-[#060c19]/70 border-cyan-500/20 text-slate-300'
            }`}
          >
            <h3 className="text-lg font-bold">
              Direct Contact Channels
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Whether you are evaluating candidates for IT graduate programmes, banking operations, systems engineering, or technical collaboration, feel free to reach out directly.
            </p>

            <div className="space-y-4 pt-2">
              {contactMethods.map((m) => {
                const Icon = m.icon;
                return (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border flex items-center gap-3 transition-colors ${
                      isRecruiterMode
                        ? 'bg-slate-50 border-slate-200 hover:border-blue-400'
                        : 'bg-slate-900/50 border-cyan-500/15 hover:border-cyan-400/50 hover:bg-slate-900'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isRecruiterMode
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-cyan-950 border border-cyan-500/30 text-cyan-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        {m.label}
                      </p>
                      <p className="text-xs font-mono font-medium text-slate-200 dark:text-slate-200">
                        {m.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>tsakanesithole.co.zw</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Fast Response Time</span>
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border backdrop-blur-xl ${
            isRecruiterMode
              ? 'bg-white border-slate-200 text-slate-800 shadow-sm'
              : 'bg-[#060c19]/70 border-cyan-500/20 text-slate-200'
          }`}
        >
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">
                Transmission Received
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                Thank you for your message. Your inquiry has been logged, and Tsakane will respond to your provided email address shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormState({
                    name: '',
                    email: '',
                    category: 'Recruitment / Graduate Programme',
                    message: '',
                  });
                }}
                className="mt-4 px-6 py-2 rounded-lg text-xs font-mono border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/40 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold mb-1">
                Dispatch an Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Recruiters and hiring managers can reach out directly using the form below.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="e.g. Jane Doe (Tech Talent Lead)"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono border focus:outline-none transition-colors ${
                      isRecruiterMode
                        ? 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'
                        : 'bg-slate-900/80 border-cyan-500/20 focus:border-cyan-400 text-slate-200'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="e.g. contact@organization.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono border focus:outline-none transition-colors ${
                      isRecruiterMode
                        ? 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'
                        : 'bg-slate-900/80 border-cyan-500/20 focus:border-cyan-400 text-slate-200'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Inquiry Category
                </label>
                <select
                  value={formState.category}
                  onChange={(e) =>
                    setFormState({ ...formState, category: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono border focus:outline-none transition-colors ${
                    isRecruiterMode
                      ? 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'
                      : 'bg-slate-900/80 border-cyan-500/20 focus:border-cyan-400 text-slate-200'
                  }`}
                >
                  <option value="Recruitment / Graduate Programme">
                    Recruitment / Graduate Trainee Opportunity
                  </option>
                  <option value="Systems Support / IT Role">
                    Systems Support / IT Infrastructure Role
                  </option>
                  <option value="Data Analytics Role">
                    Data Analytics / BI Role
                  </option>
                  <option value="AI Integration & Project Collaboration">
                    AI Integration & Project Collaboration
                  </option>
                  <option value="General Professional Inquiry">
                    General Professional Inquiry
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Share details regarding the role, requirements, or collaboration..."
                  className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono border focus:outline-none transition-colors ${
                    isRecruiterMode
                      ? 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'
                      : 'bg-slate-900/80 border-cyan-500/20 focus:border-cyan-400 text-slate-200'
                  }`}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-xl text-xs font-mono font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${
                  isRecruiterMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                    : 'btn-cyber-primary'
                }`}
              >
                <span>Transmit Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
