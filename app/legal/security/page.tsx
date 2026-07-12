import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Security",
  description: "Outvue Security overview.",
};

export default function SecurityPage() {
  return (
    <section className="section max-w-3xl pt-40 sm:pt-48">
      <FadeIn>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">Security</h1>
        <p className="mt-3 text-sm text-white/40">Last updated: July 10, 2026</p>
        <div className="mt-10 space-y-5 text-sm leading-relaxed text-white/60">
          <p>
            This is placeholder content describing Outvue's security practices: encryption in
            transit and at rest, SSO for Enterprise, and audit logging.
          </p>
          <p>Contact security@outvue.ai to request a security review or report a vulnerability.</p>
        </div>
      </FadeIn>
    </section>
  );
}
