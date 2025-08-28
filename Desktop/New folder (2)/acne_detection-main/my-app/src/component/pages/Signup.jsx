import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [resendAvailable, setResendAvailable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          await updateDoc(doc(db, "users", user.uid), {
            emailVerified: true,
          });
          setIsVerified(true);
          setError("✅ Email verified! Redirecting to login...");
          setTimeout(() => navigate("/login"), 2000);
        }
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!form.fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Invalid email format");
      return false;
    }
    if (form.password.length < 6) {
      setError("Password needs 6+ characters");
      return false;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords don't match");
      return false;
    }
    return true;
  };

  const resendVerification = async () => {
    const user = auth.currentUser;
    if (!user) {
      setError("⚠️ No user available to resend email.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await sendEmailVerification(user);
      setError("📩 Verification email resent! Please check your inbox.");
      setResendAvailable(false);
    } catch (err) {
      console.error("Resend error:", err);
      setError("❌ Failed to resend verification email.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const nameParts = form.fullName.trim().split(" ");
      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName: form.fullName,
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        email: form.email.toLowerCase(),
        dob: form.dob || null,
        phone: form.phone || null,
        emailVerified: false,
        createdAt: new Date(),
        uid: userCredential.user.uid,
      });

      await sendEmailVerification(userCredential.user);
      setError("📩 Verification email sent! Check your inbox.");

      const sentAt = Date.now();

      const checkInterval = setInterval(async () => {
        await userCredential.user.reload();
        const now = Date.now();
        const timeElapsed = (now - sentAt) / 1000;

        if (timeElapsed > 300) {
          clearInterval(checkInterval);
          setError("⏰ Verification link expired. Please resend the email.");
          setResendAvailable(true);
          return;
        }

        if (userCredential.user.emailVerified) {
          clearInterval(checkInterval);
          await updateDoc(doc(db, "users", userCredential.user.uid), {
            emailVerified: true,
          });
          setIsVerified(true);
          setError("✅ Email verified! Redirecting to login...");
          setTimeout(() => navigate("/login"), 2000);
        }
      }, 3000);
    } catch (error) {
      setError(
        error.message.includes("email-already-in-use")
          ? "❌ Email already registered"
          : "❌ Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (isVerified) {
    return (
      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-box">
            <div className="verification-success">
              <h2>🎉 Email Verified!</h2>
              <p>You can now login with your account.</p>
              <button
                onClick={() => navigate("/login")}
                className="signup-btn submit-btn"
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-box">
          <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign Up</h2>

            <div className="input-row">
              <div style={{ flex: 1 }}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter full name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-row">
              <div style={{ flex: 1 }}>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+92 1010101010"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="^\+92\d{10}$"
                />
              </div>
            </div>

            <div className="input-row">
              <div style={{ flex: 1 }}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password (6+ chars)"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {error && (
              <div
                className={`signup-error ${error.includes("✅") ? "success" : ""
                  }`}
              >
                {error}
              </div>
            )}

            {resendAvailable && (
              <button
                type="button"
                onClick={resendVerification}
                className="signup-btn resend-btn"
                disabled={loading}
              >
                {loading ? "Resending..." : "Resend Verification Email"}
              </button>
            )}

            <button
              type="submit"
              className="signup-btn submit-btn"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
