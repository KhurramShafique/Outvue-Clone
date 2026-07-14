import { Users, Clapperboard, Send, CalendarCheck } from "lucide-react";
import { PageHeader, StatCard, StatusPill, PriorityPill } from "@/components/dashboard/Primitives";
import GrowthChart from "@/components/dashboard/charts/GrowthChart";
import {
  getGrowthMetrics,
  getCampaigns,
  getActionItems,
} from "@/lib/db/queries";
import { formatNumber } from "@/lib/utils";

export default function DashboardOverviewPage() {
  const growth = getGrowthMetrics();
  const campaigns = getCampaigns().slice(0, 4);
  const actions = getActionItems().filter((a) => a.status !== "Done").slice(0, 4);

  const latest = growth[growth.length - 1];
  const prev = growth[growth.length - 2];
  const pctChange = (a: number, b: number) => `${a >= b ? "+" : ""}${Math.round(((a - b) / b) * 100)}%`;

  return (
    <div>
      <PageHeader
        eyebrow="Overview"
        title="Dashboard"
        description="A snapshot of your outbound performance across every campaign and channel."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Users}
          label="Prospects imported this month"
          value={formatNumber(latest.prospects_imported)}
          trend={pctChange(latest.prospects_imported, prev.prospects_imported)}
        />
        <StatCard
          icon={Clapperboard}
          label="Videos generated this month"
          value={formatNumber(latest.videos_generated)}
          trend={pctChange(latest.videos_generated, prev.videos_generated)}
        />
        <StatCard
          icon={Send}
          label="Campaigns launched this month"
          value={String(latest.campaigns_launched)}
          trend={pctChange(latest.campaigns_launched, prev.campaigns_launched)}
        />
        <StatCard
          icon={CalendarCheck}
          label="Meetings booked this month"
          value={String(latest.meetings_booked)}
          trend={pctChange(latest.meetings_booked, prev.meetings_booked)}
        />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="glass rounded-3xl p-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-display text-base font-semibold text-white">Growth over time</h2>
            <span className="font-mono text-[11px] text-white/40">Last 6 months</span>
          </div>
          <GrowthChart data={growth} />
        </div>

        <div className="glass rounded-3xl p-6">
          <h2 className="mb-4 font-display text-base font-semibold text-white">Open action items</h2>
          <div className="space-y-3">
            {actions.map((a) => (
              <div key={a.id} className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm text-white/85">{a.title}</p>
                  <PriorityPill priority={a.priority} />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-white/40">{a.owner}</span>
                  <span className="font-mono text-[11px] text-white/40">Due {a.due_date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 glass rounded-3xl p-6">
        <h2 className="mb-4 font-display text-base font-semibold text-white">Active campaigns</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40">
                <th className="pb-3 font-normal">Campaign</th>
                <th className="pb-3 font-normal">Channel</th>
                <th className="pb-3 font-normal">Status</th>
                <th className="pb-3 font-normal">Sent</th>
                <th className="pb-3 font-normal">Replied</th>
                <th className="pb-3 font-normal">Meetings</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id} className="border-b border-white/5 last:border-0">
                  <td className="py-3 text-white/85">{c.name}</td>
                  <td className="py-3 text-white/55">{c.channel}</td>
                  <td className="py-3">
                    <StatusPill status={c.status} />
                  </td>
                  <td className="py-3 font-mono text-white/55">{c.sent}</td>
                  <td className="py-3 font-mono text-white/55">{c.replied}</td>
                  <td className="py-3 font-mono text-white/55">{c.meetings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
