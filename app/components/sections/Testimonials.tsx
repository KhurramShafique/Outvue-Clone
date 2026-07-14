import { testimonials, customerLogos, stats } from "@/lib/data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FadeIn from "@/components/ui/FadeIn";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="customers" className="section">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Customers</span>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Trusted by teams who live in outbound
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {customerLogos.map((logo) => (
          <span key={logo} className="font-display text-sm font-medium text-white/30">
            {logo}
          </span>
        ))}
      </FadeIn>

      <div className="relative mt-14 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee gap-5">
          {loop.map((t, i) => (
            <div key={i} className="glass w-[340px] shrink-0 rounded-3xl p-6">
              <Quote className="h-5 w-5 text-primary-400" />
              <p className="mt-4 text-sm leading-relaxed text-white/70">"{t.quote}"</p>
              <div className="mt-5">
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs text-white/40">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.08}>
            <div className="glass rounded-3xl p-6 text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs text-white/50">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
