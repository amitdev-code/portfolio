"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const allSkills = Object.values(skills).flat();

  return (
    <section id="skills" className="py-32 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="counter">02</span>
          <span className="w-8 h-px bg-white/20" />
          <span className="text-xs text-white/65 uppercase tracking-widest">Skills</span>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-xl text-white">
              Tech I<br />master.
            </h2>
            <p className="text-[#999] mt-6 text-sm leading-relaxed">
              Full spectrum — from pixel-perfect UIs to serverless backends, AI agents, and cloud infrastructure.
            </p>
          </motion.div>

          {/* Right: category cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {Object.entries(skills).map(([category, items], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.07 + 0.2, duration: 0.5 }}
                className="card p-5 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 text-xs text-white/65 font-bold pt-0.5">
                    {String(ci + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <div className="text-white/65 text-xs uppercase tracking-widest mb-3">{category}</div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm text-white/70 font-medium group-hover:text-white transition-colors duration-200"
                        >
                          {skill}
                          <span className="text-white/65 mx-1">·</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
