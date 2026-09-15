"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const eduMeta = [
  {
    status: "In Progress",
    statusClass: "bg-primary/10 text-primary border-primary/25",
    icon: <GraduationCap className="h-4 w-4 text-primary" />,
    dotBg: "bg-primary",
    ring: "ring-primary/20",
    accent: "from-primary/70",
    focus: ["Software Architecture", "Algorithms", "Database Systems", "Web Engineering"],
  },
  {
    status: "Completed Diploma",
    statusClass: "bg-emerald-500/10 text-success border-emerald-500/25",
    icon: <Award className="h-4 w-4 text-success" />,
    dotBg: "bg-emerald-500",
    ring: "ring-emerald-500/20",
    accent: "from-emerald-500/70",
    focus: ["Computer Information Tech", "Object Oriented Programming", "SQL Databases"],
  },
  {
    status: "Completed",
    statusClass: "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-500/25",
    icon: <BookOpen className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />,
    dotBg: "bg-indigo-500",
    ring: "ring-indigo-500/20",
    accent: "from-indigo-500/70",
    focus: ["Computer Science & Physics", "Mathematics", "Logic"],
  },
  {
    status: "Completed",
    statusClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25",
    icon: <BookOpen className="h-4 w-4 text-amber-500 dark:text-amber-400" />,
    dotBg: "bg-amber-500",
    ring: "ring-amber-500/20",
    accent: "from-amber-500/70",
    focus: ["Science & Foundations"],
  },
];

export default function EducationList() {
  const { education } = portfolioData;
  const reduce = useReducedMotion();

  return (
    <section
      id="education"
      className="relative scroll-mt-20 px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="05"
          eyebrow="Education"
          title="A foundation built on computer science."
          description="Formal education and certifications that underpin my engineering fundamentals."
        />

        {/* Timeline */}
        <div className="relative mt-14">
          <div
            className="absolute bottom-4 left-[15px] top-2 w-px bg-gradient-to-b from-primary via-border to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6">
            {education.map((edu, idx) => {
              const meta = eduMeta[idx] || eduMeta[0];

              return (
                <Reveal key={idx} delay={idx * 0.07} y={20}>
                  <div className="relative pl-12">
                    {/* Node */}
                    <div
                      className={cn(
                        "absolute left-0 top-5 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-border bg-card shadow-[var(--shadow-xs)]",
                        meta.ring
                      )}
                      aria-hidden="true"
                    >
                      {meta.icon}
                    </div>

                    {/* Accent line on card start */}
                    <div
                      className={cn(
                        "relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-md)] sm:p-6"
                      )}
                    >
                      <div
                        className={cn(
                          "absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b to-transparent",
                          meta.accent
                        )}
                        aria-hidden="true"
                      />

                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span
                            className={cn(
                              "inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-bold",
                              meta.statusClass
                            )}
                          >
                            {meta.status}
                          </span>
                          <h3 className="mt-3 text-lg font-bold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="mt-0.5 text-sm text-muted-foreground">
                            {edu.institution}
                          </p>
                        </div>

                        <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {edu.year}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                        {meta.focus.map((item) => (
                          <span
                            key={item}
                            className="rounded-lg border border-border/70 bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}