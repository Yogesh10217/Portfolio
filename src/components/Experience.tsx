"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, GraduationCap, Briefcase, ArrowRight, Trophy } from "lucide-react";
import { experience, achievements } from "@/lib/data";

const typeIcon = (company: string, role: string) => {
  if (role.toLowerCase().includes("b.e.") || role.toLowerCase().includes("puc")) return GraduationCap;
  if (company === "Krama AI") return Building2;
  return Briefcase;
};

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="absolute left-5 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.04)] hidden sm:block">
      <motion.div
        className="absolute top-0 left-0 w-full gradient-bg origin-top"
        style={{ scaleY, height: "100%" }}
      />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-20"
        >
          <p className="section-label mb-3">03 — Journey</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f8fafc]" style={{ fontFamily: "var(--font-jakarta)" }}>
            Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mb-28">
          <TimelineLine />

          <div className="space-y-6">
            {experience.map((exp, i) => {
              const Icon = typeIcon(exp.company, exp.role);
              return (
                <motion.div
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-5 hidden sm:flex">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                        exp.highlight
                          ? "gradient-bg glow-accent shadow-orange-500/25"
                          : "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]"
                      }`}
                    >
                      <Icon size={16} className={exp.highlight ? "text-white" : "text-[#475569]"} />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4, scale: 1.005 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`glass-card p-6 gradient-border ${
                      exp.highlight
                        ? "border-[rgba(249,115,22,0.2)] shadow-lg shadow-orange-500/10"
                        : "hover:border-[rgba(255,255,255,0.1)]"
                    } transition-all duration-300`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-[#f8fafc]" style={{ fontFamily: "var(--font-jakarta)" }}>
                            {exp.company}
                          </h3>
                          {exp.highlight && (
                            <span className="badge text-[11px] border-[rgba(249,115,22,0.3)] text-orange-400">
                              Active
                            </span>
                          )}
                        </div>
                        <p className={`text-sm font-semibold ${exp.highlight ? "gradient-text" : "text-[#94a3b8]"}`}>
                          {exp.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-[#475569] text-xs font-medium">{exp.year}</div>
                        <div className="text-[#2a2a3a] text-xs mt-0.5">{exp.type}</div>
                      </div>
                    </div>

                    <p className="text-[#475569] text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {exp.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => <span key={t} className="skill-pill">{t}</span>)}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Future marker */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative sm:pl-16"
            >
              <div className="absolute left-0 top-4 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl border border-dashed border-[rgba(255,255,255,0.08)] flex items-center justify-center">
                  <ArrowRight size={14} className="text-[#2a2a3a]" />
                </div>
              </div>
              <div className="p-4 rounded-2xl border border-dashed border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)]">
                <p className="text-[#2a2a3a] text-sm flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  Next chapter — open to opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-14"
        >
          <p className="section-label mb-3">03b — Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f8fafc]" style={{ fontFamily: "var(--font-jakarta)" }}>
            Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map(({ icon, title, subtitle }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-card p-6 gradient-border hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 text-center group"
            >
              <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/20">
                <Trophy size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-[#f8fafc] mb-1 text-sm" style={{ fontFamily: "var(--font-jakarta)" }}>
                {title}
              </h3>
              <p className="text-[#475569] text-xs">{subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
