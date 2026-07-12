import type { Metadata } from "next";
import HowItWorks from "@/components/sections/HowItWorks";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See how Outvue turns a single recording into thousands of personalized outbound videos in four steps.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="section pt-40 sm:pt-48">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Badge>The Pipeline</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            From one camera take to a thousand personal inboxes
          </h1>
          <p className="mt-5 text-white/55">
            No editing suite, no reshoots. Outvue handles personalization, rendering, and delivery
            end to end.
          </p>
        </FadeIn>
      </section>
      <HowItWorks />
      <CTASection />
    </>
  );
}
