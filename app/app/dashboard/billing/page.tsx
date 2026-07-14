import { PageHeader, StatusPill } from "@/components/dashboard/Primitives";
import { getInvoices } from "@/lib/db/queries";
import { CreditCard, Download } from "lucide-react";

export default function BillingPage() {
  const invoices = getInvoices();

  return (
    <div>
      <PageHeader eyebrow="Billing" title="Billing" description="Your current plan and invoice history." />

      <div className="glass rounded-3xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
              <CreditCard className="h-5 w-5 text-white" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-white">Professional Plan</p>
              <p className="text-sm text-white/45">Billed yearly · Renews Jul 1, 2027</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl font-semibold text-white">$119</p>
            <p className="text-xs text-white/40">per month</p>
          </div>
        </div>
      </div>

      <div className="mt-6 glass rounded-3xl p-6">
        <h2 className="mb-4 font-display text-base font-semibold text-white">Invoice history</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40">
                <th className="pb-3 font-normal">Invoice</th>
                <th className="pb-3 font-normal">Date</th>
                <th className="pb-3 font-normal">Plan</th>
                <th className="pb-3 font-normal">Amount</th>
                <th className="pb-3 font-normal">Status</th>
                <th className="pb-3 font-normal"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="border-b border-white/5 last:border-0">
                  <td className="py-3 font-mono text-white/70">{inv.number}</td>
                  <td className="py-3 text-white/55">{inv.date}</td>
                  <td className="py-3 text-white/55">{inv.plan}</td>
                  <td className="py-3 font-mono text-white/85">${(inv.amount / 100).toFixed(2)}</td>
                  <td className="py-3">
                    <StatusPill status={inv.status} />
                  </td>
                  <td className="py-3 text-right">
                    <button className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white">
                      <Download className="h-3.5 w-3.5" /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
