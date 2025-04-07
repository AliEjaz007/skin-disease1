import React from "react";
import { Link } from "react-router-dom";
import "./signup.css"; 

const Signup = () => {
  return (
    <div className="signup-page">
      {/* Signup Form Container */}
      <div className="signup-container">
        <h1 className="logo">Acne Alchemist</h1>
        <h2 className="signup-title">Sign up</h2>
        <p className="signup-subtext">
          Enter your details below to create your account and get started
        </p>

        {/* Signup Form */}
        <form className="signup-form">
          <div className="input-group">
            <input type="text" placeholder="Enter full name" className="input-field" />
            <input type="email" placeholder="Enter email" className="input-field" />
          </div>
          <div className="input-group">
            <input type="date" placeholder="MM / DD / YY" className="input-field" />
            <input type="tel" placeholder="+92 1010101010" className="input-field" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Enter password" className="input-field" />
            <input type="password" placeholder="Enter confirm password" className="input-field" />
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button className="cancel-button">Cancel</button>
            <button className="confirm-button">Confirm</button>
          </div>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/Login.jsx">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
