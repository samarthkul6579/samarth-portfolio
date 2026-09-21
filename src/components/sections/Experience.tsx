"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  Award,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trajectory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Experience &amp; Achievements
          </h2>
          <p className="text-slate-400 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
            Professional developer internship, academic degree at IET DBRAU, and verified competitive achievements.
          </p>
        </div>

        {/* Achievement Showcase Banner */}
        {PORTFOLIO_DATA.achievements.map((ach) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-12 p-4 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900/80 to-amber-500/5 border border-amber-500/30 shadow-lg shadow-amber-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5"
          >
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
                <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold uppercase tracking-wider">
                    {ach.badge}
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-mono">{ach.year}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">{ach.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>

            <div className="shrink-0 self-start sm:self-center flex items-center gap-1.5 text-xs font-semibold text-amber-300 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <Award className="w-4 h-4" />
              <span>Verified Winner</span>
            </div>
          </motion.div>
        ))}

        {/* Timeline Items */}
        <div className="relative border-l border-white/10 pl-5 sm:pl-8 ml-2.5 sm:ml-4 space-y-8 sm:space-y-10">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:border-sky-300 group-hover:scale-125 transition-all shadow-md shadow-sky-500/30" />

              <div className="glass-panel p-4 sm:p-7 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    {exp.type === "Internship" ? (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                        <Briefcase className="w-3 h-3" />
                        <span>Internship</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                        <GraduationCap className="w-3 h-3" />
                        <span>Education</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-400 font-mono">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-sm sm:text-lg font-bold text-white mt-1">
                  {exp.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-1 mb-3.5">
                  <span className="font-semibold text-sky-300">{exp.organization}</span>
                  {exp.location && (
                    <>
                      <span className="text-slate-600 hidden xs:inline">•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                        <span>{exp.location}</span>
                      </span>
                    </>
                  )}
                </div>

                {/* Responsibilities */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {exp.responsibilities.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
