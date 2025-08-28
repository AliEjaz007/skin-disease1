import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>Skin Alchemist</h2>
          <p>
            Skin Alchemist helps users scan, track, and understand their skin <br /> condition.
            It is not intended for medical diagnosis.
          </p>
        </div>

        {/* Remedies Section */}
        <div className="footer-links">
          <h3>Remedies</h3>
          <ul>
            <li><Link to="/remedies">Natural Treatments</Link></li>
            <li><Link to="/remedies">Medical Treatments</Link></li>
            <li><Link to="/remedies">Lifestyle Tips</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Diet Plan</h3>
          <ul>
            <li><Link to="/diet-plan">Foods to Eat</Link></li>
            <li><Link to="/diet-plan">Foods to Avoid</Link></li>
            <li><Link to="/diet-plan">Hydration & Detox</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/about">Our Mission</Link></li>
            <li><Link to="/about">Team & Experts</Link></li>
            <li><Link to="/about">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Contact Us</h3>
          <p>For inquiries, reach us at:</p>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:byteshare7@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        
        <p>&copy; 2025 Skin Alchemist. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};
export default Footer;
