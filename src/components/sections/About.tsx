"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, GraduationCap, Code, Compass, ArrowRight, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Crafting Purpose-Driven Frontend &amp; Mobile Interfaces
          </h2>
          <p className="text-slate-400 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
            Engineering intuitive, accessible, and high-performance digital products while pursuing rigorous computer science studies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed"
          >
            {PORTFOLIO_DATA.personal.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="p-3.5 sm:p-4 rounded-xl bg-sky-950/20 border border-sky-500/20 text-sky-200 text-xs sm:text-sm mt-1 sm:mt-2 flex items-start gap-3">
              <Compass className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Current Focus:</span> Scaling practical web applications using Next.js and React, mastering state flows with Supabase &amp; REST APIs, and designing pixel-perfect mobile layouts in Flutter.
              </div>
            </div>
          </motion.div>

          {/* Core Highlights & Student Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4 w-full"
          >
            {/* Degree & Institute Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {PORTFOLIO_DATA.personal.degree}
                </h3>
                <p className="text-xs text-indigo-300 font-medium mt-0.5">
                  {PORTFOLIO_DATA.personal.institute}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 mt-2">
                  <MapPin className="w-3 h-3 text-sky-400 shrink-0" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                  <span className="text-slate-600">•</span>
                  <span>Batch of {PORTFOLIO_DATA.personal.expectedGraduation}</span>
                </div>
              </div>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {PORTFOLIO_DATA.personal.quickStats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel p-3 sm:p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-medium truncate">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1 text-sky-300 break-words">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Link to Skills */}
            <a
              href="#skills"
              className="inline-flex items-center justify-between p-3.5 sm:p-4 rounded-xl glass-panel glass-panel-hover text-xs font-semibold text-slate-200 hover:text-sky-400 border border-white/10 min-h-[48px]"
            >
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">Explore Technical Stack</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
