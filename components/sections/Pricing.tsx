"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { plans } from "@/lib/data";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="section">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Pricing</span>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Plans that scale with your outbound
        </h2>
        <p className="mt-4 text-white/55">Start free. Upgrade when your pipeline demands it.</p>
      </FadeIn>

      <FadeIn className="mt-8 flex justify-center">
        <div className="glass inline-flex items-center gap-1 rounded-full p-1">
          <button
            onClick={() => setYearly(false)}
            className={`rounded-full px-5 py-2 text-sm transition-colors ${
              !yearly ? "bg-white/10 text-white" : "text-white/50"
            }`}
            aria-pressed={!yearly}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm transition-colors ${
              yearly ? "bg-white/10 text-white" : "text-white/50"
            }`}
            aria-pressed={yearly}
          >
            Yearly
            <span className="rounded-full bg-data/15 px-2 py-0.5 text-[10px] font-medium text-data">
              Save 20%
            </span>
          </button>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 0.1}>
            <div
              className={`relative flex h-full flex-col rounded-3xl p-8 ${
                plan.highlighted
                  ? "glass border-2 border-primary-500/50 shadow-glow"
                  : "glass glass-hover"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-white/50">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1">
                {plan.monthly === 0 ? (
                  <span className="font-display text-4xl font-semibold text-white">Custom</span>
                ) : (
                  <>
                    <span className="font-display text-4xl font-semibold text-white">
                      ${yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-sm text-white/40">/mo</span>
                  </>
                )}
              </div>

              <Button
                href={plan.cta === "Book Demo" ? "/contact" : "/signup"}
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-6 w-full"
              >
                {plan.cta}
              </Button>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-data" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
