import React from "react";

export const BrandLogo: React.FC<{ className?: string }> = ({
  className = "w-8 h-8",
}) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Subtle glowing radial background */}
        <radialGradient
          id="brandLogoGlow"
          cx="0.5"
          cy="0.5"
          r="0.5"
          fx="0.3"
          fy="0.3"
        >
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
        </radialGradient>

        {/* Linear gradient for tech glyph */}
        <linearGradient
          id="brandLogoGrad"
          x1="6"
          y1="8"
          x2="34"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>

        {/* Accent cyan gradient */}
        <linearGradient
          id="cyanGrad"
          x1="12"
          y1="12"
          x2="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      {/* Rounded Hexagonal / Squircle Base */}
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="10"
        fill="url(#brandLogoGlow)"
        stroke="url(#brandLogoGrad)"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />

      {/* Modern Developer Monogram Emblem: Dynamic Code Nodes & Geometric Symbol */}
      {/* Left Code Chevron */}
      <path
        d="M15.5 13.5L10 20L15.5 26.5"
        stroke="url(#cyanGrad)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Code Chevron */}
      <path
        d="M24.5 13.5L30 20L24.5 26.5"
        stroke="url(#brandLogoGrad)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Modern Slash / Node Core */}
      <path
        d="M22 13L18 27"
        stroke="#ffffff"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeOpacity="0.95"
      />

      {/* Subtle Central Accent Pulse Dot */}
      <circle cx="20" cy="20" r="1.5" fill="#38bdf8" />
    </svg>
  );
};
