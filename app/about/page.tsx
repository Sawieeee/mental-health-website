import styles from "./AboutPage.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Page Title */}
      <h1 className={styles.title}>About Us</h1>
      <Image src="/images/hero-illustration.svg" alt="About 4U" width={560} height={220} style={{marginBottom: '1.5rem'}} />

      {/* About Container */}
      <div className={styles.container}>
        <p className={styles.text}>
          <strong>4U</strong> is dedicated to improving mental health awareness by providing education, support, and resources for those in need. Our mission is to raise awareness about mental health issues, reduce stigma, and empower individuals to seek help when needed.
        </p>

        <p className={styles.text}>
          We focus on prevention and recovery, creating a safe and inclusive environment where people can thrive mentally and emotionally. By offering resources, support groups, and access to professional directories, we aim to be your companion in promoting well-being.
        </p>

        <p className={styles.text}>
          This project is built with the vision of supporting students, teenagers, parents, and the general public in their journey toward better mental health.
        </p>

        {/* Call-to-Action Button */}
        <div className={styles.cta}>
          <a href="/resources">Explore Resources</a>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className={styles.valuesSection}>
        <div className={styles.card}>
          <h2>Mission</h2>
          <p>
            To raise awareness about mental health, reduce stigma, and provide support for individuals seeking help.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Vision</h2>
          <p>
            A world where mental health is prioritized, understood, and everyone has access to the resources they need to thrive.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Values</h2>
          <p>
            Empathy, inclusivity, education, and empowerment guide everything we do to support mental well-being.
          </p>
        </div>
      </div>
    </div>
  );
}
