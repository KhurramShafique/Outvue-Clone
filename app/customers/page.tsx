import type { Metadata } from "next";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import { customerLogos } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Customers",
  description: "See how sales, recruiting, and agency teams use Outvue to scale personalized video outreach.",
};

const caseStudies = [
  {
    company: "Ferro Systems",
    result: "3x reply rate",
    summary: "An SDR team of 12 replaced generic sequences with personalized video and tripled inbound replies within 60 days.",
  },
  {
    company: "Northbridge Recruiting",
    result: "22h saved / rep / month",
    summary: "Recruiters cut candidate outreach time nearly in half by recording once per role instead of per candidate.",
  },
  {
    company: "Vantage Growth Agency",
    result: "12 clients, 1 workflow",
    summary: "A boutique agency standardized outbound video production across every client account.",
  },
];

export default function CustomersPage() {
  return (
    <>
      <section className="section pt-40 sm:pt-48">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Badge>Customers</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            Teams that outreach at scale, without sounding like it
          </h1>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {customerLogos.map((logo) => (
            <span key={logo} className="font-display text-sm font-medium text-white/30">
              {logo}
            </span>
          ))}
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.company} delay={i * 0.1}>
              <div className="glass glass-hover flex h-full flex-col rounded-3xl p-7">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">{cs.company}</h3>
                  <ArrowUpRight className="h-4 w-4 text-white/30" />
                </div>
                <p className="mt-2 font-mono text-sm text-data">{cs.result}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{cs.summary}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <Testimonials />
      <CTASection />
    </>
  );
}
