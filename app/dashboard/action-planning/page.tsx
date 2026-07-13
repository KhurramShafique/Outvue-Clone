import { PageHeader, PriorityPill } from "@/components/dashboard/Primitives";
import { getActionItems } from "@/lib/db/queries";
import { User, Calendar } from "lucide-react";

const columns = ["Not Started", "In Progress", "Done"] as const;

export default function ActionPlanningPage() {
  const items = getActionItems();

  return (
    <div>
      <PageHeader
        eyebrow="Action Planning"
        title="Action Planning"
        description="What the team is working on to grow reply rates and pipeline this month."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {columns.map((status) => {
          const columnItems = items.filter((i) => i.status === status);
          return (
            <div key={status} className="glass rounded-3xl p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-sm font-semibold text-white">{status}</h2>
                <span className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-[11px] text-white/50">
                  {columnItems.length}
                </span>
              </div>
              <div className="space-y-3">
                {columnItems.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-white/90">{item.title}</p>
                      <PriorityPill priority={item.priority} />
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-white/45">{item.description}</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-white/40">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" /> {item.owner}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="h-3 w-3" /> {item.due_date}
                      </span>
                    </div>
                  </div>
                ))}
                {columnItems.length === 0 && (
                  <p className="text-xs text-white/30">Nothing here.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
