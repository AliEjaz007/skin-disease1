import React from "react";
import "./Remedies.css";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Healing Begins with Nature</h1>
          <h1>Smart Remedies, Clear Skin!</h1>
          <p>
            AI-driven solutions blended with herbal wisdom—because your skin
            deserves the best.
            <br />
            Harness the power of herbal treatments tailored to your skin's
            needs.
          </p>
        </div>

        <div className="image-wrapper image-2">
          <img src="/images/D 3.png" alt="AI Face" className="main-image" />
          <div className="image-shadow"></div>
        </div>

        <div className="scroll-indicator">▼</div>
      </div>
      <div className="analysiscontainer">
        <div className="backgroundoverlay">
          <div className="content cont-size">
            <h1>
              Natural, <br /> Effective,
              <br />
              Personalized
            </h1>
          </div>
          <div className="animatedcharacter">
            <img
              src="/images/D10.png"
              alt="Acne AI Guide"
              className="character-image"
            />
          </div>
        </div>
      </div>
      <div className="lower-section">
        {/* Featured Diet Plans */}
        <div className="diet-plans">
          <div className="diet-grid">
            <div className="diet-card">Remedy</div>
            <div className="diet-card">Remedy</div>
            <div className="diet-card">Remedy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

