import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>4U Mental Health Platform</h2>
          <p>Supporting awareness, education, and well-being.</p>
        </div>

        <div className="footer-links">
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/services">Services</Link>
<Link href="/community">Community</Link>
<Link href="/support">Support</Link>
<Link href="/contact">Contact</Link>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} 4U. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
