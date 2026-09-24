"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowDown,
  FolderGit2,
  Mail,
  Smartphone,
  Layout,
  Code2,
  Database,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 ambient-bg tech-grid overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Introduction & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start w-full animate-hero-fade">
          {/* Status / Role Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-5 max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>{PORTFOLIO_DATA.personal.role}</span>
            <span className="text-slate-600 hidden xs:inline">•</span>
            <span className="text-slate-400">B.E. CSE Undergrad</span>
          </div>

          {/* Responsive Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4 break-words">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mb-6 sm:mb-8 leading-relaxed">
            {PORTFOLIO_DATA.personal.shortBio}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-7">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all duration-200 min-h-[48px] text-sm"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 active:bg-slate-800 text-slate-200 hover:text-white px-6 py-3.5 rounded-xl border border-white/10 hover:border-sky-500/30 transition-all duration-200 min-h-[48px] text-sm"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Contact Me</span>
            </Link>
          </div>

          {/* Social Links & Meta */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-slate-400 pt-3 border-t border-white/5 w-full">
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
              Connect:
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
            <span className="text-slate-700 hidden xs:inline">|</span>
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
            <span className="text-slate-700 hidden xs:inline">|</span>
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

        {/* Right Column: Code & Architecture Showcase Card */}
        <div className="lg:col-span-5 w-full animate-hero-delayed">
          <div className="relative rounded-2xl glass-panel p-4 sm:p-5 border border-white/10 shadow-2xl shadow-black/50 overflow-hidden w-full">
            {/* Top decorative window bar */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/5">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-1.5 sm:ml-2 text-[11px] sm:text-xs font-mono text-slate-400 truncate max-w-[130px] xs:max-w-none">
                  DeveloperProfile.tsx
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                TypeScript
              </span>
            </div>

            {/* Code Snippet Box */}
            <div className="font-mono text-[11px] sm:text-xs leading-relaxed text-slate-300 bg-slate-950/70 p-3 sm:p-4 rounded-xl border border-white/5 mb-4 overflow-x-auto">
              <div className="text-slate-500">{"// Frontend Engineering Stack"}</div>
              <div className="mt-1">
                <span className="text-pink-400">const</span>{" "}
                <span className="text-sky-300">developer</span>:{" "}
                <span className="text-amber-300">FrontendEngineer</span> = {"{"}
              </div>
              <div className="pl-3 sm:pl-4">
                name: <span className="text-emerald-300">&quot;Samarth Kulshreshtha&quot;</span>,
              </div>
              <div className="pl-3 sm:pl-4">
                institute: <span className="text-emerald-300">&quot;IET DBRAU, Agra&quot;</span>,
              </div>
              <div className="pl-3 sm:pl-4 break-words">
                coreStack: [<span className="text-sky-300">&quot;React&quot;</span>,{" "}
                <span className="text-sky-300">&quot;Next.js&quot;</span>,{" "}
                <span className="text-sky-300">&quot;TypeScript&quot;</span>,{" "}
                <span className="text-sky-300">&quot;Flutter&quot;</span>],
              </div>
              <div className="pl-3 sm:pl-4">
                focus: <span className="text-emerald-300">&quot;Performant UIs&quot;</span>,
              </div>
              <div>{"};"}</div>
            </div>

            {/* Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="p-1.5 rounded-md bg-sky-500/10 text-sky-400 shrink-0">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">Modern Web</div>
                  <div className="text-[10px] text-slate-500">React &amp; Next.js</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="p-1.5 rounded-md bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">Mobile Apps</div>
                  <div className="text-[10px] text-slate-500">Flutter &amp; Dart</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">Clean Code</div>
                  <div className="text-[10px] text-slate-500">Type-Safe TypeScript</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-400 shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">Backend Integration</div>
                  <div className="text-[10px] text-slate-500">Supabase &amp; APIs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex items-center flex-col text-slate-500 text-xs">
        <span className="mb-1 text-[10px] tracking-wider uppercase">Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-slate-400" />
      </div>
    </section>
  );
};
