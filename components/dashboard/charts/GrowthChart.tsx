"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { GrowthMetric } from "@/lib/db/queries";

export default function GrowthChart({ data }: { data: GrowthMetric[] }) {
  const chartData = data.map((d) => ({
    month: d.month.split(" ")[0],
    Prospects: d.prospects_imported,
    Videos: d.videos_generated,
    Meetings: d.meetings_booked,
  }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="prospectsFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="videosFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
        <XAxis dataKey="month" stroke="rgba(255,255,255,0.35)" fontSize={11} tickLine={false} axisLine={false} />
        <YAxis stroke="rgba(255,255,255,0.35)" fontSize={11} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            background: "#0F172A",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            fontSize: 12,
          }}
          labelStyle={{ color: "rgba(255,255,255,0.6)" }}
        />
        <Area type="monotone" dataKey="Prospects" stroke="#4F46E5" fill="url(#prospectsFill)" strokeWidth={2} />
        <Area type="monotone" dataKey="Videos" stroke="#7C3AED" fill="url(#videosFill)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
