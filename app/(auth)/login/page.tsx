"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import "./LoginPage.css"; // 👈 import your custom CSS file

function LoginInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawReturnTo = searchParams.get("returnTo") || "/";
  const returnTo = rawReturnTo.startsWith("/") && !rawReturnTo.startsWith("//") ? rawReturnTo : "/";
  const loginMsg = searchParams.get("msg");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Invalid credentials");
        return;
      }

      router.push(returnTo);
    } catch (_err) {
      setError("Server error");
    }
  };

  return (
    <>
      <h2 className="login-title">Login</h2>

      {error && <p className="error-message">{error}</p>}
      {loginMsg === "login_required" && (
        <p className="info-message">You must be logged in to view that page.</p>
      )}

      <p className="info-message">
        After you log in, you’ll unlock access to Assessment, Directory, Resources, and Support.
      </p>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="submit-button">
          Login
        </button>
      </form>

      <p className="signup-text">
        Don’t have an account?{" "}
        <Link href="/signup" className="signup-link">
          Sign Up
        </Link>
      </p>
    </>
  );
}

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-box">
        <Suspense fallback={null}>
          <LoginInner />
        </Suspense>
      </div>
    </div>
  );
}
