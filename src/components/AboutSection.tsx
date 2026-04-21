"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, education } from "@/data/portfolio";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="counter">01</span>
          <span className="w-8 h-px bg-white/20" />
          <span className="text-xs text-white/65 uppercase tracking-widest">About</span>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: large statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-xl text-white mb-8 leading-tight">
              I build things that{" "}
              <span className="text-white/65 italic font-light">think</span>{" "}
              <br />and scale.
            </h2>

            <p className="text-[#aaa] leading-relaxed mb-6">
              Senior Full Stack Engineer with 5+ years turning complex problems into
              elegant, high-performance solutions. My work spans everything from
              serverless cloud systems to LLM-powered AI applications.
            </p>
            <p className="text-[#aaa] leading-relaxed mb-10">
              Currently at <span className="text-white/70">Crownstack</span>, I lead
              AI integration projects with OpenAI, Gemini, and Claude — building
              agents that automate real workflows and reduce manual effort by 40%.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { k: "Email", v: personalInfo.email },
                { k: "Phone", v: personalInfo.phone },
                { k: "Location", v: "India" },
                { k: "Notice", v: personalInfo.noticePeriod },
              ].map((item) => (
                <div key={item.k} className="border-t border-white/5 pt-3">
                  <div className="text-xs text-white/65 mb-1 uppercase tracking-wider">{item.k}</div>
                  <div className="text-sm text-white/80 font-medium">{item.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: education + quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="text-xs text-white/65 uppercase tracking-widest mb-5">Education</div>
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className="card p-6 card-hover"
              >
                <div className="text-xs text-white/65 mb-2">{edu.period}</div>
                <div className="text-white font-bold mb-1">{edu.degree}</div>
                <div className="text-sm text-white/70">{edu.institution}</div>
              </div>
            ))}

            {/* Stack highlights */}
            <div className="card p-6 mt-6">
              <div className="text-xs text-white/65 uppercase tracking-widest mb-4">Core Stack</div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Frontend", "React / Next.js"],
                  ["Backend", "Node.js / NestJS"],
                  ["AI Layer", "OpenAI / Gemini"],
                  ["Cloud", "AWS Serverless"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="text-xs text-white/65 mb-1">{k}</div>
                    <div className="text-sm text-white font-semibold">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
