import {
  Clapperboard,
  Type,
  Camera,
  Plug,
  BarChart3,
  Users,
  Mic,
  LayoutTemplate,
  Send,
  Terminal,
  Zap,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  Clapperboard,
  Type,
  Camera,
  Plug,
  BarChart3,
  Users,
  Mic,
  LayoutTemplate,
  Send,
  Terminal,
  Zap,
  Webhook,
};

export default function Features() {
  return (
    <section id="features" className="section">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Platform</span>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Everything a video-first outbound motion needs
        </h2>
        <p className="mt-4 text-white/55">
          From a single recording to a fully personalized, trackable campaign, without leaving
          your workflow.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          return (
            <FadeIn key={feature.title} delay={(i % 3) * 0.08}>
              <div className="group glass glass-hover relative h-full overflow-hidden rounded-3xl p-6">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-500/0 blur-2xl transition-all duration-500 group-hover:bg-primary-500/30" />
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent">
                  <Icon className="h-5 w-5 text-primary-400 transition-colors duration-300 group-hover:text-white" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
