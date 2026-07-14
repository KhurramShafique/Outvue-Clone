"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { scryptSync, timingSafeEqual } from "node:crypto";
import { getUserByEmail } from "@/lib/db/queries";
import { createSessionToken, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth/token";

function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const hashedBuffer = scryptSync(password, salt, 64);
  const storedBuffer = Buffer.from(hash, "hex");
  if (hashedBuffer.length !== storedBuffer.length) return false;
  return timingSafeEqual(hashedBuffer, storedBuffer);
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");

  const user = getUserByEmail(email);
  if (!user || !verifyPassword(password, user.password_hash)) {
    redirect("/login?error=1");
  }

  const token = await createSessionToken(user.id, user.email);
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  redirect("/dashboard");
}

export async function logoutAction() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  redirect("/login");
}
