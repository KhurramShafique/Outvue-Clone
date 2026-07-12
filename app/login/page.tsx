import type { Metadata } from "next";
import Link from "next/link";
import { Clapperboard } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import LoginForm from "@/components/forms/LoginForm";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your Outvue workspace.",
};

export default function LoginPage() {
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
            Welcome back
          </h1>
          <p className="mt-2 text-center text-sm text-white/50">
            Log in to keep your campaigns running.
          </p>

          <LoginForm />

          <p className="mt-6 text-center text-sm text-white/50">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary-400 hover:text-primary-300">
              Start free trial
            </Link>
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
