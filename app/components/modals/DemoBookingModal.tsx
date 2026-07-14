"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { useEffect } from "react";

export default function DemoBookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Book a demo"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-lg rounded-3xl p-8"
          >
            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                  <Calendar className="h-4 w-4 text-white" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">Book a demo</h3>
                  <p className="text-sm text-white/50">30 minutes, no pressure.</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="glass flex h-8 w-8 items-center justify-center rounded-full"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              <div>
                <label htmlFor="demo-name" className="mb-1.5 block text-xs text-white/50">
                  Full name
                </label>
                <input
                  id="demo-name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  placeholder="Jordan Lee"
                />
              </div>
              <div>
                <label htmlFor="demo-email" className="mb-1.5 block text-xs text-white/50">
                  Work email
                </label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  placeholder="jordan@company.com"
                />
              </div>
              <div>
                <label htmlFor="demo-team" className="mb-1.5 block text-xs text-white/50">
                  Team size
                </label>
                <select
                  id="demo-team"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white focus:outline-none"
                >
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>200+</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full">
                Confirm Demo Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
