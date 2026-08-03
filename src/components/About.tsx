"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Code2, Database, Cpu, Layout, Bot, MapPin } from "lucide-react";
import { personalInfo, techStack } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  SERVER: Server, CODE: Code2, DB: Database, DEPLOY: Cpu, UI: Layout, AI: Bot,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="glass-card p-6 text-center gradient-border group hover:border-[rgba(249,115,22,0.2)] transition-all duration-500"
    >
      <motion.div
        className="text-4xl font-black gradient-text mb-2"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {value}
      </motion.div>
      <div className="text-sm text-[#475569] font-medium">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <p className="section-label mb-3">01 — About</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f8fafc]" style={{ fontFamily: "var(--font-jakarta)" }}>
            Who I am
          </h2>
        </motion.div>

        {/* Bio + Stats grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-28">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h3 className="text-2xl font-bold text-[#f8fafc] mb-5" style={{ fontFamily: "var(--font-jakarta)" }}>
              Building things that{" "}
              <span className="gradient-text">matter.</span>
            </h3>
            <p className="text-[#475569] leading-relaxed mb-5">
              {personalInfo.summary}
            </p>
            <p className="text-[#475569] leading-relaxed mb-8">
              I thrive at the intersection of{" "}
              <span className="text-[#94a3b8] font-medium">frontend craftsmanship</span>,{" "}
              <span className="text-[#94a3b8] font-medium">backend architecture</span>, and{" "}
              <span className="text-[#94a3b8] font-medium">AI integration</span> — areas
              that complement each other more than they compete.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#475569]">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-orange-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Open to work
              </span>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "Projects Built", delay: 0.1 },
              { value: "8.7", label: "CGPA / 10", delay: 0.18 },
              { value: "2+", label: "Certifications", delay: 0.26 },
              { value: "1", label: "Patent Filed", delay: 0.34 },
            ].map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div id="tech">
          <motion.div {...fadeUp(0)} className="mb-14">
            <p className="section-label mb-3">01b — Stack</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#f8fafc]" style={{ fontFamily: "var(--font-jakarta)" }}>
              Tools & Technologies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map(({ category, icon, skills }, i) => {
              const Icon = iconMap[icon] || Code2;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 gradient-border group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-orange-500/20">
                      <Icon size={16} className="text-white" />
                    </div>
                    <h3 className="font-bold text-[#f8fafc] text-sm tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
