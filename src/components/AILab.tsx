'use client';

import React, { useState, useRef } from 'react';
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

const developerJokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🪲 (And because TSakaneOS looks much sharper in midnight cyan).",
  "There are only 10 types of people in the world: those who understand binary, and those who don't.",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
  "Why did the developer go broke? Because he used up all his cache!",
  "Why do Java programmers wear glasses? Because they don't C#!",
  "A recruiter asks a candidate: 'What is your greatest strength?'\nCandidate: 'I'm great with recursion.'\nRecruiter: 'Can you give an example?'\nCandidate: 'A recruiter asks a candidate: What is your greatest strength?...",
  "How many software engineers does it take to change a lightbulb?\nNone. That's a hardware issue.",
  "A QA engineer walks into a bar:\n• Orders 1 beer\n• Orders 0 beers\n• Orders 999999999 beers\n• Orders a lizard\n• Orders -1 beers\n• Orders a NULL\nThe first real customer walks in and asks where the bathroom is. The entire bar catches fire.",
  "\"Real programmers don't comment their code. If it was hard to write, it should be hard to understand!\"\n(Don't worry, Tsakane writes clean, fully documented architecture).",
  "Why did the Python developer stay calm during the system crash?\nBecause they had exceptional handling!",
  "An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, wine, liquor, cocktail lounge...",
  "There's no place like 127.0.0.1... except maybe TSakaneOS at http://localhost:3000!"
];

