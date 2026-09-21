"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { BrandLogo } from "@/components/icons/Logo";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#060810] text-slate-400 py-10 sm:py-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2 text-slate-200 font-semibold">
            <BrandLogo className="w-6 h-6 shrink-0" />
            <span>{PORTFOLIO_DATA.personal.name}</span>
          </div>
          <p className="text-xs text-slate-400">
            {PORTFOLIO_DATA.personal.role} • {PORTFOLIO_DATA.personal.degree}
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={PORTFOLIO_DATA.personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/30 text-slate-400 hover:text-sky-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/30 text-slate-400 hover:text-sky-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.socialLinks.email}`}
            aria-label="Email Samarth"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/30 text-slate-400 hover:text-sky-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-7 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 text-center sm:text-left gap-2">
        <p>
          &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
        </p>
        <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
};
