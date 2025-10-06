"use client";

import { useState } from "react";
import "./ContactPage.css"; // Import the CSS file

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !message) {
      setError("⚠️ Please fill out all fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "❌ Something went wrong. Please try again.");
        return;
      }

      setSuccess("✅ Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Contact form error:", err);
      setError("❌ Server error. Please try again later.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
