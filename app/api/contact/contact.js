"use client";
import { useState } from "react";
import "./ContactForm.css"; // import your custom CSS file

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <h2>Contact Us</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}
