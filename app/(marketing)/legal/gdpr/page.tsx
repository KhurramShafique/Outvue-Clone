import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "GDPR Notice",
  description: "Outvue GDPR Notice.",
};

export default function GdprPage() {
  return (
    <section className="section max-w-3xl pt-40 sm:pt-48">
      <FadeIn>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">GDPR Notice</h1>
        <p className="mt-3 text-sm text-white/40">Last updated: July 10, 2026</p>
        <div className="mt-10 space-y-5 text-sm leading-relaxed text-white/60">
          <p>
            This is placeholder legal content for the GDPR Notice page. Replace with copy
            reviewed by your legal counsel before launch, including your lawful basis for
            processing, data retention periods, and data subject rights.
          </p>
          <p>
            EU and UK users may request access, correction, or deletion of personal data by
            contacting privacy@outvue.ai.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
