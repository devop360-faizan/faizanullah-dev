"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Server, Database, CreditCard, Boxes, Wrench } from "lucide-react";

import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiCodeigniter,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiDocker,
  SiReact,
  SiPhpstorm,
  SiPostman,
  SiFigma,
  SiStripe,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const skills = [
  {
    name: "PHP",
    level: "Expert",
    years: "3.5+ yrs",
    desc: "OOP, MVC, PSR standards, high-performance web scripts",
    icon: <SiPhp className="h-5 w-5 text-[#777BB4]" />,
  },
  {
    name: "Laravel",
    level: "Expert",
    years: "3.5+ yrs",
    desc: "REST APIs, Sanctum auth, Eloquent ORM, queues, multi-tenancy",
    icon: <SiLaravel className="h-5 w-5 text-[#FF2D20]" />,
  },
  {
    name: "RESTful APIs",
    level: "Expert",
    years: "3.5+ yrs",
    desc: "Sanctum/JWT auth, FCM push, WebSockets, rate limiting",
    icon: <SiPostman className="h-5 w-5 text-[#FF6C37]" />,
  },
  {
    name: "Node.js & Express",
    level: "Advanced",
    years: "2+ yrs",
    desc: "Event-driven async services, REST endpoints, middleware",
    icon: <SiNodedotjs className="h-5 w-5 text-[#5FA04E]" />,
  },
  {
    name: "Python Flask",
    level: "Intermediate",
    years: "1.5+ yrs",
    desc: "AI/NLP service integration, microservice APIs, JSON processing",
    icon: <SiPython className="h-5 w-5 text-[#3776AB]" />,
  },
  {
    name: "CodeIgniter",
    level: "Intermediate",
    years: "2+ yrs",
    desc: "Lightweight MVC development and legacy refactoring",
    icon: <SiCodeigniter className="h-5 w-5 text-[#EF4223]" />,
  },
];

const dataSkills = [
  {
    name: "MySQL",
    level: "Advanced",
    years: "3+ yrs",
    desc: "Schema design, indexing, complex queries, transactions",
    icon: <SiMysql className="h-5 w-5 text-[#4479A1]" />,
  },
  {
    name: "PostgreSQL",
    level: "Advanced",
    years: "2+ yrs",
    desc: "Relational modeling, JSONB, triggers, views",
    icon: <SiPostgresql className="h-5 w-5 text-[#4169E1]" />,
  },
  {
    name: "DB Optimization",
    level: "Expert",
    years: "3+ yrs",
    desc: "Query profiling, indexing strategies, caching, bottlenecks",
    icon: <Database className="h-5 w-5 text-primary" />,
  },
];

const integrationSkills = [
  {
    name: "Payment Gateways",
    level: "Advanced",
    years: "2.5+ yrs",
    desc: "Stripe, Stripe Connect, QuickBooks API, M-Pesa mobile money",
    icon: <SiStripe className="h-5 w-5 text-[#635BFF]" />,
  },
];

const devopsSkills = [
  {
    name: "Docker & Containers",
    level: "Advanced",
    years: "2+ yrs",
    desc: "Containerization, Dockerfiles, Compose orchestration",
    icon: <SiDocker className="h-5 w-5 text-[#2496ED]" />,
  },
  {
    name: "Git & Version Control",
    level: "Advanced",
    years: "3.5+ yrs",
    desc: "GitHub, Bitbucket, branching strategies, PR reviews",
    icon: <SiGit className="h-5 w-5 text-[#F05032]" />,
  },
];

const groups = [
  {
    title: "Backend & APIs",
    subtitle: "The core of what I build",
    icon: <Server className="h-5 w-5 text-primary" />,
    items: skills,
  },
  {
    title: "Data & Storage",
    subtitle: "Schema, queries, performance",
    icon: <Database className="h-5 w-5 text-primary" />,
    items: dataSkills,
  },
  {
    title: "Payments & Integrations",
    subtitle: "Money movement done right",
    icon: <CreditCard className="h-5 w-5 text-primary" />,
    items: integrationSkills,
  },
  {
    title: "DevOps & Tooling",
    subtitle: "Ship and run reliably",
    icon: <Boxes className="h-5 w-5 text-primary" />,
    items: devopsSkills,
  },
];

const devTools = [
  {
    name: "Docker & Compose",
    role: "Container environment",
    icon: <SiDocker className="h-5 w-5 text-[#2496ED]" />,
  },
  {
    name: "PHPStorm",
    role: "Primary JetBrains IDE",
    icon: <SiPhpstorm className="h-5 w-5 text-[#000000] dark:text-[#FFFFFF]" />,
  },
  {
    name: "VS Code",
    role: "Modern code editor",
    icon: <VscCode className="h-5 w-5 text-[#007ACC]" />,
  },
  {
    name: "Postman",
    role: "REST API suite",
    icon: <SiPostman className="h-5 w-5 text-[#FF6C37]" />,
  },
  {
    name: "MySQL Workbench",
    role: "DB management & SQL",
    icon: <SiMysql className="h-5 w-5 text-[#4479A1]" />,
  },
  {
    name: "Git & GitHub",
    role: "Version control",
    icon: <SiGithub className="h-5 w-5 text-[#181717] dark:text-[#FFFFFF]" />,
  },
  {
    name: "Bitbucket",
    role: "Enterprise team repos",
    icon: <SiBitbucket className="h-5 w-5 text-[#0052CC]" />,
  },
  {
    name: "Figma & Trello",
    role: "Design & agile boards",
    icon: <SiFigma className="h-5 w-5 text-[#F24E1E]" />,
  },
];

function SkillRow({ skill, index }) {
  return (
    <Reveal delay={index * 0.04} y={14}>
      <div className="group flex w-full items-start gap-3.5 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-muted/60">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted">
          {skill.icon}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground">{skill.name}</h3>
            <span className="rounded-md border border-border bg-card px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              {skill.level}
            </span>
          </div>
          <p className="mt-0.5 text-[13px] leading-snug text-muted-foreground">
            {skill.desc}
          </p>
        </div>
        <span className="hidden shrink-0 text-[11px] font-medium text-muted-foreground/70 sm:block">
          {skill.years}
        </span>
      </div>
    </Reveal>
  );
}

export default function TechStack() {
  const reduce = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative scroll-mt-20 px-5 py-24 sm:px-8 md:py-32"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-80 w-80 rounded-full bg-accent/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="A focused, production-proven toolkit."
          description="Technologies I use to architect and ship scalable backend systems — grouped by how they work together in real projects."
        />

        {/* Group cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <motion.div
                className="flex h-full flex-col rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-xs)] transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-md)] sm:p-6"
                whileHover={reduce ? undefined : { y: -4 }}
              >
                <div className="mb-3 flex items-center gap-3 border-b border-border/70 pb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {group.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {group.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground">
                      {group.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {group.items.map((skill, j) => (
                    <SkillRow key={skill.name} skill={skill} index={j} />
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Workflow tools */}
        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-xs)] sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Wrench className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Development environment & workflow
                </h3>
                <p className="text-[13px] text-muted-foreground">
                  The tools I use every day to move from idea to production
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {devTools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04, duration: 0.5 }}
                  className="flex items-center gap-3 rounded-xl border border-border/80 bg-muted/40 p-3.5 transition-all duration-300 hover:border-primary/30 hover:bg-muted/70"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                    {tool.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-semibold text-foreground">
                      {tool.name}
                    </div>
                    <div className="truncate text-[11px] text-muted-foreground">
                      {tool.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}