"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolio";
import { getYearsOfExperience } from "@/lib/utils";
import Button from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1];

export default function HeroSection() {
  const { profile } = portfolioData;
  const reduce = useReducedMotion();
  const years = getYearsOfExperience();

  const fade = (delay) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  const socials = [
    {
      label: "GitHub",
      href: profile.contact.github,
      icon: <FaGithub className="h-4 w-4" />,
    },
    {
      label: "LinkedIn",
      href: profile.contact.linkedin,
      icon: <FaLinkedin className="h-4 w-4" />,
    },
    {
      label: "Email",
      href: `mailto:${profile.contact.email}`,
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-0 pt-28 sm:px-8"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute left-[12%] top-[58%] h-72 w-72 rounded-full bg-accent/10 blur-[110px]" />
        <div className="absolute right-[8%] top-[30%] h-72 w-72 rounded-full bg-primary/8 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.5] dark:opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 90% 60% at 50% 40%, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 60% at 50% 40%, black 20%, transparent 75%)",
          }}
        />
      </div>

      <div className="grid w-full max-w-6xl items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ─── Left: copy ─── */}
        <div className="flex flex-col items-start">
          <motion.div {...fade(0.05)}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground shadow-[var(--shadow-xs)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to new opportunities
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.12)}
            className="mt-7 max-w-xl text-[2.6rem] font-bold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl md:text-[4.25rem]"
          >
            I build backend systems that{" "}
            <span className="font-serif-accent text-gradient">actually scale.</span>
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            {...fade(0.28)}
            className="mt-4 flex flex-wrap gap-2 text-sm"
          >
            {["Backend Engineering", "API Architecture", "Database Optimization", "AI Integration"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card/70 px-3 py-1 font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>

          <motion.div
            {...fade(0.36)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects" size="lg">
              View my work
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/resume.pdf" download="Faizan-Ullah-Resume.pdf" variant="secondary" size="lg">
              <Download className="h-4 w-4" />
              Resume
            </Button>
            <Button href="#contact" variant="ghost" size="lg">
              Contact me
            </Button>
          </motion.div>

          <motion.div
            {...fade(0.44)}
            className="mt-8 flex items-center gap-2"
          >
            <span className="mr-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Find me on
            </span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/70 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-[var(--shadow-sm)]"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ─── Right: portrait ─── */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="relative mx-auto flex w-full max-w-[420px] items-center justify-center"
        >
          {/* Layered glow */}
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute inset-[8%] rounded-full bg-gradient-to-tr from-primary/25 via-accent/15 to-transparent blur-3xl" />
          </div>

          <div className="relative pb-6">
            {/* Portrait card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-lg)]">
              <div className="relative aspect-[4/5] w-[280px] overflow-hidden sm:w-[320px] lg:w-[360px]">
                <Image
                  src="/me.png"
                  alt="Faizan Ullah — Backend Engineer & API Architect"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Availability chip — outside overflow-hidden so it isn't clipped */}
            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card py-2 pl-3 pr-4 shadow-[var(--shadow-md)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-foreground">
                Available for hire
              </span>
            </div>

            {/* Stat chip — top left */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 180, damping: 18 }}
              className="absolute -left-3 top-8 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-md)] sm:-left-6"
            >
              <div className="font-mono text-2xl font-bold text-primary">{years} yrs</div>
              <div className="text-[11px] font-medium text-muted-foreground">Experience</div>
            </motion.div>

            {/* Stat chip — bottom right */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 180, damping: 18 }}
              className="absolute -right-3 bottom-14 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-md)] sm:-right-6"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-2xl font-bold text-primary">26</span>
                <span className="text-[11px] font-medium leading-tight text-muted-foreground">
                  Projects
                  <br />
                  shipped
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ─── Credibility strip ─── */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className="w-full"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            { value: `${years}`, label: "Years of experience", note: "Since Jan 2023" },
            { value: "17", label: "Live web platforms", note: "Production systems" },
            { value: "9", label: "Mobile app backends", note: "iOS & Android" },
            { value: "26", label: "Projects delivered", note: "End to end" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.07, duration: 0.6, ease }}
              className="flex flex-col gap-1 bg-background/80 px-5 py-5 backdrop-blur-sm"
            >
              <span className="font-mono text-2xl font-bold tracking-tight text-foreground">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-foreground">{stat.label}</span>
              <span className="text-xs text-muted-foreground">{stat.note}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        aria-label="Scroll to about section"
        className="group mt-12 hidden flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}