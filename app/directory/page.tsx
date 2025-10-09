import Link from "next/link";
import { directory } from "@/data/directory";
import "./DirectoryPage.css"; // Import your CSS file

function telHref(phone?: string) {
  if (!phone) return undefined;
  const cleaned = phone.replace(/[^+\d]/g, "");
  return cleaned ? `tel:${cleaned}` : undefined;
}

export default function DirectoryPage() {
  return (
    <div className="directory-page">
      <h1 className="directory-title">Directory</h1>
      <div className="directory-grid">
        {directory.map((person) => {
          const tel = telHref(person.phone);
          const hasAnyAction = Boolean(tel || person.website || person.address);
          return (
            <div key={person.id} className="directory-card">
              <Link href={`/directory/${person.id}`} className="directory-card-top">
                <img
                  src={person.image}
                  alt={person.name}
                  className="directory-image"
                />
                <h2 className="directory-name">{person.name}</h2>
                <p className="directory-role">{person.role}</p>
                {person.address && (
                  <p className="directory-address" title={person.address}>📍 {person.address}</p>
                )}
              </Link>

              {hasAnyAction && (
                <div className="directory-actions">
                  {tel && (
                    <a className="btn" href={tel}>📞 Call</a>
                  )}
                  {person.website && (
                    <a className="btn outline" href={person.website} target="_blank" rel="noopener noreferrer">🌐 Website</a>
                  )}
                  {person.address && (
                    <a
                      className="btn outline"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(person.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🧭 Directions
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
