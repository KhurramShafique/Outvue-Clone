"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { AnalyticsDay } from "@/lib/db/queries";

export default function AnalyticsChart({ data }: { data: AnalyticsDay[] }) {
  const chartData = data.map((d) => ({
    date: d.date,
    "Watch Rate": Math.round(d.watch_rate * 100),
    "Reply Rate": Math.round(d.reply_rate * 100),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
        <XAxis dataKey="date" stroke="rgba(255,255,255,0.35)" fontSize={11} tickLine={false} axisLine={false} />
        <YAxis
          stroke="rgba(255,255,255,0.35)"
          fontSize={11}
          tickLine={false}
          axisLine={false}
          tickFormatter={(v) => `${v}%`}
        />
        <Tooltip
          contentStyle={{
            background: "#0F172A",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            fontSize: 12,
          }}
          labelStyle={{ color: "rgba(255,255,255,0.6)" }}
          formatter={(value: number) => `${value}%`}
        />
        <Legend wrapperStyle={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }} />
        <Line type="monotone" dataKey="Watch Rate" stroke="#22D3EE" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="Reply Rate" stroke="#7C3AED" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
