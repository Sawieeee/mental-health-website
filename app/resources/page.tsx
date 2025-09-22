"use client";

import { useState } from "react";

type Resource = {
  id: number;
  title: string;
  type: "Article" | "Video" | "Infographic";
  description: string;
  link: string;
};

const resources: Resource[] = [
  {
    id: 1,
    title: "Managing Stress Effectively",
    type: "Article",
    description:
      "Learn simple techniques to reduce stress and improve your daily mental health.",
    link: "https://www.verywellmind.com/stress-management-4157211",
  },
  {
    id: 2,
    title: "Understanding Anxiety",
    type: "Video",
    description:
      "A short educational video explaining symptoms, causes, and coping strategies for anxiety.",
    link: "https://www.youtube.com/watch?v=WWloIAQpMcQ",
  },
  {
    id: 3,
    title: "Self-Care Tips",
    type: "Infographic",
    description:
      "Visual guide on simple self-care practices you can include in your daily routine.",
    link: "https://www.mentalhealth.org.uk/explore-mental-health/publications/our-best-mental-health-tips",
  },
  {
    id: 4,
    title: "Coping with Depression",
    type: "Article",
    description:
      "Helpful strategies and insights to support people dealing with depression.",
    link: "https://www.healthline.com/health/depression",
  },
];

export default function ResourcesPage() {
  const [filter, setFilter] = useState<"All" | "Article" | "Video" | "Infographic">("All");

  const filteredResources =
    filter === "All"
      ? resources
      : resources.filter((res) => res.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Educational Resources
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore articles, videos, and infographics to improve your mental health awareness.
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Article", "Video", "Infographic"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category as any)}
            className={`px-4 py-2 rounded-lg ${
              filter === category
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <span className="text-sm font-semibold text-blue-600">
              {resource.type}
            </span>
            <h2 className="text-xl font-bold mt-2">{resource.title}</h2>
            <p className="text-gray-600 mt-2">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              View Resource →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
