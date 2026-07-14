"use client";

export default function ContactForm() {
  return (
    <form className="glass space-y-5 rounded-3xl p-8" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="mb-1.5 block text-xs text-white/50">
            First name
          </label>
          <input
            id="first-name"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
            placeholder="Jordan"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="mb-1.5 block text-xs text-white/50">
            Last name
          </label>
          <input
            id="last-name"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
            placeholder="Lee"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs text-white/50">
          Work email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
          placeholder="jordan@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs text-white/50">
          How can we help?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
          placeholder="Tell us about your team and outbound goals"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
}
