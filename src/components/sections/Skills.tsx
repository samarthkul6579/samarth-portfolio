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
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="w-5 h-5 text-sky-400" />;
      case 1:
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 3:
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
            Verified technologies, frameworks, and developer tools applied in building responsive web, mobile, and backend integrations.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white">{category.title}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mt-4 sm:mt-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-lg bg-slate-950/40 border border-white/5 text-xs text-slate-300 font-medium hover:border-white/15 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span>{category.skills.length} core tools</span>
                <span className="font-mono text-slate-400">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
