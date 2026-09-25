"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Server, Radio, GitBranch, Layout } from "lucide-react";
import {
  SiPhp, SiLaravel, SiMysql, SiNodedotjs, SiPython, SiDocker,
  SiGit, SiGithub, SiBitbucket, SiReact, SiPhpstorm, SiPostman,
  SiFigma, SiStripe, SiRedis,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const ease = [0.22, 1, 0.36, 1];

const tabs = [
  {
    id: "backend",
    label: "Backend",
    icon: <Server className="h-4 w-4" />,
    color: "border-cyan-500/30 bg-cyan-500/5",
    items: [
      { name: "PHP 8.1+", level: 95, icon: <SiPhp className="h-5 w-5 text-[#777BB4]" /> },
      { name: "Laravel", level: 95, icon: <SiLaravel className="h-5 w-5 text-[#FF2D20]" /> },
      { name: "REST APIs", level: 90, icon: <SiPostman className="h-5 w-5 text-[#FF6C37]" /> },
      { name: "MySQL / PostgreSQL", level: 88, icon: <SiMysql className="h-5 w-5 text-[#4479A1]" /> },
      { name: "Node.js", level: 75, icon: <SiNodedotjs className="h-5 w-5 text-[#5FA04E]" /> },
      { name: "Python Flask", level: 60, icon: <SiPython className="h-5 w-5 text-[#3776AB]" /> },
    ],
  },
  {
    id: "realtime",
    label: "Real-Time",
    icon: <Radio className="h-4 w-4" />,
    color: "border-emerald-500/30 bg-emerald-500/5",
    items: [
      { name: "Pusher & WebSockets", level: 85, icon: <Radio className="h-5 w-5 text-emerald-400" /> },
      { name: "Laravel Echo", level: 82, icon: <SiLaravel className="h-5 w-5 text-[#FF2D20]" /> },
      { name: "Redis & Queues", level: 80, icon: <SiRedis className="h-5 w-5 text-[#DC382D]" /> },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: <GitBranch className="h-4 w-4" />,
    color: "border-amber-500/30 bg-amber-500/5",
    items: [
      { name: "GitHub Actions", level: 82, icon: <SiGithub className="h-5 w-5 text-[#181717] dark:text-white" /> },
      { name: "Docker", level: 78, icon: <SiDocker className="h-5 w-5 text-[#2496ED]" /> },
      { name: "Git Workflows", level: 92, icon: <SiGit className="h-5 w-5 text-[#F05032]" /> },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: <Layout className="h-4 w-4" />,
    color: "border-violet-500/30 bg-violet-500/5",
    items: [
      { name: "React.js", level: 65, icon: <SiReact className="h-5 w-5 text-[#61DAFB]" /> },
      { name: "Payment UIs (Stripe)", level: 80, icon: <SiStripe className="h-5 w-5 text-[#635BFF]" /> },
    ],
  },
];

const tools = [
  { name: "Docker", icon: <SiDocker className="h-4 w-4 text-[#2496ED]" /> },
  { name: "PHPStorm", icon: <SiPhpstorm className="h-4 w-4" /> },
  { name: "VS Code", icon: <VscCode className="h-4 w-4 text-[#007ACC]" /> },
  { name: "Postman", icon: <SiPostman className="h-4 w-4 text-[#FF6C37]" /> },
  { name: "MySQL WB", icon: <SiMysql className="h-4 w-4 text-[#4479A1]" /> },
  { name: "GitHub", icon: <SiGithub className="h-4 w-4" /> },
  { name: "Bitbucket", icon: <SiBitbucket className="h-4 w-4 text-[#0052CC]" /> },
  { name: "Figma", icon: <SiFigma className="h-4 w-4 text-[#F24E1E]" /> },
];

export default function TechStack() {
  const [active, setActive] = useState("backend");
  const reduce = useReducedMotion();
  const tab = tabs.find((t) => t.id === active);

  return (
    <section id="skills" className="relative scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-3 text-primary">
            <span className="h-px w-8 bg-primary/50" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">02 / Technical Matrix</span>
          </div>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Production-proven toolkit.
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted-foreground">
            Technologies organized by how they work together in real systems.
          </p>
        </Reveal>

        {/* Tab bar */}
        <Reveal delay={0.08} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                  active === t.id
                    ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-sm)]"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {t.icon}
                {t.label}
                <span className={cn(
                  "rounded-full px-1.5 py-0.5 text-[11px] font-bold",
                  active === t.id ? "bg-primary-foreground/20" : "bg-muted"
                )}>
                  {t.items.length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills with progress bars */}
        <AnimatePresence mode="wait">
          {tab && (
            <motion.div
              key={tab.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={cn("mt-6 rounded-3xl border p-6 sm:p-8", tab.color)}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {tab.items.map((skill, i) => (
                  <div key={skill.name} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card">
                      {skill.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: i * 0.08, duration: 0.8, ease }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toolchain */}
        <Reveal delay={0.1} className="mt-6">
          <div className="rounded-2xl border border-border bg-card p-5">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-muted-foreground">Daily Toolchain</span>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/30"
                >
                  {tool.icon}
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
