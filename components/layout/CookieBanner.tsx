"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "outvue-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem(STORAGE_KEY);
      if (!consent) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const respond = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage unavailable, banner simply won't persist */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-3xl glass p-5 sm:inset-x-auto sm:right-6"
        >
          <div className="flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5">
              <Cookie className="h-4 w-4 text-primary-400" />
            </span>
            <div>
              <p className="text-sm text-white/80">
                We use cookies to run Outvue and understand how it's used. Read our{" "}
                <Link href="/legal/gdpr" className="underline decoration-white/30 underline-offset-2 hover:text-white">
                  GDPR notice
                </Link>{" "}
                for details.
              </p>
              <div className="mt-4 flex gap-3">
                <button onClick={() => respond("accepted")} className="btn-primary !px-4 !py-2 text-xs">
                  Accept All
                </button>
                <button onClick={() => respond("rejected")} className="btn-secondary !px-4 !py-2 text-xs">
                  Reject Non-Essential
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
