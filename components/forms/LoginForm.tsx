"use client";

export default function LoginForm() {
  return (
    <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="login-email" className="mb-1.5 block text-xs text-white/50">
          Work email
        </label>
        <input
          id="login-email"
          type="email"
          required
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
          type="password"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
          placeholder="••••••••"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Log In
      </button>
    </form>
  );
}
