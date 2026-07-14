"use client";

import Link from "next/link";
import { Clapperboard, Twitter, Linkedin, Youtube } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Features", href: "/features" },
      { label: "How it Works", href: "/how-it-works" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "GDPR", href: "/legal/gdpr" },
      { label: "Security", href: "/legal/security" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="section grid gap-12 lg:grid-cols-[1.4fr_2fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Clapperboard className="h-4 w-4 text-white" strokeWidth={2.2} />
            </span>
            Outvue
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/50">
            One recording. Thousands of personalized videos. Built for sales, recruiting, and
            agency teams that outreach at scale.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="glass glass-hover flex h-9 w-9 items-center justify-center rounded-full"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4 text-white/70" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h4 className="eyebrow mb-4">Newsletter</h4>
          <p className="mb-4 text-sm text-white/50">
            Outbound tactics and product updates, once a month.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="you@company.com"
              className="glass w-full rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
            />
            <button type="submit" className="btn-primary shrink-0 !px-5 !py-2.5 text-sm">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/40 sm:flex-row sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Outvue, Inc. All rights reserved.</p>
          <p>Made for teams who outreach at scale.</p>
        </div>
      </div>
    </footer>
  );
}
