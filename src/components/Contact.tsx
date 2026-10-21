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
  Phone,
  Loader2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export default function Contact() {
  const { isRecruiterMode } = useTheme();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    category: 'Recruitment / Graduate Programme',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [needsActivation, setNeedsActivation] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setNeedsActivation(Boolean(data.needsActivation));
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Dispatch failed');
      }
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        'Automated dispatch was delayed or blocked. You can send your inquiry directly via your email client using the one-click fallback button below.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className={`w-2 h-2 rounded-full ${isRecruiterMode ? 'bg-blue-600' : 'bg-cyan-400'}`} />
          <span className={`text-xs font-mono uppercase tracking-widest ${
            isRecruiterMode ? 'text-blue-700 font-bold' : 'text-slate-400'
          }`}>
            07 // SECURE COMMUNICATION
          </span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
          isRecruiterMode ? 'text-slate-900' : 'text-white'
        }`}>
          Direct Inquiries & Hiring
        </h2>
        <p
          className={`mt-2 text-sm sm:text-base max-w-2xl ${
            isRecruiterMode ? 'text-slate-700' : 'text-slate-400'
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
                ? 'bg-white/90 border-blue-200/70 text-slate-800 shadow-sm'
                : 'bg-[#060c19]/70 border-cyan-500/20 text-slate-300'
            }`}
          >
            <h3 className={`text-lg font-bold ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
              Direct Contact Channels
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${isRecruiterMode ? 'text-slate-600' : 'text-slate-400'}`}>
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
                        ? 'bg-blue-50/50 border-blue-200/80 hover:bg-blue-50 hover:border-blue-400'
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
                      <p className={`text-[10px] font-mono uppercase tracking-wider ${
                        isRecruiterMode ? 'text-blue-700 font-bold' : 'text-slate-400'
                      }`}>
                        {m.label}
                      </p>
                      <p className={`text-xs font-mono font-medium ${
                        isRecruiterMode ? 'text-slate-900 font-bold' : 'text-slate-200'
                      }`}>
                        {m.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className={`pt-4 border-t flex items-center justify-between text-xs font-mono ${
              isRecruiterMode ? 'border-blue-100 text-slate-600' : 'border-slate-800 text-slate-400'
            }`}>
              <span className="flex items-center gap-1.5">
                <Globe className={`w-3.5 h-3.5 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
                <span className={isRecruiterMode ? 'text-slate-800 font-medium' : ''}>tsakane.co.zw</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className={`w-3.5 h-3.5 ${isRecruiterMode ? 'text-blue-600' : 'text-cyan-400'}`} />
                <span className={isRecruiterMode ? 'text-slate-800 font-medium' : ''}>Fast Response Time</span>
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border backdrop-blur-xl ${
            isRecruiterMode
              ? 'bg-white/90 border-blue-200/70 text-slate-800 shadow-sm'
              : 'bg-[#060c19]/70 border-cyan-500/20 text-slate-200'
          }`}
        >
          {submitted ? (
            needsActivation ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto text-amber-400">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-bold ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                  Action Required: One-Time Form Activation
                </h3>
                <p className={`text-xs sm:text-sm max-w-lg mx-auto ${isRecruiterMode ? 'text-slate-700' : 'text-slate-300'}`}>
                  FormSubmit has sent an activation link to <strong>tsakane.1578@gmail.com</strong>.
                  <br />
                  Please open that email and click the <strong>&quot;Activate Form&quot;</strong> button once. As soon as you click it, this inquiry and all future recruiter messages will land directly in your inbox!
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href="https://mail.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg text-xs font-mono font-semibold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Open Gmail Inbox</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setNeedsActivation(false);
                      setErrorMessage(null);
                    }}
                    className={`px-5 py-2.5 rounded-lg text-xs font-mono transition-colors border ${
                      isRecruiterMode
                        ? 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                        : 'border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/40'
                    }`}
                  >
                    Back to Form
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-bold ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                  Transmission Received & Delivered
                </h3>
                <p className={`text-xs sm:text-sm max-w-md mx-auto ${isRecruiterMode ? 'text-slate-700' : 'text-slate-300'}`}>
                  Thank you, <strong>{formState.name || 'there'}</strong>. Your inquiry has been dispatched directly to Tsakane&apos;s personal inbox (<code>tsakane.1578@gmail.com</code>). Expect a response shortly at <strong>{formState.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setNeedsActivation(false);
                    setErrorMessage(null);
                    setFormState({
                      name: '',
                      email: '',
                      category: 'Recruitment / Graduate Programme',
                      message: '',
                    });
                  }}
                  className={`mt-4 px-6 py-2.5 rounded-lg text-xs font-mono transition-colors border ${
                    isRecruiterMode
                      ? 'bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100 font-semibold'
                      : 'border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/40'
                  }`}
                >
                  Send Another Inquiry
                </button>
              </div>
            )
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className={`text-lg font-bold mb-1 ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                Dispatch an Inquiry
              </h3>
              <p className={`text-xs mb-4 ${isRecruiterMode ? 'text-slate-600' : 'text-slate-400'}`}>
                Recruiters and hiring managers can reach out directly using the form below.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                    isRecruiterMode ? 'text-slate-800 font-bold' : 'text-slate-400'
                  }`}>
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
                        ? 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900 placeholder:text-slate-500'
                        : 'bg-slate-900/80 border-cyan-500/20 focus:border-cyan-400 text-slate-200 placeholder:text-slate-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                    isRecruiterMode ? 'text-slate-800 font-bold' : 'text-slate-400'
                  }`}>
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
                        ? 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900 placeholder:text-slate-500'
                        : 'bg-slate-900/80 border-cyan-500/20 focus:border-cyan-400 text-slate-200 placeholder:text-slate-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                  isRecruiterMode ? 'text-slate-800 font-bold' : 'text-slate-400'
                }`}>
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
                <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                  isRecruiterMode ? 'text-slate-800 font-bold' : 'text-slate-400'
                }`}>
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
                      ? 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900 placeholder:text-slate-500'
                      : 'bg-slate-900/80 border-cyan-500/20 focus:border-cyan-400 text-slate-200 placeholder:text-slate-500'
                  }`}
                />
              </div>

              {errorMessage && (
                <div
                  className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
                    isRecruiterMode
                      ? 'bg-amber-50 border-amber-300 text-amber-950'
                      : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" />
                    <span>{errorMessage}</span>
                  </div>
                  <a
                    href={`mailto:tsakane.1578@gmail.com?subject=${encodeURIComponent(
                      `[${formState.category}] Inquiry from ${formState.name}`
                    )}&body=${encodeURIComponent(
                      `Name: ${formState.name}\nEmail: ${formState.email}\nCategory: ${formState.category}\n\nMessage:\n${formState.message}`
                    )}`}
                    className={`px-3 py-1.5 rounded-lg font-mono font-medium whitespace-nowrap border flex items-center gap-1.5 transition-colors ${
                      isRecruiterMode
                        ? 'bg-amber-600 hover:bg-amber-700 text-white border-amber-600 shadow-xs'
                        : 'bg-amber-500/20 border-amber-500/50 hover:bg-amber-500/30 text-amber-200'
                    }`}
                  >
                    <span>Send via Mail Client</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl text-xs font-mono font-semibold tracking-wide flex items-center justify-center gap-2 transition-all ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                } ${
                  isRecruiterMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                    : 'btn-cyber-primary'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Transmitting Message to Tsakane...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
