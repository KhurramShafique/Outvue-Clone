// Creates and seeds a local SQLite database at data/outvue.db
// Run with: node scripts/seed.mjs
// Uses Node's built-in node:sqlite module — no extra dependencies required
// (requires Node 22.5+, which includes DatabaseSync).

import { DatabaseSync } from "node:sqlite";
import { scryptSync, randomBytes } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdirSync, existsSync, unlinkSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "..", "data");
const dbPath = join(dataDir, "outvue.db");

if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
if (existsSync(dbPath)) unlinkSync(dbPath); // fresh seed every run

const db = new DatabaseSync(dbPath);

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

db.exec(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE growth_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    month TEXT NOT NULL,
    prospects_imported INTEGER NOT NULL,
    videos_generated INTEGER NOT NULL,
    campaigns_launched INTEGER NOT NULL,
    meetings_booked INTEGER NOT NULL
  );

  CREATE TABLE campaigns (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    status TEXT NOT NULL,
    channel TEXT NOT NULL,
    sent INTEGER NOT NULL,
    watched INTEGER NOT NULL,
    replied INTEGER NOT NULL,
    meetings INTEGER NOT NULL,
    updated_at TEXT NOT NULL
  );

  CREATE TABLE analytics_daily (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT NOT NULL,
    videos_sent INTEGER NOT NULL,
    watch_rate REAL NOT NULL,
    reply_rate REAL NOT NULL
  );

  CREATE TABLE action_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT NOT NULL,
    priority TEXT NOT NULL,
    owner TEXT NOT NULL,
    due_date TEXT NOT NULL
  );

  CREATE TABLE monthly_reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    month TEXT NOT NULL,
    headline TEXT NOT NULL,
    summary TEXT NOT NULL,
    reply_rate REAL NOT NULL,
    meetings_booked INTEGER NOT NULL,
    revenue_influenced INTEGER NOT NULL
  );

  CREATE TABLE invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    number TEXT NOT NULL,
    date TEXT NOT NULL,
    amount INTEGER NOT NULL,
    status TEXT NOT NULL,
    plan TEXT NOT NULL
  );

  CREATE TABLE reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    type TEXT NOT NULL,
    date TEXT NOT NULL,
    summary TEXT NOT NULL
  );

  CREATE TABLE compliance_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    status TEXT NOT NULL,
    last_reviewed TEXT NOT NULL
  );

  CREATE TABLE team_members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL,
    status TEXT NOT NULL,
    last_active TEXT NOT NULL
  );

  CREATE TABLE workspace_settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL
  );
`);

// --- Users -------------------------------------------------------------
const insertUser = db.prepare(
  `INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, ?)`
);
insertUser.run("demo@outvue.ai", hashPassword("demo1234"), "Jordan Lee", "admin");

// --- Growth metrics (last 6 months) ------------------------------------
const insertGrowth = db.prepare(
  `INSERT INTO growth_metrics (month, prospects_imported, videos_generated, campaigns_launched, meetings_booked) VALUES (?, ?, ?, ?, ?)`
);
[
  ["Feb 2026", 3200, 2950, 6, 41],
  ["Mar 2026", 4100, 3870, 8, 58],
  ["Apr 2026", 5300, 5020, 9, 74],
  ["May 2026", 6850, 6510, 11, 96],
  ["Jun 2026", 8200, 7830, 13, 118],
  ["Jul 2026", 9400, 8990, 14, 132],
].forEach((row) => insertGrowth.run(...row));

// --- Campaigns -----------------------------------------------------------
const insertCampaign = db.prepare(
  `INSERT INTO campaigns (name, status, channel, sent, watched, replied, meetings, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
);
[
  ["Q3 Outbound — Enterprise SaaS", "Active", "Email", 1240, 968, 214, 38, "Jul 10, 2026"],
  ["Recruiting — Senior Engineers", "Active", "LinkedIn", 640, 512, 133, 22, "Jul 9, 2026"],
  ["Agency Client: Fieldstone Capital", "Active", "Email", 980, 745, 156, 19, "Jul 8, 2026"],
  ["Re-engagement — Cold Leads", "Paused", "Email", 2100, 1340, 187, 12, "Jun 30, 2026"],
  ["Partner Outreach — Q2 Wrap", "Completed", "Email", 560, 460, 98, 15, "Jun 20, 2026"],
].forEach((row) => insertCampaign.run(...row));

// --- Daily analytics (last 14 days) --------------------------------------
const insertDaily = db.prepare(
  `INSERT INTO analytics_daily (date, videos_sent, watch_rate, reply_rate) VALUES (?, ?, ?, ?)`
);
const days = [
  "Jun 29", "Jun 30", "Jul 1", "Jul 2", "Jul 3", "Jul 4", "Jul 5",
  "Jul 6", "Jul 7", "Jul 8", "Jul 9", "Jul 10", "Jul 11", "Jul 12",
];
const sentSeries = [210, 245, 190, 260, 300, 120, 95, 280, 310, 340, 355, 330, 150, 120];
const watchSeries = [0.71, 0.74, 0.69, 0.76, 0.78, 0.65, 0.6, 0.79, 0.8, 0.82, 0.81, 0.83, 0.7, 0.68];
const replySeries = [0.14, 0.16, 0.12, 0.17, 0.19, 0.1, 0.09, 0.2, 0.21, 0.23, 0.22, 0.24, 0.15, 0.13];
days.forEach((d, i) => insertDaily.run(d, sentSeries[i], watchSeries[i], replySeries[i]));

