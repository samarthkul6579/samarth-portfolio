# Samarth Kulshreshtha — Developer Portfolio

A modern, high-performance personal developer portfolio engineered with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Live Demo & Preview
- **Local Dev**: `http://localhost:3000`
- **Role**: Frontend Developer & B.E. Computer Science Engineering Student
- **Institution**: Institute of Engineering and Technology (IET), Dr. B.R. Ambedkar University, Agra

---

## 🛠️ Tech Stack
- **Framework**: Next.js (App Router with Turbopack)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 & Glassmorphism design system
- **Animations**: Framer Motion (respecting `prefers-reduced-motion`)
- **Icons**: Lucide React & Custom SVG Brand Marks

---

## 📂 Project Structure
```
samarth-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Theme tokens, ambient mesh, scrollbars
│   │   ├── layout.tsx           # SEO metadata & font setup
│   │   └── page.tsx             # Main assembled landing page
│   ├── components/
│   │   ├── icons/
│   │   │   ├── Logo.tsx         # Custom developer brand mark
│   │   │   └── SocialIcons.tsx  # Optimized SVG vectors (GitHub, LinkedIn)
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Glassmorphic header & mobile drawer
│   │   │   └── Footer.tsx       # Minimalist footer & back-to-top
│   │   └── sections/
│   │       ├── Hero.tsx         # Hero section & code showcase
│   │       ├── About.tsx        # Degree, institute & background
│   │       ├── Skills.tsx       # 5 categorized technical skill sets
│   │       ├── Projects.tsx     # FabricFlow, HealthLens, CodeGuard, etc.
│   │       ├── Experience.tsx   # HealthDukaan internship & Webthon 2025
│   │       └── Contact.tsx      # Honest client-validated contact form
│   └── data/
│       └── portfolioData.ts     # Single source of truth for all data
├── public/                      # Static assets
├── package.json
└── tsconfig.json
```

---

## 💻 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/samarthkul6579/samarth-portfolio.git

# Navigate into project directory
cd samarth-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Run linting check
npm run lint

# Build for production
npm run build
```

---

## 📄 License
Created and maintained by [Samarth Kulshreshtha](https://github.com/samarthkul6579).
