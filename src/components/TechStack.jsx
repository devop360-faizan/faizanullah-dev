"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Zap, TrendingUp, Layers } from "lucide-react";

const levelConfig = {
  expert: {
    label: "Expert",
    icon: <Zap className="w-4 h-4" />,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
    dot: "bg-violet-500",
    bar: "bg-violet-500",
    width: "100%",
  },
  advanced: {
    label: "Advanced",
    icon: <TrendingUp className="w-4 h-4" />,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
    dot: "bg-blue-500",
    bar: "bg-blue-500",
    width: "80%",
  },
  intermediate: {
    label: "Intermediate",
    icon: <Layers className="w-4 h-4" />,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
    width: "60%",
  },
};

const tools = [
  "PHPStorm", "VS Code", "Postman", "MySQL Workbench",
  "XAMPP", "Laragon", "Figma", "Trello", "Slack", "GitHub", "Bitbucket"
];

export default function TechStack() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            What I work with
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Technologies I&apos;ve mastered over years of building production-grade systems.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {(["expert", "advanced", "intermediate"]).map((level, groupIdx) => {
            const cfg = levelConfig[level];
            return (
              <motion.div
                key={level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
              >
                {/* Level Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-lg ${cfg.bg} border flex items-center justify-center ${cfg.color}`}>
                    {cfg.icon}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${cfg.color}`}>{cfg.label}</div>
                    <div className="text-xs text-muted-foreground">{skills[level].length} technologies</div>
                  </div>
                </div>

                {/* Skill items with progress bar */}
                <div className="flex flex-col gap-3">
                  {skills[level].map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIdx * 0.1 + idx * 0.04 }}
                    >
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-medium text-foreground">{skill}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${cfg.bar}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: cfg.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: groupIdx * 0.1 + idx * 0.04, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-5">
            Tools & Software
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, idx) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-4 py-2 rounded-xl border border-border bg-muted/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