// --- Action items ---------------------------------------------------------
const insertAction = db.prepare(
  `INSERT INTO action_items (title, description, status, priority, owner, due_date) VALUES (?, ?, ?, ?, ?, ?)`
);
[
  ["Launch Q3 enterprise campaign", "Segment top 1,200 enterprise accounts and launch personalized video sequence.", "In Progress", "High", "Priya N.", "Jul 15, 2026"],
  ["Refresh voice clone for new hire pitch", "Re-record base video for the updated recruiting pitch script.", "Not Started", "Medium", "Marcus W.", "Jul 18, 2026"],
  ["A/B test subject lines on cold re-engagement", "Test 3 subject line variants against the paused re-engagement list.", "Not Started", "Low", "Elena T.", "Jul 22, 2026"],
  ["Review HubSpot field mapping", "Confirm custom fields sync correctly after the last HubSpot update.", "Done", "Medium", "Daniel O.", "Jul 5, 2026"],
  ["Prepare Fieldstone Capital monthly report", "Compile reply and meeting metrics for the client review call.", "In Progress", "High", "Priya N.", "Jul 14, 2026"],
].forEach((row) => insertAction.run(...row));

// --- Monthly reviews --------------------------------------------------------
const insertReview = db.prepare(
  `INSERT INTO monthly_reviews (month, headline, summary, reply_rate, meetings_booked, revenue_influenced) VALUES (?, ?, ?, ?, ?, ?)`
);
[
  ["June 2026", "Best reply rate to date", "Watch-through rate crossed 80% for the first time, driven by the new website-screenshot personalization feature.", 0.21, 118, 184000],
  ["May 2026", "Recruiting pipeline scaled 3x", "Talent team adopted Outvue for senior engineering roles, cutting screen time per candidate by 40%.", 0.18, 96, 142000],
  ["April 2026", "Agency rollout across 4 new clients", "Vantage Growth Agency onboarded 4 additional client accounts onto shared templates.", 0.15, 74, 98000],
].forEach((row) => insertReview.run(...row));

// --- Invoices ------------------------------------------------------------
const insertInvoice = db.prepare(
  `INSERT INTO invoices (number, date, amount, status, plan) VALUES (?, ?, ?, ?, ?)`
);
[
  ["INV-2026-0007", "Jul 1, 2026", 14900, "Paid", "Professional (Yearly)"],
  ["INV-2026-0006", "Jun 1, 2026", 14900, "Paid", "Professional (Yearly)"],
  ["INV-2026-0005", "May 1, 2026", 14900, "Paid", "Professional (Yearly)"],
  ["INV-2026-0004", "Apr 1, 2026", 4900, "Paid", "Starter (Monthly)"],
].forEach((row) => insertInvoice.run(...row));

// --- Reports ---------------------------------------------------------------
const insertReport = db.prepare(
  `INSERT INTO reports (title, type, date, summary) VALUES (?, ?, ?, ?)`
);
[
  ["Q2 2026 Outbound Performance", "Quarterly", "Jul 3, 2026", "Full breakdown of send volume, watch rate, replies, and meetings booked across all campaigns."],
  ["Fieldstone Capital — Client Report", "Client", "Jul 1, 2026", "Campaign performance and ROI summary prepared for the Fieldstone Capital account."],
  ["Recruiting Pipeline Report — June", "Department", "Jun 28, 2026", "Candidate outreach volume and response rates for the talent acquisition team."],
  ["Deliverability & Domain Health", "System", "Jun 15, 2026", "Sending domain reputation, bounce rates, and inbox placement across connected mailboxes."],
].forEach((row) => insertReport.run(...row));

// --- Compliance -----------------------------------------------------------
const insertCompliance = db.prepare(
  `INSERT INTO compliance_items (category, name, status, last_reviewed) VALUES (?, ?, ?, ?)`
);
[
  ["Data Privacy", "GDPR data processing agreement", "Compliant", "Jun 1, 2026"],
  ["Data Privacy", "CCPA opt-out handling", "Compliant", "Jun 1, 2026"],
  ["Security", "SOC 2 Type II audit", "In Progress", "Jul 8, 2026"],
  ["Security", "Encryption at rest (AES-256)", "Compliant", "May 12, 2026"],
  ["Consent", "Video likeness consent per rep", "Compliant", "Jun 20, 2026"],
  ["Consent", "Prospect opt-out / unsubscribe flow", "Compliant", "Jun 20, 2026"],
  ["Access Control", "SSO enforcement for Enterprise workspaces", "Needs Review", "Apr 30, 2026"],
].forEach((row) => insertCompliance.run(...row));

// --- Team members ------------------------------------------------------
const insertMember = db.prepare(
  `INSERT INTO team_members (name, email, role, status, last_active) VALUES (?, ?, ?, ?, ?)`
);
[
  ["Jordan Lee", "demo@outvue.ai", "Admin", "Active", "Just now"],
  ["Priya Nandakumar", "priya@outvue.ai", "Sales Manager", "Active", "2 hours ago"],
  ["Marcus Webb", "marcus@outvue.ai", "Recruiter", "Active", "Yesterday"],
  ["Elena Torres", "elena@vantagegrowth.io", "Agency Partner", "Active", "3 days ago"],
  ["Daniel Osei", "daniel@outvue.ai", "Account Executive", "Invited", "—"],
].forEach((row) => insertMember.run(...row));

// --- Workspace settings ------------------------------------------------
const insertSetting = db.prepare(
  `INSERT INTO workspace_settings (key, value) VALUES (?, ?)`
);
[
  ["workspace_name", "Outvue Demo Workspace"],
  ["plan", "Professional (Yearly)"],
  ["timezone", "America/New_York"],
  ["default_sender_domain", "outreach.outvue.ai"],
  ["video_watermark", "Enabled"],
  ["two_factor_auth", "Disabled"],
].forEach((row) => insertSetting.run(...row));

db.close();

console.log(`Seeded database at ${dbPath}`);
console.log("Demo login: demo@outvue.ai / demo1234");
