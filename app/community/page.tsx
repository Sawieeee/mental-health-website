"use client";

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import "./CommunityPage.css";
import { FaDiscord, FaFacebook } from "react-icons/fa"; // 👈 Import icons

export default function CommunityPage() {
  return (
    <div className="community-page">
      <header className="community-hero">
        <h1>Join the 4U Community</h1>
        <p>
          Connect with people who care. Join supportive spaces to share, learn, and grow—at your own pace.
        </p>
      </header>

      <section className="community-grid">
        {/* Discord Card */}
        <Card
          className="community-card"
          href="https://discord.gg/your-invite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="community-card-body">
            <div className="community-emoji" aria-hidden>
              <FaDiscord className="w-8 h-8 text-[#5865F2]" /> {/* Discord icon */}
            </div>
            <h2>Discord Server</h2>
            <p>
              Real-time chats, channels by topic, and community events. Private channels for support.
            </p>
            <Button
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join on Discord
            </Button>
          </div>
        </Card>

        {/* Facebook Card */}
        <Card
          className="community-card"
          href="https://www.facebook.com/groups/your-group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="community-card-body">
            <div className="community-emoji" aria-hidden>
              <FaFacebook className="w-8 h-8 text-[#1877F2]" /> {/* Facebook icon */}
            </div>
            <h2>Facebook Group</h2>
            <p>
              A welcoming group to share experiences, ask questions, and support each other.
            </p>
            <Button
              href="https://www.facebook.com/groups/your-group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join on Facebook
            </Button>
          </div>
        </Card>

        {/* Support Card */}
        <Card className="community-card" href="/support">
          <div className="community-card-body">
            <div className="community-emoji" aria-hidden>🤝</div>
            <h2>Support & Resources</h2>
            <p>
              Find moderated spaces, professional resources, and tips for staying well.
            </p>
            <Button href="/support" variant="outline">Visit Support</Button>
          </div>
        </Card>
      </section>

      <section className="community-note card">
        <h3>Safety and Privacy First</h3>
        <ul>
          <li>Be kind and respectful—everyone’s journey is unique.</li>
          <li>Avoid sharing personal identifiable information in public spaces.</li>
          <li>If you’re in crisis, please use the crisis resources in the banner or dial your local emergency number.</li>
        </ul>
      </section>
    </div>
  );
}
