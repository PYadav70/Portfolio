'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  Clock, 
  MapPin, 
  ExternalLink,
  Code2,
  Terminal,
  Download,
  Sparkles,
  Award
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio-data';
import { useToast } from './Toast';
import { ProfilePhoto } from './ProfilePhoto';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as IST / GMT+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const timeStr = now.toLocaleTimeString('en-GB', options);
      setCurrentTime(`${timeStr} GMT+5:30`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    showToast('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Radial Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-radial-gradient pointer-events-none opacity-80" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Social Icon Bar / Quick Links - Matching Saurabh layout screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all group"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all group"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 hover:bg-slate-800 transition-all group font-mono text-xs font-bold"
            title="LeetCode Profile (400+ Solved)"
          >
            <Code2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all group"
            title="Send Email"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all group"
            title="Download PDF Resume"
          >
            <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>

        {/* Profile Card & Bio Container */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          
          {/* Avatar & Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-3 shrink-0"
          >
            <div className="relative group">
              <ProfilePhoto className="w-28 h-28 sm:w-36 sm:h-36" />

              {/* Status Badge */}
              <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-glow" />
                <span>{PORTFOLIO_DATA.personal.status}</span>
              </div>
            </div>
          </motion.div>

          {/* Core Info & Title */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 space-y-4"
          >
            {/* Main Name Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                {PORTFOLIO_DATA.personal.name}<span className="text-cyan-400">.</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm font-mono">
                <span className="text-cyan-400 font-semibold">{PORTFOLIO_DATA.personal.handle}</span>
                <span className="text-slate-600">•</span>
                
                {/* Copyable Email Pill */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors group cursor-pointer bg-slate-900/60 px-2.5 py-1 rounded-md border border-white/5 hover:border-cyan-500/30"
                >
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl font-semibold text-slate-200">
              I build <span className="text-white underline decoration-cyan-500 decoration-2 underline-offset-4">Modern WebApps</span>. <span className="text-cyan-400 underline decoration-cyan-500/60 decoration-2 underline-offset-4">Backends</span>.
            </p>

            {/* Quote */}
            <p className="text-sm sm:text-base font-mono text-slate-400 italic">
              {PORTFOLIO_DATA.personal.quote}
            </p>

            {/* Digital Clock & Location Widget */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>{currentTime || '15:51:16 GMT+5:30'}</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>

            {/* Highlights Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5 text-left">
                <div className="text-xs font-mono text-slate-400">DSA & Algorithms</div>
                <div className="text-lg font-bold text-cyan-400 font-mono mt-0.5">400+ Solved</div>
                <div className="text-[10px] font-mono text-slate-500">Max Rating 1505</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5 text-left">
                <div className="text-xs font-mono text-slate-400">Full-Stack Apps</div>
                <div className="text-lg font-bold text-cyan-400 font-mono mt-0.5">3 Production</div>
                <div className="text-[10px] font-mono text-slate-500">Next.js & AWS EC2</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/50 border border-white/5 text-left col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-slate-400">B.Tech IT</div>
                <div className="text-lg font-bold text-cyan-400 font-mono mt-0.5">SGPA 7.53</div>
                <div className="text-[10px] font-mono text-slate-500">G.L. Bajaj Institute</div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
