"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Server,
  Database,
  Building2,
  CreditCard,
  Smartphone,
  Sparkles,
  MapPin,
  Globe2,
  GraduationCap,
  Code2,
} from "lucide-react";
import { getYearsOfExperience } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const focusAreas = [
  { icon: <Server className="h-5 w-5" />, title: "Scalable REST APIs", desc: "Sanctum & JWT auth, rate limiting, WebSockets, and FCM push notifications." },
  { icon: <Database className="h-5 w-5" />, title: "Database Optimization", desc: "MySQL & PostgreSQL schema design, indexing strategies, query profiling." },
  { icon: <Building2 className="h-5 w-5" />, title: "SaaS & Multi-Tenant", desc: "Enterprise CRMs, marketplaces, booking engines with tenant isolation." },
  { icon: <CreditCard className="h-5 w-5" />, title: "Payment Integrations", desc: "Stripe Connect, M-Pesa, QuickBooks wired into production workflows." },
  { icon: <Smartphone className="h-5 w-5" />, title: "Mobile Backends", desc: "9 production APIs powering hotel, ride-hailing, logistics & HR apps." },
  { icon: <Sparkles className="h-5 w-5" />, title: "AI & Automation", desc: "Python Flask microservices integrating AI/NLP into business systems." },
];

export default function AboutSection() {
  const reduce = useReducedMotion();
  const years = getYearsOfExperience();

  return (
    <section id="about" className="relative scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <Reveal>
          <div className="flex items-center gap-3 text-primary">
            <span className="h-px w-8 bg-primary/50" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">01 / About</span>
          </div>
        </Reveal>

        {/* Bento grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Profile card - spans 2 cols */}
          <Reveal delay={0.05} className="md:col-span-2 lg:col-span-2">
            <div className="neon-border flex h-full flex-col gap-5 rounded-3xl bg-card p-7">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  The engine behind{" "}
                  <span className="text-gradient font-serif-accent">great products.</span>
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                I&apos;m Faizan Ullah — a backend engineer who builds the
                server-side of products people rely on daily. Over{" "}
                <strong className="font-semibold text-foreground">{years}+ years</strong>{" "}
                I&apos;ve shipped e-commerce platforms, booking engines,
                enterprise CRMs, and SaaS products across international teams.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I value reliability: clean API contracts, optimized queries,
                thoughtful auth, and integrations that don&apos;t surprise you
                in production.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {[
                  { icon: <MapPin className="h-3.5 w-3.5" />, label: "Karachi, Pakistan" },
                  { icon: <Globe2 className="h-3.5 w-3.5" />, label: "Remote-ready" },
                  { icon: <GraduationCap className="h-3.5 w-3.5" />, label: "BS CS (in progress)" },
                ].map((f) => (
                  <span key={f.label} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
                    <span className="text-primary">{f.icon}</span>
                    {f.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stats column */}
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="neon-border flex-1 rounded-3xl bg-card p-6">
              <span className="font-mono text-4xl font-bold text-primary">{years}+</span>
              <p className="mt-1 text-sm text-muted-foreground">Years in production</p>
            </div>
            <div className="neon-border flex-1 rounded-3xl bg-card p-6">
              <span className="font-mono text-4xl font-bold text-accent">26</span>
              <p className="mt-1 text-sm text-muted-foreground">Projects shipped</p>
            </div>
          </Reveal>

          {/* Code philosophy card */}
          <Reveal delay={0.15}>
            <div className="neon-border flex h-full flex-col gap-4 rounded-3xl bg-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Code2 className="h-5 w-5" />
              </span>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                <span className="text-primary">$philosophy</span> = &quot;Ship
                something dependable and well-architected — never clever and
                fragile.&quot;;
              </p>
            </div>
          </Reveal>
        </div>

        {/* Focus areas grid */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={0.05 + i * 0.04}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-md)]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {area.icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{area.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{area.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
