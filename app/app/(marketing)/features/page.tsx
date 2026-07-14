import type { Metadata } from "next";
import Features from "@/components/sections/Features";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Outvue's AI video personalization, CRM integrations, analytics, and team collaboration tools.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="section pt-40 sm:pt-48">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Badge>Platform Overview</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            Built for outreach teams who need scale without losing the personal touch
          </h1>
          <p className="mt-5 text-white/55">
            Every feature below exists to answer one question: how do we make one recording feel
            like it was made for one person, thousands of times over.
          </p>
        </FadeIn>
      </section>
      <Features />
      <CTASection />
    </>
  );
}
