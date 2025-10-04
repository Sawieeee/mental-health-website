import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Read user data
  const usersData = fs.readFileSync(filePath, "utf-8");
  const users = JSON.parse(usersData);

  // Check for matching user
  const user = users.find((u: any) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful!" }, { status: 200 });
}
