"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Link2, ExternalLink, Mail, Download } from "lucide-react";
import { getYearsOfExperience } from "@/lib/utils";

export default function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-violet-500/6 rounded-full blur-[80px]" />
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-indigo-400/6 rounded-full blur-[80px]" />
      </div>

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ─── LEFT: Text Content ─── */}
        <div className="flex flex-col items-start">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to new opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-5"
          >
            <span className="text-foreground">Hi, I&apos;m </span>
            <br />
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          {/* Role pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {["Backend Engineer", "Laravel Expert", "API Architect", "AI Integrator"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-border bg-muted/50 text-muted-foreground text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
          >
            {profile.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 text-sm"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download="Faizan-Ullah-Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 border border-border bg-muted/40 text-foreground font-semibold rounded-xl hover:bg-muted/80 transition-all hover:scale-105 text-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border bg-transparent text-muted-foreground font-semibold rounded-xl hover:bg-muted/40 transition-all text-sm"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: <Link2 className="w-4 h-4" />, href: profile.contact.github, label: "GitHub" },
              { icon: <ExternalLink className="w-4 h-4" />, href: profile.contact.linkedin, label: "LinkedIn" },
              { icon: <Mail className="w-4 h-4" />, href: `mailto:${profile.contact.email}`, label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-muted/40 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-muted/80 transition-all"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT: Profile Photo ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glow rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[380px] h-[380px] rounded-full border border-primary/10 animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[440px] h-[440px] rounded-full border border-primary/5" />
          </div>

          {/* Photo container */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px]">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-90" />

            {/* Image frame */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
              <Image
                src="/me.png"
                alt="Faizan Ullah — Backend Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge: Available */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-lg whitespace-nowrap"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-foreground">Available for hire</span>
            </motion.div>

            {/* Floating badge: Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, type: "spring" }}
              className="absolute top-6 -right-4 md:-right-10 flex flex-col items-center px-4 py-3 rounded-2xl bg-card border border-border shadow-lg"
            >
              <span className="text-2xl font-black text-primary">{getYearsOfExperience()}</span>
              <span className="text-xs text-muted-foreground font-medium">Yrs Exp</span>
            </motion.div>

            {/* Floating badge: Projects */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute top-6 -left-4 md:-left-10 flex flex-col items-center px-4 py-3 rounded-2xl bg-card border border-border shadow-lg"
            >
              <span className="text-2xl font-black text-primary">25+</span>
              <span className="text-xs text-muted-foreground font-medium">Projects</span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
