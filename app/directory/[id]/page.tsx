import { directory } from "@/data/directory";

interface Props {
  params: { id: string };
}

export default function DirectoryDetail({ params }: Props) {
  const person = directory.find((p) => p.id === params.id);

  if (!person) {
    return <div className="p-8 text-center text-red-600">❌ Person not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
        <div className="flex flex-col items-center">
          <img
            src={person.image}
            alt={person.name}
            className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-blue-500"
          />
          <h1 className="text-3xl font-bold text-gray-900">{person.name}</h1>
          <p className="text-lg text-blue-600 font-medium">{person.role}</p>
        </div>

        <div className="mt-6 text-gray-800 space-y-4">
          <p>{person.description}</p>
          <p>
            <strong>📞 Phone:</strong> {person.phone}
          </p>
          <p>
            <strong>📧 Email:</strong> {person.email}
          </p>
        </div>
      </div>
    </div>
  );
}
