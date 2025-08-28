import Footer from "./Footer";
import "./SkinAnalysis.css";
import "./Remedies.css";
import "./DietPlan.css";
import "./Navbar.css";

const SkinAnalysis = () => {
  return (
    <div className="acne-analysis-page">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>No More Guesswork</h1>
          <h1>Let AI Diagnose Your Skin!</h1>
          <p>
            One scan, real-time insights, and <br /> expert-backed solutions for
            your skin concerns.
          </p>
        </div>

        <div className="image-wrapper">
          <img
            src="/images/Adobe Express - file (2).png"
            alt="AI Face Analysis"
            className="main-image"
          />
          <div className="image-shadow"></div>
        </div>

        <div className="scroll-indicator">▼</div>
      </div>

      {/* Analysis Section - Updated to match Home page style */}
      <div className="analysiscontainer">
        <div className="backgroundoverlay">
          <div className="content">
            <h1>Face Analysis</h1>
            <p>
              Our advanced AI-driven face analysis technology revolutionizes
              skincare by providing instant, accurate, and personalized
              <br />
              skin detection. With just a single image,
              <br />
              our system can analyze your skin, identify skin types, <br />
              and suggest tailored solutions—all in seconds!
            </p>
          </div>
          <div className="animatedcharacter">
            <img
              src="/images/acne 2.png"
              alt="skin Analysis Illustration"
              className="character-image"
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="lower-section">
        <div className="diet-plans">
          <h2 className="section-title">Analysis Results</h2>
          <div className="diet-grid">
            <div className="diet-card">
              <h3>Symptoms</h3>
              <div className="card-content">
                <ul className="results-list">
                  <li>
                    <span className="icon">•</span>
                    <span>Redness</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Itching</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Blisters</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Dry or Scaly Patches</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Burning Sensation</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Pain or Tenderness</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="diet-card">
              <h3>Disease Duration</h3>
              <div className="card-content">
                <ul className="results-list">
                  <li>
                    <span className="icon">•</span>
                    <span>Acute (1–2 weeks)</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Subacute (2–4 weeks)</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Chronic (More than 1 month)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="diet-card">
              <h3>Affected Areas</h3>
              <div className="card-content">
                <ul className="results-list">
                  <li>
                    <span className="icon">•</span>
                    <span>Feet</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Hands</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Face</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Scalp</span>
                  </li>
                  <li>
                    <span className="icon">•</span>
                    <span>Torso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SkinAnalysis;
