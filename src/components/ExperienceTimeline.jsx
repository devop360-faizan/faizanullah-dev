"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { MapPin, Calendar } from "lucide-react";

export default function ExperienceTimeline() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey building backend systems for real businesses.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-8">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-5 w-10 h-10 rounded-full border-2 border-primary bg-background items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-semibold mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted border border-border text-xs font-medium text-muted-foreground whitespace-nowrap self-start">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
