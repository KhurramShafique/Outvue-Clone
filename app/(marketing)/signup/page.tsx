import type { Metadata } from "next";
import Link from "next/link";
import { Clapperboard, Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SignupForm from "@/components/forms/SignupForm";

export const metadata: Metadata = {
  title: "Start Free Trial",
  description: "Create your Outvue workspace and start personalizing video outreach at scale.",
};

const perks = ["14-day free trial", "No credit card required", "Cancel anytime"];

export default function SignupPage() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-32 pb-16">
      <FadeIn className="w-full max-w-md">
        <div className="glass rounded-4xl p-8 sm:p-10">
          <Link href="/" className="mb-8 flex items-center justify-center gap-2 font-display text-lg font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Clapperboard className="h-4 w-4 text-white" strokeWidth={2.2} />
            </span>
            Outvue
          </Link>

          <h1 className="text-center font-display text-2xl font-semibold text-white">
            Start your free trial
          </h1>

          <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
            {perks.map((perk) => (
              <span key={perk} className="flex items-center gap-1.5 text-xs text-white/50">
                <Check className="h-3 w-3 text-data" /> {perk}
              </span>
            ))}
          </div>

          <SignupForm />

          <p className="mt-6 text-center text-sm text-white/50">
            Already have an account?{" "}
            <Link href="/login" className="text-primary-400 hover:text-primary-300">
              Log in
            </Link>
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
