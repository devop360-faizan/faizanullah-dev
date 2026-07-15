"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, Link2, ExternalLink, ArrowRight } from "lucide-react";

export default function ContactFooter() {
  const { profile } = portfolioData;

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: profile.contact.phone,
      href: `tel:${profile.contact.phone}`,
    },
    {
      icon: <Link2 className="w-5 h-5" />,
      label: "GitHub",
      value: "faizanullah-dev",
      href: profile.contact.github,
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "LinkedIn",
      value: "faizan-laravel-developer",
      href: profile.contact.linkedin,
    },
  ];

  return (
    <footer id="contact" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Top: CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground mb-6">
            Let&apos;s Build<br />
            <span className="gradient-text">Something Great.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-10">
            Have a project in mind? I&apos;m open to freelance work and full-time opportunities.
          </p>
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl text-lg hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25 group"
          >
            Send me a message
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {contactItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "GitHub" || item.label === "LinkedIn" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 flex-shrink-0">
                {item.icon}
              </div>
              <div className="overflow-hidden">
                <div className="text-xs text-muted-foreground font-medium mb-0.5">{item.label}</div>
                <div className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">{item.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-black text-xs">F</div>
            <span className="font-bold text-foreground text-sm">Faizan Ullah</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Faizan Ullah. Crafted with passion.
          </p>
        </div>

      </div>
    </footer>
  );
}
