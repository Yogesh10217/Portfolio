"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, Download, ExternalLink, ArrowDown, MapPin, Sparkles } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/lib/data";
import { withBasePath } from "@/lib/site";

const NAME_LEFT = "YOGESH";
const NAME_RIGHT = "E.";

const stats = [
  { value: "10+", label: "Projects shipped" },
  { value: "8.7", label: "CGPA" },
  { value: "2+", label: "Certifications" },
  { value: "1", label: "Patent filed" },
];

function LetterReveal({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={`inline-flex ${className}`} style={{ perspective: "600px" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -80 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.055,
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          className="inline-block"
          style={{ transformOrigin: "50% 100%" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function GradientRingPhoto() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let raf: number;
    let current = 0;
    const tick = () => {
      current += 0.4;
      setAngle(current % 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
      {/* Outer blurred glow */}
      <div
        className="absolute -inset-8 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #f97316 0%, #ef4444 50%, transparent 70%)" }}
      />

      {/* Spinning gradient ring */}
      <div
        className="absolute -inset-1 rounded-full"
        style={{
          background: `conic-gradient(from ${angle}deg, #f97316, #ef4444, #eab308, #f97316)`,
          borderRadius: "50%",
        }}
      />

      {/* Inner dark ring spacer */}
      <div className="absolute inset-0.5 rounded-full bg-[#08080f]" />

      {/* Spinning outer ring (thinner, slower, opposite direction) */}
      <div
        className="absolute -inset-3 rounded-full opacity-20"
        style={{
          background: `conic-gradient(from ${360 - angle * 0.5}deg, transparent 60%, #f97316 80%, transparent 100%)`,
          borderRadius: "50%",
        }}
      />

      {/* Photo */}
      <img
        src="/profile.jpg"
        alt="Yogesh E"
        className="absolute inset-1.5 rounded-full object-cover object-top"
        style={{ width: "calc(100% - 12px)", height: "calc(100% - 12px)" }}
      />

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[rgba(14,14,28,0.95)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md shadow-xl text-xs font-semibold whitespace-nowrap"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span className="text-[#f8fafc]">Available for work</span>
      </motion.div>

      {/* Location badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
        className="absolute -top-3 -right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-[rgba(14,14,28,0.95)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md shadow-xl text-xs font-medium"
      >
        <MapPin size={11} className="text-orange-400" />
        <span className="text-[#94a3b8]">Bengaluru</span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const resumeHref = withBasePath("/Yogesh_E.pdf");

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#08080f]"
    >
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #f97316, transparent 60%)" }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #ef4444, transparent 60%)" }}
          animate={{ x: [0, -40, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #eab308, transparent 60%)" }}
          animate={{ x: [0, 20, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12"
      >
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="min-w-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 badge mb-8"
            >
              <Sparkles size={12} className="text-orange-400" />
              <span>Software Development Engineer</span>
            </motion.div>

            {/* Name — letter reveal */}
            <div className="mb-5 overflow-visible">
              <h1 className="font-black tracking-tight leading-none" style={{ fontFamily: "var(--font-jakarta)", fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>
                <LetterReveal text={NAME_LEFT} delay={0.3} className="text-[#f8fafc]" />
                <br />
                <LetterReveal text={NAME_RIGHT} delay={0.65} className="gradient-text" />
              </h1>
            </div>

            {/* Typed role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-lg sm:text-2xl font-semibold text-[#94a3b8]" style={{ fontFamily: "var(--font-jakarta)" }}>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer", 2000,
                    "Backend Systems Engineer", 2000,
                    "AI Platform Builder", 2000,
                    "Software Engineer", 2000,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                  className="gradient-text"
                />
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="w-0.5 h-6 gradient-bg rounded-full inline-block"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl mb-10"
            >
              Building{" "}
              <span className="text-[#94a3b8] font-medium">scalable web applications</span>,{" "}
              <span className="text-[#94a3b8] font-medium">AI-powered platforms</span>, and{" "}
              <span className="text-[#94a3b8] font-medium">production-ready backend systems</span> —
              from idea to deployment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 gradient-bg rounded-xl text-white text-sm font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 glow-accent"
              >
                <ExternalLink size={15} />
                View Projects
              </motion.a>
              <motion.a
                href={resumeHref}
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-[#94a3b8] text-sm font-semibold border border-[rgba(255,255,255,0.08)] hover:border-[rgba(249,115,22,0.3)] hover:text-white bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(249,115,22,0.06)] transition-all duration-300"
              >
                <Download size={15} />
                Resume
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-[#94a3b8] text-sm font-semibold border border-[rgba(255,255,255,0.08)] hover:border-[rgba(249,115,22,0.3)] hover:text-white bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(249,115,22,0.06)] transition-all duration-300"
              >
                <Mail size={15} />
                Say Hello
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="flex items-center gap-5"
            >
              {[
                { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
                { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#475569] hover:text-[#94a3b8] transition-colors link-underline text-sm flex items-center gap-1.5"
                >
                  <Icon size={17} />
                  <span className="text-xs">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex justify-center lg:justify-end"
          >
            <GradientRingPhoto />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7 }}
          className="mt-20 pt-8 border-t border-[rgba(255,255,255,0.06)] grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>{value}</div>
              <div className="text-xs text-[#475569] font-medium uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#475569] hover:text-[#94a3b8] transition-colors group"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <motion.div
          className="w-px h-10 gradient-bg rounded-full opacity-40 group-hover:opacity-80 transition-opacity"
          animate={{ scaleY: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}
