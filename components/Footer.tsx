export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>4U Mental Health Platform</h2>
          <p>Supporting awareness, education, and well-being.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} 4U. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
