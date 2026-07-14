import { steps } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Process</span>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          One recording. Four steps. Thousands of videos.
        </h2>
        <p className="mt-4 text-white/55">
          A real, ordered pipeline, from your camera to your prospect's inbox.
        </p>
      </FadeIn>

      <div className="relative mt-16">
        <div
          className="absolute left-1/2 top-10 hidden h-px w-[calc(100%-8rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
          aria-hidden="true"
        />
        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col items-start">
                <div className="glass mb-5 flex h-14 w-14 items-center justify-center rounded-2xl font-mono text-sm text-primary-400">
                  {step.number}
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
