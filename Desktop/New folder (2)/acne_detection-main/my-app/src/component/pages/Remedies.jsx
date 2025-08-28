import "./Remedies.css";
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-container">
      <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Healing Begins with Nature</h1>
          <h1>Smart Remedies, Clear Skin!</h1>
          <p>
            AI-driven solutions blended with herbal wisdom
           because your skin <br />deserves the best.
            Harness the power of herbal treatments<br /> tailored to your skin's
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
              alt="skin AI Guide"
              className="character-image"
            />
          </div>
        </div>
      </div>
      <div className="lower-section">
        <div className="diet-plans">
          <h2 className="section-title">Natural Skin Remedies</h2>
          <div className="diet-grid">
            <div className="diet-card">
              <h3>Tea Tree Oil</h3>
              <p>
                • Dilute with water (1:9 ratio)
                <br />
                • Apply with cotton ball
                <br />
                • Reduces inflammation
                <br />• Kills skin-causing bacteria
              </p>
            </div>
            <div className="diet-card">
              <h3>Aloe Vera</h3>
              <p>
                • Apply pure gel directly
                <br />
                • Leave for 30 minutes
                <br />
                • Soothes redness
                <br />
                • Heals skin scars
                <br />• Non-comedogenic
              </p>
            </div>
            <div className="diet-card">
              <h3>Honey & Cinnamon</h3>
              <p>
                Mix 2 tbsp honey + 1 tsp cinnamon
                <br />
                • Apply as mask for 10-15 min
                <br />
                • Antibacterial properties
                <br />
                • Reduces swelling
                <br />• Moisturizes skin
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
