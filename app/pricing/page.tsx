import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for teams of every size. Start free, upgrade as your outbound scales.",
};

export default function PricingPage() {
  return (
    <>
      <section className="section pt-40 pb-0 sm:pt-48">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Badge>Pricing</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            Pricing that grows with your pipeline
          </h1>
        </FadeIn>
      </section>
      <Pricing />
      <FAQ />
      <CTASection />
    </>
  );
}
