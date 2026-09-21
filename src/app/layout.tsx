import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samarth Kulshreshtha | Frontend Developer",
  description:
    "Personal developer portfolio of Samarth Kulshreshtha — Frontend Developer & B.E. Computer Science Engineering student at Institute of Engineering and Technology (IET), Dr. B.R. Ambedkar University, Agra.",
  keywords: [
    "Samarth Kulshreshtha",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Flutter",
    "Computer Science Engineering",
    "IET DBRAU Agra",
    "FabricFlow",
    "HealthLens",
  ],
  authors: [{ name: "Samarth Kulshreshtha" }],
  openGraph: {
    title: "Samarth Kulshreshtha | Frontend Developer",
    description:
      "Personal portfolio of Samarth Kulshreshtha — Frontend Developer & B.E. Computer Science Engineering student at IET, Dr. B.R. Ambedkar University, Agra.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#070a13] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
