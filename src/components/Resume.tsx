"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { withBasePath } from "@/lib/site";

export default function Resume() {
  const resumeHref = withBasePath("/Yogesh_E.pdf");

  return (
    <section id="resume" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-14 text-center"
        >
          <p className="section-label mb-3">07 — Resume</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f8fafc] mb-5" style={{ fontFamily: "var(--font-jakarta)" }}>
            Full Professional Profile
          </h2>
          <p className="text-[#475569] max-w-xl mx-auto">
            Get a comprehensive view of my experience, skills, and academic background in standard PDF format.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="glass-card p-1 gradient-border overflow-hidden group"
        >
          <div className="relative bg-[rgba(14,14,28,0.8)] rounded-[18px] min-h-[360px] flex items-center justify-center p-8 overflow-hidden">
            {/* Ambient glows inside card */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,#f9731633,transparent_50%)] pointer-events-none" />
            
            <div className="relative z-10 text-center flex flex-col items-center max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 rounded-3xl gradient-bg flex items-center justify-center shadow-2xl shadow-orange-500/30 mb-8"
              >
                <FileText size={36} className="text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-[#f8fafc] mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                Yogesh_E_Resume.pdf
              </h3>
              
              <p className="text-[#94a3b8] text-sm mb-10 leading-relaxed">
                Updated for 2026. Includes recent projects, Krama AI experience, and complete technical skill stack.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <motion.a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-[rgba(255,255,255,0.08)] text-[#f8fafc] text-sm font-semibold hover:border-[rgba(249,115,22,0.3)] hover:bg-[rgba(249,115,22,0.06)] transition-all duration-300"
                >
                  <Eye size={16} /> Preview PDF
                </motion.a>
                <motion.a
                  href={resumeHref}
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl gradient-bg text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 glow-accent"
                >
                  <Download size={16} /> Download
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
