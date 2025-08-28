// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ForgetPassword.css';

// const ForgetPassword = () => {
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleResetPassword = (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
    
//     if (!email) {
//       setError('Email is required');
//       return;
//     }

//     setLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setSuccess('Password reset email sent! Check your inbox.');
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="forget-page">
//       <div className="forget-container">
//         <div className="forget-box">
//           <div className="forget-header">
//             <h2>Reset Your Password</h2>
//             <p>
//               Enter your registered email address, and we'll send you a link to reset your password
//             </p>
//           </div>

//           <div className="forget-image-container">
//             <img 
//               src="/images/forgot-password.png" 
//               alt="Forgot Password" 
//               className="forget-image"
//             />
//           </div>

//           <form onSubmit={handleResetPassword} className="forget-form">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               disabled={loading}
//             />
            
//             {error && <div className="error-message">{error}</div>}
//             {success && <div className="success-message">{success}</div>}

//             <div className="forget-actions">
//               <button 
//                 type="submit"
//                 className="get-otp-btn"
//                 disabled={loading || !email}
//               >
//                 {loading ? 'Sending...' : 'Send Reset Link'}
//               </button>
              
//               <button 
//                 type="button"
//                 className="cancel-btn"
//                 onClick={() => navigate('/login')}
//                 disabled={loading}
//               >
//                 Back to Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;













// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './ForgetPassword.css';

// // const ForgetPassword = () => {
// //   const [email, setEmail] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const navigate = useNavigate();

// // // src/components/ForgetPassword.jsx
// // const handleResetPassword = async (e) => {
// //   e.preventDefault();
// //   setError('');
// //   setSuccess('');
  
// //   if (!email) {
// //     setError('Email is required');
// //     return;
// //   }

// //   // Validate email format
// //   if (!/^\S+@\S+\.\S+$/.test(email)) {
// //     setError('Please enter a valid email address');
// //     return;
// //   }

// //   setLoading(true);
  
// //   try {
// //     const result = await sendPasswordReset(email);
    
// //     if (result.success) {
// //       setSuccess(result.message);
// //       setEmail(''); // Clear the email field
// //     } else {
// //       setError(result.error);
// //     }
// //   } catch (error) {
// //     setError("An unexpected error occurred. Please try again.");
// //     console.error('Reset password error:', error);
// //   } finally {
// //     setLoading(false);
// //   }
// // };

// //   return (
// //     <div className="forget-page">
// //       <div className="forget-container">
// //         <div className="forget-box">
// //           <div className="forget-header">
// //             <h2>Reset Your Password</h2>
// //             <p>
// //               Enter your registered email address to receive a password reset link
// //             </p>
// //           </div>

// //           <div className="forget-image-container">
// //             <img 
// //               src="/images/forgot-password.png" 
// //               alt="Forgot Password" 
// //               className="forget-image"
// //             />
// //           </div>

// //           <form onSubmit={handleResetPassword} className="forget-form">
// //             <label>Email Address</label>
// //             <input
// //               type="email"
// //               placeholder="Enter your registered email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               disabled={loading}
// //               autoFocus
// //             />
            
// //             {error && <div className="error-message">{error}</div>}
// //             {success && <div className="success-message">{success}</div>}

// //             <div className="forget-actions">
// //               <button 
// //                 type="submit"
// //                 className="get-otp-btn"
// //                 disabled={loading || !email}
// //               >
// //                 {loading ? (
// //                   <>
// //                     <span className="spinner"></span> Sending...
// //                   </>
// //                 ) : (
// //                   'Send Reset Link'
// //                 )}
// //               </button>
              
// //               <button 
// //                 type="button"
// //                 className="cancel-btn"
// //                 onClick={() => navigate('/login')}
// //                 disabled={loading}
// //               >
// //                 Back to Login
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ForgetPassword;
















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ForgetPassword.css';
// import { sendPasswordReset } from '../../firebase/auth'; // Importing Firebase method

// const ForgetPassword = () => {
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!email) {
//       setError('Email is required');
//       return;
//     }

//     setLoading(true);

//     try {
//       await sendPasswordReset(email); // Call the Firebase method
//       setSuccess('Password reset email sent! Check your inbox.');
//     } catch (err) {
//       setError('Error sending password reset email. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="forget-page">
//       <div className="forget-container">
//         <div className="forget-box">
//           <div className="forget-header">
//             <h2>Reset Your Password</h2>
//             <p>
//               Enter your registered email address, and we'll send you a link to reset your password
//             </p>
//           </div>

//           <div className="forget-image-container">
//             <img 
//               src="/images/forgot-password.png" 
//               alt="Forgot Password" 
//               className="forget-image"
//             />
//           </div>

//           <form onSubmit={handleResetPassword} className="forget-form">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               disabled={loading}
//             />
            
//             {error && <div className="error-message">{error}</div>}
//             {success && <div className="success-message">{success}</div>}

//             <div className="forget-actions">
//               <button 
//                 type="submit"
//                 className="get-otp-btn"
//                 disabled={loading || !email}
//               >
//                 {loading ? 'Sending...' : 'Send Reset Link'}
//               </button>
              
//               <button 
//                 type="button"
//                 className="cancel-btn"
//                 onClick={() => navigate('/login')}
//                 disabled={loading}
//               >
//                 Back to Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Email is required');
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess('Password reset email sent! Check your inbox.');
      setEmail(''); // Clear the input after success
    } catch (error) {
      console.error('Error sending password reset email:', error);
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/user-not-found':
          setError('No user found with this email');
          break;
        case 'auth/too-many-requests':
          setError('Too many requests. Please try again later.');
          break;
        default:
          setError('Failed to send reset email. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forget-page">
      <div className="forget-container">
        <div className="forget-box">
          <div className="forget-header">
            <h2>Reset Your Password</h2>
            <p>
              Enter your registered email address, and we'll send you a link to reset your password
            </p>
          </div>

          <div className="forget-image-container">
            <img 
              src="/images/reset-password.png" 
              alt="Forgot Password" 
              className="forget-image"
            />
          </div>

          <form onSubmit={handleResetPassword} className="forget-form">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <div className="forget-actions">
              <button 
                type="submit"
                className="get-otp-btn"
                disabled={loading || !email}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </button>
              
              <button 
                type="button"
                className="cancel-btn"
                onClick={() => navigate('/login')}
                disabled={loading}
              >
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;