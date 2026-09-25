"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  GitBranch, AlertTriangle, CheckCircle2, ChevronRight,
  Radio, Shield, Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const studies = [
  {
    id: "cicd",
    icon: <GitBranch className="h-5 w-5" />,
    tag: "CI/CD",
    title: "Zero-Downtime Deployment",
    problem: "15+ manual deploy steps, 5-10 min downtime per release, cache failures in GitHub Actions.",
    solution: "Automated GitHub Actions pipeline: health checks, asset compilation, PHPUnit gates, config cache clearing, zero-downtime swap with Laravel maintenance mode.",
    impact: ["15 min manual → 42s automated", "Zero downtime across 30+ deploys/month", "Cache failures eliminated"],
    tech: ["GitHub Actions", "Laravel", "PHPUnit", "Docker"],
    accent: "cyan",
  },
  {
    id: "php",
    icon: <AlertTriangle className="h-5 w-5" />,
    tag: "Dependencies",
    title: "PHP 8.1 Platform Conflicts",
    problem: "Strict PHP 8.1 platform requirements caused cascading Composer dependency failures. Conflicting extensions broke installs and CI.",
    solution: "Audited platform constraints, configured platform-check, pinned conflicting versions, CI-specific --ignore-platform-req for controlled handling.",
    impact: ["Setup: 45 min → 3 min", "CI failures from platform: 100% → 0%", "Reproducible builds everywhere"],
    tech: ["Composer", "PHP 8.1", "GitHub Actions", "Docker"],
    accent: "amber",
  },
  {
    id: "tenant",
    icon: <Shield className="h-5 w-5" />,
    tag: "Multi-Tenant",
    title: "Tenant Data Isolation in SaaS CRM",
    problem: "CRMLogy needed strict data isolation between agency tenants sharing a single database. Cross-tenant leaks were unacceptable.",
    solution: "Middleware-based tenant scoping: TenantScope global scope on all models, subdomain/header-based context resolution, composite indexes, audit logging.",
    impact: ["Zero cross-tenant incidents (5 tenants)", "Onboarding: 2 days → 15 min", "Performance maintained with indexes"],
    tech: ["Laravel", "Eloquent Scopes", "MySQL", "Middleware"],
    accent: "emerald",
  },
  {
    id: "ws",
    icon: <Radio className="h-5 w-5" />,
    tag: "Real-Time",
    title: "WebSocket Latency in Dashboards",
    problem: "200-400ms notification delays under load. Anomaly alerts missing critical windows, causing delayed operator response.",
    solution: "Switched polling to Pusher WebSockets with Laravel Echo, event batching, client reconnection logic, dedicated Redis broadcast queue for priority events.",
    impact: ["Latency: 400ms → < 50ms (8x)", "100+ concurrent dashboard users", "Anomaly alerts in < 100ms"],
    tech: ["Pusher", "Laravel Echo", "Redis", "WebSockets"],
    accent: "violet",
  },
];

const accentMap = {
  cyan: { text: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/25", dot: "bg-cyan-400" },
  amber: { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/25", dot: "bg-amber-400" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/25", dot: "bg-emerald-400" },
  violet: { text: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/25", dot: "bg-violet-400" },
};

export default function ArchitectureCaseStudies() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(studies[0].id);
  const active = studies.find((s) => s.id === activeId);
  const a = accentMap[active.accent];

  return (
    <section id="architecture" className="relative scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-3 text-primary">
            <span className="h-px w-8 bg-primary/50" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">Architecture</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Engineering challenges <span className="text-gradient font-serif-accent">solved.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <Reveal delay={0.08}>
            <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible scrollbar-none">
              {studies.map((s) => {
                const sa = accentMap[s.accent];
                const on = activeId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className={cn(
                      "flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 lg:w-full",
                      on ? `${sa.border} ${sa.bg}` : "border-border bg-card hover:border-primary/20"
                    )}
                  >
                    <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg", on ? `${sa.bg} ${sa.text}` : "bg-muted text-muted-foreground")}>
                      {s.icon}
                    </span>
                    <div className="min-w-0">
                      <div className={cn("text-[11px] font-bold uppercase tracking-wider", on ? sa.text : "text-muted-foreground")}>{s.tag}</div>
                      <div className="mt-0.5 truncate text-sm font-semibold text-foreground">{s.title}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Detail */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="neon-border rounded-3xl bg-card p-6 sm:p-8"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl", a.bg, a.text)}>{active.icon}</span>
                  <div>
                    <span className={cn("text-[11px] font-bold uppercase tracking-widest", a.text)}>{active.tag}</span>
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">{active.title}</h3>
                  </div>
                </div>

                <div className="mb-5 rounded-2xl border border-red-500/15 bg-red-500/5 p-5">
                  <div className="mb-1.5 flex items-center gap-2 text-xs font-bold text-red-400">
                    <AlertTriangle className="h-3.5 w-3.5" />Problem
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{active.problem}</p>
                </div>

                <div className="mb-5 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-5">
                  <div className="mb-1.5 flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <Workflow className="h-3.5 w-3.5" />Solution
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{active.solution}</p>
                </div>

                <div className="mb-5">
                  <div className="mb-2.5 flex items-center gap-2 text-sm font-bold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-success" />Impact
                  </div>
                  <ul className="space-y-1.5">
                    {active.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", a.dot)} />{item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-border/50 pt-4">
                  {active.tech.map((t) => (
                    <span key={t} className="rounded-lg border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground">{t}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
