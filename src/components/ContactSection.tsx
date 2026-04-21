"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-3 mb-16"
        >
          <span className="counter">05</span>
          <span className="w-8 h-px bg-white/20" />
          <span className="text-xs text-white/65 uppercase tracking-widest">Contact</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-xl text-white mb-6 leading-tight">
              Let&apos;s build<br />
              <span className="text-white/65 italic font-light">something</span><br />
              great.
            </h2>
            <p className="text-[#999] leading-relaxed max-w-sm">
              Open to full-time roles, contracts, and consulting. Reach out directly and I&apos;ll respond within 24 hours.
            </p>

            <div className="mt-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/65">Available — {personalInfo.noticePeriod} notice period</span>
            </div>
          </motion.div>

          {/* Right: contact links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-4"
          >
            {[
              { icon: <Mail size={18} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: <Phone size={18} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: <LinkedinIcon size={18} />, label: "LinkedIn", value: "linkedin.com/in/amikum9707", href: personalInfo.linkedin },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 card card-hover group"
              >
                <div className="w-11 h-11 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center text-white/65 group-hover:text-white group-hover:border-white/25 transition-all duration-200 shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs text-white/45 mb-1 uppercase tracking-wider">{c.label}</div>
                  <div className="text-sm text-white/85 group-hover:text-white transition-colors font-medium">{c.value}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
