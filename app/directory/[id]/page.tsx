import { directory } from "@/data/directory";
import "./DirectoryDetail.css";

interface Props {
  params: { id: string };
}

export default function DirectoryDetail({ params }: Props) {
  // Convert id to number (since params.id is a string)
  const person = directory.find((p) => p.id === Number(params.id));

  if (!person) {
    return <div className="not-found">❌ Person not found</div>;
  }

  return (
    <div className="directory-detail-page">
      <div className="directory-detail-card">
        <div className="directory-header">
          <img
            src={person.image}
            alt={person.name}
            className="profile-image"
          />
          <h1 className="profile-name">{person.name}</h1>
          <p className="profile-role">{person.role}</p>
        </div>

        <div className="directory-details">
          <p className="description">{person.description}</p>
          <div className="contact-info">
            <p>
              <strong>📞 Phone:</strong> {person.phone}
            </p>
            <p>
              <strong>📧 Email:</strong> {person.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
