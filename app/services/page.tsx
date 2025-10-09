import "./ServicesPage.css";
import Card from "../../components/ui/Card";

import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <Image src="/images/support-illustration.svg" alt="Services" width={640} height={200} style={{margin: '0 auto 2rem', display: 'block'}} />

      <div className="services-grid">
        <Card className="service-card" href="/resources">
          <h2 className="service-heading">Educational Resources</h2>
          <p className="service-text">
            Articles, videos, and infographics covering stress, anxiety,
            depression, and self-care techniques.
          </p>
        </Card>

        <Card className="service-card" href="/support">
          <h2 className="service-heading">Support Groups</h2>
          <p className="service-text">
            Safe, virtual forums where users can share experiences and provide
            peer-to-peer support.
          </p>
        </Card>

        <Card className="service-card" href="/assessment">
          <h2 className="service-heading">Self-Assessment Tools</h2>
          <p className="service-text">
            Basic mental health self-assessment quizzes to help users reflect
            on their emotional well-being.
          </p>
        </Card>

        <Card className="service-card" href="/directory">
          <h2 className="service-heading">Professional Directory</h2>
          <p className="service-text">
            Access a list of mental health professionals, hotlines, and
            counseling services to get the help you need.
          </p>
        </Card>
      </div>
    </div>
  );
}
