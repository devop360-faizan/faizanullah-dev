"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Wrench,
  Zap,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  ShieldCheck,
  Server,
  Globe,
} from "lucide-react";

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
  SiJavascript,
  SiReact,
  SiPhpstorm,
  SiPostman,
  SiFigma,
  SiTrello,
  SiStripe,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const skillCategories = [
  { id: "all", label: "All Stack" },
  { id: "backend", label: "Backend & APIs" },
  { id: "database", label: "Databases & Storage" },
  { id: "frameworks", label: "Frameworks & Langs" },
  { id: "tools", label: "DevOps & Tools" },
];

const skillsData = [
  {
    name: "PHP",
    category: "backend",
    level: "Expert",
    years: "3.5+ Yrs",
    desc: "OOP, MVC patterns, PSR standards, high-performance web scripts.",
    color: "from-purple-500 to-indigo-600",
    bgGlow: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    icon: <SiPhp className="w-6 h-6 text-[#777BB4]" />,
  },
  {
    name: "Laravel",
    category: "frameworks",
    level: "Expert",
    years: "3.5+ Yrs",
    desc: "RESTful APIs, Sanctum Auth, Eloquent ORM, Queues, Multi-Tenancy.",
    color: "from-red-500 to-orange-600",
    bgGlow: "bg-red-500/10 border-red-500/20 text-red-400",
    icon: <SiLaravel className="w-6 h-6 text-[#FF2D20]" />,
  },
  {
    name: "RESTful APIs",
    category: "backend",
    level: "Expert",
    years: "3.5+ Yrs",
    desc: "Sanctum JWT auth, FCM push notifications, WebSockets, Rate Limiting.",
    color: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "MySQL",
    category: "database",
    level: "Advanced",
    years: "3+ Yrs",
    desc: "Schema design, Indexing optimization, Complex Queries, Transactions.",
    color: "from-blue-500 to-cyan-600",
    bgGlow: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    icon: <SiMysql className="w-6 h-6 text-[#4479A1]" />,
  },
  {
    name: "DB Optimization",
    category: "database",
    level: "Expert",
    years: "3+ Yrs",
    desc: "Query profiling, Indexing strategies, Caching, Bottleneck elimination.",
    color: "from-emerald-500 to-teal-600",
    bgGlow: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
  },
  {
    name: "Node.js & Express",
    category: "backend",
    level: "Advanced",
    years: "2+ Yrs",
    desc: "Event-driven asynchronous services, REST endpoints, Middleware.",
    color: "from-green-500 to-emerald-600",
    bgGlow: "bg-green-500/10 border-green-500/20 text-green-400",
    icon: <SiNodedotjs className="w-6 h-6 text-[#5FA04E]" />,
  },
  {
    name: "Python Flask",
    category: "backend",
    level: "Intermediate",
    years: "1.5+ Yrs",
    desc: "AI/NLP integration services, microservice APIs, JSON processing.",
    color: "from-amber-500 to-yellow-600",
    bgGlow: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    icon: <SiPython className="w-6 h-6 text-[#3776AB]" />,
  },
  {
    name: "PostgreSQL",
    category: "database",
    level: "Advanced",
    years: "2+ Yrs",
    desc: "Relational data modeling, JSONB fields, Triggers, Views.",
    color: "from-indigo-500 to-blue-700",
    bgGlow: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    icon: <SiPostgresql className="w-6 h-6 text-[#4169E1]" />,
  },
  {
    name: "Git & Version Control",
    category: "tools",
    level: "Advanced",
    years: "3.5+ Yrs",
    desc: "GitHub, Bitbucket, Branching strategies, PR code reviews, Merge resolution.",
    color: "from-orange-500 to-rose-600",
    bgGlow: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    icon: <SiGit className="w-6 h-6 text-[#F05032]" />,
  },
  {
    name: "CodeIgniter",
    category: "frameworks",
    level: "Intermediate",
    years: "2+ Yrs",
    desc: "Lightweight MVC PHP framework development and legacy refactoring.",
    color: "from-orange-600 to-red-600",
    bgGlow: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    icon: <SiCodeigniter className="w-6 h-6 text-[#EF4223]" />,
  },
  {
    name: "Payment Gateways",
    category: "backend",
    level: "Advanced",
    years: "2.5+ Yrs",
    desc: "Stripe, Stripe Connect, QuickBooks API, M-Pesa mobile money APIs.",
    color: "from-emerald-400 to-cyan-500",
    bgGlow: "bg-teal-500/10 border-teal-500/20 text-teal-400",
    icon: <SiStripe className="w-6 h-6 text-[#635BFF]" />,
  },
  {
    name: "JavaScript & React",
    category: "frameworks",
    level: "Intermediate",
    years: "2+ Yrs",
    desc: "Frontend integration, Next.js, AJAX, Dynamic DOM manipulation.",
    color: "from-yellow-400 to-amber-500",
    bgGlow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    icon: <SiReact className="w-6 h-6 text-[#61DAFB]" />,
  },
];

