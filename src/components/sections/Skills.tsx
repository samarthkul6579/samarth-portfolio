"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Layout,
  Smartphone,
  Terminal,
  Database,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Skills: React.FC = () => {
  const getCategoryTheme = (index: number) => {
    switch (index) {
      case 0:
        return {
          icon: <Layout className="w-5 h-5 text-sky-400" />,
          accent: "from-sky-500/15 via-sky-500/5 to-transparent border-sky-500/20",
          tag: "bg-sky-500/10 text-sky-300 border-sky-500/20",
        };
      case 1:
        return {
          icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
          accent: "from-indigo-500/15 via-indigo-500/5 to-transparent border-indigo-500/20",
          tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
        };
      case 2:
        return {
          icon: <Terminal className="w-5 h-5 text-amber-400" />,
          accent: "from-amber-500/15 via-amber-500/5 to-transparent border-amber-500/20",
          tag: "bg-amber-500/10 text-amber-300 border-amber-500/20",
        };
      case 3:
        return {
          icon: <Database className="w-5 h-5 text-emerald-400" />,
          accent: "from-emerald-500/15 via-emerald-500/5 to-transparent border-emerald-500/20",
          tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        };
      default:
        return {
          icon: <Wrench className="w-5 h-5 text-purple-400" />,
          accent: "from-purple-500/15 via-purple-500/5 to-transparent border-purple-500/20",
          tag: "bg-purple-500/10 text-purple-300 border-purple-500/20",
        };
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[350px] bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm shadow-indigo-500/10">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Skills, Tools &amp; Ecosystem
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
            Verified technologies, frameworks, and developer workflows applied across high-performance web, mobile, and backend integrations.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => {
            const theme = getCategoryTheme(idx);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between border bg-gradient-to-b ${theme.accent} hover:border-sky-500/35 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-sky-500/10`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                        {theme.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950/50 border border-white/5 text-xs text-slate-200 font-medium hover:border-white/15 hover:bg-slate-900/60 transition-all"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">{category.skills.length} core tools</span>
                  <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] font-semibold border ${theme.tag}`}>
                    Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
