import { DatabaseSync } from "node:sqlite";
import path from "node:path";

// Node's built-in SQLite module (Node 22.5+). No native compilation, no
// extra npm dependency — the demo database ships as a plain file at
// data/outvue.db and is opened here in read-only mode since the dashboard
// is a read-only demo experience.

let db: DatabaseSync | null = null;

export function getDb(): DatabaseSync {
  if (!db) {
    const dbPath = path.join(process.cwd(), "data", "outvue.db");
    db = new DatabaseSync(dbPath, { readOnly: true });
  }
  return db;
}
