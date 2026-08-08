'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolio-data';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>[m] EXPERIENCE & INDUSTRY ROLES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work Experience & Leadership
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-10">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 group-hover:scale-125 transition-transform shadow-lg shadow-cyan-500/50" />

              {/* Experience Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 glass-card">
                
                {/* Role & Company Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">{exp.role}</h3>
                    <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col items-end text-xs font-mono text-slate-400">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-white/10 text-cyan-300 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-2.5 mb-4">
                  {exp.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Pills */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-white/10 text-[10px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
