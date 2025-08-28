// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { auth , db } from "../../firebase/firebaseConfig";
// import { getDoc, doc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [showWelcome, setShowWelcome] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user && user.emailVerified) {
//       setIsLoggedIn(true);

//       try {
//         const userDocRef = doc(db, "users", user.uid);
//         const userDoc = await getDoc(userDocRef);

//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setFirstName(userData.firstName || "User");
//         } else {
//           setFirstName("User"); // fallback
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setFirstName("User");
//       }

//       setShowWelcome(true);
//       setTimeout(() => setShowWelcome(false), 3000);
//     } else {
//       setIsLoggedIn(false);
//       setFirstName("");
//       setShowWelcome(false);
//     }
//   });

//   return () => unsubscribe();
// }, []);





//   const getLinkClass = ({ isActive }) =>
//     isActive ? "link active-link" : "link";
//   const getLogoClass = ({ isActive }) =>
//     isActive ? "navbar-logo active-nav-logo" : "navbar-logo";

//   return (
//     <>
//       {/* Welcome Toast Notification */}
//       {showWelcome && (
//         <div className="welcome-toast">
//           <div className="toast-content">
//             👋 Welcome {firstName}!
//           </div>
//         </div>
//       )}

//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-brand">
//           <NavLink to="/home" className={getLogoClass}>
//             Skin Alchemist
//           </NavLink>
//         </div>

//         <ul className="navbar-links">
//           <li>
//             <NavLink to="/home" className={getLinkClass}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/skin-analysis" className={getLinkClass}>
//               Skin Analysis
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/remedies" className={getLinkClass}>
//               Remedies
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/diet-plan" className={getLinkClass}>
//               Diet Plan
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/dermatologists" className={getLinkClass}>
//               Dermatologists
//             </NavLink>
//           </li>

//           {isLoggedIn ? (
//             <>
//               <li>
//                 <NavLink to="/my-reports" className={getLinkClass}>
//                   My Reports
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/profile" className={getLinkClass}>
//                   Profile
//                 </NavLink>
//               </li>
//             </>
//           ) : (
//             <li>
//               <NavLink to="/login" className={getLinkClass}>
//                 Login
//               </NavLink>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;






import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth, db } from "../../firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 🔥 NEW: controls mobile menu

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.emailVerified) {
        setIsLoggedIn(true);

        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setFirstName(userData.firstName || "User");
          } else {
            setFirstName("User");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setFirstName("User");
        }

        setShowWelcome(true);
        setTimeout(() => setShowWelcome(false), 3000);
      } else {
        setIsLoggedIn(false);
        setFirstName("");
        setShowWelcome(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const getLinkClass = ({ isActive }) =>
    isActive ? "link active-link" : "link";
  const getLogoClass = ({ isActive }) =>
    isActive ? "navbar-logo active-nav-logo" : "navbar-logo";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {showWelcome && (
        <div className="welcome-toast">
          <div className="toast-content">👋 Welcome {firstName}!</div>
        </div>
      )}

      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink to="/home" className={getLogoClass}>
            Skin Alchemist
          </NavLink>

          {/* 🔥 NEW: Hamburger Menu Button */}
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <NavLink to="/home" className={getLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/skin-analysis" className={getLinkClass}>
              Skin Analysis
            </NavLink>
          </li>
          <li>
            <NavLink to="/remedies" className={getLinkClass}>
              Remedies
            </NavLink>
          </li>
          <li>
            <NavLink to="/diet-plan" className={getLinkClass}>
              Diet Plan
            </NavLink>
          </li>
          <li>
            <NavLink to="/dermatologists" className={getLinkClass}>
              Dermatologists
            </NavLink>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <NavLink to="/my-reports" className={getLinkClass}>
                  My Reports
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className={getLinkClass}>
                  Profile
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/login" className={getLinkClass}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