export default function AILab() {
  const { isRecruiterMode } = useTheme();

  const [input, setInput] = useState('');
  const initialGreeting =
    "Greetings! I am F.R.I.D.A.Y., Tsakane's interactive portfolio assistant. You have 6 exploratory queries in this session to ask practical questions ('Who made you?', 'How do you work?', 'What time is it?', Metbank experience, etc). Feel free to ask for a 'joke' anytime — developer jokes are 100% UNLIMITED and never consume your queries!";

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: initialGreeting,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [queriesLeft, setQueriesLeft] = useState(6);
  const jokeIndexRef = useRef(0);

  const getNextJoke = () => {
    const index = jokeIndexRef.current % developerJokes.length;
    const joke = developerJokes[index];
    jokeIndexRef.current = jokeIndexRef.current + 1;
    return `[ JOKE ${index + 1}/${developerJokes.length} ]\n${joke}`;
  };

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
      return `[ 01 // WHY HIRE TSAKANE SITHOLE ]

1. The Rare Business & Tech Hybrid
Holds a BCom Honours in Information Systems from Midlands State University (MSU) paired with digital banking operations at Metbank — bridging business intelligence, system architecture, and risk management.

2. A Proven, Pragmatic Builder
He doesn't just read documentation; he builds end-to-end resilient software:
• F.R.I.D.A.Y. — Autonomous voice-activated AI assistant in Python
• aegisBTC — Algorithmic trading & MT5 arbitrage automation engine
• DzidzaAI — Offline-first multilingual educational PWA for Zimbabwean primary schools
• Campus Safety Alert — Real-time emergency escalation system for MSU

3. Enterprise Production Rigor
Trained in high-stakes banking environments: monitoring Kubernetes microservices, diagnosing POS terminal anomalies, analyzing SQL transaction pipelines, and ensuring 99.9% uptime.

4. Adaptable & High-Velocity Learner
Disciplined, fast-learning, and ready to make an immediate impact across Software Engineering, Systems Support, or Cloud/DevOps teams.

💡 Direct contact: tsakane.1578@gmail.com | Telegram: @Mxtaker`;
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
• Full Name    : Stanford Tsakane Sithole
• Direct Cell  : +263 77 798 5546
• Direct Email : tsakane.1578@gmail.com
• Professional : linkedin.com/in/tsakane-sithole-b39276197
• Telegram     : @Mxtaker (https://t.me/Mxtaker)
• GitHub       : https://github.com/Signas-58
• Official CV  : /Tsakane_Sithole_CV.pdf
Location       : Harare & Gweru, Zimbabwe (CAT / UTC+2)`;
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
      return getNextJoke();
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
      return "Stanford Tsakane Sithole is an Information Systems Honours graduate (Upper Second Division - 2.1) from Midlands State University (MSU) with professional banking operations experience at Metbank (Digital Banking & Merchant Services). He specializes in digital channels management, POS operations, Kubernetes service continuity, data analytics, and intelligent systems (FRIDAY, aegisBTC, DzidzaAI).";
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
      return `[ ACADEMIC & CERTIFIED QUALIFICATIONS ]
• Midlands State University (2021–2025):
  Bachelor of Commerce Honours Degree in Information Systems (2.1 - Upper Second Division, Certificate #11812).
• Thornhill High School (2019–2021):
  ZIMSEC Advanced Level (Computer Science: C, Business Studies: C, Geography: B).
• Ministry of Higher & Tertiary Education (2019):
  National Foundation Certificate in Computer Operations & Packages.
• Additional: Clean Class 4 driver's license.`;
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
      return `[ METBANK EXPERIENCE // FEB 2024 – JAN 2025 ]
Reporting to: Head of Digital Banking & Head of IT
1. Digital Banking Officer:
   • Managed daily operations across Mobile Banking, Internet Banking, USSD, and Online Portals.
   • Frontline support resolving customer transaction failures, app exceptions, and login issues.
   • Monitored containerized environments using Kubernetes; executed controlled service restarts.
   • Championed digital account opening onboarding to cut branch congestion.
2. Merchant Services Officer:
   • Onboarded merchants onto POS terminals and electronic payment channels.
   • Conducted hardware/network troubleshooting for device errors and connectivity failures.
   • Monitored daily settlement cycles, reconciliation accuracy, and fraud/KYC compliance.`;
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

    // 13. Why Hire Tsakane / Candidate Value Proposition
    if (
      clean === 'why-hire' ||
      clean === 'why hire' ||
      clean.includes('why-hire') ||
      clean.includes('why hire') ||
      clean.includes('why should we hire') ||
      clean.includes('why should i hire') ||
      clean.includes('reasons to hire') ||
      clean.includes('why tsakane') ||
      clean.includes('why you') ||
      clean === 'why' ||
      clean === 'hire him'
    ) {
      return `[ TOP 4 REASONS TO HIRE TSAKANE SITHOLE ]

1. The Rare Business & Tech Hybrid
Holds a BCom Honours in Information Systems from Midlands State University (MSU) combined with digital banking operations at Metbank — bridging business intelligence, system architecture, and risk management.

2. A Proven, Pragmatic Builder
He doesn't just read documentation; he builds end-to-end resilient software:
• F.R.I.D.A.Y. — Autonomous voice-activated AI assistant in Python
• aegisBTC — Algorithmic trading & MT5 arbitrage automation engine
• DzidzaAI — Offline-first multilingual educational PWA for Zimbabwean primary schools
• Campus Safety Alert — Real-time emergency escalation system for MSU

3. Enterprise Production Rigor
Trained in high-stakes banking environments: monitoring Kubernetes microservices, diagnosing POS terminal anomalies, analyzing SQL transaction pipelines, and ensuring 99.9% uptime.

4. Adaptable & High-Velocity Learner
Disciplined, fast-learning, and ready to make an immediate impact across Software Engineering, Systems Support, or Cloud/DevOps teams.

💡 Direct contact: tsakane.1578@gmail.com | Telegram: @Mxtaker`;
    }

    // 14. Contact / Channels
    if (
      clean.includes('contact') ||
      clean.includes('email') ||
      clean.includes('reach') ||
      clean.includes('linkedin') ||
      clean.includes('telegram') ||
      clean.includes('message') ||
      clean.includes('phone') ||
      clean.includes('cell') ||
      clean.includes('call') ||
      clean.includes('whatsapp') ||
      clean === 'how to hire' ||
      clean === 'hire'
    ) {
      return `You can reach Stanford Tsakane Sithole directly through:
• Cell / WhatsApp : +263 77 798 5546
• Email           : tsakane.1578@gmail.com
• LinkedIn        : linkedin.com/in/tsakane-sithole-b39276197
• Telegram        : @Mxtaker (t.me/Mxtaker)
• Location        : Harare & Gweru, Zimbabwe (CAT / UTC+2)
• Official CV     : Download at /Tsakane_Sithole_CV.pdf`;
    }

    // 14b. Official CV Download
    if (
      clean === 'cv' ||
      clean === 'resume' ||
      clean.includes('cv') ||
      clean.includes('resume') ||
      clean.includes('curriculum vitae')
    ) {
      return `[ OFFICIAL CURRICULUM VITAE // STANFORD TSAKANE SITHOLE ]
• Full Official Name : Stanford Tsakane Sithole
• Qualifications     : BCom Honours Degree in Information Systems (2.1 - Upper Second), Midlands State University
• Industry Role      : Digital Banking Officer & Merchant Services Officer (Metbank Limited)
• Professional Referees: Mr. W. Chakanyuka (Head of Digital Banking), Mr. B. Dube (Metbank)

📥 Download Tsakane's official signed 8-page CV (including verified certificates):
/Tsakane_Sithole_CV.pdf

Or click the "Download CV (PDF)" button at the top of the page!`;
    }

    // 14c. Professional References
    if (
      clean.includes('reference') ||
      clean.includes('referee') ||
      clean.includes('chakanyuka') ||
      clean.includes('dube')
    ) {
      return `[ OFFICIAL PROFESSIONAL REFERENCES ]

1. Mr. W. Chakanyuka
   • Title : Head of Digital Banking
   • Org   : Met Holdings / Metbank Limited
   • Cell  : +263 77 288 7524
   • Email : wchakanyuka@metholdings.co.zw

2. Mr. B. Dube
   • Title : Senior Official
   • Org   : Metbank Limited
   • Cell  : +263 77 269 9555
   • Email : bdube@metbank.co.zw`;
    }

    // 15. Target Roles
    if (
      clean.includes('role') ||
      clean.includes('career') ||
      clean.includes('target') ||
      clean.includes('looking for') ||
      clean.includes('open to') ||
      clean.includes('opportunities')
    ) {
      return "Tsakane is actively seeking opportunities as an ICT Graduate Trainee, Systems Support Engineer, Data & BI Analyst, Junior Cybersecurity Analyst, or AI Integration Engineer.";
    }

    // 16. Help / Command Menu
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
  [1] why-hire    : Top compelling reasons to hire Tsakane
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
  • clear / reset : Reset terminal and refresh queries

[ SESSION GUARDRAILS ]
  • Query Limit   : 6 exploratory queries per session
  • Jokes & Humor : UNLIMITED (does NOT consume query tokens)
  • Reset         : Type 'reset' or click the top-right button anytime

💡 Tip: Type any command name or simply enter a number [1] through [9]!`;
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

    // 23. Programmer Jokes (12 Alternating Jokes)
    if (
      clean === 'joke' ||
      clean.includes('funny') ||
      clean.includes('tell me a joke') ||
      clean.includes('another joke') ||
      clean.includes('jokes')
    ) {
      return getNextJoke();
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

  const isJokeOrExempt = (raw: string) => {
    const clean = raw.toLowerCase().replace(/[?!.,;]/g, '').trim();
    return (
      clean === 'joke' ||
      clean === '8' ||
      clean === 'option 8' ||
      clean.includes('joke') ||
      clean.includes('jokes') ||
      clean.includes('funny') ||
      clean.includes('laugh') ||
      clean.includes('humor') ||
      clean.includes('humour') ||
      clean === 'help' ||
      clean === 'commands' ||
      clean === 'menu' ||
      clean === 'manual' ||
      clean === 'reset' ||
      clean === 'clear'
    );
  };

  const handleSend = (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim() || isTyping) return;

    // Reset command
    if (textToSend.trim().toLowerCase() === 'clear' || textToSend.trim().toLowerCase() === 'reset') {
      handleReset();
      return;
    }

    const isExempt = isJokeOrExempt(textToSend);

    // If query limit reached and query is NOT a joke or exempt command
    if (queriesLeft <= 0 && !isExempt) {
      const userMsg: ChatMessage = { sender: 'user', text: textToSend };
      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          sender: 'ai',
          text: `🔒 Session query limit reached (0/6 queries used).

To protect service availability, this interactive preview allows 6 exploratory queries per session.

✨ Jokes are completely UNLIMITED! Type 'joke' or click the prompt chip to keep enjoying developer humor.
🔄 Click the 'Reset' button (or type 'reset') to start a fresh 6-query session.
📩 Ready to connect? Contact Tsakane at tsakane.1578@gmail.com or on Telegram @Mxtaker.`,
        },
      ]);
      setInput('');
      return;
    }

    const userMsg: ChatMessage = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Deduct token ONLY if it is not a joke or exempt command
    if (!isExempt) {
      setQueriesLeft((prev) => Math.max(0, prev - 1));
    }

    // Realistic response delay
    setTimeout(() => {
      const reply = resolveAnswer(textToSend);
      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    setMessages([{ sender: 'ai', text: initialGreeting }]);
    setQueriesLeft(6);
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
          An interactive demo preview of FRIDAY&apos;s intent engine with a 6-query session guardrail. Ask common practical questions (*&quot;Who made you?&quot;*, *&quot;What time is it?&quot;*, *&quot;How do you work?&quot;*) or test out the developer jokes (which are 100% exempt from the query count).
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
            {/* 6-Query Lockout Telemetry Counter */}
            <div
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono transition-colors ${
                queriesLeft > 0
                  ? isRecruiterMode
                    ? 'bg-blue-50 border-blue-200 text-blue-700'
                    : 'bg-cyan-950/50 border-cyan-500/30 text-cyan-300 shadow-[0_0_10px_rgba(0,243,255,0.15)]'
                  : 'bg-amber-500/10 border-amber-500/40 text-amber-400 animate-pulse'
              }`}
              title="6 query session lockout is active. Jokes never consume queries!"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>
                {queriesLeft > 0 ? (
                  <>
                    <span className="font-semibold">{queriesLeft}</span>/6 Queries
                  </>
                ) : (
                  <span className="font-semibold text-amber-400">Lockout (0/6)</span>
                )}
              </span>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-400 transition-colors"
              title="Reset Terminal Session & 6 Queries"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px]">System Online</span>
            </div>
          </div>
        </div>

        {/* Suggested Practical Prompt Chips */}
        <div
          className={`px-5 py-3 border-b flex flex-wrap items-center justify-between gap-2 text-xs font-mono ${
            isRecruiterMode ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/40 border-slate-800'
          }`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 py-1">Try asking:</span>
            {promptChips.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSend(chip)}
                disabled={isTyping}
                className={`px-3 py-1 rounded-md border transition-all ${
                  chip === 'joke'
                    ? isRecruiterMode
                      ? 'bg-amber-50 border-amber-300 text-amber-700 font-semibold hover:bg-amber-100'
                      : 'bg-amber-950/30 border-amber-500/40 text-amber-300 font-semibold hover:border-amber-400 hover:bg-amber-900/40 hover:shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                    : isRecruiterMode
                    ? 'bg-white border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600'
                    : 'bg-cyan-950/30 border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/40 hover:shadow-[0_0_10px_rgba(0,243,255,0.2)]'
                }`}
              >
                {chip === 'joke' ? '🎭 joke (unlimited)' : chip}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-1 text-[11px] text-slate-400">
            <span>🎭 Jokes are exempt from the 6-query limit</span>
          </div>
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
              placeholder={
                queriesLeft > 0
                  ? `Ask FRIDAY: 'Who made you?', 'How do you work?', 'What time is it?'... (${queriesLeft}/6 left, jokes unlimited)`
                  : "Session query limit reached (0/6). Click 'Reset' to refresh, or type 'joke' (unlimited)!"
              }
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
