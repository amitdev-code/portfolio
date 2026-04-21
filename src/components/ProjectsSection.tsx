"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-3 mb-16"
        >
          <span className="counter">04</span>
          <span className="w-8 h-px bg-white/20" />
          <span className="text-xs text-white/65 uppercase tracking-widest">Projects</span>
        </motion.div>

        <div className="flex items-end justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="heading-xl text-white"
          >
            Selected<br />work.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xs text-white/65 hidden md:block"
          >
            Click for case study →
          </motion.p>
        </div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="group border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/15 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer">
          <div className="flex items-start gap-6">
            {/* Number */}
            <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors shrink-0 leading-none mt-1">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/70 font-medium">{project.tagline}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="tag">{project.category}</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/65 group-hover:text-white group-hover:border-white/30 transition-all duration-200">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#999] leading-relaxed mb-5 max-w-2xl">
                {project.shortDesc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-white/25 font-medium">
                    {tag} ·
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
