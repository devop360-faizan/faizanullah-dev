"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, ArrowUpRight, ArrowRight, ArrowUp } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "faizanullah.dev5@gmail.com",
    href: `mailto:${"faizanullah.dev5@gmail.com"}`,
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+92 313 005 6857",
    href: "tel:+923130056857",
  },
];

export default function ContactFooter() {
  const { profile } = portfolioData;
  const reduce = useReducedMotion();

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
  ];

  const socials = [
    {
      label: "GitHub",
      href: profile.contact.github,
    },
    {
      label: "LinkedIn",
      href: profile.contact.linkedin,
    },
    {
      label: "Email",
      href: `mailto:${profile.contact.email}`,
    },
  ];

  return (
    <>
      {/* ─── Contact CTA ─── */}
      <section
        id="contact"
        className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 md:py-32"
      >
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[180px]" />
          <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[150px]" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Have an idea{" "}
                <span className="font-serif-accent text-gradient">
                  worth building?
                </span>
              </>
            }
            description="I&apos;m currently open to freelance projects, full-time roles, and interesting backend challenges. Let&apos;s talk."
            align="center"
          />

          <Reveal delay={0.12} className="mt-10">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href={`mailto:${profile.contact.email}`} size="lg">
                Send me an email
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                Connect on LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          {/* Quick contact cards */}
          <Reveal delay={0.18} className="mt-12 grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-md)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  {item.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="truncate text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          {/* Top row */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <a
              href="#home"
              className="group flex items-center gap-3"
              aria-label="Back to top"
            >
              <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border">
                <Image
                  src="/me.png"
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <span className="text-sm font-bold text-foreground">
                  Faizan<span className="text-primary">.</span>
                </span>
                <p className="text-[11px] text-muted-foreground">
                  Backend Engineer & API Architect
                </p>
              </div>
            </a>

            <nav
              className="flex flex-wrap justify-center gap-x-6 gap-y-2"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {s.label}
                </a>
              ))}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>
              © {new Date().getFullYear()} Faizan Ullah. Crafted with care.
            </p>
            <p>
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                Next.js
              </a>{" "}
              &{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}