import { PageHeader, StatusPill } from "@/components/dashboard/Primitives";
import { getComplianceItems } from "@/lib/db/queries";

export default function CompliancePage() {
  const items = getComplianceItems();
  const categories = Array.from(new Set(items.map((i) => i.category)));

  return (
    <div>
      <PageHeader
        eyebrow="Compliance"
        title="Compliance"
        description="Data privacy, security, and consent posture across the workspace."
      />

      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat} className="glass rounded-3xl p-6">
            <h2 className="mb-4 font-display text-sm font-semibold text-white">{cat}</h2>
            <div className="space-y-2.5">
              {items
                .filter((i) => i.category === cat)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                  >
                    <div>
                      <p className="text-sm text-white/85">{item.name}</p>
                      <p className="mt-0.5 text-[11px] text-white/40">
                        Last reviewed {item.last_reviewed}
                      </p>
                    </div>
                    <StatusPill status={item.status} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
