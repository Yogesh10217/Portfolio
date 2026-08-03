"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, ChevronDown, ChevronUp,
  Brain, Server, CreditCard, BookOpen, Lightbulb, ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { projects } from "@/lib/data";

const typeIcons: Record<string, React.ElementType> = {
  AI: Brain, SaaS: CreditCard, Backend: Server,
};

const typeColors: Record<string, string> = {
  AI: "from-orange-500 to-red-500",
  SaaS: "from-red-500 to-orange-500",
  Backend: "from-yellow-500 to-orange-500",
};

// 3D Tilt card wrapper
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 8, y: -x * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {/* Shimmer on hover */}
      {isHovering && (
        <div
          className="absolute inset-0 rounded-[20px] pointer-events-none overflow-hidden z-10"
          style={{ borderRadius: "inherit" }}
        >
          <motion.div
            className="absolute inset-y-0 w-1/3"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
              skewX: "-12deg",
            }}
            initial={{ left: "-50%" }}
            animate={{ left: "150%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </div>
      )}
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const TypeIcon = typeIcons[project.type] ?? Server;
  const colorClass = typeColors[project.type] ?? "from-orange-500 to-orange-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <TiltCard className={`glass-card overflow-hidden transition-all duration-500 ${expanded ? "shadow-2xl shadow-orange-500/15" : "hover:shadow-xl hover:shadow-orange-500/10"}`}>
        {/* Top accent line */}
        <div className={`h-0.5 bg-gradient-to-r ${colorClass} w-full`} />

        <div className="p-7">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div className="flex items-start gap-4">
              {/* Project icon */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <TypeIcon size={20} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-xl font-bold text-[#f8fafc]" style={{ fontFamily: "var(--font-jakarta)" }}>
                    {project.title}
                  </h3>
                  <span className="badge text-[11px]">{project.status}</span>
                </div>
                <p className="text-[#475569] text-sm">{project.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {project.github && (
                <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[rgba(255,255,255,0.08)] text-[#475569] hover:text-white hover:border-[rgba(249,115,22,0.3)] text-xs font-medium transition-all">
                  <GithubIcon size={13} /> GitHub
                </motion.a>
              )}
              {project.demo && (
                <motion.a href={project.demo} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg gradient-bg text-white text-xs font-medium shadow-lg shadow-orange-500/20">
                  <ExternalLink size={13} /> Live
                </motion.a>
              )}
            </div>
          </div>

          <p className="text-[#475569] leading-relaxed mb-5 text-sm">{project.description}</p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="skill-pill">{t}</span>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-5 mb-5">
            {project.metrics.map((m) => (
              <span key={m} className="flex items-center gap-2 text-xs text-[#475569]">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                {m}
              </span>
            ))}
          </div>

          {/* Expand button */}
          <motion.button
            onClick={() => setExpanded(!expanded)}
            whileHover={{ scale: 1.01 }}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
              expanded
                ? "bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] text-orange-400"
                : "border border-[rgba(255,255,255,0.06)] text-[#475569] hover:border-[rgba(255,255,255,0.1)] hover:text-[#94a3b8]"
            }`}
          >
            {expanded ? <><ChevronUp size={14} /> Collapse</> : <><ChevronDown size={14} /> Deep Dive — Architecture & Decisions</>}
          </motion.button>
        </div>

        {/* Expanded */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="overflow-hidden"
            >
              <div className="border-t border-[rgba(255,255,255,0.06)] p-7 space-y-7">
                {/* Overview */}
                <div>
                  <div className="flex items-center gap-2 text-[#94a3b8] text-sm font-semibold mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                    <BookOpen size={15} className="text-orange-400" /> Overview
                  </div>
                  <p className="text-[#475569] text-sm leading-relaxed">{project.longDescription}</p>
                </div>

                {/* Architecture */}
                <div>
                  <div className="flex items-center gap-2 text-[#94a3b8] text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
                    <Server size={15} className="text-orange-400" /> Architecture
                  </div>
                  <div className="flex flex-wrap items-center gap-2 p-4 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
                    {project.architecture.map((s, i) => (
                      <div key={s.step} className="flex items-center gap-2">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <div className="px-3 py-1.5 rounded-xl bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.15)] text-xs font-bold text-orange-400">
                            {s.icon}
                          </div>
                          <span className="text-[10px] text-[#475569] max-w-[70px]">{s.label}</span>
                        </div>
                        {i < project.architecture.length - 1 && (
                          <ArrowRight size={14} className="text-[#2a2a3a] flex-shrink-0 mb-3" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-[#475569]">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-1.5" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Decisions */}
                <div>
                  <div className="flex items-center gap-2 text-[#94a3b8] text-sm font-semibold mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                    <Lightbulb size={15} className="text-amber-400" /> Engineering Decisions
                  </div>
                  <div className="space-y-3">
                    {project.decisions.map((d) => (
                      <div key={d.title} className="p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                        <h5 className="text-[#94a3b8] text-xs font-bold mb-1.5">{d.title}</h5>
                        <p className="text-[#475569] text-xs leading-relaxed">{d.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Learnings */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[rgba(249,115,22,0.05)] border border-[rgba(249,115,22,0.1)]">
                    <div className="text-orange-400 text-xs font-bold mb-2">Challenges</div>
                    <p className="text-[#475569] text-xs leading-relaxed">{project.challenges}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[rgba(249,115,22,0.05)] border border-[rgba(249,115,22,0.1)]">
                    <div className="text-orange-400 text-xs font-bold mb-2">Learnings</div>
                    <p className="text-[#475569] text-xs leading-relaxed">{project.learnings}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-20"
        >
          <p className="section-label mb-3">04 — Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f8fafc] mb-5" style={{ fontFamily: "var(--font-jakarta)" }}>
            What I've Built
          </h2>
          <p className="text-[#475569] max-w-xl">
            Click <span className="text-orange-400 font-medium">Deep Dive</span> on any project to explore the architecture, engineering decisions, and lessons learned.
          </p>
        </motion.div>

        <div className="space-y-6" style={{ perspective: "1200px" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
