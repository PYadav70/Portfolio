'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Activity, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio-data';

export function GitHubActivity() {
  const [hoveredCell, setHoveredCell] = useState<{ day: number; count: number; dateStr: string } | null>(null);

  // Generate 52 weeks x 7 days = 364 cells for GitHub activity heatmap
  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  
  // Seeded random activity generation to create realistic GitHub contribution graph
  const generateHeatmapData = () => {
    const weeks: { level: number; count: number; dateStr: string }[][] = [];
    const startDate = new Date(2025, 7, 1); // Aug 2025

    for (let w = 0; w < 52; w++) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + w * 7 + d);
        
        // Pseudo random level based on sine waves + index hash
        const hash = (w * 7 + d * 13 + (w % 3) * 17) % 100;
        let level = 0;
        let count = 0;

        if (hash > 20 && hash <= 50) {
          level = 1;
          count = (hash % 3) + 1;
        } else if (hash > 50 && hash <= 80) {
          level = 2;
          count = (hash % 5) + 3;
        } else if (hash > 80 && hash <= 95) {
          level = 3;
          count = (hash % 6) + 7;
        } else if (hash > 95) {
          level = 4;
          count = (hash % 8) + 12;
        }

        const dateStr = currentDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });

        week.push({ level, count, dateStr });
      }
      weeks.push(week);
    }
    return weeks;
  };

  const heatmapData = generateHeatmapData();

  const getCellBg = (level: number) => {
    switch (level) {
      case 1: return 'bg-cyan-950/90 border-cyan-900/60 hover:bg-cyan-800';
      case 2: return 'bg-cyan-700/80 border-cyan-600/50 hover:bg-cyan-600';
      case 3: return 'bg-cyan-500 border-cyan-400 hover:bg-cyan-400';
      case 4: return 'bg-cyan-300 border-cyan-200 hover:bg-cyan-200 shadow-sm shadow-cyan-400/50';
      default: return 'bg-slate-900/80 border-slate-800/80 hover:bg-slate-800';
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-1">
              <Activity className="w-3.5 h-3.5" />
              <span>GIT COMMIT -M &quot;ACTIVITY&quot;</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              GitHub Contribution History
            </h2>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <span>@PYadav70</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Heatmap Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/10 glass-card space-y-4"
        >
          {/* Header row with months */}
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[680px]">
              <div className="flex justify-between text-[10px] font-mono text-slate-400 pl-6 mb-2">
                {months.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>

              {/* Grid Matrix */}
              <div className="flex gap-1 items-center">
                {/* Day labels */}
                <div className="flex flex-col gap-1 text-[9px] font-mono text-slate-500 pr-2">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* Weeks Grid */}
                <div className="flex gap-1 flex-1">
                  {heatmapData.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1">
                      {week.map((day, dIdx) => (
                        <div
                          key={dIdx}
                          onMouseEnter={() => setHoveredCell({ day: wIdx * 7 + dIdx, count: day.count, dateStr: day.dateStr })}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`w-3 h-3 rounded-[2px] border transition-all cursor-pointer ${getCellBg(day.level)}`}
                          title={`${day.count} contributions on ${day.dateStr}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer stats bar matching Saurabh screenshot */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-semibold text-slate-200">1,095 contributions</span>
              <span>in the last year</span>
            </div>

            {/* Hover Tooltip or Legend */}
            <div className="flex items-center gap-3">
              {hoveredCell ? (
                <span className="text-cyan-400 font-bold bg-slate-800 px-2 py-0.5 rounded border border-cyan-500/30">
                  {hoveredCell.count} commits on {hoveredCell.dateStr}
                </span>
              ) : (
                <div className="flex items-center gap-1.5 text-[10px]">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-900 border border-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-950" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-700" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-500" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-300" />
                  <span>More</span>
                </div>
              )}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
