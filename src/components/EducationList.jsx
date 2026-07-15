"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, BookOpen } from "lucide-react";

export default function EducationList() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-28 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic foundations that shaped my engineering mindset.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                {idx === 0 ? <GraduationCap className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
              </div>
              <h3 className="font-bold text-foreground text-base mb-1.5">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm mb-3">{edu.institution}</p>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-muted border border-border text-muted-foreground">
                {edu.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
