import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Read existing users
  const usersData = fs.readFileSync(filePath, "utf-8");
  const users = JSON.parse(usersData);

  // Check if email already exists
  const existingUser = users.find((u: any) => u.email === email);
  if (existingUser) {
    return NextResponse.json({ error: "Email already exists." }, { status: 400 });
  }

  // Add new user
  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);

  // Save to file
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return NextResponse.json({ message: "User registered successfully!" }, { status: 200 });
}
