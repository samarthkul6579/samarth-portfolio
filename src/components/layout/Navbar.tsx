"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/icons/Logo";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#070a13]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#hero"
          className="group flex items-center gap-2.5 text-slate-100 font-semibold tracking-tight text-base sm:text-lg min-h-[44px]"
          onClick={() => setMobileMenuOpen(false)}
        >
          <BrandLogo className="w-8 h-8 group-hover:scale-105 transition-transform duration-200 shrink-0 drop-shadow-[0_0_12px_rgba(56,189,248,0.25)]" />
          <span className="group-hover:text-sky-400 transition-colors">
            Samarth<span className="text-sky-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {PORTFOLIO_DATA.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full transition-colors hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white px-4 py-2 rounded-lg border border-white/10 hover:border-sky-500/30 transition-all min-h-[38px]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-colors active:bg-slate-800"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0f1d]/98 backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col gap-1">
              {PORTFOLIO_DATA.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-medium text-slate-300 hover:text-sky-400 py-3 px-3 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors min-h-[44px]"
                >
                  <span>{item.label}</span>
                  <span className="text-slate-600 text-xs">&rarr;</span>
                </Link>
              ))}

              <div className="pt-3 mt-2 border-t border-white/10">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 text-xs font-semibold bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 py-3 px-4 rounded-xl shadow-md shadow-sky-500/20 transition-colors min-h-[44px]"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
