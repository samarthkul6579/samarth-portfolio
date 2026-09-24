"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Check, ShieldCheck, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Projects: React.FC = () => {
  // Custom subtle project gradient accents
  const getProjectAccent = (id: string) => {
    switch (id) {
      case "fabricflow":
        return "from-cyan-500/10 via-sky-500/5 to-transparent border-cyan-500/20";
      case "healthlens":
        return "from-indigo-500/10 via-purple-500/5 to-transparent border-indigo-500/20";
      case "codeguard-cyberyodha":
        return "from-amber-500/10 via-rose-500/5 to-transparent border-amber-500/20";
      default:
        return "from-emerald-500/10 via-teal-500/5 to-transparent border-emerald-500/20";
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm shadow-sky-500/10">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Real-World Software &amp; Architectures
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
            Engineered with modern frontend patterns, robust state management, and cloud database integrations.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className={`group relative glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border bg-gradient-to-b ${getProjectAccent(
                project.id
              )} hover:border-sky-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-sky-500/10`}
            >
              <div>
                {/* Window Chrome Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-slate-500" />
                      {project.id}.app
                    </span>
                  </div>

                  {project.statusBadge && (
                    <span className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-medium inline-flex items-center gap-1 font-mono">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>{project.statusBadge}</span>
                    </span>
                  )}
                </div>

                {/* Category & Title */}
                <span className="text-xs font-semibold text-sky-400 font-mono tracking-tight uppercase">
                  {project.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2.5 tracking-tight group-hover:text-sky-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 mb-6 bg-slate-950/40 p-4 rounded-2xl border border-white/5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Capabilities:
                  </div>
                  {project.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-200 border border-white/10 group-hover:border-sky-500/25 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold py-3 px-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-sky-500/40 shadow-sm transition-all min-h-[44px]"
                    >
                      <GithubIcon className="w-4 h-4 shrink-0" />
                      <span className="truncate">
                        {project.isPlaceholderUrl ? "GitHub Repo (Coming Soon)" : "View Repository"}
                      </span>
                    </a>
                  ) : (
                    <span className="flex-1 inline-flex items-center justify-center text-xs font-mono py-3 px-4 rounded-xl bg-slate-900/40 border border-white/5 text-slate-500 min-h-[44px]">
                      Repo on Request
                    </span>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-colors shrink-0"
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
