'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Copy, Check, ExternalLink, Mail, Phone, Github, Linkedin, Globe, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio-data';
import { useToast } from './Toast';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { showToast } = useToast();
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Generate clean text/HTML formatted downloadable file
    const resumeText = `
===================================================================
PAPPU KUMAR YADAV - SOFTWARE ENGINEER RESUME
Phone: ${PORTFOLIO_DATA.personal.phone} | Email: ${PORTFOLIO_DATA.personal.email}
GitHub: ${PORTFOLIO_DATA.personal.github} | LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
LeetCode: ${PORTFOLIO_DATA.personal.leetcode}
===================================================================

EDUCATION
- B.Tech in Information Technology | G.L. Bajaj Institute of Technology & Management (2023 - 2027) | SGPA: 7.53
- Intermediate (12th) Science (PCM) | Saraswati Vidya Mandir, Dhanbad (2020 - 2022) | 75.6%

TECHNICAL SKILLS
- Frontend: HTML, React.js, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js, REST APIs, Prisma ORM, JWT, Zod
- Databases: MongoDB, PostgreSQL, MySQL
- Cloud & DevOps: AWS (EC2, S3), Docker, Nginx
- Languages: JavaScript, C++
- CS Fundamentals: DBMS, OOP, Computer Networks, Operating Systems, Data Structures & Algorithms

EXPERIENCE
SDE Intern | InfoTechBrains — Smarter Business Systems (June 2025 – Aug 2025)
- Designed and shipped 12 RESTful API endpoints with Zod schema validation, reducing malformed-request errors by ~40%.
- Built a full LMS from scratch (course creation, student enrollment, progress tracking) end-to-end within a 2-month window.

PROJECTS
1. Abhiyantri Setu (Next.js, TypeScript, PostgreSQL, Prisma ORM, Better Auth, Tailwind CSS)
   - Full stack construction-services marketplace connecting homeowners with 5+ verified professional categories.
   - Role-based Client and Provider dashboards, lead discovery, job posting, quotation workflows covering 10+ API routes.
   - Relational PostgreSQL database schema with 7+ entities using Prisma ORM.

2. Hungry Nutrition (React.js, Node.js, Express.js, MongoDB, JWT, Tailwind CSS, AWS EC2)
   - Full-stack e-commerce platform with product catalog management, shopping cart, and Razorpay payment gateway integration.
   - Self-hosted on AWS EC2 using Nginx as a reverse proxy.

3. Studio Ads Pro (Next.js, React, Tailwind CSS)
   - High-performance software & AI agents agency platform with interactive services showcase and appointment booking.

CODING PROFILES & ACHIEVEMENTS
- LeetCode (mryadav__70): Solved 400+ problems | Max Rating: 1505 | Top 15%
- Top 10 team in Internal Smart India Hackathon (SIH) at G.L. Bajaj Institute
- Web Development Certificate Issued by 100xDevs
- Unstop Campus Ambassador: Organized 5+ technical events reaching 1,000+ students
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Pappu_Kumar_Yadav_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Resume downloaded successfully!');
  };

  const handleCopyPlainText = () => {
    navigator.clipboard.writeText(`
