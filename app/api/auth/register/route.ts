import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Read existing users
  const usersData = fs.readFileSync(filePath, "utf-8");
const users: Array<{ id?: number; name?: string; email: string; password?: string }> = JSON.parse(usersData);

  // Check if email already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return NextResponse.json({ error: "Email already exists." }, { status: 400 });
  }

  // Hash the password before saving
  const passwordHash = await bcrypt.hash(password, 10);

  // Add new user with hashed password
  const newUser = { id: Date.now(), name, email, password: passwordHash };
  users.push(newUser);

  // Save to file
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return NextResponse.json({ message: "User registered successfully!" }, { status: 200 });
}
