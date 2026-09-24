"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Please enter your name.";
    if (!formState.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formState.subject.trim()) errs.subject = "Please enter a subject line.";
    if (!formState.message.trim() || formState.message.length < 10) {
      errs.message = "Please write a message with at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendViaMailClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const mailSubject = encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    );
    const mailBody = encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.socialLinks.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleCopyFormattedMessage = () => {
    if (!validateForm()) return;

    const textToCopy = `To: ${PORTFOLIO_DATA.personal.socialLinks.email}\nSubject: ${formState.subject}\nFrom: ${formState.name} (${formState.email})\n\n${formState.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm shadow-sky-500/10">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-slate-400 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
            Have a project, frontend engineering opportunity, or collaboration in mind? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-9 items-start">
          {/* Direct Communication Channels (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-4 w-full"
          >
            {/* Email Card with Copy */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Email Address</h3>
                  <p className="text-xs text-slate-400">Direct inbox communication</p>
                </div>
              </div>

              <p className="text-xs font-mono text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-white/5 break-all mb-3">
                {PORTFOLIO_DATA.personal.socialLinks.email}
              </p>

              <div className="flex flex-col xs:flex-row items-stretch gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-lg bg-slate-900 border border-white/10 hover:border-sky-500/30 text-slate-300 hover:text-white transition-colors min-h-[44px]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.socialLinks.email}`}
                  className="inline-flex items-center justify-center text-xs font-semibold py-2.5 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors min-h-[44px]"
                >
                  Open Mail
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl border border-white/10 flex items-center justify-between min-h-[64px]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">LinkedIn Profile</h3>
                  <p className="text-xs text-slate-400">Professional network &amp; updates</p>
                </div>
              </div>
              <span className="text-xs font-mono text-sky-400 shrink-0 ml-2">Connect &rarr;</span>
            </a>

            {/* GitHub Card */}
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl border border-white/10 flex items-center justify-between min-h-[64px]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] text-slate-300 border border-white/10 shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">GitHub Repositories</h3>
                  <p className="text-xs text-slate-400">Projects, source code, &amp; commits</p>
                </div>
              </div>
              <span className="text-xs font-mono text-sky-400 shrink-0 ml-2">View &rarr;</span>
            </a>
          </motion.div>

          {/* Contact Message Composer (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-9 rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all shadow-xl w-full"
          >
            <div className="mb-5 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">Compose a Message</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct client-side message preparation. Because no external database or email-routing backend is currently configured, this form validates your input and launches your native mail application directly.
              </p>
            </div>

            <form onSubmit={handleSendViaMailClient} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => {
                      setFormState({ ...formState, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="e.g. John Doe"
                    className={`w-full px-3.5 py-3 rounded-xl bg-slate-950/60 border ${
                      errors.name ? "border-rose-500/80" : "border-white/10"
                    } focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/50 text-base sm:text-sm text-slate-200 placeholder-slate-500 transition-colors min-h-[44px]`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => {
                      setFormState({ ...formState, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="e.g. john@example.com"
                    className={`w-full px-3.5 py-3 rounded-xl bg-slate-950/60 border ${
                      errors.email ? "border-rose-500/80" : "border-white/10"
                    } focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/50 text-base sm:text-sm text-slate-200 placeholder-slate-500 transition-colors min-h-[44px]`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => {
                    setFormState({ ...formState, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: "" });
                  }}
                  placeholder="e.g. Frontend Collaboration / Inquiry"
                  className={`w-full px-3.5 py-3 rounded-xl bg-slate-950/60 border ${
                    errors.subject ? "border-rose-500/80" : "border-white/10"
                  } focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/50 text-base sm:text-sm text-slate-200 placeholder-slate-500 transition-colors min-h-[44px]`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  placeholder="Write your note or project inquiry here..."
                  className={`w-full px-3.5 py-3 rounded-xl bg-slate-950/60 border ${
                    errors.message ? "border-rose-500/80" : "border-white/10"
                  } focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/50 text-base sm:text-sm text-slate-200 placeholder-slate-500 transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-sky-500/20 min-h-[48px] text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyFormattedMessage}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-800 text-slate-300 hover:text-white font-medium py-3.5 px-4 rounded-xl border border-white/10 transition-colors text-xs min-h-[48px]"
                >
                  {copiedMessage ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 leading-relaxed mt-2">
                <span className="text-slate-300 font-medium">Architecture Note:</span> Form state is fully validated on client. Future phases can connect this to an email API endpoint (e.g. Resend, Supabase Function) without UI changes.
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
