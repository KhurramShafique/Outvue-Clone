"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Play, CheckCircle2, TrendingUp, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Waveform from "@/components/ui/Waveform";
import DemoBookingModal from "@/components/modals/DemoBookingModal";

const prospects = [
  { name: "Amara Osei", company: "Fieldstone Capital", status: "Sent", pct: 100 },
  { name: "Ravi Chandra", company: "Northbridge", status: "Processing", pct: 64 },
  { name: "Lena Fischer", company: "Harborlight", status: "Queued", pct: 12 },
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-40 pb-20 sm:pt-48">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40"
        aria-hidden="true"
        style={{ backgroundSize: "auto, 64px 64px, 64px 64px" }}
      />

      <div className="section relative !py-0">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-data animate-pulse-glow" />
              Now generating 4.2M+ videos a month
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl"
          >
            Scale personalized
            <br />
            <span className="gradient-text">video outreach</span> with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-balance text-base text-white/60 sm:text-lg"
          >
            Generate thousands of personalized videos from a single recording. One take,
            infinite prospects, every one lip-synced with their name and company.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/signup" size="lg">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => setModalOpen(true)}>
              <Calendar className="h-4 w-4" /> Book Demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-xs text-white/40"
          >
            No credit card required · 14-day free trial · Cancel anytime
          </motion.p>
        </div>

        {/* Animated dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="absolute -inset-x-10 -top-10 -bottom-10 -z-10 bg-mesh-glow blur-3xl opacity-70" />

          <div className="glass overflow-hidden rounded-4xl p-3 shadow-glow sm:p-4">
            <div className="rounded-3xl border border-white/10 bg-secondary/60 p-4 sm:p-6">
              {/* Window chrome */}
              <div className="mb-5 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-4 font-mono text-[11px] text-white/30">
                  outvue.ai/campaigns/q3-outbound
                </span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
                {/* Prospect list + AI processing */}
                <div className="glass rounded-2xl p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="eyebrow">Prospect List</span>
                    <span className="font-mono text-[11px] text-white/40">1,248 total</span>
                  </div>
                  <div className="space-y-2.5">
                    {prospects.map((p, i) => (
                      <div
                        key={p.name}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/40 to-accent-500/40 font-mono text-[11px] text-white">
                            {p.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                          <div>
                            <p className="text-xs font-medium text-white/90">{p.name}</p>
                            <p className="text-[11px] text-white/40">{p.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {p.status === "Sent" ? (
                            <CheckCircle2 className="h-3.5 w-3.5 text-data" />
                          ) : (
                            <span className="font-mono text-[10px] text-white/40">{p.pct}%</span>
                          )}
                          <span
                            className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${
                              p.status === "Sent"
                                ? "bg-data/10 text-data"
                                : p.status === "Processing"
                                ? "bg-primary-500/10 text-primary-400"
                                : "bg-white/5 text-white/40"
                            }`}
                          >
                            {p.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                        Personalizing video
                      </span>
                      <span className="font-mono text-[10px] text-data">rendering…</span>
                    </div>
                    <Waveform bars={36} className="h-8 justify-between" />
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex flex-col gap-4">
                  <div className="glass rounded-2xl p-4 sm:p-5">
                    <span className="eyebrow">Analytics</span>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-1.5 text-white/40">
                          <Play className="h-3 w-3" />
                          <span className="font-mono text-[10px]">Watch rate</span>
                        </div>
                        <p className="mt-1 font-display text-xl font-semibold text-white">78%</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-white/40">
                          <TrendingUp className="h-3 w-3" />
                          <span className="font-mono text-[10px]">Replies</span>
                        </div>
                        <p className="mt-1 font-display text-xl font-semibold text-white">+312%</p>
                      </div>
                    </div>
                    <div className="mt-4 flex h-16 items-end gap-1.5">
                      {[40, 55, 35, 70, 60, 85, 65, 95, 75, 100].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-primary-500/60 to-accent-400/80"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="glass flex items-center gap-3 rounded-2xl p-4 sm:p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5">
                      <Users className="h-4 w-4 text-primary-400" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                        Meetings booked
                      </p>
                      <p className="font-display text-lg font-semibold text-white">
                        18 this week
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <DemoBookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
