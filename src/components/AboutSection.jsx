"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Network,
  Database,
  Building2,
  CreditCard,
  Smartphone,
  Sparkles,
  MapPin,
  Globe2,
  GraduationCap,
} from "lucide-react";
import { getYearsOfExperience } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const focusAreas = [
  {
    icon: <Network className="h-5 w-5" />,
    title: "Scalable REST APIs",
    desc: "Sanctum & JWT auth, rate limiting, WebSockets, and FCM push — API contracts that stay reliable under real load.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Database performance",
    desc: "MySQL & PostgreSQL schema design, indexing strategies, query profiling, and caching to cut bottlenecks.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "SaaS & multi-tenant platforms",
    desc: "Enterprise CRMs, marketplaces, booking engines, and portals built with Laravel multi-tenancy.",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Payments & integrations",
    desc: "Stripe, Stripe Connect, M-Pesa, QuickBooks, and CRM integrations wired into production workflows.",
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Mobile backends",
    desc: "9 production APIs powering hotel booking, attendance, ride-hailing, logistics, e-commerce, and HR apps.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "AI & automation",
    desc: "Python Flask microservices integrating AI/NLP workflows into existing systems.",
  },
];

const quickFacts = [
  { icon: <MapPin className="h-4 w-4" />, label: "Based in Karachi, Pakistan" },
  { icon: <Globe2 className="h-4 w-4" />, label: "Remote across time zones" },
  { icon: <GraduationCap className="h-4 w-4" />, label: "BS Computer Science (in progress)" },
];

export default function AboutSection() {
  const reduce = useReducedMotion();
  const years = getYearsOfExperience();

  return (
    <section id="about" className="relative scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/6 blur-[130px]" />

      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <SectionHeading
            index="01"
            eyebrow="About"
            title={
              <>
                The quiet engine behind{" "}
                <span className="font-serif-accent text-gradient">great products.</span>
              </>
            }
          />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Story */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="text-base leading-relaxed text-foreground/90">
                I&apos;m Faizan Ullah — a backend engineer who focuses on the
                server-side of products people use every day. Over the past{" "}
                <strong className="font-semibold text-foreground">{years}+ years</strong>{" "}
                I&apos;ve worked across agencies and international teams to ship
                production systems: e-commerce marketplaces, booking and logistics
                platforms, enterprise CRMs, and SaaS products.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-base leading-relaxed text-muted-foreground">
                I&apos;ve also architected the backend APIs behind 9 mobile
                applications — hotel booking, attendance, ride-hailing, logistics,
                e-commerce, and HR — and integrated payment gateways like Stripe,
                M-Pesa, and QuickBooks into real business workflows.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-base leading-relaxed text-muted-foreground">
                What I value is reliability: clean API contracts, optimized
                queries, thoughtful authentication, and integrations that don&apos;t
                surprise you in production. I&apos;d rather ship something
                dependable and well-architected than clever and fragile.
              </p>
            </Reveal>

            {/* Quick facts */}
            <Reveal delay={0.2} className="mt-4">
              <div className="flex flex-wrap gap-2.5">
                {quickFacts.map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">{f.icon}</span>
                    {f.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Focus areas */}
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.06}>
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-md)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                    {area.icon}
                  </span>
                  <h3 className="text-[15px] font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {area.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}