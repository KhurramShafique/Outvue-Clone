import type { Metadata } from "next";
import { integrations } from "@/lib/data";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import { Plug } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect Outvue to your CRM, inbox, and automation stack: HubSpot, Salesforce, Pipedrive, Apollo, Clay, Zapier, n8n, and more.",
};

export default function IntegrationsPage() {
  return (
    <>
      <section className="section pt-40 sm:pt-48">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Badge>Integrations</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            Fits into the stack you already run
          </h1>
          <p className="mt-5 text-white/55">
            Sync prospects in, push results out. Outvue meets your CRM and automation tools where
            they already live.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((name, i) => (
            <FadeIn key={name} delay={(i % 3) * 0.08}>
              <div className="glass glass-hover flex items-center gap-4 rounded-3xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
                  <Plug className="h-5 w-5 text-primary-400" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{name}</h3>
                  <p className="text-sm text-white/45">Two-way sync, native connector</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-6">
          <div className="glass glass-hover flex items-center gap-4 rounded-3xl p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
              <Plug className="h-5 w-5 text-data" />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-white">
                REST API & Webhooks
              </h3>
              <p className="text-sm text-white/45">
                Trigger generation and receive real-time events in your own systems.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
      <CTASection />
    </>
  );
}
