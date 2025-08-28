import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase/firebaseConfig';
import { confirmPasswordReset } from 'firebase/auth';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLinkValid, setIsLinkValid] = useState(false);
  const navigate = useNavigate();

  // Check if the reset link is still valid (not expired)
  useEffect(() => {
    const checkResetLink = async () => {
      try {
        const resetRequestsRef = collection(db, 'passwordResetRequests');
        const q = query(
          resetRequestsRef,
          where("email", "==", email),
          where("expiresAt", ">", new Date()), // Link not expired
          where("used", "==", false) // Link not used before
        );

        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          setError('This link has expired. Please request a new one.');
        } else {
          setIsLinkValid(true);
        }
      } catch (err) {
        setError('Error verifying link. Try again.');
      }
    };

    if (email) checkResetLink();
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setLoading(true);

    try {
      // Mark the link as "used" in Firestore
      const resetRequestsRef = collection(db, 'passwordResetRequests');
      const q = query(resetRequestsRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const docId = querySnapshot.docs[0].id;
        await updateDoc(doc(db, 'passwordResetRequests', docId), { used: true });
      }

      // Get the OOB (Out-of-Band) code from URL
      const oobCode = new URLSearchParams(window.location.search).get('oobCode');
      
      if (!oobCode) {
        setError('Invalid reset link.');
        return;
      }

      // Update password
      await confirmPasswordReset(auth, oobCode, newPassword);
      setSuccess('Password updated successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 3000);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isLinkValid && error) {
    return (
      <div className="reset-container">
        <h2>Reset Password</h2>
        <p className="error">{error}</p>
        <button onClick={() => navigate('/forgot-password')}>Request New Link</button>
      </div>
    );
  }

  return (
    <div className="reset-container">
      <h2>Reset Password</h2>
      <p>Enter a new password for: <strong>{email}</strong></p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Reset Password'}
        </button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;