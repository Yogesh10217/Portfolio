"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, Loader2, MessageSquare } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { GithubIcon } from "@/components/ui/GithubIcon";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-blue-400",
    bg: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/yogeshe",
    href: personalInfo.linkedin,
    color: "text-sky-400",
    bg: "from-sky-500/10 to-transparent",
    border: "border-sky-500/20",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/yogeshe",
    href: personalInfo.github,
    color: "text-zinc-300",
    bg: "from-zinc-500/10 to-transparent",
    border: "border-zinc-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
    color: "text-emerald-400",
    bg: "from-emerald-500/10 to-transparent",
    border: "border-emerald-500/20",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate form submission (replace with real API call / Formspree / EmailJS)
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{ background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-blue-400 border border-blue-500/20 mb-4">
            <MessageSquare size={14} />
            Get in Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Open to full-time roles, freelance projects, and interesting collaborations.
            I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactLinks.map(({ icon: Icon, label, value, href, color, bg, border }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {href ? (
                  <motion.a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className={`flex items-center gap-4 p-4 glass rounded-xl border ${border} bg-gradient-to-br ${bg} transition-all duration-200 block`}
                  >
                    <div className={`w-10 h-10 rounded-lg glass flex items-center justify-center ${color} flex-shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 mb-0.5">{label}</div>
                      <div className="text-zinc-200 text-sm font-medium">{value}</div>
                    </div>
                  </motion.a>
                ) : (
                  <div className={`flex items-center gap-4 p-4 glass rounded-xl border ${border} bg-gradient-to-br ${bg}`}>
                    <div className={`w-10 h-10 rounded-lg glass flex items-center justify-center ${color} flex-shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 mb-0.5">{label}</div>
                      <div className="text-zinc-200 text-sm font-medium">{value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-4 glass rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-semibold">Available for Work</span>
              </div>
              <p className="text-zinc-500 text-xs">Open to full-time SDE / Full Stack / Backend roles</p>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl border border-zinc-800/60 p-6 sm:p-8">
              {formState === "success" ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={56} className="text-emerald-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-400">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setFormState("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-4 py-2 glass rounded-lg text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                      { name: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
                    ].map(({ name, label, type, placeholder }) => (
                      <div key={name}>
                        <label htmlFor={`contact-${name}`} className="block text-sm font-medium text-zinc-400 mb-1.5">
                          {label} <span className="text-red-400">*</span>
                        </label>
                        <input
                          id={`contact-${name}`}
                          name={name}
                          type={type}
                          required
                          placeholder={placeholder}
                          value={form[name as keyof typeof form]}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 text-sm"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-zinc-400 mb-1.5">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Job opportunity / Collaboration / Project"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-400 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about the role, project, or what you have in mind..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === "loading"}
                    whileHover={{ scale: formState === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 glow-blue"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
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
