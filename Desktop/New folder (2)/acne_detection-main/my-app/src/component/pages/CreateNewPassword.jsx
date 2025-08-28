// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import './CreateNewPassword.css';

// const CreateNewPassword = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
    
//     if (!password) {
//       setError('Please enter a password');
//       return;
//     }
    
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
    
//     if (password.length < 6) {
//       setError('Password must be at least 6 characters long');
//       return;
//     }
    
//     setLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setLoading(false);
//       alert('Password changed successfully!');
//       navigate('/login'); // Redirect to login page
//     }, 1500);
//   };

//   const handleCancel = () => {
//     if (window.confirm('Are you sure you want to cancel?')) {
//       navigate('/login');
//     }
//   };

//   return (
//     <div className="password-page">
//       <div className="password-container">
//         <div className="password-box">
//           <div className="password-header">
//             <h2>Create a New Password</h2>
//             <p>Set a strong password to secure your account</p>
//           </div>

//           <div className="password-image">
//             <img 
//               src="/images/reset-password_6195699.png" 
//               alt="Reset Password" 
//             />
//           </div>

//           <form onSubmit={handleSubmit} className="password-form">
//             {error && <div className="error-message">{error}</div>}

//             <div className="form-group">
//               <label>New Password</label>
//               <div className="password-input">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   placeholder="New Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   disabled={loading}
//                 />
//                 <button 
//                   type="button" 
//                   className="toggle-password"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Confirm Password</label>
//               <div className="password-input">
//                 <input
//                   type={confirmPasswordVisible ? "text" : "password"}
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   disabled={loading}
//                 />
//                 <button 
//                   type="button" 
//                   className="toggle-password"
//                   onClick={toggleConfirmPasswordVisibility}
//                 >
//                   {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//             </div>

//             <div className="action-buttons">
//               <button 
//                 type="submit" 
//                 className="confirm-button"
//                 disabled={loading}
//               >
//                 {loading ? 'Updating...' : 'Confirm'}
//               </button>
//               <button 
//                 type="button" 
//                 className="cancel-button"
//                 onClick={handleCancel}
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateNewPassword;











import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig'; // Import auth from your config
import './CreateNewPassword.css';

const CreateNewPassword = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [oobCode, setOobCode] = useState('');

  // Verify the password reset code when component mounts
  React.useEffect(() => {
    const verifyResetCode = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('oobCode');
        if (!code) {
          setError('Invalid reset link');
          return;
        }

        // Use getAuth() to get the auth instance
        const auth = getAuth();
        const verifiedEmail = await verifyPasswordResetCode(auth, code);
        setOobCode(code);
      } catch (error) {
        setError('Invalid or expired reset link. Please request a new one.');
        console.error('Error verifying reset code:', error);
      }
    };

    verifyResetCode();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!newPassword || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      // Use getAuth() to get the auth instance
      const auth = getAuth();
      await confirmPasswordReset(auth, oobCode, newPassword);
      setSuccess('Password reset successfully! You can now login with your new password.');
    } catch (error) {
      console.error('Error resetting password:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-box">
        <h2>Create New Password</h2>
        {email && <p className="reset-email">Account: {email}</p>}
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit} className="password-reset-form">
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
            />
          </div>

          <button 
            type="submit" 
            className="reset-btn"
            disabled={loading || !oobCode}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewPassword;