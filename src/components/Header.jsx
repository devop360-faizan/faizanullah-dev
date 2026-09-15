"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const reduce = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("");

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Track active section via IntersectionObserver
  React.useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <motion.header
        initial={reduce ? { opacity: 0 } : { y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex h-14 max-w-4xl items-center justify-between rounded-2xl border px-2.5 transition-all duration-500",
            "border-border/80 bg-background/75 backdrop-blur-xl",
            scrolled
              ? "shadow-[var(--shadow-md)]"
              : "border-transparent bg-background/30"
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 rounded-xl px-2 py-1.5"
            aria-label="Faizan Ullah — back to top"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-border bg-card">
              <Image
                src="/me.png"
                alt=""
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-sm font-bold tracking-tight text-foreground">
              Faizan<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-active={activeLink === link.href}
                className={cn(
                  "nav-link px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                  activeLink === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {mounted && (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.18 }}
                    className="flex"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </motion.span>
                </AnimatePresence>
              )}
            </button>

            <a
              href="#contact"
              className="hidden items-center gap-1 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] md:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[76px] z-40 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-lg)] md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.04 * i }}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    activeLink === link.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}