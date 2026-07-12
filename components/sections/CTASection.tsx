import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Waveform from "@/components/ui/Waveform";

export default function CTASection() {
  return (
    <section className="section">
      <FadeIn>
        <div className="relative overflow-hidden rounded-4xl glass p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-mesh-glow opacity-80" />
          <div className="relative">
            <Waveform bars={28} className="mx-auto h-8 justify-center" />
            <h2 className="mx-auto mt-8 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Record once. Reach every prospect like it's the only one.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/55">
              Start your free trial today, no credit card, no video editor required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/signup" size="lg">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
