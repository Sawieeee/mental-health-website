"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/support", label: "Support" },
  { href: "/assessment", label: "Assessment" },
  { href: "/directory", label: "Directory" },
  { href: "/contact", label: "Contact" },
  { href: "/(auth)/login", label: "Login" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">4U</h1>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-gray-200 ${
                  pathname === link.href ? "underline font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
