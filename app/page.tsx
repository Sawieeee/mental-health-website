"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Your Mind Deserves Care.</h1>
          <p>Empowering individuals with awareness, support, and compassion.</p>
          <div className="hero-buttons">
            <a href="/resources" className="btn-primary">Explore Resources</a>
            <a href="/signup" className="btn-secondary">Join the Community</a>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="about-section">
        <div className="about-text">
          <h2>Why Choose 4U?</h2>
          <p>
            4U is a modern mental health platform designed to inspire awareness, 
            break stigma, and promote emotional well-being. We connect people to trusted 
            resources, professional help, and a supportive community.
          </p>
        </div>
        <Image
          src="/images/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
          alt="Mental health support"
          width={600}
          height={500}
          className="about-image"
        />
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="service-grid">
          <div className="service-card">
            <Image
              src="/images/mental-health-bulb.jpg"
              alt="Resources"
              width={400}
              height={250}
              className="card-img"
            />
            <h3>📚 Resources</h3>
            <p>Discover articles, videos, and guides tailored for your mental well-being.</p>
          </div>
          <div className="service-card">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Support"
              width={400}
              height={250}
              className="card-img"
            />
            <h3>🤝 Support Groups</h3>
            <p>Connect with others who share similar experiences and support each other.</p>
          </div>
          <div className="service-card">
            <Image
              src="/images/Mental-Health-Assessment.jpg"
              alt="Mental Health Assessment"
              width={400}
              height={250}
              className="card-img"
            />
            <h3>📝 Assessments</h3>
            <p>Take a personalized self-assessment to reflect on your mental health journey.</p>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Your Journey to Healing Starts Here</h2>
        <p>Join thousands of people finding peace, balance, and purpose with 4U.</p>
        <a href="/signup" className="btn-primary">Get Started</a>
      </section>
    </div>
  );
}
