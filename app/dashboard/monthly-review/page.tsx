import { PageHeader } from "@/components/dashboard/Primitives";
import { getMonthlyReviews } from "@/lib/db/queries";
import { TrendingUp, CalendarCheck, DollarSign } from "lucide-react";

export default function MonthlyReviewPage() {
  const reviews = getMonthlyReviews();

  return (
    <div>
      <PageHeader
        eyebrow="Monthly Review"
        title="Monthly Review"
        description="A recap of performance, wins, and revenue influenced, one month at a time."
      />

      <div className="space-y-5">
        {reviews.map((r) => (
          <div key={r.id} className="glass rounded-3xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="eyebrow">{r.month}</span>
            </div>
            <h2 className="mt-2 font-display text-lg font-semibold text-white">{r.headline}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{r.summary}</p>

            <div className="mt-5 grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <TrendingUp className="h-4 w-4 text-data" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    {Math.round(r.reply_rate * 100)}%
                  </p>
                  <p className="text-[11px] text-white/40">Reply rate</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <CalendarCheck className="h-4 w-4 text-primary-400" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">{r.meetings_booked}</p>
                  <p className="text-[11px] text-white/40">Meetings booked</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <DollarSign className="h-4 w-4 text-accent-400" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    ${(r.revenue_influenced / 1000).toFixed(0)}K
                  </p>
                  <p className="text-[11px] text-white/40">Revenue influenced</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
