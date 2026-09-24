"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, GraduationCap, Code, Compass, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 relative border-t border-white/5 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm shadow-sky-500/10">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Crafting Purpose-Driven Frontend Experiences
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
            Engineering intuitive, accessible, and high-performance digital products while pursuing rigorous computer science studies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col gap-5 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            {PORTFOLIO_DATA.personal.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300 leading-relaxed font-normal">
                {paragraph}
              </p>
            ))}

            {/* Current Focus Highlight Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-950/30 to-indigo-950/20 border border-sky-500/25 text-sky-200 text-xs sm:text-sm mt-2 flex items-start gap-3.5 shadow-lg backdrop-blur-md">
              <Compass className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  Engineering Philosophy:
                </span>
                <span className="text-slate-300">
                  Focusing on component modularity, strict TypeScript architectures, pixel-perfect responsiveness, and seamless Supabase &amp; REST integrations that deliver real commercial value.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core Highlights & Student Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-4 w-full"
          >
            {/* Degree & Institute Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 shadow-xl">
              <div className="p-3.5 rounded-2xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 shrink-0 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {PORTFOLIO_DATA.personal.degree}
                </h3>
                <p className="text-xs text-indigo-300 font-medium mt-1 leading-snug">
                  {PORTFOLIO_DATA.personal.institute}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-2.5 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                  <span className="text-slate-600">•</span>
                  <span>Class of {PORTFOLIO_DATA.personal.expectedGraduation}</span>
                </div>
              </div>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-2 gap-3">
              {PORTFOLIO_DATA.personal.quickStats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-sky-500/25 transition-all shadow-md"
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold truncate">
                    {stat.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1 text-sky-300 break-words tracking-tight">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Link to Skills */}
            <a
              href="#skills"
              className="inline-flex items-center justify-between p-4 rounded-2xl glass-panel glass-panel-hover text-xs font-semibold text-slate-200 hover:text-sky-400 border border-white/10 min-h-[50px] shadow-md group"
            >
              <div className="flex items-center gap-2.5">
                <Code className="w-4 h-4 text-sky-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">Explore Technical Stack &amp; Tools</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
