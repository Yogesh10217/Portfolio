"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, ArrowDown, Download, ExternalLink } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/lib/data";
import BackgroundParticles from "./BackgroundParticles";

const floatingTech = [
  { label: "React", x: "5%", y: "15%", delay: 0 },
  { label: "Python", x: "88%", y: "12%", delay: 0.5 },
  { label: "FastAPI", x: "3%", y: "65%", delay: 1 },
  { label: "Next.js", x: "85%", y: "58%", delay: 1.5 },
  { label: "Docker", x: "12%", y: "85%", delay: 0.8 },
  { label: "OpenAI", x: "80%", y: "82%", delay: 1.2 },
  { label: "TypeScript", x: "45%", y: "5%", delay: 0.3 },
  { label: "PostgreSQL", x: "48%", y: "92%", delay: 0.7 },
];

const socialLinks = [
  { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
  { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg grid-pattern"
    >
      <BackgroundParticles />
      
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.10) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* Floating tech pills */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingTech.map(({ label, x, y: fy, delay }) => (
          <motion.div
            key={label}
            className="absolute"
            style={{ left: x, top: fy }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 1, duration: 0.5 }}
          >
            <motion.div
              className="px-3 py-1.5 glass rounded-full text-xs font-medium text-zinc-400 border border-zinc-700/50 select-none"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3 + delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay * 0.5,
              }}
            >
              {label}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-300">Open to opportunities</span>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-lg mb-3 font-mono"
        >
          Hi, I&apos;m 👋
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-white">Yogesh </span>
          <span
            className="relative inline-block"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            E
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold mb-6 text-zinc-300 h-12 flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Backend Systems Engineer",
              2000,
              "AI Platform Builder",
              2000,
              "Software Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building{" "}
          <span className="text-blue-400">scalable web applications</span>,{" "}
          <span className="text-violet-400">AI-powered platforms</span>, and{" "}
          <span className="text-emerald-400">production-ready backend systems</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 glow-blue flex items-center gap-2"
          >
            <ExternalLink size={16} />
            View Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 glass border border-zinc-700/60 hover:border-blue-500/50 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 glass border border-zinc-700/60 hover:border-zinc-500/60 text-zinc-300 hover:text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2"
          >
            <Mail size={16} />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map(({ href, icon: Icon, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              whileHover={{ scale: 1.15, y: -2 }}
              className="w-10 h-10 glass rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
            >
              <Icon size={18} />
            </motion.a>
          ))}
          <div className="w-px h-6 bg-zinc-700/60 mx-1" />
          <span className="text-zinc-600 text-sm font-mono">📍 India</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
