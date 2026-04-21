"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Target, Lightbulb, Zap, Code2, AlertTriangle, CheckCircle2, ImageIcon } from "lucide-react";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[0];

export default function ProjectDetailClient({ project }: { project: Project }) {
  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Top nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-white/65 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={15} />
            Back
          </Link>
          <span className="text-xs text-white/15 uppercase tracking-widest">{project.category}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-32">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 pt-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{project.icon}</span>
            <span className="tag">{project.category}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-2xl">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <p className="text-[#aaa] text-lg leading-relaxed max-w-3xl">{project.shortDesc}</p>

          {/* Divider */}
          <div className="divider mt-12" />
        </motion.div>

        {/* Goal / Problem / Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {[
            { icon: <Target size={16} />, label: "Goal", text: project.goal },
            { icon: <AlertTriangle size={16} />, label: "Problem", text: project.problem },
            { icon: <Lightbulb size={16} />, label: "Solution", text: project.solution },
          ].map((item) => (
            <div key={item.label} className="card p-6 card-hover">
              <div className="flex items-center gap-2 text-xs text-white/65 uppercase tracking-widest mb-4">
                {item.icon}
                {item.label}
              </div>
              <p className="text-sm text-[#aaa] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="card p-8 mb-12"
        >
          <div className="flex items-center gap-2 text-xs text-white/65 uppercase tracking-widest mb-6">
            <Zap size={14} />
            Impact
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.impact.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-white/65 mt-1">—</span>
                <span className="text-sm text-white/80">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-xs text-white/65 uppercase tracking-widest mb-6">
            <Code2 size={14} />
            Technology Stack
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(project.techDetails).map(([layer, techs]) => {
              if (!techs || techs.length === 0) return null;
              return (
                <div key={layer} className="card p-5 card-hover">
                  <div className="text-xs text-white/65 uppercase tracking-widest mb-3">{layer}</div>
                  <div className="space-y-1">
                    {(techs as string[]).map((t: string) => (
                      <div key={t} className="text-sm text-white/80 font-medium">{t}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="card p-8 mb-12"
        >
          <div className="text-xs text-white/65 uppercase tracking-widest mb-4">Architecture Overview</div>
          <p className="text-[#aaa] leading-relaxed">{project.architecture}</p>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-xs text-white/65 uppercase tracking-widest mb-6">Engineering Challenges</div>
          <div className="space-y-3">
            {project.challenges.map((c, i) => (
              <div key={i} className="flex items-start gap-4 border-t border-white/5 pt-4">
                <span className="text-xs text-white/15 font-bold mt-0.5 w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[#aaa] leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 text-xs text-white/65 uppercase tracking-widest mb-6">
            <ImageIcon size={14} />
            Screenshots
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {project.screenshots.map((shot, i) => (
              <div key={i} className="card aspect-video flex flex-col items-center justify-center gap-3 card-hover">
                <span className="text-3xl">{project.icon}</span>
                <span className="text-xs text-white/65">{shot.label}</span>
                <span className="text-xs text-white/10">Coming soon</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Other projects */}
        <div className="border-t border-white/5 pt-12">
          <div className="text-xs text-white/65 uppercase tracking-widest mb-6">Other Projects</div>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherProjects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`}>
                <div className="card p-5 card-hover flex items-center gap-4 group">
                  <span className="text-2xl">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-bold text-sm">{p.title}</div>
                    <div className="text-xs text-white/65 truncate">{p.tagline}</div>
                  </div>
                  <ArrowUpRight size={14} className="text-white/65 group-hover:text-white/80 shrink-0 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
