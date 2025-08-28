// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { emailLogin, googleLogin } from '../../firebase/auth';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const { success, error } = await emailLogin(email, password);
//       if (success) {
//         navigate('/home'); // Redirect to home after login
//       } else {
//         setError(error);
//       }
//     } catch (err) {
//       setError('Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     const { success, error } = await googleLogin();
//     if (success) {
//       navigate('/home');
//     } else {
//       setError(error);
//     }
//   };

  

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="login-left">
//           <h1>Welcome Back</h1>
//           <p>Glad to see you again<br />Login to your account below</p>

//           <button 
//             className="google-btn" 
//             onClick={handleGoogleSignIn}
//             disabled={loading}
//           >
//             Continue with Google
//           </button>

//           <form className="login-form" onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
            
//             <div className="forgot-password">
//               <Link to="/forget-password" className="forgot-link">
//                 Forgot Password?
//               </Link>
//             </div>
            
//             {error && <div className="error-message">{error}</div>}
//             <button 
//               type="submit" 
//               className="login-btn"
//               disabled={loading}
//             >
//               {loading ? 'Logging in...' : 'Login'}
//             </button>
//           </form>

//           <p className="signup-text">
//             Don't have an account? <Link to="/sign-up" className="link">Sign up</Link>
//           </p>
//         </div>

//         <div className="login-right">
//           <img src="/images/IMG-20250302-WA0124.png" alt="Smiling Woman" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;







import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { emailLogin, googleLogin } from '../../firebase/auth';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/home';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { success, error } = await emailLogin(email, password);
      if (success) {
        navigate(from, { 
          state: { 
            fromLogin: true,
            pendingImage: location.state?.pendingImage 
          } 
        });
      } else {
        setError(error);
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);

    try {
      const { success, error } = await googleLogin();
      if (success) {
        navigate(from, { 
          state: { 
            fromLogin: true,
            pendingImage: location.state?.pendingImage 
          } 
        });
      } else {
        setError(error);
      }
    } catch (err) {
      setError(err.message || 'Google login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (location.state?.pendingImage) {
        URL.revokeObjectURL(location.state.pendingImage);
      }
    };
  }, [location.state]);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h1>Welcome Back</h1>
          <p>Glad to see you again<br />Login to your account below</p>

          <button 
            className="google-btn" 
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Continue with Google'}
          </button>

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            
            <div className="forgot-password">
              <Link to="/forget-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>
            
            {error && <div className="error-message">{error}</div>}
            <button 
              type="submit" 
              className="login-btn"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <Link to="/sign-up" className="link">Sign up</Link>
          </p>
        </div>

        <div className="login-right">
          <img src="/images/IMG-20250302-WA0124.png" alt="Smiling Woman" />
        </div>
      </div>
    </div>
  );
};

export default Login;