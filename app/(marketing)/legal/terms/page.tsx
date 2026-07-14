import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Outvue Terms of Service.",
};

export default function TermsPage() {
  return (
    <section className="section max-w-3xl pt-40 sm:pt-48">
      <FadeIn>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-white/40">Last updated: July 10, 2026</p>
        <div className="mt-10 space-y-5 text-sm leading-relaxed text-white/60">
          <p>
            This is placeholder legal content for the Terms of Service page. Replace with copy
            reviewed by your legal counsel before launch.
          </p>
          <p>
            Use of Outvue is subject to acceptable use, billing, and liability terms defined by
            your subscription agreement. Contact legal@outvue.ai with any questions.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
