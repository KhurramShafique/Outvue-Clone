import { Eye, MessageSquare, Send } from "lucide-react";
import { PageHeader, StatCard } from "@/components/dashboard/Primitives";
import AnalyticsChart from "@/components/dashboard/charts/AnalyticsChart";
import { getAnalyticsDaily, getCampaigns } from "@/lib/db/queries";

export default function AnalyticsPage() {
  const daily = getAnalyticsDaily();
  const campaigns = getCampaigns();

  const totalSent = daily.reduce((sum, d) => sum + d.videos_sent, 0);
  const avgWatch = daily.reduce((sum, d) => sum + d.watch_rate, 0) / daily.length;
  const avgReply = daily.reduce((sum, d) => sum + d.reply_rate, 0) / daily.length;

  return (
    <div>
      <PageHeader
        eyebrow="Analytics"
        title="Analytics"
        description="Watch rate, reply rate, and per-campaign performance across the last two weeks."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={Send} label="Videos sent (14 days)" value={totalSent.toLocaleString()} />
        <StatCard icon={Eye} label="Average watch rate" value={`${Math.round(avgWatch * 100)}%`} />
        <StatCard icon={MessageSquare} label="Average reply rate" value={`${Math.round(avgReply * 100)}%`} />
      </div>

      <div className="mt-6 glass rounded-3xl p-6">
        <h2 className="mb-4 font-display text-base font-semibold text-white">Watch rate vs. reply rate</h2>
        <AnalyticsChart data={daily} />
      </div>

      <div className="mt-6 glass rounded-3xl p-6">
        <h2 className="mb-4 font-display text-base font-semibold text-white">Performance by campaign</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40">
                <th className="pb-3 font-normal">Campaign</th>
                <th className="pb-3 font-normal">Sent</th>
                <th className="pb-3 font-normal">Watched</th>
                <th className="pb-3 font-normal">Watch Rate</th>
                <th className="pb-3 font-normal">Replied</th>
                <th className="pb-3 font-normal">Reply Rate</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id} className="border-b border-white/5 last:border-0">
                  <td className="py-3 text-white/85">{c.name}</td>
                  <td className="py-3 font-mono text-white/55">{c.sent}</td>
                  <td className="py-3 font-mono text-white/55">{c.watched}</td>
                  <td className="py-3 font-mono text-data">{Math.round((c.watched / c.sent) * 100)}%</td>
                  <td className="py-3 font-mono text-white/55">{c.replied}</td>
                  <td className="py-3 font-mono text-data">{Math.round((c.replied / c.sent) * 100)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
