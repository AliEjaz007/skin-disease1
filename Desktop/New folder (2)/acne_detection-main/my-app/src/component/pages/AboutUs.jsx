import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At <strong>Skin Alchemist</strong>, our mission is to empower individuals with the ability to understand, monitor, and care for their skin using AI-powered tools. We aim to make skin health accessible, informed, and personalized—without replacing professional medical advice.
        </p>
      </section>

      <section className="about-section">
        <h2>Team & Experts</h2>
        <p>
          Our team is made up of passionate developers, medical researchers, and AI specialists. With a shared goal of improving skin wellness through technology, we collaborate to build tools that are both intelligent and user-friendly.
        </p>
        <ul>
          <li><strong>Ali Raza</strong> – AI Developer & Vision Lead</li>
          <li><strong>Sara Ahmed</strong> – Dermatology Consultant</li>
          <li><strong>Umair Qureshi</strong> – Full Stack Developer</li>
          <li><strong>Dr. Farah Khan</strong> – Herbal & Nutrition Expert</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Whether you have feedback, questions, or partnership ideas — reach out to us.
        </p>
        <p>Email: <a href="mailto:byteshare7@gmail.com">byteshare7@gmail.com</a></p>
        <p>Social: 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
