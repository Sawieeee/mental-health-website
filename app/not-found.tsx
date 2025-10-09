import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{padding: '6rem 1.5rem'}}>
      <section className="card" style={{maxWidth: 900, margin: '0 auto', padding: '3rem 2rem', textAlign: 'center'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)'}}>Page not found</h1>
        <p style={{color: 'var(--muted-text)', fontSize: '1.1rem'}}>
          We could not find what you are looking for. Let us get you back to a calmer place.
        </p>
        <div style={{marginTop: '2rem'}}>
<Link href="/" className="btn">Return Home</Link>
<Link href="/support" className="btn outline" style={{marginLeft: '0.75rem'}}>Get Support</Link>
        </div>
      </section>
    </div>
  );
}
