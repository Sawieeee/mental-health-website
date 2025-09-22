import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4U Mental Health",
  description: "A Companion Web-based Application for Mental Health Awareness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
