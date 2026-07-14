import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/get-session";
import { getUserByEmail } from "@/lib/db/queries";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // middleware.ts already guards /dashboard/*, this is a defense-in-depth check
  // that also gives us the current user's details for the topbar.
  const session = await getSession();
  if (!session) redirect("/login");

  const user = getUserByEmail(session.email);
  if (!user) redirect("/login");

  return (
    <div className="flex min-h-screen bg-canvas">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar name={user.name} email={user.email} />
        <main className="flex-1 overflow-x-hidden p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
