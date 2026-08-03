"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.04)] bg-[#08080f] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[radial-gradient(ellipse_at_bottom,#f9731622,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.a 
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/25 glow-accent">
                YE
              </div>
              <span className="font-semibold text-lg text-[#f8fafc] tracking-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                Yogesh<span className="gradient-text">.</span>
              </span>
            </motion.a>
            <p className="text-[#475569] text-sm mt-1">
              Building scalable web apps & AI systems.
            </p>
          </div>

          {/* Socials & Top Action */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              {[
                { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
                { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[rgba(249,115,22,0.3)] hover:bg-[rgba(249,115,22,0.05)] transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            <div className="hidden sm:block w-px h-8 bg-[rgba(255,255,255,0.06)]" />

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-[#94a3b8] hover:text-white hover:border-[rgba(249,115,22,0.3)] hover:bg-[rgba(249,115,22,0.05)] text-sm font-semibold transition-all duration-300"
            >
              Back to top <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.04)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-xs font-medium">
            © {new Date().getFullYear()} Yogesh E. All rights reserved.
          </p>
          <p className="text-[#475569] text-xs flex items-center gap-1.5 font-medium">
            Designed & Built with 
            <span className="text-orange-400 font-semibold">Next.js</span> & 
            <span className="text-red-400 font-semibold">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
