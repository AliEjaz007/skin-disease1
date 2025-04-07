import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            Acne Alchemist
          </Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/acne-analysis" className="link">Acne Analysis</Link></li>
          <li><Link to="/remedies" className="link">Remedies</Link></li>
          <li><Link to="/diet-plan" className="link">Diet Plan</Link></li>
          <li><Link to="/dermatologists" className="link">Dermatologists</Link></li>
          <li><Link to="/login" className="link">Log In</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
