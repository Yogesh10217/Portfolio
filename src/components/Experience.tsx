"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";
import { experience, achievements } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-orange-400 border border-orange-500/20 mb-4">
            <Briefcase size={14} />
            Experience
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Building production systems and delivering real-world impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto mb-24">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-violet-500/40 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden sm:flex">
                  <motion.div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      exp.highlight
                        ? "bg-gradient-to-br from-blue-600 to-violet-600 glow-blue"
                        : "glass border border-zinc-700/60"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Briefcase size={18} className={exp.highlight ? "text-white" : "text-zinc-400"} />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  className={`glass rounded-2xl p-6 border transition-all duration-300 ${
                    exp.highlight
                      ? "border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-violet-500/5"
                      : "border-zinc-800/60 hover:border-zinc-700/60"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className={`font-semibold ${exp.highlight ? "text-blue-400" : "text-zinc-300"}`}>
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex items-center gap-1.5 text-zinc-500 text-sm">
                        <Calendar size={12} />
                        {exp.year}
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        exp.type === "Full-time"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-zinc-800/80 rounded-lg text-xs font-medium text-zinc-300 border border-zinc-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Future marker */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative sm:pl-16"
            >
              <div className="absolute left-0 top-3 hidden sm:flex">
                <div className="w-12 h-12 rounded-xl glass border border-dashed border-zinc-700/60 flex items-center justify-center">
                  <ArrowRight size={16} className="text-zinc-600" />
                </div>
              </div>
              <div className="glass rounded-2xl p-5 border border-dashed border-zinc-800/60">
                <p className="text-zinc-600 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Next chapter — currently exploring opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Achievements */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-yellow-400 border border-yellow-500/20 mb-4">
            🏆 Achievements
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Milestones &{" "}
            <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map(({ icon, title, subtitle, color, border, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className={`glass rounded-2xl p-6 border ${border} bg-gradient-to-br ${color} shadow-lg ${glow} text-center cursor-default transition-all duration-300`}
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
              <p className="text-zinc-400 text-sm">{subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
