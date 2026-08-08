'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Download, 
  Palette, 
  Sparkles, 
  Menu, 
  X, 
  Check, 
  Code2,
  User,
  Briefcase,
  Layers,
  Mail,
  FileText
} from 'lucide-react';
import { useTheme, ThemeMode } from './ThemeContext';
import { useToast } from './Toast';

interface NavbarProps {
  activeSection: string;
  onSelectSection: (section: string) => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export function Navbar({ activeSection, onSelectSection, onOpenTerminal, onOpenResume }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const { showToast } = useToast();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'all', label: 'cd ~', icon: User },
    { id: 'about', label: 'cd /about', icon: Layers },
    { id: 'projects', label: 'cd /projects', icon: Code2 },
    { id: 'experience', label: 'cd /experience', icon: Briefcase },
    { id: 'coding', label: 'cd /coding', icon: Sparkles },
    { id: 'contact', label: 'cd /contact', icon: Mail },
  ];

  const themes: { id: ThemeMode; name: string; color: string }[] = [
    { id: 'terminal', name: 'Electric Cyan', color: '#06b6d4' },
    { id: 'oled', name: 'OLED Black', color: '#38bdf8' },
    { id: 'matrix', name: 'Cyber Matrix', color: '#10b981' },
    { id: 'light', name: 'Minimal Light', color: '#6366f1' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3 backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-2xl' 
        : 'py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Navigation Links - Terminal Style Section Switcher */}
        <nav className="hidden md:flex items-center gap-1.5 font-mono text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onSelectSection(link.id);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs sm:text-sm transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 font-bold shadow-md shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border-transparent'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <button 
            onClick={() => {
              onSelectSection('all');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className="font-mono text-sm text-cyan-400 font-bold"
          >
            Pappu.dev
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-cyan-400 text-xs sm:text-sm font-mono transition-all group"
            title="Open Interactive Terminal (Cmd+K)"
          >
            <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">CLI</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded border border-white/10">
              ⌘K
            </kbd>
          </button>

          {/* Theme Selector */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-cyan-400 transition-all"
              aria-label="Theme selector"
              title="Switch Theme"
            >
              <Palette className="w-4 h-4 text-cyan-400" />
            </button>

            <AnimatePresence>
              {themeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 p-2 rounded-xl bg-slate-900 border border-white/15 shadow-2xl z-50 backdrop-blur-xl"
                >
                  <div className="text-[11px] font-mono text-slate-400 px-2 py-1 mb-1 border-b border-white/10">
                    SELECT THEME
                  </div>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setThemeDropdownOpen(false);
                        showToast(`Theme changed to ${t.name}`);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono text-left transition-colors ${
                        theme === t.id
                          ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.color }} />
                        {t.name}
                      </div>
                      {theme === t.id && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Download Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2 font-mono text-sm">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      onSelectSection(link.id);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-mono text-xs cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
