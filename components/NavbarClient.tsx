"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

type NavbarClientProps = {
  isLoggedIn: boolean;
};

const baseLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

export default function NavbarClient({ isLoggedIn }: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  const loggedOutLinks = [...baseLinks, { href: "/login", label: "Login" }];
  const loggedInLinks = [
    ...baseLinks,
    { href: "/resources", label: "Resources" },
    { href: "/support", label: "Support" },
    { href: "/assessment", label: "Assessment" },
    { href: "/directory", label: "Directory" },
    { href: "/logout", label: "Logout" },
  ];

  const navLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          4U Mental Health
        </Link>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="navbar-mobile"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
