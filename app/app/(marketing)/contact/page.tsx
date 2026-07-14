import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, MessageSquare, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Outvue team for sales, support, or partnership inquiries.",
};

const channels = [
  { icon: Mail, title: "Sales", detail: "sales@outvue.ai" },
  { icon: MessageSquare, title: "Support", detail: "support@outvue.ai" },
  { icon: Building2, title: "Enterprise", detail: "enterprise@outvue.ai" },
];

export default function ContactPage() {
  return (
    <section className="section pt-40 sm:pt-48">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <Badge>Contact</Badge>
        </div>
        <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
          Let's talk about your outbound
        </h1>
        <p className="mt-5 text-white/55">
          Tell us about your team and we'll route you to the right person within one business day.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <FadeIn className="space-y-4">
          {channels.map((c) => (
            <div key={c.title} className="glass flex items-center gap-4 rounded-3xl p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
                <c.icon className="h-5 w-5 text-primary-400" />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-white/45">{c.detail}</p>
              </div>
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