Pappu Kumar Yadav
Full-Stack Software Engineer
Email: ${PORTFOLIO_DATA.personal.email} | Phone: ${PORTFOLIO_DATA.personal.phone}
GitHub: ${PORTFOLIO_DATA.personal.github} | LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
LeetCode: ${PORTFOLIO_DATA.personal.leetcode}
    `);
    setCopied(true);
    showToast('Contact info copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-950/90 print:hidden">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white font-mono">
                Pappu_Kumar_Yadav_Resume.pdf
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
                title="Print Document"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                onClick={handleDownloadPDF}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-100 font-sans space-y-6 text-sm leading-relaxed print:p-0 print:bg-white print:text-black">
            
            {/* Header / Contact Info */}
            <div className="border-b border-white/10 pb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Pappu Kumar Yadav
                </h1>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  Full-Stack Software Engineer • B.Tech Information Technology
                </p>
              </div>

              <div className="text-xs font-mono text-slate-300 space-y-1 text-left sm:text-right">
                <div>📞 +91 8651850583</div>
                <div>📧 technoyadav1234@gmail.com</div>
                <div>🌐 Greater Noida, UP, India</div>
                <div className="flex flex-wrap gap-2 justify-start sm:justify-end text-[11px] text-cyan-400 pt-1">
                  <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                  <span>•</span>
                  <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                  <span>•</span>
                  <a href={PORTFOLIO_DATA.personal.leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline">LeetCode</a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-1">
                EDUCATION
              </h2>

              <div className="flex justify-between items-start text-xs font-mono">
                <div>
                  <span className="font-bold text-white">B.Tech in Information Technology</span>
                  <div className="text-slate-400">G.L. Bajaj Institute of Technology and Management, Greater Noida</div>
                </div>
                <div className="text-right">
                  <span className="text-cyan-400 font-bold">SGPA: 7.53</span>
                  <div className="text-slate-500">Oct 2023 – Aug 2027</div>
                </div>
              </div>

              <div className="flex justify-between items-start text-xs font-mono pt-1">
                <div>
                  <span className="font-bold text-white">Intermediate (12th) — Science (PCM)</span>
                  <div className="text-slate-400">Saraswati Vidya Mandir, Dhanbad</div>
                </div>
                <div className="text-right">
                  <span className="text-cyan-400 font-bold">75.6%</span>
                  <div className="text-slate-500">2020 – 2022</div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-1">
                TECHNICAL SKILLS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs">
                <div><span className="font-mono text-slate-400 font-semibold">Frontend:</span> <span className="text-slate-200">HTML, React.js, Next.js, TypeScript, Tailwind CSS</span></div>
                <div><span className="font-mono text-slate-400 font-semibold">Backend:</span> <span className="text-slate-200">Node.js, Express.js, REST APIs, Prisma ORM, JWT, Zod</span></div>
                <div><span className="font-mono text-slate-400 font-semibold">Databases:</span> <span className="text-slate-200">MongoDB, PostgreSQL, MySQL</span></div>
                <div><span className="font-mono text-slate-400 font-semibold">Cloud & DevOps:</span> <span className="text-slate-200">AWS (EC2, S3), Docker, Nginx</span></div>
                <div><span className="font-mono text-slate-400 font-semibold">Languages:</span> <span className="text-slate-200">JavaScript, C++</span></div>
                <div><span className="font-mono text-slate-400 font-semibold">CS Fundamentals:</span> <span className="text-slate-200">DBMS, OOP, Computer Networks, OS, DSA</span></div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-1">
                EXPERIENCE
              </h2>

              {PORTFOLIO_DATA.experience.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-white">{exp.role} — <span className="text-cyan-400">{exp.company}</span></span>
                    <span className="text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5 pl-1">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-1">
                PROJECTS
              </h2>

              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-white">{proj.title} <span className="text-slate-500 font-normal">({proj.techStack.join(', ')})</span></span>
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(proj.liveUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="text-cyan-400 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5 pl-1">
                    {proj.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Coding Profiles & Achievements */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-1">
                CODING PROFILES & ACHIEVEMENTS
              </h2>

              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pl-1 font-sans">
                <li><strong className="text-white font-mono">LeetCode ({PORTFOLIO_DATA.codingStats.leetcode.username}):</strong> Solved 400+ problems (95 Easy, 250 Medium, 55 Hard) | Max Rating: 1505 | Top 15% globally across contests.</li>
                <li><strong className="text-white font-mono">Smart India Hackathon (SIH):</strong> Selected among Top 10 teams in Internal SIH out of all participating teams from G.L. Bajaj Institute.</li>
                <li><strong className="text-white font-mono">100xDevs Certification:</strong> Web Development Certificate issued by 100xDevs.</li>
                <li><strong className="text-white font-mono">Unstop Campus Ambassador:</strong> Organised & promoted 5+ technical events reaching 1,000+ students across campus.</li>
              </ul>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 border-t border-white/10 bg-slate-950/90 flex items-center justify-between text-xs font-mono text-slate-400">
            <button
              onClick={handleCopyPlainText}
              className="hover:text-cyan-400 flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Contact Summary</span>
            </button>

            <span>Pappu Kumar Yadav Portfolio</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
