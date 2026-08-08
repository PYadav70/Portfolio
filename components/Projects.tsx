'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, Project } from '../data/portfolio-data';
import { ExternalLink, Github, Eye, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { ProjectScreenshot } from './ProjectScreenshot';
import { ProjectPreviewModal } from './ProjectPreviewModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleLiveClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Production Web Applications & Platforms
          </h2>
          <p className="text-sm font-mono text-slate-400 mt-2 max-w-2xl">
            Real-world projects engineered with clean architecture, role-based security, and fast load times.
          </p>
        </div>

        {/* Projects Grid matching reference styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl bg-[#0d121d] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Top Screenshot Area */}
              <div 
                className="relative overflow-hidden cursor-pointer group bg-black aspect-[16/10]"
                onClick={() => setSelectedProject(project)}
              >
                <ProjectScreenshot projectId={project.id} />
                
                {/* Hover overlay with Inspect & Live Demo actions */}
                <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-transform"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspect</span>
                  </button>

                  <button
                    onClick={(e) => handleLiveClick(e, project.liveUrl)}
                    className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono text-xs font-semibold flex items-center gap-2 hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Title & Icon Links */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors font-sans cursor-pointer tracking-tight"
                    >
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <button
                        onClick={(e) => handleLiveClick(e, project.liveUrl)}
                        className="p-1.5 rounded-lg bg-slate-800/60 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                        title="Open Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Paragraph Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-slate-800/60 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#162030] border border-slate-700/50 text-[10px] font-mono font-bold text-slate-300 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-slate-800/40 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 font-mono text-xs transition-all flex items-center justify-center gap-2 font-semibold"
                  >
                    <span>View Architecture & Case Study</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal with fixed blur backdrop */}
        <ProjectPreviewModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}

