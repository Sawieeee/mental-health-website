import "./ServicesPage.css";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        <div className="service-card">
          <h2 className="service-heading">📚 Educational Resources</h2>
          <p className="service-text">
            Articles, videos, and infographics covering stress, anxiety,
            depression, and self-care techniques.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-heading">🤝 Support Groups</h2>
          <p className="service-text">
            Safe, virtual forums where users can share experiences and provide
            peer-to-peer support.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-heading">📝 Self-Assessment Tools</h2>
          <p className="service-text">
            Basic mental health self-assessment quizzes to help users reflect
            on their emotional well-being.
          </p>
        </div>

        <div className="service-card">
          <h2 className="service-heading">👩‍⚕️ Professional Directory</h2>
          <p className="service-text">
            Access a list of mental health professionals, hotlines, and
            counseling services to get the help you need.
          </p>
        </div>
      </div>
    </div>
  );
}
