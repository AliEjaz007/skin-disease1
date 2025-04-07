import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
  return (
    <div className="login-page">
      {/* Login Container */}
      <div className="login-container">
        {/* Login Form Section */}
        <div className="login-box">
          <h2 className="logo">Acne Alchemist</h2>
          <h1 className="welcome-text">Welcome Back</h1>
          <p className="sub-text">Glad to see you again<br />Login to your account below</p>
          <button className="google-login">Continue with Google</button>
          <form>
            <input type="email" placeholder="Enter email" className="input-field" />
            <input type="password" placeholder="Enter password" className="input-field" />
            <button className="login-button">Login</button>
          </form>
          <p className="signup-text">
            Don't have an account? <Link to="/Signup.jsx">Sign up for free</Link>
          </p>
        

        {/* Right Image Section */}
        <div className="login-image">
          <img src="/images/2.png" alt="Login Illustration" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
