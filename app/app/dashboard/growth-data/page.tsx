import { PageHeader } from "@/components/dashboard/Primitives";
import GrowthChart from "@/components/dashboard/charts/GrowthChart";
import { getGrowthMetrics } from "@/lib/db/queries";

export default function GrowthDataPage() {
  const growth = getGrowthMetrics();

  return (
    <div>
      <PageHeader
        eyebrow="Growth Data"
        title="Growth Data"
        description="Prospects imported, videos generated, and campaigns launched, month over month."
      />

      <div className="glass rounded-3xl p-6">
        <GrowthChart data={growth} />
      </div>

      <div className="mt-6 glass rounded-3xl p-6">
        <h2 className="mb-4 font-display text-base font-semibold text-white">Monthly breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40">
                <th className="pb-3 font-normal">Month</th>
                <th className="pb-3 font-normal">Prospects Imported</th>
                <th className="pb-3 font-normal">Videos Generated</th>
                <th className="pb-3 font-normal">Campaigns Launched</th>
                <th className="pb-3 font-normal">Meetings Booked</th>
              </tr>
            </thead>
            <tbody>
              {[...growth].reverse().map((g) => (
                <tr key={g.id} className="border-b border-white/5 last:border-0">
                  <td className="py-3 text-white/85">{g.month}</td>
                  <td className="py-3 font-mono text-white/55">{g.prospects_imported.toLocaleString()}</td>
                  <td className="py-3 font-mono text-white/55">{g.videos_generated.toLocaleString()}</td>
                  <td className="py-3 font-mono text-white/55">{g.campaigns_launched}</td>
                  <td className="py-3 font-mono text-white/55">{g.meetings_booked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
