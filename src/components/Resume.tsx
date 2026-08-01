"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-blue-400 border border-blue-500/20 mb-4">
            <FileText size={14} />
            Resume
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-zinc-500">
            Download or preview my latest resume.
          </p>
        </motion.div>

        {/* Resume card */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl border border-zinc-800/60 overflow-hidden"
        >
          {/* Toolbar */}
          <div className="px-6 py-4 border-b border-zinc-800/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-zinc-300 font-semibold">
              <FileText size={16} className="text-blue-400" />
              Yogesh_E_Resume.pdf
            </div>
            <div className="flex items-center gap-2">
              <motion.a
                href="/Yogesh_E.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-zinc-400 hover:text-white border border-zinc-700/60 hover:border-zinc-500/60 text-sm transition-all"
              >
                <Eye size={14} />
                Preview
              </motion.a>
              <motion.a
                href="/Yogesh_E.pdf"
                download
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-all glow-blue"
              >
                <Download size={14} />
                Download
              </motion.a>
            </div>
          </div>

          {/* PDF placeholder (replace with real embed when you have the PDF) */}
          <div className="relative bg-zinc-900/60 min-h-[500px] flex items-center justify-center">
            <div className="text-center py-20">
              <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center mx-auto mb-6 border border-zinc-700/60">
                <FileText size={36} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Resume Available</h3>
              <p className="text-zinc-500 mb-6 max-w-xs mx-auto text-sm">
                Click download below to get the full PDF resume, or preview it in a new tab.
              </p>
              <div className="flex items-center justify-center gap-3">
                <motion.a
                  href="/Yogesh_E.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 glass border border-zinc-700/60 hover:border-zinc-500/60 text-zinc-300 hover:text-white rounded-xl text-sm font-semibold transition-all"
                >
                  <Eye size={16} />
                  Preview
                </motion.a>
                <motion.a
                  href="/Yogesh_E.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all glow-blue"
                >
                  <Download size={16} />
                  Download PDF
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick summary */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: "Education", value: "B.Tech · CGPA 8.7", icon: "🎓" },
            { label: "Certifications", value: "ServiceNow CAD + CSA", icon: "🏆" },
            { label: "Patent", value: "1 Filed · AI Research", icon: "📄" },
          ].map(({ label, value, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass rounded-xl p-4 border border-zinc-800/60 flex items-center gap-3"
            >
              <span className="text-2xl">{icon}</span>
              <div>
                <div className="text-zinc-500 text-xs">{label}</div>
                <div className="text-zinc-200 text-sm font-semibold">{value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
