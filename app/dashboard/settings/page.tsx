import { PageHeader } from "@/components/dashboard/Primitives";
import { getWorkspaceSettings } from "@/lib/db/queries";
import { getSession } from "@/lib/auth/get-session";
import { getUserByEmail } from "@/lib/db/queries";
import { Lock } from "lucide-react";

const settingLabels: Record<string, string> = {
  workspace_name: "Workspace name",
  plan: "Current plan",
  timezone: "Timezone",
  default_sender_domain: "Default sender domain",
  video_watermark: "Video watermark",
  two_factor_auth: "Two-factor authentication",
};

export default async function SettingsPage() {
  const settings = getWorkspaceSettings();
  const session = await getSession();
  const user = session ? getUserByEmail(session.email) : null;

  return (
    <div>
      <PageHeader eyebrow="Settings" title="Settings" description="Workspace and account configuration." />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h2 className="mb-4 font-display text-base font-semibold text-white">Workspace</h2>
          <div className="space-y-3">
            {Object.entries(settingLabels).map(([key, label]) => (
              <div
                key={key}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <span className="text-sm text-white/60">{label}</span>
                <span className="font-mono text-sm text-white/85">{settings[key]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <h2 className="mb-4 font-display text-base font-semibold text-white">Account</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
              <span className="text-sm text-white/60">Name</span>
              <span className="text-sm text-white/85">{user?.name}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
              <span className="text-sm text-white/60">Email</span>
              <span className="text-sm text-white/85">{user?.email}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
              <span className="text-sm text-white/60">Role</span>
              <span className="text-sm text-white/85 capitalize">{user?.role}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
            <Lock className="h-3.5 w-3.5 text-white/30" />
            <p className="text-xs text-white/40">
              This is a read-only demo workspace — settings can't be edited here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
