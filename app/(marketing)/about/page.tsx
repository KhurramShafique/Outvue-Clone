import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import CTASection from "@/components/sections/CTASection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "About",
  description: "Outvue builds AI video personalization for teams who outreach at scale.",
};

const values = [
  {
    title: "Personal at scale is not a contradiction",
    description:
      "We build the layer between a real human recording and a real human receiving something made for them.",
  },
  {
    title: "Reps should record once, not repeat forever",
    description: "Every hour spent re-recording the same pitch is an hour not spent selling.",
  },
  {
    title: "Trust is earned by not feeling automated",
    description:
      "Our bar for every feature: would a prospect assume this was recorded by hand for them?",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section pt-40 sm:pt-48">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Badge>About Outvue</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            We think outbound should feel like a person, not a mail merge
          </h1>
          <p className="mt-5 text-white/55">
            Outvue was founded in 2024 by a team of former sales engineers who were tired of
            choosing between scale and sincerity. We picked both.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { value: 1800, suffix: "+", label: "Teams on Outvue" },
            { value: 4200000, suffix: "+", label: "Videos generated" },
            { value: 40, suffix: "", label: "Team members" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-3xl p-6 text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <div className="glass rounded-3xl p-7">
                <h3 className="font-display text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{v.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
