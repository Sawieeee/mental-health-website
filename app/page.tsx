"use client";

import Image from "next/image";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

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
            <Button href="/resources">Explore Resources</Button>
            <Button href="/community" variant="outline">Join the Community</Button>
          </div>
          <div style={{marginTop: '2rem'}}>
            <Image src="/images/hero-illustration.svg" alt="Mental health and support" width={640} height={260} />
          </div>
        </div>
        <Image src="/images/wave.svg" alt="" aria-hidden className="hero-wave" width={1440} height={160} />
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
          src="/images/Mental-Health-Assessment.jpg"
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
          <Card className="service-card" href="/resources">
            <Image
              src="/images/mental-health-bulb.jpg"
              alt="Resources"
              width={400}
              height={250}
              className="card-img"
            />
            <h3>Resources</h3>
            <p>Discover articles, videos, and guides tailored for your mental well-being.</p>
          </Card>
          <Card className="service-card" href="/support">
            <Image
              src="/images/support-illustration.svg"
              alt="Support"
              width={400}
              height={250}
              className="card-img"
            />
            <h3>Support Groups</h3>
            <p>Connect with others who share similar experiences and support each other.</p>
          </Card>
          <Card className="service-card" href="/assessment">
            <Image
              src="/images/Mental-Health-Assessment.jpg"
              alt="Mental Health Assessment"
              width={400}
              height={250}
              className="card-img"
            />
            <h3>Assessments</h3>
            <p>Take a personalized self-assessment to reflect on your mental health journey.</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Your Journey to Healing Starts Here</h2>
        <p>Join thousands of people finding peace, balance, and purpose with 4U.</p>
        <Button href="/signup" className="btn-primary">Get Started</Button>
      </section>
    </div>
  );
}
