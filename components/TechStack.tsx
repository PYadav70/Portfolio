'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolio-data';
import { Code, Terminal, Layers, Database, Cloud, Cpu, Check, Sparkles } from 'lucide-react';

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...PORTFOLIO_DATA.techCategories.map((c) => c.name)];

  const filteredCategories = activeCategory === 'All'
    ? PORTFOLIO_DATA.techCategories
    : PORTFOLIO_DATA.techCategories.filter((c) => c.name === activeCategory);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Layers;
      case 'Server': return Terminal;
      case 'Database': return Database;
      case 'Cloud': return Cloud;
      case 'Code': return Code;
      default: return Cpu;
    }
  };

  return (
    <section id="about" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header with Terminal Vibe */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <span>&#123; &#125;</span> TECH STACK & CORE COMPETENCIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technologies & Frameworks
          </h2>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-slate-200 hover:border-white/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Stack Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category, idx) => {
            const Icon = getCategoryIcon(category.icon);
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 glass-card"
              >
                <div className="flex items-center gap-2.5 mb-4 text-cyan-400 font-mono text-sm font-semibold">
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-xs font-mono transition-all duration-200 hover:scale-105 group"
                    >
                      <Sparkles className="w-3 h-3 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
