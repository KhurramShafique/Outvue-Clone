import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{title}</h1>
      {description && <p className="mt-2 max-w-2xl text-sm text-white/50">{description}</p>}
    </div>
  );
}

export function StatCard({
  icon: Icon,
  label,
  value,
  trend,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
}) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">
          <Icon className="h-4 w-4 text-primary-400" />
        </span>
        {trend && <span className="font-mono text-[11px] text-data">{trend}</span>}
      </div>
      <p className="mt-4 font-display text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-white/45">{label}</p>
    </div>
  );
}

const statusStyles: Record<string, string> = {
  Active: "bg-data/10 text-data",
  Paid: "bg-data/10 text-data",
  Compliant: "bg-data/10 text-data",
  Done: "bg-data/10 text-data",
  "In Progress": "bg-primary-500/10 text-primary-400",
  Paused: "bg-yellow-500/10 text-yellow-400",
  "Needs Review": "bg-yellow-500/10 text-yellow-400",
  "Not Started": "bg-white/5 text-white/40",
  Invited: "bg-white/5 text-white/40",
  Completed: "bg-white/5 text-white/50",
};

export function StatusPill({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide",
        statusStyles[status] ?? "bg-white/5 text-white/50"
      )}
    >
      {status}
    </span>
  );
}

export function PriorityPill({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    High: "bg-red-500/10 text-red-300",
    Medium: "bg-primary-500/10 text-primary-400",
    Low: "bg-white/5 text-white/45",
  };
  return (
    <span className={cn("rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide", styles[priority] ?? "bg-white/5 text-white/45")}>
      {priority}
    </span>
  );
}
