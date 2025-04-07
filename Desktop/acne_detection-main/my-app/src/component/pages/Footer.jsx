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
        {/* Left Section - Description */}
        <div>
          <h2>Acne Alchemist</h2>
          <p>
            Acne Alchemist helps users scan, track, and understand their skin <br /> condition.
            It is not intended for medical diagnosis.
          </p>
        </div>

        {/* Remedies Section */}
        <div className="footer-links">
          <h3>Remedies</h3>
          <ul>
            <li><Link to="/">Natural Treatments</Link></li>
            <li><Link to="/">Medical Treatments</Link></li>
            <li><Link to="/">Lifestyle Tips</Link></li>
          </ul>
        </div>

        {/* Diet Plan Section */}
        <div className="footer-links">
          <h3>Diet Plan</h3>
          <ul>
            <li><Link to="/">Foods to Eat</Link></li>
            <li><Link to="/">Foods to Avoid</Link></li>
            <li><Link to="/">Hydration & Detox</Link></li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="footer-links">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/">Our Mission</Link></li>
            <li><Link to="/">Team & Experts</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Section - Contact & Social Media */}
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

      {/* Copyright Notice */}
      <div className="footer-reserved">
        <p>© 2025 Acne Alchemist. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
