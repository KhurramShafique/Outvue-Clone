import { PageHeader } from "@/components/dashboard/Primitives";
import { getReports } from "@/lib/db/queries";
import { FileText, Download } from "lucide-react";

export default function ReportsPage() {
  const reports = getReports();

  return (
    <div>
      <PageHeader eyebrow="Reports" title="Reports" description="Generated reports across campaigns, clients, and system health." />

      <div className="grid gap-4 sm:grid-cols-2">
        {reports.map((r) => (
          <div key={r.id} className="glass glass-hover rounded-3xl p-6">
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                <FileText className="h-4 w-4 text-primary-400" />
              </span>
              <span className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase text-white/45">
                {r.type}
              </span>
            </div>
            <h2 className="mt-4 font-display text-base font-semibold text-white">{r.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/50">{r.summary}</p>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-[11px] text-white/40">{r.date}</span>
              <button className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white">
                <Download className="h-3.5 w-3.5" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
