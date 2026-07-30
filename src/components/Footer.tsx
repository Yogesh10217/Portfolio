"use client";

import { motion } from "framer-motion";
import { Mail, Heart, ArrowUp } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { GithubIcon } from "@/components/ui/GithubIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-800/50 bg-[#09090b]">
      {/* Subtle gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-lg">
              <span className="text-white">Yogesh</span>
              <span className="gradient-text-blue"> E</span>
            </span>
            <p className="text-zinc-500 text-sm">Software Engineer · Full Stack · AI</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/yogeshe", icon: GithubIcon, label: "GitHub" },
              { href: "https://linkedin.com/in/yogeshe", icon: LinkedinIcon, label: "LinkedIn" },
              { href: "mailto:yogeshe@example.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-zinc-400 hover:text-white hover:border-blue-500/40 transition-all duration-200 text-sm"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Yogesh E. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm flex items-center gap-1.5">
            Built with <Heart size={12} className="text-red-500 fill-current" /> using Next.js 15, TypeScript & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
