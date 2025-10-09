"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();
  const [status, setStatus] = useState("Logging you out...");

  useEffect(() => {
    const doLogout = async () => {
      try {
        await fetch("/api/auth/logout", { method: "POST" });
        setStatus("You have been logged out.");
      } catch (e) {
        setStatus("Logout request failed, but your session has likely ended.");
      } finally {
        setTimeout(() => router.push("/login"), 1000);
      }
    };
    doLogout();
  }, [router]);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
      <div style={{ fontSize: 18 }}>{status}</div>
    </div>
  );
}