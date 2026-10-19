'use client';

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import {
  Terminal,
  Send,
  Sparkles,
  Bot,
  User,
  ShieldCheck,
  RefreshCw,
  Cpu
} from 'lucide-react';

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
}

export default function AILab() {
  const { isRecruiterMode } = useTheme();

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: "Greetings. I am FRIDAY, Tsakane's interactive portfolio assistant. Ask me anything about his Information Systems degree, Metbank digital banking experience, or technical projects.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [queriesLeft, setQueriesLeft] = useState(5);

  const promptChips = [
    "What is Tsakane's technical background?",
    "Tell me about his Metbank experience",
    "How does DzidzaAI operate offline?",
    "What roles is he currently targeting?",
  ];

  const knowledgeBase: Record<string, string> = {
    background:
      "Tsakane holds a BCom Honours in Information Systems from Midlands State University (MSU). His core competencies include IT systems support, SQL data analytics, network troubleshooting, and AI automation.",
    metbank:
      "At Metbank, Tsakane worked within Digital Banking & Merchant Services. He supported digital banking channels, point-of-sale (POS) merchant terminals, monitored Kubernetes-managed services, and assisted with incident diagnostics.",
    dzidza:
      "DzidzaAI is an offline-first learning platform tailored for primary learners in low-connectivity areas across Zimbabwe. It caches content locally using SQLite/IndexedDB and provides multilingual guidance in English, Shona, and Ndebele.",
    roles:
      "Tsakane is actively seeking opportunities as an ICT Graduate Trainee, Systems Support Engineer, Data/BI Analyst, Junior Cybersecurity Analyst, or AI Integration Engineer.",
    aegis:
      "aegisBTC is Tsakane's quantitative crypto trading automation system built in Python and MetaTrader 5 (MT5), focusing on automated execution, arbitrage, and strict drawdown risk control.",
    contact:
      "You can reach Tsakane directly at tsakane.1578@gmail.com, connect on LinkedIn at https://www.linkedin.com/in/tsakane-sithole-b39276197, or message on Telegram @Mxtaker.",
  };

  const handleSend = (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim() || queriesLeft <= 0 || isTyping) return;

    const userMsg: ChatMessage = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setQueriesLeft((prev) => Math.max(0, prev - 1));

    // Simulate response
    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let reply =
        "Tsakane Sithole is an Information Systems honours graduate with digital banking operations experience at Metbank. He specializes in building practical software, AI automation, and secure enterprise IT systems.";

      if (lower.includes('background') || lower.includes('degree') || lower.includes('university') || lower.includes('msu')) {
        reply = knowledgeBase.background;
      } else if (lower.includes('metbank') || lower.includes('banking') || lower.includes('bank') || lower.includes('work')) {
        reply = knowledgeBase.metbank;
      } else if (lower.includes('dzidza') || lower.includes('offline') || lower.includes('school')) {
        reply = knowledgeBase.dzidza;
      } else if (lower.includes('role') || lower.includes('job') || lower.includes('career') || lower.includes('hire') || lower.includes('target')) {
        reply = knowledgeBase.roles;
      } else if (lower.includes('aegis') || lower.includes('trading') || lower.includes('crypto')) {
        reply = knowledgeBase.aegis;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('linkedin') || lower.includes('telegram')) {
        reply = knowledgeBase.contact;
      } else if (lower.includes('friday') || lower.includes('voice')) {
        reply =
          "FRIDAY is Tsakane's voice-activated personal assistant built in Python. It integrates speech recognition, system tool calling, and local LLM pipelines for hands-free workflow automation.";
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <section id="ai-lab" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            04 // INTELLIGENT AGENT SANDBOX
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          My AI Lab — FRIDAY Terminal
        </h2>
        <p
          className={`mt-2 text-sm sm:text-base max-w-2xl ${
            isRecruiterMode ? 'text-slate-600' : 'text-slate-400'
          }`}
        >
          An interactive demo preview of FRIDAY's reasoning engine. Query verified information about Tsakane's qualifications, experience, and projects.
        </p>
      </div>

      <div
        className={`rounded-2xl border backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          isRecruiterMode
            ? 'bg-white border-slate-300 shadow-md'
            : 'bg-[#050b16] border-cyan-500/30 shadow-[0_0_40px_rgba(0,243,255,0.15)]'
        }`}
      >
        {/* Terminal Title Bar */}
        <div
          className={`flex items-center justify-between px-5 py-3 border-b text-xs font-mono ${
            isRecruiterMode
              ? 'bg-slate-100 border-slate-200 text-slate-700'
              : 'bg-slate-900/80 border-cyan-500/20 text-cyan-400'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-semibold">
              FRIDAY_TERMINAL // LLM_SANDBOX v1.4
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-400">Guardrails: Active ({queriesLeft}/5 Queries)</span>
          </div>
        </div>

        {/* Suggested Prompt Chips */}
        <div
          className={`px-5 py-3 border-b flex flex-wrap gap-2 text-xs font-mono ${
            isRecruiterMode ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/40 border-slate-800'
          }`}
        >
          <span className="text-slate-400 py-1">Quick prompts:</span>
          {promptChips.map((chip, i) => (
            <button
              key={i}
              onClick={() => handleSend(chip)}
              disabled={queriesLeft <= 0 || isTyping}
              className={`px-3 py-1 rounded-md border transition-colors ${
                isRecruiterMode
                  ? 'bg-white border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600'
                  : 'bg-cyan-950/30 border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/40'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Chat History Log */}
        <div className="p-5 sm:p-6 min-h-[260px] max-h-[420px] overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'ai' && (
                <div
                  className={`p-2 rounded-lg flex-shrink-0 ${
                    isRecruiterMode
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-cyan-950 border border-cyan-500/40 text-cyan-400'
                  }`}
                >
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? isRecruiterMode
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-cyan-500/20 border border-cyan-400 text-cyan-200 rounded-tr-none'
                    : isRecruiterMode
                    ? 'bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-none font-sans'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 rounded-tl-none font-mono'
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === 'user' && (
                <div
                  className={`p-2 rounded-lg flex-shrink-0 ${
                    isRecruiterMode
                      ? 'bg-slate-200 text-slate-700'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <span>FRIDAY is analyzing query context</span>
                <span className="animate-pulse">...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div
          className={`p-4 border-t flex items-center gap-3 ${
            isRecruiterMode ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'
          }`}
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={
                queriesLeft > 0
                  ? "Ask FRIDAY about Tsakane's stack, education, or banking experience..."
                  : "Session query limit reached (5/5). Reload to restart."
              }
              disabled={queriesLeft <= 0 || isTyping}
              className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono border focus:outline-none transition-colors ${
                isRecruiterMode
                  ? 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'
                  : 'bg-slate-900/80 border-cyan-500/30 focus:border-cyan-400 text-slate-200 placeholder:text-slate-500'
              }`}
            />
          </div>

          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || queriesLeft <= 0 || isTyping}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium flex items-center gap-2 transition-all ${
              isRecruiterMode
                ? 'bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white'
                : 'btn-cyber-primary disabled:opacity-50 disabled:pointer-events-none'
            }`}
          >
            <span>Query</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
