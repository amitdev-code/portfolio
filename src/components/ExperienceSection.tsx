"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-3 mb-16"
        >
          <span className="counter">03</span>
          <span className="w-8 h-px bg-white/20" />
          <span className="text-xs text-white/65 uppercase tracking-widest">Experience</span>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="heading-xl text-white"
          >
            Where I&apos;ve worked.
          </motion.h2>

          <div className="space-y-1">
            {experience.map((exp, i) => (
              <ExperienceRow key={exp.company} exp={exp} index={i} inView={inView} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({
  exp,
  index,
  inView,
  defaultOpen,
}: {
  exp: (typeof experience)[0];
  index: number;
  inView: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="border-t border-white/5 last:border-b"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <div className="flex items-start gap-6">
          <span className="text-xs text-white/65 font-bold mt-1 w-5 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-white font-bold text-lg">{exp.company}</span>
              {exp.current && (
                <span className="text-xs text-emerald-400 border border-emerald-400/30 rounded-full px-2 py-0.5">
                  Now
                </span>
              )}
            </div>
            <div className="text-sm text-white/70">{exp.role}</div>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-xs text-white/65 hidden sm:block">{exp.period}</span>
          <span
            className={`w-5 h-5 rounded-full border border-white/15 flex items-center justify-center text-white/65 text-sm transition-transform duration-200 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </div>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-8 pl-11"
        >
          <ul className="space-y-3">
            {exp.highlights.map((h, hi) => (
              <li key={hi} className="flex items-start gap-3 text-sm text-[#aaa]">
                <span className="text-white/15 mt-1.5 shrink-0">—</span>
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
}
