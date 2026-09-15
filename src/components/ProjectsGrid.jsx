"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  Search,
  LayoutGrid,
  List,
  ArrowUpRight,
  Layers,
  Lock,
  CheckCircle2,
  X,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsGrid() {
  const { projects, projectCategories } = portfolioData;
  const reduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = filteredProjects.find((p) => p.highlight);
  const rest = filteredProjects.filter((p) => p !== featured);

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 px-5 py-24 sm:px-8 md:py-32"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 left-0 -z-10 h-80 w-80 rounded-full bg-accent/5 blur-[130px]" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="03"
            eyebrow="Projects"
            title="Shipped, production systems."
            description="Live platforms and mobile backends I&apos;ve designed, built, and maintained — spanning e-commerce, SaaS, booking, logistics, and enterprise work."
          />
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3">
                <span className="font-mono text-xl font-bold text-primary">17</span>
                <span className="text-xs leading-tight text-muted-foreground">
                  Live web
                  <br />
                  platforms
                </span>
              </div>
              <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3">
                <span className="font-mono text-xl font-bold text-primary">9</span>
                <span className="text-xs leading-tight text-muted-foreground">
                  Mobile app
                  <br />
                  backends
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Toolbar */}
        <Reveal delay={0.12} className="mt-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
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
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1.5 rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-300",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-sm)]"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    )}
                    aria-pressed={isActive}
                  >
                    {cat}
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[11px] font-bold",
                        isActive
                          ? "bg-primary-foreground/20"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tech or project..."
                  aria-label="Search projects"
                  className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-9 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center rounded-xl border border-border bg-card p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  aria-pressed={viewMode === "grid"}
                  className={cn(
                    "rounded-lg p-2 transition-all",
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  aria-pressed={viewMode === "list"}
                  className={cn(
                    "rounded-lg p-2 transition-all",
                    viewMode === "list"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-3xl border border-border bg-card py-20 text-center">
            <p className="text-lg font-semibold text-foreground">No projects found</p>
            <p className="text-sm text-muted-foreground">
              No project matched &quot;{searchQuery}&quot; in this category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Reset filters
            </button>
          </div>
        )}

        {filteredProjects.length > 0 && (
          <div className="mt-10">
            {/* Featured project */}
            {featured && viewMode === "grid" && (
              <FeaturedProject project={featured} reduce={reduce} />
            )}

            {/* Regular projects */}
            <motion.div
              layout
              className={cn(
                "mt-6",
                viewMode === "grid"
                  ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                  : "flex flex-col gap-4"
              )}
            >
              <AnimatePresence mode="popLayout">
                {rest.map((project, idx) => (
                  <ProjectCard key={project.id || idx} project={project} idx={idx} mode={viewMode} reduce={reduce} />
                ))}
                {featured && viewMode === "list" && (
                  <ProjectCard key={featured.id} project={featured} idx={0} mode="list" reduce={reduce} />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedProject({ project, reduce }) {
  return (
    <motion.article
      layout
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid overflow-hidden rounded-3xl border border-primary/25 bg-card shadow-[var(--shadow-md)] lg:grid-cols-[1.15fr_1fr]"
    >
      {/* Image side */}
      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
        <Image
          src={project.image}
          alt={`${project.title} — interface preview`}
          fill
          priority
          unoptimized
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-card via-card/25 to-transparent lg:bg-gradient-to-r" />

        {/* Overlay badge */}
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Featured
        </div>
      </div>

      {/* Content side */}
      <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-primary">
            {project.icon || <Layers className="h-5 w-5" />}
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-foreground sm:text-3xl">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              Visit live platform
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-success">
              <CheckCircle2 className="h-4 w-4" />
              Production API architecture
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, idx, mode, reduce }) {
  const isGrid = mode === "grid";

  return (
    <motion.article
      layout
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
      transition={{ duration: 0.4, delay: reduce ? 0 : Math.min(idx * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-md)]"
    >
      <div className={cn("flex", isGrid ? "flex-col" : "w-full flex-col sm:flex-row")}>
        {/* Image */}
        <div
          className={cn(
            "relative shrink-0 overflow-hidden bg-muted",
            isGrid
              ? "aspect-[16/9] w-full"
              : "aspect-[16/8] w-full sm:aspect-auto sm:w-56 md:w-64"
          )}
        >
          <Image
            src={project.image}
            alt={`${project.title} — project preview`}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-50" />

          {project.badge && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/85 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {project.badge}
            </span>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/85 text-foreground backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between gap-4 p-5">
          <div>
            <div className="mb-2 flex items-start gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-primary">
                {project.icon || <Layers className="h-4 w-4" />}
              </span>
              <div className="min-w-0">
                <h3 className="text-[15px] font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                {project.credentials && (
                  <div className="mt-0.5 flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                    <Lock className="h-3 w-3 shrink-0" />
                    <span className="truncate">{project.credentials}</span>
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div>
            <div className="mb-4 flex flex-wrap gap-1.5 border-t border-border/60 pt-3">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border/70 bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-between rounded-xl border border-border bg-muted/50 px-4 py-2 text-xs font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Visit live platform
                <ExternalArrow />
              </a>
            ) : (
              <div className="inline-flex w-full items-center justify-between rounded-xl border border-border/50 bg-muted/30 px-4 py-2 text-xs font-medium text-muted-foreground">
                <span>API architecture & backend</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ExternalArrow() {
  return (
    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
  );
}