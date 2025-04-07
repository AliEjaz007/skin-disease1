import React from "react";
import "./Home.css";

const DietPlan = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Feed YourSkin,</h1>
          <h1>Fuel Your Glow!</h1>
          <p>
          Beauty Begins with Nutrition<br/> Eat Well, Glow Naturally!
          </p>
        </div>

        <div className="image-wrapper">
          <img
            src="/images/acne 2.png"
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
             Diet plan
            </h1>
            <p>
              Fuel your skin ,Feed your confidence!
            </p>
          </div>
          <div className="animatedcharacter">
            <img
              src="/images/D 4.png"
              alt="Acne AI Guide"
              className="character-image"
            />
          </div>
        </div>
      </div>
      <div className="lower-section">
        {/* Featured Diet Plans */}
        <div className="diet-plans">
          <h2>Featured Diet Plans</h2>
          <div className="diet-grid">
            <div className="diet-card">Plan A</div>
            <div className="diet-card">Plan B</div>
            <div className="diet-card">Plan C</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DietPlan;
