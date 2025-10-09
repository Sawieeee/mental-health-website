"use client";

import { useState } from "react";
import "./ResourcesPage.css"; // Import your plain CSS file
import "./ResourcesPage.css";

type Resource = {
  id: number;
  title: string;
  type: "Article" | "Video" | "Infographic";
  description: string;
  link: string;
};

const resources: Resource[] = [
  // Articles
  {
    id: 1,
    title: "Managing Stress Effectively",
    type: "Article",
    description:
      "Learn simple techniques to reduce stress and improve your daily mental health.",
    link: "https://www.verywellmind.com/stress-management-4157211",
  },
  {
    id: 4,
    title: "Coping with Depression",
    type: "Article",
    description:
      "Helpful strategies and insights to support people dealing with depression.",
    link: "https://www.healthline.com/health/depression",
  },
  {
    id: 5,
    title: "NIMH: Caring for Your Mental Health",
    type: "Article",
    description:
      "U.S. National Institute of Mental Health guide to caring for your mental health.",
    link: "https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health",
  },
  {
    id: 6,
    title: "WHO: Mental Health – Fact Sheets",
    type: "Article",
    description:
      "World Health Organization overview pages on mental health topics and services.",
    link: "https://www.who.int/health-topics/mental-health#tab=tab_1",
  },

  // Videos
  {
    id: 2,
    title: "Understanding Anxiety (TED-Ed)",
    type: "Video",
    description:
      "Short video explaining symptoms, causes, and coping strategies for anxiety.",
    link: "https://www.youtube.com/watch?v=WWloIAQpMcQ",
  },
  {
    id: 7,
    title: "What is depression? (TED-Ed)",
    type: "Video",
    description:
      "Animated explanation of depression and its treatment options.",
    link: "https://www.youtube.com/watch?v=Z-5B8J4bR9A",
  },
  {
    id: 8,
    title: "WHO: What is Mental Health?",
    type: "Video",
    description:
      "WHO explainer video covering the basics of mental health and wellbeing.",
    link: "https://www.youtube.com/watch?v=Mn5B5nA1G9s",
  },

  // Infographics
  {
    id: 3,
    title: "Self-Care Tips",
    type: "Infographic",
    description:
      "Visual guide on simple self-care practices you can include in your daily routine.",
    link: "https://www.mentalhealth.org.uk/explore-mental-health/publications/our-best-mental-health-tips",
  },
  {
    id: 9,
    title: "CDC: Coping with Stress",
    type: "Infographic",
    description:
      "Infographic-style guidance from CDC on coping with stress during challenging times.",
    link: "https://www.cdc.gov/mental-health/stress-coping/index.html",
  },
  {
    id: 10,
    title: "WHO: Doing What Matters in Times of Stress (Guide)",
    type: "Infographic",
    description:
      "WHO illustrated stress management guide with simple, practical skills.",
    link: "https://www.who.int/publications/i/item/9789240003927",
  },
];

export default function ResourcesPage() {
  const [filter, setFilter] = useState<"All" | "Article" | "Video" | "Infographic">("All");

  const filteredResources =
    filter === "All"
      ? resources
      : resources.filter((res) => res.type === filter);

  return (
    <div className="resources-page">
      <h1 className="resources-title">Educational Resources</h1>
      <p className="resources-description">
        Explore articles, videos, and infographics to improve your mental health awareness.
      </p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Article", "Video", "Infographic"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category as any)}
            className={`filter-button ${filter === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="resources-grid">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <span className="resource-type">{resource.type}</span>
            <h2 className="resource-title">{resource.title}</h2>
            <p className="resource-text">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              View Resource →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
