import Link from "next/link";
import { directory } from "@/data/directory";
import "./DirectoryPage.css"; // Import your CSS file

export default function DirectoryPage() {
  return (
    <div className="directory-page">
      <h1 className="directory-title">Directory</h1>
      <div className="directory-grid">
        {directory.map((person) => (
          <Link key={person.id} href={`/directory/${person.id}`} className="directory-card">
            <img
              src={person.image}
              alt={person.name}
              className="directory-image"
            />
            <h2 className="directory-name">{person.name}</h2>
            <p className="directory-role">{person.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
