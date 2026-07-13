import { getDb } from "./client";

// node:sqlite rows aren't quite plain JS objects internally, which breaks
// passing them from Server Components into Client Components (Next.js only
// allows plain objects across that boundary). Spreading each row into a
// fresh {} normalizes it to a real plain object.
function toPlain<T>(row: unknown): T {
  return { ...(row as object) } as T;
}
function toPlainList<T>(rows: unknown[]): T[] {
  return rows.map((r) => toPlain<T>(r));
}

export type User = {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  role: string;
  created_at: string;
};

export type GrowthMetric = {
  id: number;
  month: string;
  prospects_imported: number;
  videos_generated: number;
  campaigns_launched: number;
  meetings_booked: number;
};

export type Campaign = {
  id: number;
  name: string;
  status: string;
  channel: string;
  sent: number;
  watched: number;
  replied: number;
  meetings: number;
  updated_at: string;
};

export type AnalyticsDay = {
  id: number;
  date: string;
  videos_sent: number;
  watch_rate: number;
  reply_rate: number;
};

export type ActionItem = {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  owner: string;
  due_date: string;
};

export type MonthlyReview = {
  id: number;
  month: string;
  headline: string;
  summary: string;
  reply_rate: number;
  meetings_booked: number;
  revenue_influenced: number;
};

export type Invoice = {
  id: number;
  number: string;
  date: string;
  amount: number;
  status: string;
  plan: string;
};

export type Report = {
  id: number;
  title: string;
  type: string;
  date: string;
  summary: string;
};

export type ComplianceItem = {
  id: number;
  category: string;
  name: string;
  status: string;
  last_reviewed: string;
};

export type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  last_active: string;
};

export function getUserByEmail(email: string): User | undefined {
  const db = getDb();
  const row = db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
  return row ? toPlain<User>(row) : undefined;
}

export function getGrowthMetrics(): GrowthMetric[] {
  return toPlainList<GrowthMetric>(
    getDb().prepare(`SELECT * FROM growth_metrics ORDER BY id ASC`).all()
  );
}

export function getCampaigns(): Campaign[] {
  return toPlainList<Campaign>(getDb().prepare(`SELECT * FROM campaigns ORDER BY id ASC`).all());
}

export function getAnalyticsDaily(): AnalyticsDay[] {
  return toPlainList<AnalyticsDay>(
    getDb().prepare(`SELECT * FROM analytics_daily ORDER BY id ASC`).all()
  );
}

export function getActionItems(): ActionItem[] {
  return toPlainList<ActionItem>(
    getDb().prepare(`SELECT * FROM action_items ORDER BY id ASC`).all()
  );
}

export function getMonthlyReviews(): MonthlyReview[] {
  return toPlainList<MonthlyReview>(
    getDb().prepare(`SELECT * FROM monthly_reviews ORDER BY id DESC`).all()
  );
}

export function getInvoices(): Invoice[] {
  return toPlainList<Invoice>(getDb().prepare(`SELECT * FROM invoices ORDER BY id DESC`).all());
}

export function getReports(): Report[] {
  return toPlainList<Report>(getDb().prepare(`SELECT * FROM reports ORDER BY id DESC`).all());
}

export function getComplianceItems(): ComplianceItem[] {
  return toPlainList<ComplianceItem>(
    getDb().prepare(`SELECT * FROM compliance_items ORDER BY id ASC`).all()
  );
}

export function getTeamMembers(): TeamMember[] {
  return toPlainList<TeamMember>(
    getDb().prepare(`SELECT * FROM team_members ORDER BY id ASC`).all()
  );
}

export function getWorkspaceSettings(): Record<string, string> {
  const rows = toPlainList<{ key: string; value: string }>(
    getDb().prepare(`SELECT key, value FROM workspace_settings`).all()
  );
  return Object.fromEntries(rows.map((r) => [r.key, r.value]));
}
