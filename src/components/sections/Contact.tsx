"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  MessageSquare,
  AlertCircle,
  ExternalLink,
  CheckCircle2,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "client_opened"
  >("idle");

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

  const handleCopyFormattedMessage = () => {
    if (!validateForm()) return;

    const textToCopy = `To: ${PORTFOLIO_DATA.personal.socialLinks.email}\nSubject: ${formState.subject}\nFrom: ${formState.name} (${formState.email})\n\n${formState.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const openGmailWeb = () => {
    const mailSubject = encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    );
    const mailBody = encodeURIComponent(
      `Hi Samarth,\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_DATA.personal.socialLinks.email}&su=${mailSubject}&body=${mailBody}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    // If Web3Forms Access Key is provided in environment variables, submit directly in background
    if (web3formsKey && web3formsKey !== "YOUR_ACCESS_KEY_HERE") {
      setSubmissionStatus("submitting");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            name: formState.name,
            email: formState.email,
            subject: formState.subject,
            message: formState.message,
            from_name: `${formState.name} (Portfolio Inquiry)`,
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setSubmissionStatus("success");
          setFormState({ name: "", email: "", subject: "", message: "" });
          return;
        } else {
          throw new Error(data.message || "Failed to send message via form endpoint.");
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Submission error";
        console.warn("Direct API submission failed, falling back to mail client:", message);
        // Fall back gracefully to mailto
      }
    }

    // Default seamless flow: trigger native mail client & provide Gmail Web + Copy options
    const mailSubject = encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    );
    const mailBody = encodeURIComponent(
      `Hi Samarth,\n\n${formState.message}\n\n---\nFrom: ${formState.name}\nEmail: ${formState.email}`
    );

    // Launch mail client
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.socialLinks.email}?subject=${mailSubject}&body=${mailBody}`;
    setSubmissionStatus("client_opened");
  };

  const handleResetForm = () => {
    setSubmissionStatus("idle");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 relative border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
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
            Have a project, frontend engineering opportunity, or collaboration in mind? Reach out directly via email, LinkedIn, or the message composer below.
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
            {/* Email Card with Copy & Direct Link */}
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

              <p className="text-xs font-mono text-slate-200 bg-slate-950/70 p-2.5 rounded-lg border border-white/5 break-all mb-3 select-all">
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
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-slate-950 transition-colors min-h-[44px]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-sky-500/30 flex items-center justify-between min-h-[64px] group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">LinkedIn Profile</h3>
                  <p className="text-xs text-slate-400 font-mono">linkedin.com/in/samarthkul6579</p>
                </div>
              </div>
              <span className="text-xs font-mono text-sky-400 shrink-0 ml-2 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Connect &rarr;
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-sky-500/30 flex items-center justify-between min-h-[64px] group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] text-slate-300 border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">GitHub Profile</h3>
                  <p className="text-xs text-slate-400 font-mono">github.com/samarthkul6579</p>
                </div>
              </div>
              <span className="text-xs font-mono text-sky-400 shrink-0 ml-2 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                View &rarr;
              </span>
            </a>

            {/* Active Status Badge */}
            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-xs font-medium text-emerald-300">Open to Opportunities</p>
                <p className="text-[11px] text-slate-400">Available for frontend development internships &amp; collaborative builds.</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Message Composer (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-9 rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all shadow-xl w-full"
          >
            <AnimatePresence mode="wait">
              {submissionStatus === "success" ? (
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                    Thank you for reaching out! Your message has been forwarded directly to{" "}
                    <span className="text-sky-400 font-mono font-medium">samarthkul6579@gmail.com</span>. Samarth will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold py-2.5 px-4 rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/30 text-slate-200 hover:text-white transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Send Another Note</span>
                  </button>
                </motion.div>
              ) : (
                <div key="form-container">
                  <div className="mb-5 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">Send a Message</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Fill out the form below to reach out directly to Samarth Kulshreshtha.
                    </p>
                  </div>

                  {/* Notice if mail client was launched */}
                  {submissionStatus === "client_opened" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-5 p-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-slate-200 text-xs space-y-2.5"
                    >
                      <div className="flex items-center gap-2 font-semibold text-sky-400">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Email Draft Prepared!</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Your device&apos;s email client has been launched with your message addressed to{" "}
                        <strong className="text-white">samarthkul6579@gmail.com</strong>.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={openGmailWeb}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 text-slate-950 font-semibold text-[11px] hover:bg-sky-400 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Open in Gmail Web</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleCopyFormattedMessage}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/15 text-slate-200 font-medium text-[11px] hover:border-sky-500/40 transition-colors"
                        >
                          {copiedMessage ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedMessage ? "Message Copied!" : "Copy Message Body"}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
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
                          placeholder="e.g. Rahul Sharma"
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
                          placeholder="e.g. rahul@example.com"
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
                        placeholder="e.g. Frontend Internship / Collaboration"
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
                        placeholder="Tell me about your project, team, or opportunity..."
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
                        disabled={submissionStatus === "submitting"}
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 disabled:opacity-70 text-slate-950 font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-sky-500/20 min-h-[48px] text-sm"
                      >
                        {submissionStatus === "submitting" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={openGmailWeb}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-800 text-slate-300 hover:text-white font-medium py-3.5 px-4 rounded-xl border border-white/10 transition-colors text-xs min-h-[48px]"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                        <span>Open Gmail Web</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center sm:text-left pt-1">
                      Direct delivery to{" "}
                      <span className="text-slate-400 font-mono">samarthkul6579@gmail.com</span>. Quick response guaranteed.
                    </p>
                  </form>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
