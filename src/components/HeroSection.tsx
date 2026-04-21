"use client";

import { motion, type Variants } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const words = ["Full Stack", "AI", "Generative AI", "MERN Stack"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Large decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-black text-white/[0.015] select-none pointer-events-none whitespace-nowrap tracking-tighter leading-none">
        ENGINEER
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-white/70 uppercase tracking-widest font-medium">
            Open to opportunities
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={fadeUp}
              className="display-text text-white leading-none"
            >
              AMIT
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={fadeUp}
              className="display-text text-white leading-none"
            >
              KUMAR
            </motion.h1>
          </div>

          {/* Role tags inline */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6 mb-10">
            {words.map((w) => (
              <span key={w} className="tag">{w}</span>
            ))}
          </motion.div>

          {/* Bio + CTA row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          >
            <p className="max-w-md text-[#aaa] text-base leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-all duration-200"
              >
                See My Work
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <GithubIcon size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-end justify-between mt-16">
        <div className="flex gap-10">
          {[
            { val: "5+", label: "Years Exp." },
            { val: "30+", label: "Projects" },
            { val: "40%", label: "Effort Saved" },
            { val: "30%", label: "API Boost" },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-center"
            >
              <div className="text-2xl font-black text-white">{s.val}</div>
              <div className="text-xs text-white/65 mt-0.5 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-1 text-white/65 hover:text-white/65 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.a>
      </div>

      {/* Skill marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-3 border-t border-white/5 overflow-hidden">
        <div className="marquee-inner text-xs text-white/10 font-medium uppercase tracking-widest gap-8">
          {[...Array(3)].flatMap(() =>
            ["React.js", "Node.js", "NestJS", "TypeScript", "OpenAI", "Gemini", "Claude AI", "AWS Lambda", "Docker", "PostgreSQL", "MongoDB", "Python"].map((s) => (
              <span key={s + Math.random()} className="px-4">{s} ·</span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
