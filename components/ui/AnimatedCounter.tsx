"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, useSpring } from "framer-motion";
import { formatNumber } from "@/lib/utils";

export default function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 90 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(formatNumber(Math.floor(latest)));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-white sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}
