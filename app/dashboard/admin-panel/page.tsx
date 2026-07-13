import { PageHeader, StatusPill } from "@/components/dashboard/Primitives";
import { getTeamMembers } from "@/lib/db/queries";
import { UserPlus } from "lucide-react";

export default function AdminPanelPage() {
  const members = getTeamMembers();

  return (
    <div>
      <PageHeader
        eyebrow="Admin Panel"
        title="Admin Panel"
        description="Manage workspace members, roles, and access."
      />

      <div className="glass rounded-3xl p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-base font-semibold text-white">Team members</h2>
          <button className="btn-secondary !px-4 !py-2 text-xs">
            <UserPlus className="h-3.5 w-3.5" /> Invite Member
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40">
                <th className="pb-3 font-normal">Name</th>
                <th className="pb-3 font-normal">Email</th>
                <th className="pb-3 font-normal">Role</th>
                <th className="pb-3 font-normal">Status</th>
                <th className="pb-3 font-normal">Last Active</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.id} className="border-b border-white/5 last:border-0">
                  <td className="py-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/40 to-accent-500/40 font-mono text-[10px] text-white">
                        {m.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                      <span className="text-white/85">{m.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-white/50">{m.email}</td>
                  <td className="py-3 text-white/55">{m.role}</td>
                  <td className="py-3">
                    <StatusPill status={m.status} />
                  </td>
                  <td className="py-3 text-white/40">{m.last_active}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
