"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Check, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Real-World Applications &amp; Software
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
            Production-focused web and mobile tools built to solve practical commercial, healthcare, and developer challenges.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] sm:text-xs font-semibold text-sky-400 font-mono tracking-tight uppercase">
                    {project.category}
                  </span>
                  {project.statusBadge && (
                    <span className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium inline-flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{project.statusBadge}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 sm:mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2 mb-5">
                  <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Core Capabilities:
                  </div>
                  {project.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2.5">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-3.5 rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/30 text-slate-200 hover:text-white transition-colors min-h-[44px]"
                    >
                      <GithubIcon className="w-4 h-4 shrink-0" />
                      <span className="truncate">
                        {project.isPlaceholderUrl ? "GitHub (Coming Soon)" : "View Repository"}
                      </span>
                    </a>
                  ) : (
                    <span className="flex-1 inline-flex items-center justify-center text-xs font-mono py-2.5 px-3.5 rounded-xl bg-slate-900/50 border border-white/5 text-slate-500 min-h-[44px]">
                      Repo on Request
                    </span>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/30 text-slate-400 hover:text-sky-400 transition-colors shrink-0"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
