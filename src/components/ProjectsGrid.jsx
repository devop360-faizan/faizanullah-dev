"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsGrid() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-28 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              20+ delivered projects — here are 9 highlights spanning AI, SaaS, and enterprise backends.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border whitespace-nowrap self-start">
            <span className="text-2xl font-black text-foreground">20+</span>
            <span className="text-muted-foreground text-sm">Projects Delivered</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Top: Icon + Arrow */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-muted/80 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {project.icon}
                </div>
                <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground font-medium border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Subtle bg gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
