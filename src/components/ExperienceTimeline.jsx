"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Calendar, Briefcase, ChevronDown, Sparkles, Building, CheckCircle2, ArrowRight } from "lucide-react";
import { getYearsOfExperience, getDetailedExperience } from "@/lib/utils";

const roleDetails = {
  "Devop360 Technology": {
    badge: "Senior Level",
    type: "Full-Time",
    highlights: [
      "Designed and architected RESTful backend APIs supporting 11+ mobile applications (iOS & Android).",
      "Integrated third-party payment gateways (Stripe Connect, M-Pesa, QuickBooks API) and CRM systems.",
      "Optimized database indexing and caching strategies to improve high-concurrency API performance.",
    ],
    tech: ["Laravel", "PHP", "Node.js", "MySQL", "REST APIs", "Sanctum"],
  },
  "Tafsol Technologies": {
    badge: "Mid-Senior Level",
    type: "Full-Time",
    highlights: [
      "Engineered clean, scalable Laravel backend architectures and database schemas for web & mobile apps.",
      "Refactored legacy queries and optimized MySQL indexing to boost application execution speeds.",
      "Collaborated with frontend React/Vue developers to define seamless API contracts.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "REST APIs", "Git"],
  },
  "Backtik Solutions": {
    badge: "Mid Level",
    type: "Full-Time",
    highlights: [
      "Developed custom client-facing web application modules and automated third-party integrations.",
      "Debugged and resolved backend production issues, improving overall system stability and reliability.",
      "Implemented role-based permission control (RBAC) and security patches.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "jQuery", "Bootstrap"],
  },
  "Bitlife Technologies (Nairobi County, Kenya Remote)": {
    badge: "Intern to Lead",
    type: "International Remote",
    highlights: [
      "Promoted from Intern (Jan-June 2023) to Contract Year 1 & Year 2 Backend Lead.",
      "Built and maintained backend web modules using CodeIgniter and Laravel PHP.",
      "Managed international remote client deliverables across multiple timezone sprints.",
    ],
    tech: ["Laravel", "CodeIgniter", "PHP", "MySQL", "Remote Team"],
  },
};

export default function ExperienceTimeline() {
  const { experience } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(0); // Open first by default

  return (
    <section id="experience" className="py-28 px-6 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Career Roadmap
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Work Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              Proven track record of building production backend systems across startups, agencies, and international teams.
            </p>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border shadow-sm self-start md:self-end">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-black text-foreground">
                {getYearsOfExperience()} Career Experience
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                {getDetailedExperience()} (Jan 2023 – Present)
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Stack */}
        <div className="relative">
          {/* Vertical Glowing Guide Line */}
          <div className="absolute left-6 md:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-indigo-500 to-border" />

          <div className="flex flex-col gap-6">
            {experience.map((exp, idx) => {
              const details = roleDetails[exp.company] || {
                badge: "Full-Time",
                type: "Engineering",
                highlights: [exp.description],
                tech: ["PHP", "Laravel", "MySQL"],
              };
              const isExpanded = expandedIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Glowing Node Dot */}
                  <div
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    className={`absolute left-2.5 md:left-4 top-6 w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer ${
                      isExpanded
                        ? "bg-primary border-primary ring-4 ring-primary/20 text-primary-foreground scale-110"
                        : "bg-background border-border text-muted-foreground hover:border-primary"
                    }`}
                  >
                    <Building className="w-3.5 h-3.5" />
                  </div>

                  {/* Card Container */}
                  <div
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    className={`group rounded-2xl border bg-card p-6 md:p-8 transition-all duration-300 cursor-pointer overflow-hidden ${
                      isExpanded
                        ? "border-primary/50 shadow-xl ring-1 ring-primary/20"
                        : "border-border hover:border-primary/30 hover:shadow-md"
                    }`}
                  >
                    {/* Top Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-primary/10 text-primary border border-primary/20">
                            {details.badge}
                          </span>
                          <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-muted text-muted-foreground border border-border">
                            {details.type}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-semibold text-base mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-muted/60 border border-border text-xs font-semibold text-muted-foreground whitespace-nowrap">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                        <div
                          className={`w-7 h-7 rounded-lg border border-border flex items-center justify-center text-muted-foreground transition-transform duration-300 ${
                            isExpanded ? "rotate-180 bg-primary/10 text-primary border-primary/20" : ""
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Summary text */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Expandable Key Accomplishments */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-border/70 space-y-4"
                        >
                          <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                            Key Achievements & Impact:
                          </div>
                          <ul className="space-y-2">
                            {details.highlights.map((item, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Stack Pills */}
                          <div className="pt-2 flex flex-wrap gap-1.5">
                            {details.tech.map((t) => (
                              <span
                                key={t}
                                className="text-xs px-2.5 py-1 rounded-lg bg-muted font-medium text-foreground border border-border"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
