"use client";

import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-white/65">
          © {new Date().getFullYear()} Amit Kumar — Built with Next.js & Framer Motion
        </div>
        <div className="flex items-center gap-5">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-white/65 hover:text-white/80 transition-colors">
            <LinkedinIcon size={15} />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="text-white/65 hover:text-white/80 transition-colors">
            <GithubIcon size={15} />
          </a>
          <a href={`mailto:${personalInfo.email}`}
            className="text-white/65 hover:text-white/80 transition-colors">
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
