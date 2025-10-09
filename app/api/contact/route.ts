import { promises as fs } from "fs";
import path from "path";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });
    }

    const filePath = path.join(process.cwd(), "data", "messages.json");
    let messages = [];

    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      messages = JSON.parse(fileData);
    } catch (_err) {
      messages = []; // if file not found, start fresh
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    messages.push(newMessage);

    await fs.writeFile(filePath, JSON.stringify(messages, null, 2));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (_err) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
