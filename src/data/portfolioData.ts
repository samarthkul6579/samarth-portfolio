export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  statusBadge?: string;
  isPlaceholderUrl?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  type: "Education" | "Internship" | "Experience";
  responsibilities: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Samarth Kulshreshtha",
    role: "Frontend Developer",
    degree: "B.E. in Computer Science Engineering",
    institute:
      "Institute of Engineering and Technology (IET), Dr. B.R. Ambedkar University, Agra",
    expectedGraduation: "2028",
    location: "Agra, Uttar Pradesh, India",
    shortBio:
      "Computer Science Engineering undergraduate and Frontend Developer passionate about building high-performance, user-centric web and mobile interfaces with clean architectural practices.",
    aboutBio: [
      "I am a Computer Science Engineering student at the Institute of Engineering and Technology (IET), Dr. B.R. Ambedkar University, Agra (Batch of 2028), dedicated to modern frontend engineering and intuitive interface design.",
      "My development focus spans modern web ecosystems like React, Next.js, and TypeScript, alongside cross-platform mobile development with Flutter and Dart. I care deeply about component modularity, fluid responsive layouts, and clean API integrations.",
      "Through real-world software projects such as FabricFlow (a clothing store inventory & billing platform with Supabase) and HealthLens, I continually translate computer science foundations into reliable, practical digital products.",
    ],
    socialLinks: {
      github: "https://github.com/samarthkul6579",
      linkedin: "https://www.linkedin.com/in/samarthkul6579/",
      email: "samarthkul6579@gmail.com",
      resume: "#contact", // Available on request
    },
    quickStats: [
      { label: "Role", value: "Frontend Developer" },
      { label: "Institution", value: "IET, DBRAU Agra" },
      { label: "Degree", value: "B.E. CSE (2028)" },
      { label: "Location", value: "Agra, India" },
    ],
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],

  skillCategories: [
    {
      title: "Frontend Development",
      description: "Modern web interfaces, component architecture, and responsive design",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile application development",
      skills: [
        "Flutter",
        "Dart",
        "State Management",
        "Widget Architecture",
        "Responsive Mobile UI",
      ],
    },
    {
      title: "Programming & Computer Science",
      description: "Core algorithms, data structures, and programming languages",
      skills: [
        "Python",
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Problem Solving",
      ],
    },
    {
      title: "Backend & Database",
      description: "APIs, server environments, and modern cloud databases",
      skills: [
        "Node.js",
        "Supabase",
        "REST APIs",
        "Database Design & SQL Basics",
      ],
    },
    {
      title: "Developer Tools",
      description: "Version control, code editing, design tools, and development workflows",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Postman",
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "fabricflow",
      title: "FabricFlow",
      category: "Shop Management & Billing App",
      description:
        "A dedicated clothing shop management and point-of-sale (POS) application built to help retail shopkeepers digitize inventory, billing, customer management, sales history, and credit tracking.",
      keyFeatures: [
        "Product catalog and inventory management with real-time stock status",
        "Fast POS billing system with search and automated item calculation",
        "Customer management and Credit / Khata tracking for ledger balances",
        "Daily, weekly, and monthly sales transaction history and reporting",
        "Invoice storage, historical search, and WhatsApp invoice sharing capability",
        "Cloud database and authentication powered by Supabase backend integration",
      ],
      techStack: ["Supabase", "TypeScript", "React / Mobile UI", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/samarthkul6579/FabricFlow",
      statusBadge: "Active Project",
      isPlaceholderUrl: false,
    },
    {
      id: "healthlens",
      title: "HealthLens",
      category: "Healthcare Assistant Application",
      description:
        "A health-focused application engineered to simplify complex medical lab reports into clear, understandable insights and deliver assistive health guidance.",
      keyFeatures: [
        "Structured medical report analysis and simplified terminology breakdowns",
        "Contextual AI health assistant for patient guidance and general queries",
        "Emergency medical card module with quick-access essential vitals",
        "Designed with clean, high-contrast healthcare visual accessibility",
      ],
      techStack: ["Flutter / Mobile UI", "Dart", "AI Integration", "REST APIs"],
      githubUrl: "https://github.com/samarthkul6579/[healthlens-repo-placeholder]",
      statusBadge: "Verified Project",
      isPlaceholderUrl: true,
    },
    {
      id: "codeguard-cyberyodha",
      title: "CodeGuard / CyberYodha",
      category: "Cybersecurity & Code Analysis",
      description:
        "A practical cybersecurity and secure coding initiative focused on identifying software vulnerabilities, code-level risk patterns, and defensive computing practices.",
      keyFeatures: [
        "Practical security analysis workflows for codebase vulnerability detection",
        "Guided rulesets and checks highlighting common web and software security flaws",
        "Modular architecture structured for developer utility and defensive programming",
      ],
      techStack: ["Python", "Security Tooling", "Code Analysis"],
      githubUrl: "https://github.com/samarthkul6579/[codeguard-repo-placeholder]",
      statusBadge: "Security Project",
      isPlaceholderUrl: true,
    },
    {
      id: "scientific-calculator",
      title: "Scientific Calculator",
      category: "Desktop Application • Python",
      description:
        "A precision desktop mathematical computing application with a modern graphical interface for algebraic, trigonometric, and scientific calculations.",
      keyFeatures: [
        "Interactive graphical user interface constructed with CustomTkinter",
        "High-precision scientific computation routines powered by NumPy",
        "Memory recall, error handling for division/bounds, and calculation history",
      ],
      techStack: ["Python", "CustomTkinter", "NumPy"],
      githubUrl: "https://github.com/samarthkul6579/[calculator-repo-placeholder]",
      statusBadge: "Utility",
      isPlaceholderUrl: true,
    },
  ] as ProjectItem[],

  experiences: [
    {
      id: "internship-healthdukaan",
      title: "Frontend Developer Intern",
      organization: "HealthDukaan Medicine Express",
      location: "Remote / India",
      period: "May 2026 – July 2026",
      type: "Internship",
      responsibilities: [
        "Contributed to frontend user interface development, building accessible and responsive components.",
        "Collaborated on responsive design implementations, ensuring cross-device UI consistency.",
        "Assisted in refining web performance, component reusability, and front-of-house user experience.",
      ],
    },
    {
      id: "education-iet-dbrau",
      title: "B.E. in Computer Science Engineering",
      organization:
        "Institute of Engineering and Technology (IET), Dr. B.R. Ambedkar University",
      location: "Agra, Uttar Pradesh, India",
      period: "2024 – 2028 (Expected)",
      type: "Education",
      responsibilities: [
        "Pursuing core undergraduate studies in Computer Science Engineering with emphasis on algorithms, data structures, and software engineering.",
        "Active technical development focusing on modern frontend web ecosystems and mobile application development.",
        "Engaged in technical hackathons and departmental coding problem-solving challenges.",
      ],
    },
  ] as ExperienceItem[],

  achievements: [
    {
      id: "webthon-2025-winner",
      title: "Winner — DBRAU Webthon 2025",
      organization: "Dr. B.R. Ambedkar University (DBRAU), Agra",
      year: "2025",
      badge: "1st Place",
      description:
        "Awarded Winner at Webthon 2025 organized by Dr. B.R. Ambedkar University (DBRAU) for building an impactful, well-engineered web solution under competitive time constraints.",
    },
  ] as AchievementItem[],
};
