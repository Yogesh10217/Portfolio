"use client";

import { motion } from "framer-motion";
import { MapPin, Zap } from "lucide-react";
import { personalInfo, techStack } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-blue-400 border border-blue-500/20 mb-4">
            <Zap size={14} />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Who I{" "}
            <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Building things that{" "}
              <span className="gradient-text">matter</span>.
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              {personalInfo.summary}
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              I thrive in the intersection of <span className="text-blue-400">frontend craftsmanship</span>,{" "}
              <span className="text-violet-400">backend architecture</span>, and{" "}
              <span className="text-pink-400">AI integration</span> — areas that complement
              each other more than they compete. Whether it&apos;s optimizing a FastAPI endpoint,
              designing a React UI, or wiring up an LLM pipeline, I focus on production quality.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <MapPin size={14} className="text-blue-400" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-400 text-sm">Open to work</span>
              </div>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Projects Built", value: "10+", color: "text-blue-400", bg: "from-blue-500/10 to-transparent" },
              { label: "CGPA", value: "8.7", color: "text-emerald-400", bg: "from-emerald-500/10 to-transparent" },
              { label: "Certifications", value: "2+", color: "text-violet-400", bg: "from-violet-500/10 to-transparent" },
              { label: "Patent Filed", value: "1", color: "text-pink-400", bg: "from-pink-500/10 to-transparent" },
            ].map(({ label, value, color, bg }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className={`glass rounded-2xl p-6 border border-zinc-800/60 bg-gradient-to-br ${bg}`}
              >
                <div className={`text-4xl font-bold ${color} mb-1`}>{value}</div>
                <div className="text-zinc-400 text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div id="tech">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-violet-400 border border-violet-500/20 mb-4">
              <Zap size={14} />
              Tech Stack
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Tools &{" "}
              <span className="gradient-text">Technologies</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {techStack.map(({ category, color, bg, border, icon, skills }) => (
              <motion.div
                key={category}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`glass rounded-2xl p-6 border ${border} bg-gradient-to-br ${bg} group cursor-default`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{icon}</span>
                  <h3 className={`font-bold text-lg bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-zinc-800/80 rounded-lg text-xs font-medium text-zinc-300 border border-zinc-700/50 group-hover:border-zinc-600/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
