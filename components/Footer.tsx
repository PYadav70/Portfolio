'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio-data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 px-4 sm:px-6 relative bg-slate-950/80">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Vibe Text matching Saurabh screenshot #6 */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">✌️</span>
          <span className="text-2xl font-black text-white font-sans tracking-tight">
            peace out<span className="text-cyan-400">.</span>
          </span>
        </div>

        {/* Center / Right info */}
        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <span>© 2026 {PORTFOLIO_DATA.personal.name}.</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
