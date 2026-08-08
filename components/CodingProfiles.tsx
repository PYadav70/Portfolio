'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolio-data';
import { Code2, ExternalLink, Trophy, Award, Zap, CheckCircle2, Flame, Sparkles } from 'lucide-react';

export function CodingProfiles() {
  const { leetcode, achievements, certifications } = PORTFOLIO_DATA.codingStats;

  return (
    <section id="coding" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>&lt;/&gt; CODING SKILLS & DSA ANALYTICS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Problem Solving & Certifications
          </h2>
          <p className="text-sm font-mono text-slate-400 mt-1">
            Data structures, competitive programming ratings, and technical achievements.
          </p>
        </div>

        {/* LeetCode & Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* LeetCode Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 transition-all duration-300 glass-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-sans">LeetCode</h3>
                    <div className="text-xs font-mono text-amber-400">@{leetcode.username}</div>
                  </div>
                </div>

                <a
                  href={leetcode.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
                  title="Open LeetCode Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Core Metrics */}
              <div className="grid grid-cols-3 gap-3 my-5 text-center">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/5">
                  <div className="text-xl font-bold text-amber-400 font-mono">{leetcode.totalSolved}+</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">Problems Solved</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/5">
                  <div className="text-xl font-bold text-amber-400 font-mono">{leetcode.maxRating}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">Max Rating</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-white/5">
                  <div className="text-xl font-bold text-cyan-400 font-mono">{leetcode.globalRank}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">Global Rank</div>
                </div>
              </div>

              {/* Easy / Med / Hard Breakdown Bar */}
              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Difficulty Breakdown:</span>
                  <span>95 Easy • 250 Med • 55 Hard</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
                  <div className="bg-cyan-400 h-full" style={{ width: '25%' }} title="95 Easy" />
                  <div className="bg-amber-400 h-full" style={{ width: '60%' }} title="250 Medium" />
                  <div className="bg-rose-500 h-full" style={{ width: '15%' }} title="55 Hard" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hackathon & Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 glass-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-cyan-400 font-mono text-sm font-semibold">
                <Trophy className="w-5 h-5 text-cyan-400" />
                <span>Hackathons & Certifications</span>
              </div>

              <div className="space-y-4">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-800/40 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        {ach.title}
                      </span>
                      <span className="text-slate-500">{ach.year}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {ach.description}
                    </p>
                  </div>
                ))}

                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-800/40 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white font-sans">{cert.title}</div>
                        <div className="text-[10px] font-mono text-slate-400">Issued by {cert.issuer}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Topic Pills */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>DSA TOPICS & ALGORITHMIC DOMAINS</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {leetcode.topics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 rounded-xl bg-slate-800/80 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
