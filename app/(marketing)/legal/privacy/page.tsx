import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Outvue Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <section className="section max-w-3xl pt-40 sm:pt-48">
      <FadeIn>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-white/40">Last updated: July 10, 2026</p>
        <div className="mt-10 space-y-5 text-sm leading-relaxed text-white/60">
          <p>
            This is placeholder legal content for the Privacy Policy page. Replace with copy
            reviewed by your legal counsel before launch.
          </p>
          <p>
            Outvue processes prospect and video data solely to deliver the personalized video
            outreach service you configure. Contact privacy@outvue.ai with any requests.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
