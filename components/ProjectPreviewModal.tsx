'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, ShieldCheck, Eye } from 'lucide-react';
import { Project } from '../data/portfolio-data';
import { ProjectScreenshot } from './ProjectScreenshot';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectPreviewModal({ project, onClose }: ProjectPreviewModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  const handleLaunchLive = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop with Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0b0f17] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-50 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-800 bg-[#070a0f]">
            <div>
              <div className="text-[11px] font-mono text-cyan-400 font-bold tracking-wider uppercase flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>{project.category} Showcase</span>
              </div>
              <h3 className="text-xl font-bold text-white font-sans mt-0.5">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            
            {/* Visual Screenshot Mock */}
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
              <ProjectScreenshot projectId={project.id} />
            </div>

            {/* Description */}
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <h4 className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase mb-1.5">
                ARCHITECTURE & OVERVIEW
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {project.longDescription}
              </p>
            </div>

            {/* Metrics Badge */}
            {project.metrics && (
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-cyan-300 font-bold uppercase">KEY HIGHLIGHT METRIC</div>
                  <div className="text-xs font-mono text-slate-200 mt-0.5 font-semibold">{project.metrics}</div>
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase mb-2">
                PRODUCTION TECH STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-mono font-bold text-slate-200 uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Features */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase mb-2">
                KEY ACHIEVEMENTS & CAPABILITIES
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs font-sans text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:px-6 border-t border-slate-800 bg-[#070a0f] flex flex-wrap items-center justify-between gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-colors border border-slate-700"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            <button
              onClick={handleLaunchLive}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
            >
              <span>Launch Live Site</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

