'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from '../components/ThemeContext';
import { ToastProvider } from '../components/Toast';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TechStack } from '../components/TechStack';
import { Projects } from '../components/Projects';
import { GitHubActivity } from '../components/GitHubActivity';
import { Experience } from '../components/Experience';
import { CodingProfiles } from '../components/CodingProfiles';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ResumeModal } from '../components/ResumeModal';
import { TerminalModal } from '../components/TerminalModal';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('all');

  // Global keyboard shortcut (Cmd+K / Ctrl+K) for Terminal CLI
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <ToastProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-grid-pattern relative selection:bg-emerald-500 selection:text-black flex flex-col justify-between">
          
          <div>
            {/* Navigation Bar */}
            <Navbar
              activeSection={activeSection}
              onSelectSection={handleSelectSection}
              onOpenTerminal={() => setTerminalOpen(true)}
              onOpenResume={() => setResumeOpen(true)}
            />

            {/* Directory Mode Indicator when viewing a specific section */}
            {activeSection !== 'all' && (
              <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-2 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-bold">DIRECTORY:</span>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    /{activeSection}
                  </span>
                </div>
                <button
                  onClick={() => handleSelectSection('all')}
                  className="px-3 py-1 rounded-md bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Show All Sections (cd ~)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Core Sections */}
            <main className={activeSection === 'all' ? 'space-y-8 pt-0' : 'pt-4 space-y-8 pb-12'}>
              <AnimatePresence mode="wait">
                {activeSection === 'all' && (
                  <motion.div
                    key="all"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-8"
                  >
                    <Hero onOpenResume={() => setResumeOpen(true)} />
                    <TechStack />
                    <Projects />
                    <GitHubActivity />
                    <Experience />
                    <CodingProfiles />
                    <Education />
                    <Contact />
                  </motion.div>
                )}

                {activeSection === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TechStack />
                  </motion.div>
                )}

                {activeSection === 'projects' && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Projects />
                  </motion.div>
                )}

                {activeSection === 'experience' && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-8"
                  >
                    <Experience />
                    <Education />
                  </motion.div>
                )}

                {activeSection === 'coding' && (
                  <motion.div
                    key="coding"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-8"
                  >
                    <CodingProfiles />
                    <GitHubActivity />
                  </motion.div>
                )}

                {activeSection === 'contact' && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Contact />
                  </motion.div>
                )}
              </AnimatePresence>
            </main>
          </div>

          {/* Footer */}
          <Footer />

          {/* Resume Viewer & Download Modal */}
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />

          {/* Terminal CLI Modal */}
          <TerminalModal
            isOpen={terminalOpen}
            onClose={() => setTerminalOpen(false)}
            onOpenResume={() => {
              setTerminalOpen(false);
              setResumeOpen(true);
            }}
          />

        </div>
      </ThemeProvider>
    </ToastProvider>
  );
}
