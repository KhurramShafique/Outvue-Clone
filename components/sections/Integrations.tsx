import { integrations } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function Integrations() {
  const loop = [...integrations, ...integrations];

  return (
    <section id="integrations" className="section !py-16">
      <FadeIn className="mx-auto max-w-xl text-center">
        <span className="eyebrow">Integrations</span>
        <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
          Plugs straight into the tools your team already runs on
        </h2>
      </FadeIn>

      <div className="relative mt-10 overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="glass flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/70"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
