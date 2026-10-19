'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GithubIcon, LinkedinIcon } from './Icons';
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users
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
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-slate-100 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-blue-600" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700">
              Curriculum Vitae // Stanford Tsakane Sithole
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Official PDF Download */}
            <a
              href="/Tsakane_Sithole_CV.pdf"
              download="Stanford_Tsakane_Sithole_CV.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
              title="Download original signed PDF with certified educational certificates"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* View Raw PDF in New Tab */}
            <a
              href="/Tsakane_Sithole_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
              title="Open full 8-page PDF document in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>

            {/* Print / Save */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
              title="Print CV or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save</span>
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
                Stanford Tsakane Sithole
              </h1>
              <p className="text-base font-semibold text-blue-700 mt-1">
                Information Systems Graduate (BCom Hons 2.1) | Digital Banking & IT Operations
              </p>
              <p className="text-xs text-slate-600 mt-1.5 max-w-xl leading-relaxed">
                An Information Systems graduate with a Bachelor of Commerce Honours Degree (2.1) from Midlands State University, with practical experience in digital banking, merchant services, IT support, payment systems, data analysis, and cybersecurity. Possesses strong analytical, problem-solving, and communication skills and performs well in collaborative environments.
              </p>
            </div>

            <div className="text-xs font-mono space-y-1.5 text-slate-600 text-right shrink-0">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <a href="tel:+263777985546" className="hover:text-blue-600">+263 77 798 5546</a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <a href="mailto:tsakane.1578@gmail.com" className="hover:text-blue-600">tsakane.1578@gmail.com</a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Harare & Gweru, Zimbabwe</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                <a href="https://zw.linkedin.com/in/tsakane-sithole-b39276197" target="_blank" rel="noreferrer" className="hover:text-blue-600">
                  linkedin.com/in/tsakane-sithole-b39276197
                </a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-blue-600" />
                <a href="https://github.com/Signas-58" target="_blank" rel="noreferrer" className="hover:text-blue-600">
                  github.com/Signas-58
                </a>
              </p>
            </div>
          </div>

          {/* Quick Attributes & Licenses */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
            <div>
              <span className="text-slate-500 font-mono">Driver&apos;s License:</span>
              <p className="font-semibold text-slate-800">Clean Class 4</p>
            </div>
            <div>
              <span className="text-slate-500 font-mono">Languages:</span>
              <p className="font-semibold text-slate-800">English & Shona</p>
            </div>
            <div>
              <span className="text-slate-500 font-mono">Nationality:</span>
              <p className="font-semibold text-slate-800">Zimbabwean</p>
            </div>
            <div>
              <span className="text-slate-500 font-mono">Degree Class:</span>
              <p className="font-semibold text-blue-700">Upper Second (2.1)</p>
            </div>
          </div>

          {/* Career Development & Detailed Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>Career Development & Detailed Experience</span>
            </h2>

            <div className="space-y-4">
              <div className="border-l-2 border-blue-600 pl-4 py-1 space-y-3">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Metbank Limited
                    </h3>
                    <p className="text-xs text-blue-700 font-semibold">
                      Reporting to: Head of Digital Banking & Head of IT
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    February 2024 – January 2025
                  </span>
                </div>

                {/* Sub-role 1: Digital Banking Officer */}
                <div className="space-y-2 mt-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>Role 1: Digital Banking Officer</span>
                  </h4>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-700">
                    <li>
                      <strong>Digital Channels Management:</strong> Oversaw daily operations of mobile banking, internet banking, USSD platforms, and online portals to ensure seamless customer experience. Monitored system performance, uptime, and incident response to maintain service reliability.
                    </li>
                    <li>
                      <strong>Customer Support & Engagement:</strong> Provided frontline support for digital banking users, resolving login issues, transaction failures, and app errors.
                    </li>
                    <li>
                      <strong>Risk, Fraud and Compliance:</strong> Identified and escalated suspicious digital activity, reducing cyber-related risks. Ensured digital operations complied with banking regulations, data privacy laws, and security standards.
                    </li>
                    <li>
                      <strong>Data Insights & Reporting:</strong> Analysed customer usage data and platform analytics to drive digital optimization decisions. Generated dashboards and performance reports to inform management strategy.
                    </li>
                    <li>
                      <strong>Digital Onboarding Initiative:</strong> Helped implement digital account opening, reducing branch congestion and improving onboarding speed.
                    </li>
                    <li>
                      <strong>Digital Product Enhancement:</strong> Collaborated with IT and product teams to enhance user interface (UI) and user experience (UX) of digital channels.
                    </li>
                    <li>
                      <strong>Infrastructure Monitoring & System Support:</strong> Monitored containerized application environments using Kubernetes to maintain operational continuity. Performed controlled restarts of Kubernetes clusters to resolve service interruptions and restore connectivity. Supported system uptime through structured monitoring and incident response practices.
                    </li>
                  </ul>
                </div>

                {/* Sub-role 2: Merchant Services Officer */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                    <span>Role 2: Merchant Services Officer</span>
                  </h4>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-700">
                    <li>
                      <strong>Merchant Onboarding & Support:</strong> Onboarded new merchants onto POS, online payment, and mobile payment platforms. Guided merchants through setup, activation, and integration of payment devices and digital payment solutions.
                    </li>
                    <li>
                      <strong>Terminal and System Management:</strong> Coordinated the deployment, replacement, and maintenance of POS terminals. Conducted troubleshooting for device errors, network issues, declined transactions, and connectivity failures.
                    </li>
                    <li>
                      <strong>Transaction Monitoring:</strong> Monitored merchant transaction performance and worked to reduce downtimes or failed transaction rates. Ensured proper settlement cycles, reconciliation accuracy, and reporting.
                    </li>
                    <li>
                      <strong>Risk, Fraud and Compliance:</strong> Identified suspicious merchant activity and escalated potential fraud cases. Ensured merchants complied with card scheme rules, KYC requirements, and payment security standards.
                    </li>
                    <li>
                      <strong>Collaboration & Process Improvement:</strong> Worked with IT, finance, and operations teams to strengthen merchant services workflows. Provided feedback to improve payment products, APIs, and merchant systems.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Qualifications */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Academic & Certified Qualifications</span>
            </h2>

            {/* University */}
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Bachelor of Commerce Honours Degree In Information Systems
                  </h3>
                  <p className="text-xs text-blue-700 font-semibold">
                    Midlands State University (MSU) // Faculty of Business Sciences
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                    Upper Second Division (2.1)
                  </span>
                  <p className="text-[11px] font-mono text-slate-500 mt-0.5">2021 – 2025 (Cert #11812)</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                <strong>Core Coursework:</strong> Database Management Systems, Systems Analysis & Design, Information Security & Risk Management, Business Intelligence, Computer Networks, Software Project Management, Enterprise Architecture.
              </p>
            </div>

            {/* High School & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-900">ZIMSEC Advanced Level (GCE A-Level)</h4>
                  <span className="text-[11px] font-mono text-slate-500">2019 – 2021</span>
                </div>
                <p className="text-blue-700 font-medium">Thornhill High School</p>
                <p className="text-slate-600 mt-1">
                  • Computer Science: <strong>C(c) Pass</strong><br />
                  • Business Studies: <strong>C(c) Pass</strong><br />
                  • Geography: <strong>B(b) Pass</strong>
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-slate-900">National Foundation Certificate</h4>
                  <span className="text-[11px] font-mono text-slate-500">April 2019</span>
                </div>
                <p className="text-blue-700 font-medium">Ministry of Higher & Tertiary Education</p>
                <p className="text-slate-600 mt-1">
                  Computer Operations & Packages (Cert #141242). Plus 9 ZIMSEC O-Levels including Mathematics, English, Combined Science, Geography (A), and Commerce.
                </p>
              </div>
            </div>
          </div>

          {/* Key Technical Systems Engineered */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>Key Technical Systems Engineered</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900">FRIDAY Voice Assistant (Python)</h4>
                <p className="text-slate-600 mt-1">
                  Autonomous voice-activated assistant with natural speech recognition, intent resolution, local LLM routing, and automated desktop OS task execution.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900">aegisBTC Trading Automation (Python / MT5)</h4>
                <p className="text-slate-600 mt-1">
                  Automated arbitrage and risk-managed algorithmic trading system integrated with MetaTrader 5 API with stop-loss protection and execution logging.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900">DzidzaAI Learning Platform (PWA / SQLite)</h4>
                <p className="text-slate-600 mt-1">
                  Offline-first educational PWA designed for Zimbabwean primary schools in low-connectivity areas, with local SQLite caching and English/Shona/Ndebele guidance.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900">Banking Analytics & POS Telemetry Dashboard</h4>
                <p className="text-slate-600 mt-1">
                  SQL-powered analytics platform monitoring simulated POS heartbeat telemetry, transaction volume trends, error spikes, and reconciliation logs.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills & Competencies */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Core Skills & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <p>
                <strong>Digital Channels:</strong> Mobile Banking, Internet Banking, USSD, POS Terminal Management
              </p>
              <p>
                <strong>Infrastructure & OS:</strong> Kubernetes (Cluster Monitoring & Restarts), Linux, Docker, Git/GitHub
              </p>
              <p>
                <strong>Programming & Scripting:</strong> Python, SQL, JavaScript, TypeScript, Bash, HTML5/CSS3
              </p>
              <p>
                <strong>Databases & Productivity:</strong> PostgreSQL, MySQL, SQLite, MS Excel, QuickBooks, Word, PowerPoint
              </p>
            </div>
          </div>

          {/* Official Professional References */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Official Professional References</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900">Mr. W. Chakanyuka</h4>
                <p className="text-blue-700 font-medium">Head of Digital Banking</p>
                <p className="text-slate-600 mt-0.5">Met Holdings / Metbank Limited</p>
                <div className="mt-2 space-y-1 font-mono text-[11px] text-slate-600">
                  <p>Cell: <a href="tel:+263772887524" className="hover:text-blue-600">+263 77 288 7524</a></p>
                  <p>Email: <a href="mailto:wchakanyuka@metholdings.co.zw" className="hover:text-blue-600">wchakanyuka@metholdings.co.zw</a></p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900">Mr. B. Dube</h4>
                <p className="text-blue-700 font-medium">Senior Official</p>
                <p className="text-slate-600 mt-0.5">Metbank Limited</p>
                <div className="mt-2 space-y-1 font-mono text-[11px] text-slate-600">
                  <p>Cell: <a href="tel:+263772699555" className="hover:text-blue-600">+263 77 269 9555</a></p>
                  <p>Email: <a href="mailto:bdube@metbank.co.zw" className="hover:text-blue-600">bdube@metbank.co.zw</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
