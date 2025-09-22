"use client";

type Professional = {
  id: number;
  name: string;
  role: string;
  contact: string;
  location: string;
};

const professionals: Professional[] = [
  {
    id: 1,
    name: "Dr. Maria Santos",
    role: "Psychologist",
    contact: "+63 912 345 6789",
    location: "Manila, Philippines",
  },
  {
    id: 2,
    name: "Dr. John Cruz",
    role: "Psychiatrist",
    contact: "+63 923 456 7890",
    location: "Cebu, Philippines",
  },
  {
    id: 3,
    name: "National Mental Health Crisis Hotline",
    role: "24/7 Support",
    contact: "1553",
    location: "Nationwide",
  },
  {
    id: 4,
    name: "HopeLine Philippines",
    role: "Suicide Prevention Hotline",
    contact: "0917-558-4673",
    location: "Nationwide",
  },
];

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Professional Directory</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Reach out to trusted mental health professionals, hotlines, and counseling services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {professionals.map((pro) => (
          <div
            key={pro.id}
            className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-blue-600">{pro.name}</h2>
            <p className="text-gray-700">{pro.role}</p>
            <p className="mt-2 text-gray-600">
              📍 {pro.location}
            </p>
            <p className="mt-1 font-semibold">
              ☎ {pro.contact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
