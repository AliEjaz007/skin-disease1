import React from "react";
import "./Home.css";

const dermatologist = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Severe Acne?</h1>
          <h1>Expert Help is Just a Click Away!</h1>
          <p>
            Severe acne can be challenging, but it's not hopeless.
            <br />
            Dermatologists have effective tools and expertise
            <br />
            to help you manage your acne and achieve lasting results.
          </p>
        </div>

        <div className="image-wrapper ">
          <img
            src="/images/D 7.png"
            alt="AI Face"
            className="main-image"
          />
          <div className="image-shadow"></div>
        </div>

        <div className="scroll-indicator">▼</div>
      </div>
      <div className="analysiscontainer">
        <div className="backgroundoverlay">
          <div className="content">
            <h1>One Step Closer to Clear Skin!</h1>
            <p></p>
          </div>
          <div className="animatedcharacter image-D">
            <img
              src="/images/D 8.png"
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
            <div className="diet-card">Location</div>
            <div className="diet-card">Location</div>
            <div className="diet-card">Location</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default dermatologist;
