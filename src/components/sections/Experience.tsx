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
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 relative border-t border-white/5 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm shadow-emerald-500/10">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trajectory &amp; Accolades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Experience &amp; Achievements
          </h2>
          <p className="text-slate-400 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
            Professional developer internship, academic foundation at IET DBRAU, and verified competitive achievements.
          </p>
        </div>

        {/* Ultra-Luxury Webthon 2025 Winner Card */}
        {PORTFOLIO_DATA.achievements.map((ach) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 sm:mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-slate-900/90 to-amber-500/10 border border-amber-400/40 shadow-2xl shadow-amber-500/10 backdrop-blur-xl overflow-hidden"
          >
            {/* Subtle inner golden glow */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-400/15 blur-3xl rounded-full pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/30 shrink-0">
                  <Trophy className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold uppercase tracking-wider border border-amber-400/30">
                      {ach.badge}
                    </span>
                    <span className="text-xs text-amber-300/80 font-mono flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {ach.year}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {ach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 self-start sm:self-center flex items-center gap-2 text-xs font-bold text-amber-300 px-4 py-2 rounded-xl bg-amber-400/15 border border-amber-400/30 shadow-sm">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Verified 1st Place</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Timeline Items */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-10 sm:space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator with Ripple Glow */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:border-sky-300 group-hover:scale-125 transition-all shadow-[0_0_15px_rgba(56,189,248,0.5)]" />

              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-sky-500/5">
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
                  <div>
                    {exp.type === "Internship" ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>Professional Internship</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Undergraduate Education</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-900/60 px-2.5 py-1 rounded-lg border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mt-1.5 tracking-tight">
                  {exp.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 mt-1 mb-4">
                  <span className="font-semibold text-sky-300">{exp.organization}</span>
                  {exp.location && (
                    <>
                      <span className="text-slate-600 hidden xs:inline">•</span>
                      <span className="inline-flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-sky-400 shrink-0" />
                        <span>{exp.location}</span>
                      </span>
                    </>
                  )}
                </div>

                {/* Responsibilities */}
                <div className="space-y-2.5 pt-3 border-t border-white/5">
                  {exp.responsibilities.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
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
