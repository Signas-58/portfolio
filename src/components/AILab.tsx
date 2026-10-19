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
  RotateCcw,
  Clock,
  HelpCircle
} from 'lucide-react';

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
}

export default function AILab() {
  const { isRecruiterMode } = useTheme();

  const [input, setInput] = useState('');
  const initialGreeting =
    "Greetings! I am F.R.I.D.A.Y., Tsakane's interactive portfolio assistant. You can ask me practical questions like 'Who made you?', 'How do you work?', 'What time is it?', or explore Tsakane's education, Metbank experience, and engineering projects.";

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: initialGreeting,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const promptChips = [
    'help',
    'why-hire',
    'Who made you?',
    'What time is it?',
    'Metbank experience',
    'coffee',
    'joke',
    'matrix',
  ];

  // Practical Answer Resolver
  const resolveAnswer = (rawInput: string): string => {
    const clean = rawInput
      .toLowerCase()
      .replace(/[?!.,;]/g, '')
      .trim();

    // Numeric Shortcuts (1 through 9)
    if (clean === '1') {
      return `[ 01 // WHY HIRE TSAKANE ]
1. The Rare Hybrid: A strong BCom Honours in Information Systems combined with enterprise banking operations at Metbank — bridging business strategy, data integrity, and tech.
2. Proven Builder: He doesn't just read documentation; he builds real software — voice assistants in Python, offline-first educational PWAs with SQLite, and algorithmic trading systems with MT5.
3. Reliability & Systems Discipline: Hands-on exposure monitoring Kubernetes microservices, diagnosing POS terminal anomalies, and maintaining uptime in high-stakes environments.`;
    }
    if (clean === '2') {
      return `[ 02 // METBANK DIGITAL BANKING EXPERIENCE ]
At Metbank, Tsakane worked within Digital Banking & Merchant Services. His responsibilities included supporting digital channels, POS merchant terminal diagnostics, monitoring Kubernetes-managed services, and ensuring transactional service continuity.`;
    }
    if (clean === '3') {
      return `[ 03 // EDUCATION & QUALIFICATIONS ]
Tsakane graduated with a Bachelor of Commerce Honours in Information Systems from Midlands State University (MSU). His core academic domains included Database Systems, Systems Analysis & Design, Information Security & Risk Management, Business Intelligence, and Software Project Management.`;
    }
    if (clean === '4') {
      return `[ 04 // FEATURED SYSTEMS & PROJECTS ]
• FRIDAY: Voice-Activated AI Assistant (Python)
• aegisBTC: Algorithmic & Crypto Trading Automation Engine (Python & MT5)
• DzidzaAI: Offline-First Multilingual Primary Learning Platform for Zimbabwe
• Campus Safety Alert System: Real-Time Incident Reporting for MSU
• Banking Operations Analytics Dashboard: Synthetic POS & transaction throughput telemetry.`;
    }
    if (clean === '5') {
      return `[ 05 // TECHNICAL STACK & PROFICIENCIES ]
• Languages: Python, SQL, JavaScript, TypeScript, HTML5/CSS3, Bash
• Databases: PostgreSQL, MySQL, SQLite, MongoDB
• Infrastructure: Linux Administration, Kubernetes monitoring, Docker, Git/GitHub
• Applied Focus: AI Integration, Financial IT Operations, and Data Analytics.`;
    }
    if (clean === '6' || clean === 'option 6' || clean === 'choice 6') {
      return `[ 06 // DIRECT CONTACT & HIRING CHANNELS ]
You can reach Tsakane directly through:
• Direct Email : tsakane.1578@gmail.com
• Professional : linkedin.com/in/tsakane-sithole-b39276197
• Telegram     : @Mxtaker (https://t.me/Mxtaker)
• GitHub       : https://github.com/Signas-58
• Portfolio    : https://tsakanesithole.co.zw
Location       : Harare, Zimbabwe (CAT / UTC+2)`;
    }
    if (clean === '7') {
      return `[ 07 // SYSTEM TELEMETRY & SPECS ]
• Host Platform : Next.js 16.4 App Router (Turbopack)
• Client Engine : React 19 + TypeScript
• Deployment   : Vercel Global Edge Network
• Timezone      : Harare, Zimbabwe (CAT / UTC+2)
• Interface     : Dual-Theme (Dev Cyber HUD / Recruiter View)
• System Status : 100% Operational // 0 Active Incidents`;
    }
    if (clean === '8') {
      return `[ 08 // PROGRAMMER JOKE ]
Why do programmers prefer dark mode? Because light attracts bugs! 🪲 (And because TSakaneOS looks much cooler in midnight cyan).`;
    }
    if (clean === '9') {
      return `[ 09 // THE MATRIX ]
Wake up, Recruiter...
The Matrix has you.
Follow the white rabbit: https://github.com/Signas-58
Knock, knock, Neo. 🐇💊`;
    }

    // 1. Greetings
    if (
      clean === 'hi' ||
      clean === 'hello' ||
      clean === 'hey' ||
      clean === 'hi there' ||
      clean === 'hey there' ||
      clean === 'hola' ||
      clean === 'yo' ||
      clean === 'sup' ||
      clean.startsWith('good morning') ||
      clean.startsWith('good afternoon') ||
      clean.startsWith('good evening') ||
      clean === 'how are you' ||
      clean === 'how are u'
    ) {
      return "Hello! I am F.R.I.D.A.Y., Tsakane's assistant. Ready to help you explore his Information Systems degree, Metbank banking background, or technical projects like aegisBTC and DzidzaAI. What would you like to know?";
    }

    // 2. Who/What are you
    if (
      clean.includes('who are you') ||
      clean.includes('what are you') ||
      clean.includes('who are u') ||
      clean.includes('what are u') ||
      clean.includes('who is friday') ||
      clean.includes('what is friday')
    ) {
      return "I am F.R.I.D.A.Y. (Female Replacement Intelligent Digital Assistant Youth), inspired by Tony Stark's autonomous AI interface. Within TSakaneOS, I serve as Tsakane's interactive portfolio navigator, knowledge assistant, and system terminal.";
    }

    // 3. Who made you / Creator
    if (
      clean.includes('who made you') ||
      clean.includes('who created you') ||
      clean.includes('who built you') ||
      clean.includes('who coded you') ||
      clean.includes('who is your creator') ||
      clean.includes('who programmed you') ||
      clean.includes('who owns you')
    ) {
      return "I was designed, programmed, and engineered by Tsakane Sithole as part of his research into autonomous voice assistants, speech synthesis, and intelligent automation systems.";
    }

    // 4. How do you work / How were you made
    if (
      clean.includes('how do you work') ||
      clean.includes('how does it work') ||
      clean.includes('how were you made') ||
      clean.includes('how where you made') ||
      clean.includes('how were u made') ||
      clean.includes('how are you built') ||
      clean.includes('how was friday built') ||
      clean.includes('how are you made')
    ) {
      return "The full FRIDAY engine is engineered in Python 3.11 with a modular pipeline:\n1. Audio Capture with Voice Activity Detection (VAD)\n2. Local Speech-to-Text via Whisper\n3. Intent Routing & LLM Reasoning Engine\n4. System Automation Tools (OS commands, scripts, API execution)\n5. Voice Output Synthesis (TTS).\nThis web terminal is a lightweight browser-based simulation demonstrating my intent parsing engine in real time!";
    }

    // 5. Time & Date
    if (
      clean.includes('time') ||
      clean.includes('what time') ||
      clean.includes('date') ||
      clean.includes('what date') ||
      clean.includes('today') ||
      clean.includes('what day')
    ) {
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      const dateStr = now.toLocaleDateString([], {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      return `The current local system time is ${timeStr} on ${dateStr}. System telemetry in Harare, Zimbabwe (CAT / UTC+2) is nominal.`;
    }

    // 6. About Tsakane / About me / Who is Tsakane
    if (
      clean.includes('about me') ||
      clean.includes('about tsakane') ||
      clean.includes('who is tsakane') ||
      clean.includes('tell me about tsakane') ||
      clean.includes('who is he') ||
      clean.includes('bio') ||
      clean.includes('background')
    ) {
      return "Tsakane Sithole is an Information Systems Honours graduate from Midlands State University (MSU) with enterprise banking experience at Metbank. He specializes in building intelligent systems, voice assistants (FRIDAY), algorithmic crypto trading (aegisBTC), and offline-first educational tools (DzidzaAI).";
    }

    // 7. Education / Degree / University
    if (
      clean.includes('education') ||
      clean.includes('degree') ||
      clean.includes('university') ||
      clean.includes('msu') ||
      clean.includes('midlands state university') ||
      clean.includes('honours') ||
      clean.includes('coursework') ||
      clean.includes('qualifications')
    ) {
      return "Tsakane graduated with a Bachelor of Commerce Honours in Information Systems from Midlands State University (MSU). His core academic domains included Database Systems, Systems Analysis & Design, Information Security & Risk Management, Business Intelligence, and Software Project Management.";
    }

    // 8. Metbank / Professional Experience
    if (
      clean.includes('metbank') ||
      clean.includes('banking') ||
      clean.includes('bank') ||
      clean.includes('work') ||
      clean.includes('job') ||
      clean.includes('experience') ||
      clean.includes('pos') ||
      clean.includes('merchant') ||
      clean.includes('kubernetes')
    ) {
      return "At Metbank, Tsakane worked within Digital Banking & Merchant Services. His responsibilities included supporting digital channels, POS merchant terminal diagnostics, monitoring Kubernetes-managed services, and ensuring transactional service continuity.";
    }

    // 9. Projects / What has he built
    if (
      clean.includes('project') ||
      clean.includes('what did he build') ||
      clean.includes('what has he built') ||
      clean.includes('portfolio') ||
      clean.includes('systems')
    ) {
      return "Tsakane's featured projects include:\n• FRIDAY: Voice-Activated AI Assistant (Python)\n• aegisBTC: Algorithmic & Crypto Trading Automation (Python & MT5)\n• DzidzaAI: Offline-First Multilingual Primary Learning Platform for Zimbabwe\n• Campus Safety Alert System: Real-Time Incident Reporting (MSU)\n• Banking Operations Analytics Dashboard: Synthetic POS & transaction throughput telemetry.";
    }

    // 10. aegisBTC / Trading
    if (
      clean.includes('aegis') ||
      clean.includes('trading') ||
      clean.includes('crypto') ||
      clean.includes('arbitrage') ||
      clean.includes('mt5') ||
      clean.includes('bitcoin') ||
      clean.includes('btc')
    ) {
      return "aegisBTC is Tsakane's quantitative algorithmic trading framework built with Python and MetaTrader 5 (MT5). It automates market order execution, crypto arbitrage, trailing stop-losses, and historical strategy backtesting.";
    }

    // 11. DzidzaAI
    if (
      clean.includes('dzidza') ||
      clean.includes('offline') ||
      clean.includes('school') ||
      clean.includes('primary') ||
      clean.includes('learning')
    ) {
      return "DzidzaAI is an offline-first learning platform tailored for primary learners in low-connectivity areas across Zimbabwe. It caches content locally using SQLite/IndexedDB and provides multilingual guidance in English, Shona, and Ndebele.";
    }

    // 12. Skills / Tech stack
    if (
      clean.includes('skill') ||
      clean.includes('stack') ||
      clean.includes('technologies') ||
      clean.includes('language') ||
      clean.includes('python') ||
      clean.includes('sql') ||
      clean.includes('tools')
    ) {
      return "Tsakane's core technical stack includes:\n• Languages: Python, SQL, JavaScript, TypeScript, HTML5/CSS3, Bash\n• Databases: PostgreSQL, MySQL, SQLite, MongoDB\n• Infrastructure: Linux Administration, Kubernetes monitoring, Docker, Git/GitHub\n• Applied Focus: AI Integration, Financial IT Operations, and Data Analytics.";
    }

    // 13. Contact / Hiring / Email
    if (
      clean.includes('contact') ||
      clean.includes('email') ||
      clean.includes('reach') ||
      clean.includes('hire') ||
      clean.includes('linkedin') ||
      clean.includes('telegram') ||
      clean.includes('message')
    ) {
      return "You can reach Tsakane directly through:\n• Email: tsakane.1578@gmail.com\n• LinkedIn: linkedin.com/in/tsakane-sithole-b39276197\n• Telegram: @Mxtaker (t.me/Mxtaker)\n• Portfolio: tsakanesithole.co.zw";
    }

    // 14. Target Roles
    if (
      clean.includes('role') ||
      clean.includes('career') ||
      clean.includes('target') ||
      clean.includes('looking for') ||
      clean.includes('hire')
    ) {
      return "Tsakane is actively seeking opportunities as an ICT Graduate Trainee, Systems Support Engineer, Data & BI Analyst, Junior Cybersecurity Analyst, or AI Integration Engineer.";
    }

    // 15. Help / Command Menu
    if (
      clean === 'help' ||
      clean === 'commands' ||
      clean === 'menu' ||
      clean === 'what can i ask' ||
      clean === 'options' ||
      clean === 'manual'
    ) {
      return `========================================
    FRIDAY SYSTEM MANUAL // COMMAND INDEX
========================================

[ QUICK SHORTCUTS — TYPE 1 TO 9 ]
  [1] why-hire    : Top 3 compelling reasons to hire Tsakane
  [2] experience  : Metbank digital banking & Kubernetes ops
  [3] education   : BCom Honours (MSU) & academic coursework
  [4] projects    : Overview of all 6 engineered systems
  [5] stack       : Technical languages, databases & infra
  [6] contact     : Direct email, LinkedIn, and Telegram
  [7] sysinfo     : Host telemetry, architecture & region
  [8] joke        : Tech & programmer humor
  [9] matrix      : Follow the white rabbit...

[ DIAGNOSTICS & EASTER EGGS ]
  • time / date   : Real-time clock & Harare CAT sync
  • ping          : Check simulated latency to gateway
  • status        : Operating condition & system health
  • friday        : Architecture of voice assistant engine
  • aegis         : Algorithmic trading & MT5 crypto arbitrage
  • ironman       : Initialize Mark 85 arc reactor protocol
  • coffee        : Brew a quick dose of developer fuel
  • quote         : Curated computer science quote
  • roll-dice     : Test your luck with a D20 roll
  • clear         : Reset and flush terminal history

💡 Tip: Type any command name or simply enter a number [1] through [9]!`;
    }

    // 16. Why Hire Tsakane
    if (clean.includes('why-hire') || clean.includes('why hire') || clean.includes('why should we hire')) {
      return `TOP 3 REASONS TO HIRE TSAKANE:
1. The Rare Hybrid: A strong BCom Honours in Information Systems combined with enterprise banking operations at Metbank — bridging business strategy, data integrity, and tech.
2. Proven Builder: He doesn't just read documentation; he builds real software — voice assistants in Python, offline-first educational PWAs with SQLite, and algorithmic trading systems with MT5.
3. Reliability & Systems Discipline: Hands-on exposure monitoring Kubernetes microservices, diagnosing POS terminal anomalies, and maintaining uptime in high-stakes environments.`;
    }

    // 17. System Info & Diagnostics
    if (clean === 'sysinfo' || clean === 'info' || clean === 'specs') {
      return `TSakaneOS System Telemetry:
• Host Platform : Next.js 16.4 App Router (Turbopack)
• Client Engine : React 19 + TypeScript
• Deployment   : Vercel Global Edge Network
• Domain Target : tsakanesithole.co.zw
• Timezone      : Harare, Zimbabwe (CAT / UTC+2)
• Interface     : Dual-Theme (Dev Cyber HUD / Recruiter View)
• System Status : 100% Operational // 0 Active Vulnerabilities`;
    }

    // 18. Ping
    if (clean === 'ping') {
      return `PONG! Response time: 14ms.
Simulated round-trip to Harare, Zimbabwe gateway confirmed.
Signal strength: 99.8% // Packet loss: 0.00%`;
    }

    // 19. Status
    if (clean === 'status' || clean === 'health') {
      return `SYSTEM HEALTH DIAGNOSTIC:
• Voice Assistant Pipeline (FRIDAY) : STANDBY / READY
• Crypto Arbitrage Engine (aegisBTC) : READY
• Offline PWA Caching (DzidzaAI)    : SYNCED
• Metbank Incident Telemetry        : LOGGED
• Overall Operating Condition       : NOMINAL`;
    }

    // 20. Matrix Easter Egg
    if (clean === 'matrix' || clean === 'neo' || clean === 'red pill') {
      return `Wake up, Recruiter...
The Matrix has you.
Follow the white rabbit: https://github.com/Signas-58
Knock, knock, Neo. 🐇💊`;
    }

    // 21. Iron Man / Tony Stark Easter Egg
    if (
      clean.includes('ironman') ||
      clean.includes('iron man') ||
      clean.includes('tony stark') ||
      clean.includes('protocol') ||
      clean.includes('jarvis')
    ) {
      return `Protocol Mark 85 Initialized.
Arc reactor output: 100% capacity.
Repulsors: Online.
F.R.I.D.A.Y.: "At your service, boss. Sometimes you gotta run before you can walk." — Tony Stark.`;
    }

    // 22. Coffee Easter Egg
    if (clean === 'coffee' || clean.includes('brew') || clean.includes('caffeine')) {
      return `☕ Fresh developer roast brewed!
[████████████████] 100%
Converting caffeine directly into clean TypeScript and resilient SQL queries... Complete.`;
    }

    // 23. Programmer Jokes
    if (clean === 'joke' || clean.includes('funny') || clean.includes('tell me a joke')) {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🪲 (And because TSakaneOS looks much cooler in midnight cyan).",
        "There are only 10 types of people in the world: those who understand binary, and those who don't.",
        "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
        "Why did the developer go broke? Because he used up all his cache!",
        "Why do Java programmers wear glasses? Because they don't C#!",
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }

    // 24. Tech Quotes
    if (clean === 'quote' || clean.includes('inspiration')) {
      const quotes = [
        "\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\" — Martin Fowler",
        "\"First, solve the problem. Then, write the code.\" — John Johnson",
        "\"Simplicity is prerequisite for reliability.\" — Edsger W. Dijkstra",
        "\"The best error message is the one that never shows up.\" — Thomas Fuchs",
        "\"Make it work, make it right, make it fast.\" — Kent Beck",
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    }

    // 25. Roll Dice
    if (clean === 'roll' || clean === 'roll-dice' || clean === 'dice') {
      const roll = Math.floor(Math.random() * 20) + 1;
      if (roll === 20) {
        return `🎲 Rolling d20... Result: [ 20 ] - NATURAL 20! Critical success on hiring Tsakane. All team velocity metrics increase with advantage!`;
      }
      if (roll === 1) {
        return `🎲 Rolling d20... Result: [ 1 ] - Critical miss! You accidentally closed the tab without bookmarking Tsakane's CV. Quick, click 'View CV' before it's too late!`;
      }
      return `🎲 Rolling d20... Result: [ ${roll} ]. Successful check! Difficulty Class passed. Tsakane is ready for your team.`;
    }

    // Default intelligent fallback
    return `Regarding "${rawInput}": Tsakane Sithole is an Information Systems honours graduate with digital banking operations experience at Metbank. He specializes in building practical software, AI automation, and secure enterprise IT systems.\n\n💡 Tip: Type 'help' to see the full list of interactive commands and Easter eggs!`;
  };

  const handleSend = (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim() || isTyping) return;

    // Reset command
    if (textToSend.trim().toLowerCase() === 'clear' || textToSend.trim().toLowerCase() === 'reset') {
      setMessages([{ sender: 'ai', text: initialGreeting }]);
      setInput('');
      return;
    }

    const userMsg: ChatMessage = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Realistic response delay
    setTimeout(() => {
      const reply = resolveAnswer(textToSend);
      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages([{ sender: 'ai', text: initialGreeting }]);
    setInput('');
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
          An interactive demo preview of FRIDAY's intent engine. Ask common practical questions (*&quot;Who made you?&quot;*, *&quot;What time is it?&quot;*, *&quot;How do you work?&quot;*) or query Tsakane&apos;s background.
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
              FRIDAY_TERMINAL // INTENT_ENGINE v2.0
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-400 transition-colors"
              title="Reset Terminal Session"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px]">System Online</span>
            </div>
          </div>
        </div>

        {/* Suggested Practical Prompt Chips */}
        <div
          className={`px-5 py-3 border-b flex flex-wrap items-center gap-2 text-xs font-mono ${
            isRecruiterMode ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/40 border-slate-800'
          }`}
        >
          <span className="text-slate-400 py-1">Try asking:</span>
          {promptChips.map((chip, i) => (
            <button
              key={i}
              onClick={() => handleSend(chip)}
              disabled={isTyping}
              className={`px-3 py-1 rounded-md border transition-all ${
                isRecruiterMode
                  ? 'bg-white border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600'
                  : 'bg-cyan-950/30 border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/40 hover:shadow-[0_0_10px_rgba(0,243,255,0.2)]'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Chat History Log */}
        <div className="p-5 sm:p-6 min-h-[280px] max-h-[460px] overflow-y-auto space-y-4">
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
                className={`max-w-[85%] sm:max-w-[78%] p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
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
                <span>FRIDAY is processing query</span>
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
              placeholder="Ask FRIDAY: 'Who made you?', 'How do you work?', 'What time is it?', or about Metbank..."
              disabled={isTyping}
              className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono border focus:outline-none transition-colors ${
                isRecruiterMode
                  ? 'bg-slate-50 border-slate-300 focus:border-blue-600 text-slate-900'
                  : 'bg-slate-900/80 border-cyan-500/30 focus:border-cyan-400 text-slate-200 placeholder:text-slate-500'
              }`}
            />
          </div>

          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
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
