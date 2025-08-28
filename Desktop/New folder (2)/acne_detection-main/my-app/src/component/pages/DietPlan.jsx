import React from "react";
import "./Home.css";
import Footer from "./Footer";

const DietPlan = () => {
  return (
    <div>
      <div className="hero-container">
      <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Feed YourSkin,</h1>
          <h1>Fuel Your Glow!</h1>
          <p>
            Beauty Begins with Nutrition
            <br /> Eat Well, Glow Naturally!
          </p>
        </div>

        <div className="image-wrapper">
          <img src="/images/acne 2.png" alt="AI Face" className="main-image" />
          <div className="image-shadow"></div>
        </div>

        <div className="scroll-indicator">▼</div>
      </div>
      <div className="analysiscontainer">
        <div className="backgroundoverlay">
          <div className="content">
            <h1>Diet plan</h1>
            <p>Fuel your skin ,Feed your confidence!</p>
          </div>
          <div className="animatedcharacter">
            <img
              src="/images/D 4.png"
              alt="Skin AI Guide"
              className="character-image"
            />
          </div>
        </div>
      </div>
      <div className="lower-section">
        <div className="diet-plans">
          <h2 className="section-title">Skin-Fighting Diet Plans</h2>
          <div className="diet-grid">
            <div className="diet-card">
              <h3>Anti-Inflammatory Plan</h3>
              <div className="diet-content">
                <h4>Key Foods:</h4>
                <ul>
                  <li>Fatty fish (salmon, mackerel)</li>
                  <li>Leafy greens (spinach, kale)</li>
                  <li>Berries (blueberries, strawberries)</li>
                  <li>Turmeric & ginger</li>
                </ul>
                <h4>Benefits:</h4>
                <p>Reduces redness and swelling of skin</p>
              </div>
            </div>
            <div className="diet-card">
              <h3>Low-Glycemic Plan</h3>
              <div className="diet-content">
                <h4>Key Foods:</h4>
                <ul>
                  <li>Whole grains (quinoa, brown rice)</li>
                  <li>Legumes (lentils, chickpeas)</li>
                  <li>Non-starchy vegetables</li>
                  <li>Nuts and seeds</li>
                </ul>
                <h4>Benefits:</h4>
                <p>Stabilizes blood sugar to prevent breakouts</p>
              </div>
            </div>
            <div className="diet-card">
              <h3>Gut-Healing Plan</h3>
              <div className="diet-content">
                <h4>Key Foods:</h4>
                <ul>
                  <li>Probiotic foods (yogurt, kefir)</li>
                  <li>Prebiotic foods (garlic, onions)</li>
                  <li>Bone broth</li>
                  <li>Fermented vegetables</li>
                </ul>
                <h4>Benefits:</h4>
                <p>Improves gut health to clear skin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DietPlan;