const devTools = [
  {
    name: "PHPStorm",
    role: "Primary JetBrains IDE",
    icon: <SiPhpstorm className="w-6 h-6 text-[#000000] dark:text-[#FFFFFF]" />,
    badgeBg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    name: "VS Code",
    role: "Modern Code Editor",
    icon: <VscCode className="w-6 h-6 text-[#007ACC]" />,
    badgeBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "Postman",
    role: "REST API Suite",
    icon: <SiPostman className="w-6 h-6 text-[#FF6C37]" />,
    badgeBg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    name: "MySQL Workbench",
    role: "DB Management & SQL",
    icon: <SiMysql className="w-6 h-6 text-[#4479A1]" />,
    badgeBg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    name: "Laragon & XAMPP",
    role: "Local PHP Servers",
    icon: <Server className="w-6 h-6 text-[#5FA04E]" />,
    badgeBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    name: "Git & GitHub",
    role: "Version Control",
    icon: <SiGithub className="w-6 h-6 text-[#181717] dark:text-[#FFFFFF]" />,
    badgeBg: "bg-stone-500/10 border-stone-500/20",
  },
  {
    name: "Bitbucket",
    role: "Enterprise Team Repos",
    icon: <SiBitbucket className="w-6 h-6 text-[#0052CC]" />,
    badgeBg: "bg-blue-600/10 border-blue-600/20",
  },
  {
    name: "Figma & Trello",
    role: "Design & Agile Boards",
    icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" />,
    badgeBg: "bg-rose-500/10 border-rose-500/20",
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-28 px-6 bg-muted/30 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Technical Competencies
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Tech Stack & Architecture
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Battle-tested technologies and frameworks used to architect scalable, high-availability backend solutions.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-xs font-semibold text-muted-foreground self-start md:self-end">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            12+ Production Technologies
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
        >
          {skillCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Interactive Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                className={`group relative rounded-2xl border p-6 bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  selectedSkill === skill.name ? "ring-2 ring-primary border-primary" : "border-border"
                }`}
              >
                {/* Top: Icon + Level Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${skill.bgGlow} group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-muted font-bold border border-border text-muted-foreground">
                        {skill.years}
                      </span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${skill.bgGlow}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {skill.desc}
                  </p>
                </div>

                {/* Bottom Bar: Dynamic Progress Indicator */}
                <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    Production Proven
                  </span>
                  <div className="w-20 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full`} />
                  </div>
                </div>

                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tools & Workflow Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card p-8 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-6">
            <Wrench className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">
              Development Environment & Workflow Tools
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {devTools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="flex items-center gap-3.5 p-4 rounded-2xl border border-border/80 bg-muted/40 hover:bg-muted/80 hover:border-primary/30 transition-all group cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${tool.badgeBg} group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">{tool.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
