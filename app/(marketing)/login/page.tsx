import type { Metadata } from "next";
import Link from "next/link";
import { Clapperboard, AlertCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { loginAction } from "@/lib/auth/actions";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your Outvue workspace.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>;
}) {
  const params = await searchParams;
  const hasError = params.error === "1";

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
            Log in to view the live dashboard demo.
          </p>

          <div className="mt-5 rounded-xl border border-primary-500/30 bg-primary-500/10 px-4 py-3 text-center">
            <p className="text-xs text-white/70">
              Demo login — <span className="font-mono text-primary-300">demo@outvue.ai</span> /{" "}
              <span className="font-mono text-primary-300">demo1234</span>
            </p>
          </div>

          {hasError && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              <AlertCircle className="h-4 w-4 shrink-0" />
              Incorrect email or password. Try the demo credentials above.
            </div>
          )}

          <form className="mt-6 space-y-4" action={loginAction}>
            <div>
              <label htmlFor="login-email" className="mb-1.5 block text-xs text-white/50">
                Work email
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                required
                defaultValue="demo@outvue.ai"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                placeholder="jordan@company.com"
              />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label htmlFor="login-password" className="text-xs text-white/50">
                  Password
                </label>
                <a href="#" className="text-xs text-primary-400 hover:text-primary-300">
                  Forgot password?
                </a>
              </div>
              <input
                id="login-password"
                name="password"
                type="password"
                required
                defaultValue="demo1234"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Log In
            </button>
          </form>

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
