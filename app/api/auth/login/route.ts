import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Read user data
  const usersData = fs.readFileSync(filePath, "utf-8");
  const users = JSON.parse(usersData);

  // Find user by email
  const userIndex = users.findIndex((u: any) => u.email === email);
  if (userIndex === -1) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }
  const user = users[userIndex];

  // Verify password: prefer bcrypt, migrate plaintext on success
  let passwordOk = false;
  const stored = user.password as string;
  if (stored && stored.startsWith("$2")) {
    // Stored as bcrypt hash
    passwordOk = await bcrypt.compare(password, stored);
  } else {
    // Stored as plaintext (legacy). Compare directly, then migrate to hash.
    if (stored === password) {
      passwordOk = true;
      try {
        const newHash = await bcrypt.hash(password, 10);
        users[userIndex].password = newHash;
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
      } catch (e) {
        console.error("Failed to migrate password to hash:", e);
      }
    }
  }

  if (!passwordOk) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  // Set a simple HttpOnly auth cookie (demo-only). In production, use a proper session/token.
  const res = NextResponse.json({ message: "Login successful!" }, { status: 200 });
  res.cookies.set("auth", String(user.id ?? user.email), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
  return res;
}
