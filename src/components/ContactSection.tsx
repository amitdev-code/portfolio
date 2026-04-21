"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail, Phone, Send } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex items-center gap-3 mb-16"
        >
          <span className="counter">05</span>
          <span className="w-8 h-px bg-white/20" />
          <span className="text-xs text-white/65 uppercase tracking-widest">Contact</span>
        </motion.div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
          {/* Left: big CTA */}
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
            <p className="text-[#999] mb-10 leading-relaxed max-w-sm">
              Open to full-time roles, contracts, and consulting. Drop me a message and I&apos;ll respond within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Mail size={16} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={16} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: <LinkedinIcon size={16} />, label: "LinkedIn", value: "linkedin.com/in/amikum9707", href: personalInfo.linkedin },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center text-white/65 group-hover:text-white group-hover:border-white/20 transition-all duration-200">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/65 mb-0.5 uppercase tracking-wider">{c.label}</div>
                    <div className="text-sm text-white/80 group-hover:text-white transition-colors link-underline">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/65">Available — {personalInfo.noticePeriod} notice period</span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <form
              action={`mailto:${personalInfo.email}`}
              method="get"
              className="card p-7 space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/65 mb-2 block uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-white/25 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/65 mb-2 block uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-white/25 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/65 mb-2 block uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-white/25 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/65 mb-2 block uppercase tracking-wider">Message</label>
                <textarea
                  name="body"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-white/25 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
