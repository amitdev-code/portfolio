import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit Kumar — Senior Full Stack & AI Engineer",
  description:
    "Senior Full Stack Engineer with 5+ years building scalable web apps and AI-powered systems. MERN Stack, NestJS, AWS, OpenAI, Gemini, Claude.",
  keywords: ["Full Stack Engineer", "AI Engineer", "React", "Node.js", "NestJS", "OpenAI", "Next.js"],
  authors: [{ name: "Amit Kumar" }],
  openGraph: {
    title: "Amit Kumar — Senior Full Stack & AI Engineer",
    description: "Building scalable web applications and intelligent AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-slate-200">{children}</body>
    </html>
  );
}
