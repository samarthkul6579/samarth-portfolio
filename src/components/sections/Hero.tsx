"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  FolderGit2,
  Mail,
  Trophy,
  Code2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-20 px-4 sm:px-6 ambient-bg tech-grid overflow-hidden"
    >
      {/* Decorative ambient radial lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Introduction & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start w-full animate-hero-fade">
          {/* Status Badge */}
          <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-sky-300 text-xs font-medium mb-6 shadow-md shadow-sky-500/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-semibold text-white">{PORTFOLIO_DATA.personal.role}</span>
            <span className="text-slate-600 hidden xs:inline">•</span>
            <span className="text-slate-300">IET, DBRAU Agra</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 break-words">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.2)]">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-normal">
            {PORTFOLIO_DATA.personal.shortBio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-[0_0_30px_-5px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_-5px_rgba(56,189,248,0.6)] transition-all duration-300 min-h-[48px] text-sm"
            >
              <FolderGit2 className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-slate-900/80 hover:bg-slate-800/90 active:bg-slate-800 text-slate-200 hover:text-white px-7 py-3.5 rounded-xl border border-white/10 hover:border-sky-500/40 shadow-lg shadow-black/40 transition-all duration-200 min-h-[48px] text-sm backdrop-blur-md"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Social Links & Highlights Row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 pt-4 border-t border-white/10 w-full">
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold font-mono">
              Channels:
            </span>
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Samarth Kulshreshtha GitHub"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-sky-400 transition-colors py-1 min-h-[36px]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700 hidden xs:inline">•</span>
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Samarth Kulshreshtha LinkedIn"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-sky-400 transition-colors py-1 min-h-[36px]"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700 hidden xs:inline">•</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.socialLinks.email}`}
              aria-label="Email Samarth"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-sky-400 transition-colors py-1 min-h-[36px]"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Ultra-Premium Portrait Showcase */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end animate-hero-delayed">
          <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
            {/* Outer Glowing Backlight Frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-purple-500/20 rounded-[32px] blur-xl opacity-75 animate-pulse" />

            {/* Portrait Card Surface */}
            <div className="relative rounded-[28px] p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/10 border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden">
              {/* Image Container with Gradient Fade Overlay */}
              <div className="relative w-full aspect-[3.2/4] rounded-[22px] overflow-hidden bg-slate-950">
                <Image
                  src="/samarth-portrait.jpg"
                  alt="Samarth Kulshreshtha - Frontend Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-transform duration-500 hover:scale-105"
                />

                {/* Subtle vignette gradient overlay that blends photo bottom into the dark card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/90 via-[#05070d]/20 to-transparent pointer-events-none" />

                {/* Top Badge: Webthon 2025 Winner */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/75 border border-amber-400/40 text-amber-300 text-[11px] font-semibold backdrop-blur-md shadow-lg">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Webthon &apos;25 Winner</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/75 border border-white/15 text-slate-300 text-[10px] font-mono backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-sky-400" />
                    <span>Frontend</span>
                  </div>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/85 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-1.5">
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">
                        {PORTFOLIO_DATA.personal.name}
                      </div>
                      <div className="text-[10px] text-sky-400 font-medium">
                        {PORTFOLIO_DATA.personal.degree}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 pt-2 border-t border-white/5 text-[10px] text-slate-400 font-mono">
                    <Code2 className="w-3 h-3 text-sky-400" />
                    <span>React • Next.js • Flutter • Supabase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex items-center flex-col text-slate-500 text-xs">
        <span className="mb-1 text-[10px] tracking-wider uppercase font-mono">Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-slate-400" />
      </div>
    </section>
  );
};
