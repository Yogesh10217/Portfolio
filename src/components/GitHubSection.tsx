"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Activity } from "lucide-react";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const pinnedRepos = [
  {
    name: "krama-ai",
    description: "AI-powered claims processing platform with OCR and LLM orchestration",
    language: "Python",
    langColor: "#3572A5",
    stars: 12,
    forks: 3,
    url: "https://github.com/yogeshe/krama-ai",
  },
  {
    name: "llm-inference-engine",
    description: "Multi-provider LLM orchestration layer with streaming and health checks",
    language: "Python",
    langColor: "#3572A5",
    stars: 8,
    forks: 2,
    url: "https://github.com/yogeshe/llm-inference-engine",
  },
  {
    name: "ai-research-tool",
    description: "NLP-powered research assistant with fake news detection and Gemini AI",
    language: "TypeScript",
    langColor: "#2b7489",
    stars: 6,
    forks: 1,
    url: "https://github.com/yogeshe/ai-research-tool",
  },
  {
    name: "portfolio",
    description: "Personal portfolio built with Next.js 15, Framer Motion, and Tailwind CSS",
    language: "TypeScript",
    langColor: "#2b7489",
    stars: 4,
    forks: 0,
    url: "https://github.com/yogeshe/portfolio",
  },
];

const stats = [
  { label: "Public Repos", value: "15+", icon: "📦" },
  { label: "Total Stars", value: "30+", icon: "⭐" },
  { label: "Contributions (2024)", value: "400+", icon: "📊" },
  { label: "Followers", value: "25+", icon: "👥" },
];

export default function GitHubSection() {
  const ghUsername = personalInfo.githubUsername;

  return (
    <section id="github" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-zinc-300 border border-zinc-700/40 mb-4">
            <GithubIcon size={14} />
            Open Source
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            GitHub{" "}
            <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Consistent contributions — building in public, learning in the open.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map(({ label, value, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="glass rounded-2xl p-5 border border-zinc-800/60 text-center"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-zinc-500 text-xs">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl border border-zinc-800/60 overflow-hidden mb-10"
        >
          <div className="px-6 py-4 border-b border-zinc-800/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-zinc-300 font-semibold">
              <Activity size={16} className="text-green-400" />
              Contribution Activity
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 text-sm flex items-center gap-1 transition-colors"
            >
              View on GitHub
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="p-4">
            {/* GitHub contribution graph embed */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={`https://ghchart.rshah.org/2563eb/${ghUsername}`}
                alt="GitHub Contribution Graph"
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                style={{ imageRendering: "pixelated", filter: "brightness(0.9) contrast(1.1)" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Pinned Repositories */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-8">
          <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            📌 Pinned Repositories
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {pinnedRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="glass rounded-xl p-5 border border-zinc-800/60 hover:border-zinc-700/60 block transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <GithubIcon size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
                    <span className="font-semibold text-zinc-200 group-hover:text-white transition-colors text-sm">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={14} className="text-zinc-600 group-hover:text-zinc-400 transition-colors flex-shrink-0" />
                </div>

                <p className="text-zinc-500 text-xs leading-relaxed mb-4">{repo.description}</p>

                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <div className="flex items-center gap-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    {repo.language}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={11} />
                    {repo.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={11} />
                    {repo.forks}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-zinc-700/60 hover:border-zinc-500/60 text-zinc-300 hover:text-white rounded-xl font-semibold transition-all duration-200"
          >
            <GithubIcon size={18} />
            View All Repositories
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
