import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // ✅ added

export const metadata: Metadata = {
  title: "4U Mental Health",
  description: "A Companion Web-based Application for Mental Health Awareness",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer /> {/* ✅ added */}
      </body>
    </html>
  );
}