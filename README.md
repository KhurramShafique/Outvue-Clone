# Outvue — AI Video Outreach Marketing Site

A premium, dark-themed marketing site for an AI-powered personalized video outreach platform.
Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** (App Router, Server Components by default)
- **React 18** + **TypeScript**
- **Tailwind CSS** with a custom design token system (`tailwind.config.ts`)
- **Framer Motion** for fade-ins, hover states, and modal transitions
- **Lucide Icons**

## Design system

- **Colors**: primary `#4F46E5`, accent `#7C3AED`, secondary `#0F172A`, background near-black `#050608`, plus a cyan `#22D3EE` "data" accent used sparingly for analytics/stats.
- **Type**: Sora (display), Inter (body), JetBrains Mono (stats, labels, timestamps).
- **Signature motif**: an animated waveform/video-scrub bar (`components/ui/Waveform.tsx`) used in the hero and CTA to reinforce "one recording, many personalized cuts."
- All color/spacing/shadow tokens live in `tailwind.config.ts` and `app/globals.css` — change them there to re-theme the whole site.

## Folder structure

```
outvue-site/
├── app/
│   ├── layout.tsx              # Root layout, fonts, global metadata
│   ├── globals.css             # Design tokens, base styles, utility classes
│   ├── page.tsx                # Landing page (composes all sections)
│   ├── sitemap.ts              # Auto-generated sitemap.xml
│   ├── robots.ts                # Auto-generated robots.txt
│   ├── features/page.tsx
│   ├── how-it-works/page.tsx
│   ├── pricing/page.tsx
│   ├── integrations/page.tsx
│   ├── customers/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx    # Dynamic blog post route
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   └── legal/{privacy,terms,gdpr,security}/page.tsx
├── components/
│   ├── ui/                     # Button, GlassCard, Badge, AnimatedCounter, FadeIn, Waveform
│   ├── layout/                 # Navbar, Footer, CookieBanner
│   ├── sections/                # Hero, Features, HowItWorks, Integrations, Pricing,
│   │                            # Testimonials, FAQ, CTASection
│   └── modals/                 # DemoBookingModal
├── lib/
│   ├── data.ts                 # All sample/mock content (features, pricing, FAQ, blog, etc.)
│   └── utils.ts                # `cn()` class merge helper, number formatting
└── public/                     # Static assets (add real OG image, favicon, etc.)
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes on content & data

All copy, pricing, testimonials, integrations, and blog posts live in **`lib/data.ts`** —
edit that single file to update content across the whole site without touching components.

The hero's "dashboard mockup" is hand-built with real markup (not an image), so it's fully
responsive and has no separate asset to swap out. If you'd rather use a real product screenshot,
replace the mockup block in `components/sections/Hero.tsx` with a `next/image`.

## Forms & backend

Forms (contact, demo booking, newsletter, login, signup) are wired up client-side with
`preventDefault()` placeholders. Connect them to your backend / auth provider of choice:

- Contact & newsletter → your email service or CRM webhook
- Login/Signup → NextAuth.js, Clerk, Auth0, or a custom auth API
- Demo booking → Calendly embed, Cal.com, or your own scheduling API

## Accessibility

- Visible focus rings on all interactive elements (`globals.css`)
- `prefers-reduced-motion` is respected globally
- Semantic landmarks (`header`, `main`, `footer`, `nav[aria-label]`)
- Form inputs are all labeled; modals use `role="dialog"` + `aria-modal`

## SEO

- Per-page `metadata` exports (title templates, descriptions, Open Graph, Twitter cards)
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically
- Add a real `public/og-image.png` (1200×630) before launch — a placeholder path is referenced in `app/layout.tsx`

## Performance

- Fonts loaded via `next/font/google` (self-hosted, no layout shift)
- No client-side data fetching on the landing page; only interactive sections (`Pricing`,
  `FAQ`, `Navbar`, `Hero` CTA, `CookieBanner`) are marked `"use client"`
- Marquees and background effects are pure CSS animations, not JS-driven, to keep main-thread work low
- To validate Lighthouse ≥ 90: run `npm run build && npm run start`, then audit the production build (dev mode is not representative)

## Deployment

### Vercel (recommended)
1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the repo at https://vercel.com/new.
3. Vercel auto-detects Next.js — no config needed. Set your production domain and deploy.

### Self-hosted / Docker
```bash
npm run build
npm run start   # serves on port 3000
```
Put a reverse proxy (Nginx, Caddy) in front for TLS and caching.

### Environment variables
This starter has no required environment variables. Add your own as you wire up:
- `NEXT_PUBLIC_SITE_URL` — used to replace the hardcoded `https://outvue.ai` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
- Auth provider keys (NextAuth/Clerk/Auth0)
- Email/CRM webhook URLs for forms

## What's next

This starter covers all 11 requested pages with production-quality markup, animation, and a
cohesive design system. Natural next steps:
- Swap the hand-built dashboard mockup for a real product screenshot/video
- Connect forms to a real backend and auth provider
- Add a CMS (Contentful/Sanity) or MDX for the blog instead of the static array in `lib/data.ts`
- Add real customer logos (with permission) in place of text placeholders
