import Link from "next/link";
import { directory } from "@/data/directory";

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {directory.map((person) => (
          <Link
            key={person.id}
            href={`/directory/${person.id}`}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition block"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500"
            />
            <h2 className="text-xl font-semibold text-center text-gray-900">
              {person.name}
            </h2>
            <p className="text-center text-blue-600 font-medium">{person.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
