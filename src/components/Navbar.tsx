"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#tech", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Check if we're at the very bottom of the page
      if (scrollTop >= docHeight - 50) {
        setActiveSection(navLinks[navLinks.length - 1].href.replace("#", ""));
        return;
      }

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const topOffset = el.getBoundingClientRect().top + window.scrollY;
          // Trigger when section reaches top third of viewport
          if (window.scrollY >= topOffset - window.innerHeight / 3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div id="read-progress" style={{ width: `${progress}%` }} />

      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(8,8,15,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] shadow-2xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/25 glow-accent">
                YE
              </div>
              <span className="font-semibold text-[15px] text-[#f8fafc] tracking-tight hidden sm:block" style={{ fontFamily: "var(--font-jakarta)" }}>
                Yogesh<span className="gradient-text">.</span>
              </span>
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-full px-2 py-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive ? "text-white" : "text-[#94a3b8] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 gradient-bg rounded-full opacity-90 shadow-lg shadow-orange-500/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Social + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="text-[#475569] hover:text-[#94a3b8] transition-colors p-1.5 rounded-lg hover:bg-[rgba(255,255,255,0.05)]" aria-label="GitHub">
                <GithubIcon size={17} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-[#475569] hover:text-[#94a3b8] transition-colors p-1.5 rounded-lg hover:bg-[rgba(255,255,255,0.05)]" aria-label="LinkedIn">
                <LinkedinIcon size={17} />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="px-4 py-2 text-sm font-semibold gradient-bg rounded-lg text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-200"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-[#475569] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed top-16 left-4 right-4 z-40 bg-[rgba(14,14,28,0.95)] backdrop-blur-2xl border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-2xl shadow-black/60 md:hidden overflow-hidden"
          >
            <div className="p-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="flex items-center px-4 py-3 text-sm font-medium text-[#94a3b8] hover:text-white hover:bg-[rgba(255,255,255,0.05)] rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 px-4 pt-3 border-t border-[rgba(255,255,255,0.06)] mt-2">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-white transition-colors">
                  <GithubIcon size={18} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-white transition-colors">
                  <LinkedinIcon size={18} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-[#475569] hover:text-white transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
