"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  ExternalLink,
  Sparkles,
  Search,
  LayoutGrid,
  List,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Lock,
} from "lucide-react";
import Image from "next/image";

export default function ProjectsGrid() {
  const { projects, projectCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'

  // Filter projects by category and search query
  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-28 px-6 bg-muted/20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
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
              Featured Work & Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Delivered Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Showcasing 26 production-grade systems — 17 live web applications & enterprise platforms alongside 9 mobile app RESTful API architectures.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border shadow-sm">
              <span className="text-2xl font-black text-primary">17</span>
              <div className="text-xs leading-tight text-muted-foreground font-medium">
                Live Web <br />Platforms
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border shadow-sm">
              <span className="text-2xl font-black text-indigo-500">9</span>
              <div className="text-xs leading-tight text-muted-foreground font-medium">
                Mobile App <br />Backend APIs
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 shadow-sm">
              <span className="text-2xl font-black text-primary">26</span>
              <div className="text-xs leading-tight text-primary font-bold">
                Total Projects <br />Delivered
              </div>
            </div>
          </div>
        </motion.div>

        {/* Toolbar: Search Input + Category Tabs + View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & View Mode Toggle */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-grow sm:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech or project..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-card border border-border">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Empty state search result */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-card rounded-3xl border border-border">
            <p className="text-lg font-bold text-foreground mb-2">No projects found</p>
            <p className="text-sm text-muted-foreground mb-4">
              No project matched your search query &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Display: Grid View vs List View */}
        <motion.div
          layout
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id || idx}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className={`group relative rounded-2xl border bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden flex ${
                  viewMode === "grid"
                    ? "flex-col"
                    : "flex-col sm:flex-row items-stretch"
                } ${
                  project.highlight
                    ? "border-primary/40 ring-1 ring-primary/20"
                    : "border-border"
                }`}
              >
                {/* Project Image Banner */}
                <div
                  className={`relative bg-muted/50 overflow-hidden border-border shrink-0 ${
                    viewMode === "grid"
                      ? "w-full aspect-[16/9] border-b"
                      : "w-full sm:w-64 md:w-80 aspect-[16/10] sm:border-r border-b sm:border-b-0"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Badge */}
                  {project.badge && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border/80 shadow-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs font-semibold text-foreground">
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {/* Live Link Overlay Button */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur-md border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-md group/btn"
                      title="Visit Live Website"
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Title & Icon Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary mt-0.5">
                        {project.icon || <Layers className="w-4 h-4" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                          {project.title}
                        </h3>
                        {project.credentials && (
                          <div className="flex items-center gap-1 text-xs text-primary font-mono mt-0.5">
                            <Lock className="w-3 h-3 shrink-0" />
                            <span>{project.credentials}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-border/60">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground font-medium border border-border/70 group-hover:border-primary/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Link / Action */}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-muted/60 hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-semibold border border-border hover:border-primary transition-all duration-300 group/link"
                      >
                        <span>Visit Live Platform</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-muted/30 text-muted-foreground text-xs font-medium border border-border/40">
                        <span>API Architecture & Backend</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
