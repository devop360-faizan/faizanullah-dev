"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle2, Calendar } from "lucide-react";

const eduMeta = [
  {
    status: "In Progress (Bachelor's Degree)",
    statusBg: "bg-primary/10 text-primary border-primary/20",
    icon: <GraduationCap className="w-5 h-5 text-primary" />,
    focus: ["Software Architecture", "Algorithms", "Database Systems", "Web Engineering"],
    color: "from-blue-500/20 via-primary/10 to-transparent",
  },
  {
    status: "Completed Diploma",
    statusBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: <Award className="w-5 h-5 text-emerald-400" />,
    focus: ["Computer Information Tech", "Object Oriented Programming", "SQL Databases"],
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    status: "Completed",
    statusBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
    focus: ["Computer Science & Physics", "Mathematics", "Logic"],
    color: "from-indigo-500/20 via-purple-500/10 to-transparent",
  },
  {
    status: "Completed",
    statusBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    icon: <BookOpen className="w-5 h-5 text-amber-400" />,
    focus: ["Science & Foundations"],
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
];

export default function EducationList() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-28 px-6 bg-muted/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Academic Credentials
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Education & Qualifications
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              Formal computer science education and technical certifications forming my core engineering foundation.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-xs font-semibold text-muted-foreground self-start md:self-end">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            BS Computer Science (In Progress)
          </div>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => {
            const meta = eduMeta[idx] || eduMeta[0];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative rounded-3xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle top gradient accent */}
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${meta.color}`} />

                <div>
                  {/* Top row: Icon + Status */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-muted border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                      {meta.icon}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-bold border ${meta.statusBg}`}>
                      {meta.status}
                    </span>
                  </div>

                  {/* Degree Title & Institution */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium mb-4 leading-relaxed">
                    {edu.institution}
                  </p>
                </div>

                {/* Bottom section: Year & Focus Chips */}
                <div className="pt-4 border-t border-border/60">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.year}</span>
                  </div>

                  {/* Focus Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {meta.focus.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground font-medium border border-border/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
