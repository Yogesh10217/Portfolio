"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, ChevronDown, ChevronUp,
  Code2, Cpu, Lightbulb, AlertTriangle, BookOpen, ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { projects } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function ArchitectureDiagram({ steps }: { steps: { step: string; label: string; desc: string; icon: string }[] }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 flex-wrap">
      {steps.map((s, i) => (
        <div key={s.step} className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-1 text-center"
          >
            <div className="w-12 h-12 rounded-xl glass border border-zinc-700/60 flex items-center justify-center text-xl">
              {s.icon}
            </div>
            <span className="text-[10px] text-blue-400 font-mono font-bold">{s.step}</span>
            <span className="text-xs font-semibold text-white">{s.label}</span>
            <span className="text-[10px] text-zinc-500 max-w-[80px] leading-tight">{s.desc}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <ArrowRight size={16} className="text-zinc-600 flex-shrink-0 mb-4 hidden sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`glass rounded-2xl border overflow-hidden transition-all duration-500 ${
        expanded ? "border-blue-500/30" : "border-zinc-800/60 hover:border-zinc-700/60"
      }`}
      style={expanded ? { boxShadow: `0 0 40px ${project.glowColor}` } : {}}
    >
      {/* Header */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            {/* Project icon/gradient badge */}
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.color} flex-shrink-0`}
            >
              <Code2 size={24} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-zinc-400 text-sm">{project.subtitle}</p>
            </div>
          </div>

          {/* Action links */}
          <div className="flex items-center gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-zinc-400 hover:text-white border border-zinc-700/60 hover:border-zinc-500/60 text-sm transition-all"
              >
                <GithubIcon size={14} />
                GitHub
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-all"
              >
                <ExternalLink size={14} />
                Demo
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-zinc-400 leading-relaxed mb-5">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-zinc-800/80 rounded-lg text-xs font-medium text-zinc-300 border border-zinc-700/50"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap gap-4 mb-5">
          {project.metrics.map((m) => (
            <div key={m} className="flex items-center gap-1.5 text-sm text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              {m}
            </div>
          ))}
        </div>

        {/* Expand button */}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.01 }}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
            expanded
              ? "border-blue-500/40 text-blue-400 bg-blue-500/10"
              : "border-zinc-800/60 text-zinc-400 hover:border-zinc-600/60 hover:text-zinc-200"
          }`}
        >
          {expanded ? (
            <>
              <ChevronUp size={16} />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              View Deep Dive — Features, Architecture & Engineering Decisions
            </>
          )}
        </motion.button>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-zinc-800/60 p-6 sm:p-8 space-y-8">
              {/* Overview */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                  <BookOpen size={18} className="text-blue-400" />
                  Overview
                </h4>
                <p className="text-zinc-400 leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Architecture */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-5">
                  <Cpu size={18} className="text-violet-400" />
                  Architecture
                </h4>
                <div className="p-5 glass rounded-xl border border-zinc-800/60 overflow-x-auto">
                  <ArchitectureDiagram steps={project.architecture} />
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                  <Code2 size={18} className="text-emerald-400" />
                  Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                      <span className="text-zinc-400 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Decisions */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                  <Lightbulb size={18} className="text-yellow-400" />
                  Engineering Decisions
                </h4>
                <div className="space-y-3">
                  {project.decisions.map((d) => (
                    <div key={d.title} className="p-4 glass rounded-xl border border-yellow-500/10 bg-yellow-500/5">
                      <h5 className="font-semibold text-yellow-400 mb-1.5 text-sm">{d.title}</h5>
                      <p className="text-zinc-400 text-sm leading-relaxed">{d.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Learnings */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 glass rounded-xl border border-orange-500/10 bg-orange-500/5">
                  <h4 className="flex items-center gap-2 font-bold text-orange-400 mb-2 text-sm">
                    <AlertTriangle size={15} />
                    Challenges
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{project.challenges}</p>
                </div>
                <div className="p-4 glass rounded-xl border border-blue-500/10 bg-blue-500/5">
                  <h4 className="flex items-center gap-2 font-bold text-blue-400 mb-2 text-sm">
                    <BookOpen size={15} />
                    Learnings
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{project.learnings}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-blue-400 border border-blue-500/20 mb-4">
            <Code2 size={14} />
            Featured Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What I&apos;ve{" "}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Click <span className="text-blue-400">View Deep Dive</span> on any project to explore the architecture,
            engineering decisions, and lessons learned — beyond just screenshots.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
