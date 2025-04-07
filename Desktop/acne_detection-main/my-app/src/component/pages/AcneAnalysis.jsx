import React from "react";
import "./Home.css";
import "./AcneAnalysis.css";

const AcneAnalysis = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>No More Guesswork</h1>
          <h1>Let AI Diagnose Your Skin!</h1>
          <p>
            One scan, real-time insights, and <br /> expert-backed solutions for
            your acne concerns.
          </p>
        </div>

        <div className="image-wrapper">
          <img
            src="/images/Adobe Express - file (2).png"
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
            <h1>
             Face Analysis
            </h1>
            <p>
            Our advanced AI-driven face analysis technology revolutionizes 
            skincare by providing instant, accurate, and personalized<br/>
            acne detection. With just a single image,<br/>
            our system can analyze your skin, identify acne types, <br/>
            and suggest tailored solutions—all in seconds!
            </p>
          </div>
          <div className="animatedcharacter ">
            <img
              src="/images/acne 2.png"
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
            <div className="diet-card">Acne Type</div>
            <div className="diet-card">Severity Level</div>
            <div className="diet-card">Affected Area</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AcneAnalysis;
