"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Package, Activity, Users } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/lib/data";

const stats = [
  { label: "Public Repos", value: "15+", icon: Package },
  { label: "Stars Earned", value: "30+", icon: Star },
  { label: "Contributions", value: "400+", icon: Activity },
  { label: "Followers", value: "25+", icon: Users },
];

const pinnedRepos = [
  { name: "llm-inference-engine", desc: "Multi-provider LLM orchestration with streaming APIs", lang: "Python", color: "#3572A5", stars: 8, forks: 2 },
  { name: "ai-research-tool", desc: "NLP research assistant with fake-news detection", lang: "TypeScript", color: "#2b7489", stars: 6, forks: 1 },
  { name: "subscription-tracker", desc: "Automated subscription management with Upstash workflows", lang: "JavaScript", color: "#F1E05A", stars: 5, forks: 1 },
  { name: "portfolio", desc: "This portfolio — Next.js 15, Framer Motion", lang: "TypeScript", color: "#2b7489", stars: 4, forks: 0 },
];

export default function GitHubSection() {
  return (
    <section id="github" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-20"
        >
          <p className="section-label mb-3">05 — Open Source</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f8fafc] mb-5" style={{ fontFamily: "var(--font-jakarta)" }}>
            GitHub Activity
          </h2>
          <p className="text-[#475569]">Consistent contributions — building in public, learning in the open.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="glass-card p-6 gradient-border group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500"
            >
              <div className="w-9 h-9 gradient-bg rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
                <Icon size={16} className="text-white" />
              </div>
              <div className="text-3xl font-black gradient-text mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>{value}</div>
              <div className="text-[#475569] text-xs font-medium">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card overflow-hidden mb-8"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(255,255,255,0.04)]">
            <div className="flex items-center gap-2">
              <GithubIcon size={16} className="text-[#475569]" />
              <span className="text-sm font-semibold text-[#94a3b8]" style={{ fontFamily: "var(--font-jakarta)" }}>
                {personalInfo.githubUsername}
              </span>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#475569] hover:text-[#94a3b8] transition-colors link-underline"
            >
              View on GitHub <ExternalLink size={11} />
            </a>
          </div>
          <div className="p-6">
            <img
              src={`https://ghchart.rshah.org/8b5cf6/${personalInfo.githubUsername}`}
              alt="GitHub Contribution Graph"
              className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </motion.div>

        {/* Pinned repos */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {pinnedRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/${personalInfo.githubUsername}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card p-5 gradient-border group hover:shadow-xl hover:shadow-orange-500/10 block transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GithubIcon size={14} className="text-[#475569] group-hover:text-[#94a3b8] transition-colors" />
                  <span className="font-bold text-[#94a3b8] group-hover:gradient-text text-sm transition-all" style={{ fontFamily: "var(--font-jakarta)" }}>
                    {repo.name}
                  </span>
                </div>
                <ExternalLink size={13} className="text-[#2a2a3a] group-hover:text-[#475569] transition-colors flex-shrink-0" />
              </div>
              <p className="text-[#2a2a3a] text-xs leading-relaxed mb-4 group-hover:text-[#475569] transition-colors">{repo.desc}</p>
              <div className="flex items-center gap-4 text-xs text-[#2a2a3a]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.color }} />
                  {repo.lang}
                </div>
                <div className="flex items-center gap-1"><Star size={11} /> {repo.stars}</div>
                <div className="flex items-center gap-1"><GitFork size={11} /> {repo.forks}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg rounded-xl text-white text-sm font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
          >
            <GithubIcon size={15} />
            View All Repositories
            <ExternalLink size={13} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
