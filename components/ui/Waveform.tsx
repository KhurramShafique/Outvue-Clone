"use client";

import { cn } from "@/lib/utils";

/**
 * Signature motif: a video-scrub waveform. Used in the hero and as a
 * scroll-adjacent accent to reinforce "one recording, many personalized cuts."
 */
export default function Waveform({
  bars = 40,
  className,
  active = true,
}: {
  bars?: number;
  className?: string;
  active?: boolean;
}) {
  const heights = Array.from({ length: bars }, (_, i) => {
    const seed = Math.sin(i * 12.9898) * 43758.5453;
    return Math.abs(seed - Math.floor(seed));
  });

  return (
    <div className={cn("flex items-center gap-[3px]", className)} aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          className={cn(
            "w-[3px] rounded-full bg-gradient-to-t from-primary-500 to-data",
            active && "animate-waveform"
          )}
          style={{
            height: `${12 + h * 28}px`,
            animationDelay: `${i * 0.045}s`,
            opacity: 0.35 + h * 0.65,
          }}
        />
      ))}
    </div>
  );
}
