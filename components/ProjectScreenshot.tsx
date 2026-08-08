'use client';

import React from 'react';
import { ExternalLink, Search, ShoppingBag, Sparkles, Star, Users, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProjectScreenshotProps {
  projectId: string;
}

export function ProjectScreenshot({ projectId }: ProjectScreenshotProps) {
  if (projectId === 'abhiyantri-setu') {
    return (
      <div className="w-full h-full bg-[#0d141c] text-slate-100 rounded-t-xl overflow-hidden font-sans select-none flex flex-col justify-between">
        {/* Abhiyantri Setu Header */}
        <div className="bg-[#121a24] px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gradient-to-tr from-amber-500 to-amber-400 rounded flex items-center justify-center font-black text-slate-950 text-[10px]">
              AS
            </div>
            <span className="font-extrabold text-white tracking-tight text-xs">Abhiyantri Setu</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[10px] font-semibold text-slate-400 font-mono">
            <span className="text-amber-400 font-bold border-b border-amber-400 pb-0.5">Home</span>
            <span>Services</span>
            <span>AI Estimation</span>
            <span>Contractors</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[9px] uppercase tracking-wider">
              Join as Pro
            </span>
          </div>
        </div>

        {/* Hero Body */}
        <div className="p-5 sm:p-6 bg-gradient-to-b from-[#101822] to-[#0a0e14] flex-1 flex flex-col justify-center">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[9px] font-mono text-amber-300 mb-2">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              <span>India&apos;s Verified Infra &amp; Home Services Platform</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
              Build, Renovate, Repair & Maintain
            </h3>
            <p className="text-xs sm:text-sm font-extrabold text-amber-400 mt-0.5">
              All in One Trusted Platform
            </p>
            <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
              Find verified contractors, architects, electricians & interior designers with AI-assisted cost estimators.
            </p>

            {/* Search Bar */}
            <div className="mt-3 flex items-center gap-2 p-1 rounded-full bg-[#182330] border border-slate-700 shadow-md">
              <Search className="w-3.5 h-3.5 text-slate-400 ml-2" />
              <span className="text-[10px] text-slate-400 flex-1 truncate">Search interior design, plumbing, construction...</span>
              <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 shrink-0 font-bold">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            {/* Popular Pills */}
            <div className="mt-2.5 flex flex-wrap gap-1 text-[9px] text-slate-300">
              <span className="text-slate-500 font-mono">Popular:</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Interior Design</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Plumbing</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Electrical</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'studio-ads-pro') {
    return (
      <div className="w-full h-full bg-[#07090e] text-white rounded-t-xl overflow-hidden font-sans select-none flex flex-col justify-between">
        {/* Studio Ads Pro Header */}
        <div className="px-4 py-2 border-b border-purple-500/20 flex items-center justify-between text-xs bg-[#0c0e17]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-purple-400 font-black text-xs px-1.5 py-0.5 rounded bg-purple-500/20 border border-purple-500/40">SAP</span>
            <span className="font-black tracking-wider text-white text-xs">STUDIOADSPRO</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30 uppercase">
              AGENCY
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[10px] text-slate-400 font-mono">
            <span>Services</span>
            <span>AI Agents</span>
            <span>Case Studies</span>
            <span>Pricing</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-white text-black font-extrabold text-[9px] hover:bg-slate-200">
            Book Consultation →
          </span>
        </div>

        {/* Hero Section */}
        <div className="p-5 sm:p-6 relative bg-gradient-to-r from-[#0d0e19] via-[#121326] to-[#07090e] flex-1 flex flex-col justify-between overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/40 text-[9px] text-purple-300 font-mono mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>DIGITAL ENGINEERING & AI STUDIO</span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-white leading-tight tracking-tight">
              Software & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">AI Agents</span> That Grow Your Business.
            </h3>

            <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
              Full-stack engineers building web platforms, autonomous AI workflows, and cloud applications with zero handoff delays.
            </p>

            <div className="mt-3 flex items-center gap-2 text-[10px] font-mono">
              <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-bold shadow-md">
                Book Consultation →
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                Explore Work
              </span>
            </div>
          </div>

          {/* Metrics bar */}
          <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-4 gap-1 text-center text-[9px] font-mono relative z-10">
            <div>
              <div className="font-bold text-white text-xs">25+</div>
              <div className="text-slate-500 text-[8px]">Projects</div>
            </div>
            <div>
              <div className="font-bold text-white text-xs">20+</div>
              <div className="text-slate-500 text-[8px]">Clients</div>
            </div>
            <div>
              <div className="font-bold text-purple-400 text-xs">99%</div>
              <div className="text-slate-500 text-[8px]">Satisfaction</div>
            </div>
            <div>
              <div className="font-bold text-cyan-400 text-xs">24/7</div>
              <div className="text-slate-500 text-[8px]">Support</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Hungry Nutrition (SRLABZ)
  return (
    <div className="w-full h-full bg-[#070707] text-white rounded-t-xl overflow-hidden font-sans select-none flex flex-col justify-between border-b border-white/10">
      {/* Header Bar */}
      <div className="px-4 py-2 border-b border-neutral-800 flex items-center justify-between text-xs bg-black">
        <div className="flex items-center gap-2">
          <div className="px-2 py-0.5 bg-white text-black font-black text-[10px] tracking-tighter rounded">
            SRLABZ
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] font-bold tracking-wider text-slate-300 font-mono">
          <span className="text-cyan-400 border-b-2 border-cyan-400 pb-0.5">HOME</span>
          <span>SHOP</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
        </div>
        <div className="flex items-center gap-3 text-slate-300">
          <Search className="w-3.5 h-3.5 hidden sm:block" />
          <div className="relative">
            <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
            <span className="absolute -top-1.5 -right-2 bg-emerald-500 text-black text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Hero Banner (Omega 3) */}
      <div className="p-4 sm:p-5 bg-black text-white flex items-center justify-between relative overflow-hidden">
        <div className="max-w-xs z-10">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">
            Omega 3
          </h3>
          <p className="text-[10px] text-slate-300 mt-1 font-medium">
            Healthy fats for brain and heart health.
          </p>

          <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold shadow-lg">
            <span>Shop now</span>
            <span>→</span>
          </div>
        </div>

        {/* Tub Graphic */}
        <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-950 border border-amber-500/40 w-28 text-center shrink-0 shadow-2xl">
          <div className="w-8 h-2 rounded-t bg-neutral-200 mb-0.5" />
          <div className="w-full py-1.5 px-1 rounded bg-gradient-to-b from-amber-100 via-white to-amber-50 text-neutral-900 border border-amber-300">
            <span className="block font-black text-amber-700 text-[8px] tracking-widest uppercase">HUNGRY</span>
            <span className="block font-black text-neutral-900 text-xs tracking-tight leading-none mt-0.5">OMEGA-3</span>
            <span className="block text-[7px] font-bold text-amber-800 mt-0.5">1000 MG</span>
          </div>
        </div>
      </div>

      {/* Trending Collection Grid (5 Tubs) */}
      <div className="p-3 bg-[#0a0a0a] border-t border-neutral-800">
        <div className="text-[9px] font-bold tracking-widest text-slate-400 uppercase text-center mb-2">
          TRENDING <span className="text-white font-black">COLLECTION</span>
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          {/* EAA+ */}
          <div className="p-1.5 rounded-lg bg-[#121212] border border-neutral-800 flex flex-col items-center text-center">
            <div className="w-5 h-1.5 rounded-t bg-neutral-600 mb-0.5" />
            <div className="w-full py-1 bg-neutral-900 text-white rounded border-t-2 border-emerald-500">
              <span className="block text-[6px] font-bold text-emerald-400">EAA+</span>
            </div>
            <span className="text-[8px] font-bold text-slate-300 mt-1 truncate w-full">EAA+</span>
          </div>

          {/* GLUTAMINE */}
          <div className="p-1.5 rounded-lg bg-[#121212] border border-neutral-800 flex flex-col items-center text-center">
            <div className="w-5 h-1.5 rounded-t bg-neutral-600 mb-0.5" />
            <div className="w-full py-1 bg-neutral-900 text-white rounded border-t-2 border-purple-500">
              <span className="block text-[6px] font-bold text-purple-400">GLUTAMINE</span>
            </div>
            <span className="text-[8px] font-bold text-slate-300 mt-1 truncate w-full">Glutamine</span>
          </div>

          {/* MASS */}
          <div className="p-1.5 rounded-lg bg-[#121212] border border-neutral-800 flex flex-col items-center text-center">
            <div className="w-5 h-1.5 rounded-t bg-neutral-600 mb-0.5" />
            <div className="w-full py-1 bg-neutral-900 text-white rounded border-t-2 border-amber-500">
              <span className="block text-[6px] font-bold text-amber-400">MASS</span>
            </div>
            <span className="text-[8px] font-bold text-slate-300 mt-1 truncate w-full">Mass</span>
          </div>

          {/* PRE-WORKOUT */}
          <div className="p-1.5 rounded-lg bg-[#121212] border border-neutral-800 flex flex-col items-center text-center">
            <div className="w-5 h-1.5 rounded-t bg-neutral-600 mb-0.5" />
            <div className="w-full py-1 bg-neutral-900 text-white rounded border-t-2 border-blue-500">
              <span className="block text-[6px] font-bold text-blue-400">PRE-WORK</span>
            </div>
            <span className="text-[8px] font-bold text-slate-300 mt-1 truncate w-full">Pre-Workout</span>
          </div>

          {/* MULTIVITAMIN */}
          <div className="p-1.5 rounded-lg bg-[#121212] border border-neutral-800 flex flex-col items-center text-center">
            <div className="w-5 h-1.5 rounded-t bg-neutral-600 mb-0.5" />
            <div className="w-full py-1 bg-neutral-900 text-white rounded border-t-2 border-rose-500">
              <span className="block text-[6px] font-bold text-rose-400">MULTI</span>
            </div>
            <span className="text-[8px] font-bold text-slate-300 mt-1 truncate w-full">Multivitamin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

