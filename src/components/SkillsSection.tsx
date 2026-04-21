"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiVuedotjs, SiSvelte, SiHtml5, SiCss, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiNestjs, SiExpress,
  SiOpenai, SiGooglegemini,
  SiMongodb, SiPostgresql,
  SiDocker, SiGithubactions,
  SiGit, SiRedis, SiSocketdotio,
} from "react-icons/si";
import { FaRobot, FaBrain, FaServer, FaPlug, FaAws } from "react-icons/fa";

type SkillItem = { label: string; icon: React.ReactNode };

const skillCategories: { name: string; color: string; items: SkillItem[] }[] = [
  {
    name: "Languages",
    color: "text-yellow-400",
    items: [
      { label: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { label: "TypeScript",        icon: <SiTypescript /> },
      { label: "Python",            icon: <SiPython /> },
    ],
  },
  {
    name: "Frontend",
    color: "text-cyan-400",
    items: [
      { label: "React.js",     icon: <SiReact /> },
      { label: "Next.js",      icon: <SiNextdotjs /> },
      { label: "Vue.js",       icon: <SiVuedotjs /> },
      { label: "SvelteKit",    icon: <SiSvelte /> },
      { label: "HTML5",        icon: <SiHtml5 /> },
      { label: "CSS3",         icon: <SiCss /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss /> },
      { label: "Bootstrap",    icon: <SiBootstrap /> },
    ],
  },
  {
    name: "Backend",
    color: "text-green-400",
    items: [
      { label: "Node.js",    icon: <SiNodedotjs /> },
      { label: "NestJS",     icon: <SiNestjs /> },
      { label: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    name: "AI / ML",
    color: "text-purple-400",
    items: [
      { label: "OpenAI GPT-4",      icon: <SiOpenai /> },
      { label: "Google Gemini",     icon: <SiGooglegemini /> },
      { label: "Claude",            icon: <FaBrain /> },
      { label: "AI Agents",         icon: <FaRobot /> },
      { label: "Prompt Engineering",icon: <FaBrain /> },
      { label: "Generative AI",     icon: <FaRobot /> },
      { label: "NLP",               icon: <FaBrain /> },
    ],
  },
  {
    name: "Databases",
    color: "text-orange-400",
    items: [
      { label: "MongoDB",    icon: <SiMongodb /> },
      { label: "PostgreSQL", icon: <SiPostgresql /> },
      { label: "Redis",      icon: <SiRedis /> },
    ],
  },
  {
    name: "DevOps & Cloud",
    color: "text-blue-400",
    items: [
      { label: "AWS",        icon: <FaAws /> },
      { label: "Docker",     icon: <SiDocker /> },
      { label: "CI/CD",      icon: <SiGithubactions /> },
      { label: "Serverless", icon: <FaAws /> },
    ],
  },
  {
    name: "Tools & Tech",
    color: "text-slate-400",
    items: [
      { label: "Git",              icon: <SiGit /> },
      { label: "REST APIs",        icon: <FaServer /> },
      { label: "WebSockets",       icon: <SiSocketdotio /> },
      { label: "Third Party APIs", icon: <FaPlug /> },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
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

          <div className="space-y-4">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.07 + 0.2, duration: 0.5 }}
                className="card p-5 card-hover group"
              >
                <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${cat.color}`}>
                  {cat.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.label}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-200"
                    >
                      <span className={`text-base leading-none ${cat.color}`}>
                        {skill.icon}
                      </span>
                      <span className="text-sm text-white/85 font-medium whitespace-nowrap">
                        {skill.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
