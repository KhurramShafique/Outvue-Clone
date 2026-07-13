import { LogOut } from "lucide-react";
import { logoutAction } from "@/lib/auth/actions";

export default function Topbar({ name, email }: { name: string; email: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-white/[0.02] px-6">
      <div>
        <p className="text-sm font-medium text-white">Welcome back, {name.split(" ")[0]}</p>
        <p className="font-mono text-[11px] text-white/40">Read-only demo data</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2.5 sm:flex">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/40 to-accent-500/40 font-mono text-xs text-white">
            {initials}
          </span>
          <div className="text-left">
            <p className="text-xs font-medium text-white">{name}</p>
            <p className="text-[11px] text-white/40">{email}</p>
          </div>
        </div>

        <form action={logoutAction}>
          <button
            type="submit"
            className="glass glass-hover flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/70"
          >
            <LogOut className="h-3.5 w-3.5" />
            Log Out
          </button>
        </form>
      </div>
    </header>
  );
}
