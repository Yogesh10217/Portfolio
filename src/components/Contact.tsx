"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/lib/data";

type FormState = "idle" | "loading" | "success";

const contactInfo = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/eyogesh", href: personalInfo.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "github.com/Yogesh10217", href: personalInfo.github },
  { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
];

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    const subject = encodeURIComponent(`Portfolio: ${form.subject}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    await new Promise((r) => setTimeout(r, 1000));
    setState("success");
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-20"
        >
          <p className="section-label mb-3">06 — Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f8fafc] mb-5" style={{ fontFamily: "var(--font-jakarta)" }}>
            Let's Work Together
          </h2>
          <p className="text-[#475569] max-w-xl">
            Open to full-time roles, freelance projects, and interesting collaborations.
            I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-3">
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {href ? (
                  <motion.a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 glass-card gradient-border group hover:shadow-lg hover:shadow-orange-500/10 block transition-all duration-300"
                  >
                    <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[#475569] text-[11px] font-semibold uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-[#94a3b8] text-sm group-hover:text-white transition-colors">{value}</div>
                    </div>
                  </motion.a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass-card opacity-50">
                    <div className="w-10 h-10 bg-[rgba(255,255,255,0.05)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#475569]" />
                    </div>
                    <div>
                      <div className="text-[#2a2a3a] text-[11px] font-semibold uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-[#475569] text-sm">{value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.36, duration: 0.5 }}
              className="p-4 rounded-2xl border border-[rgba(16,185,129,0.2)] bg-[rgba(16,185,129,0.05)]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 text-xs font-bold">Available for work</span>
              </div>
              <p className="text-[#475569] text-xs">
                Open to: SDE · Full Stack · Backend roles
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 overflow-hidden relative">
              {/* Subtle gradient in corner */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #f97316, transparent 70%)" }} />

              {state === "success" ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-14 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30"
                  >
                    <CheckCircle size={30} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#f8fafc] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                    Message sent!
                  </h3>
                  <p className="text-[#475569] mb-8">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setState("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="px-5 py-2.5 text-sm font-semibold border border-[rgba(255,255,255,0.08)] text-[#94a3b8] hover:text-white rounded-xl hover:border-[rgba(249,115,22,0.3)] transition-all"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: "name", label: "Full Name", placeholder: "John Doe", type: "text" },
                      { name: "email", label: "Email Address", placeholder: "john@company.com", type: "email" },
                    ].map(({ name, label, placeholder, type }) => (
                      <div key={name}>
                        <label htmlFor={`c-${name}`} className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wider">{label}</label>
                        <input
                          id={`c-${name}`}
                          name={name}
                          type={type}
                          required
                          placeholder={placeholder}
                          value={form[name as keyof typeof form]}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[#f8fafc] placeholder-[#2a2a3a] text-sm focus:outline-none focus:border-[rgba(249,115,22,0.4)] focus:ring-2 focus:ring-[rgba(249,115,22,0.12)] transition-all duration-200"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="c-subject" className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wider">Subject</label>
                    <input
                      id="c-subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Job opportunity / Collaboration / Project"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[#f8fafc] placeholder-[#2a2a3a] text-sm focus:outline-none focus:border-[rgba(249,115,22,0.4)] focus:ring-2 focus:ring-[rgba(249,115,22,0.12)] transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-message" className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      id="c-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity, project, or what you have in mind..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[#f8fafc] placeholder-[#2a2a3a] text-sm focus:outline-none focus:border-[rgba(249,115,22,0.4)] focus:ring-2 focus:ring-[rgba(249,115,22,0.12)] transition-all duration-200 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state === "loading"}
                    whileHover={{ scale: state === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 gradient-bg rounded-xl text-white text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {state === "loading" ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={15} /> Send Message →</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
