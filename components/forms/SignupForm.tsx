"use client";

export default function SignupForm() {
  return (
    <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="signup-name" className="mb-1.5 block text-xs text-white/50">
            Full name
          </label>
          <input
            id="signup-name"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
            placeholder="Jordan Lee"
          />
        </div>
        <div>
          <label htmlFor="signup-company" className="mb-1.5 block text-xs text-white/50">
            Company
          </label>
          <input
            id="signup-company"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
            placeholder="Acme Inc."
          />
        </div>
      </div>
      <div>
        <label htmlFor="signup-email" className="mb-1.5 block text-xs text-white/50">
          Work email
        </label>
        <input
          id="signup-email"
          type="email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
          placeholder="jordan@company.com"
        />
      </div>
      <div>
        <label htmlFor="signup-password" className="mb-1.5 block text-xs text-white/50">
          Password
        </label>
        <input
          id="signup-password"
          type="password"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
          placeholder="Minimum 8 characters"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Create Workspace
      </button>
    </form>
  );
}
