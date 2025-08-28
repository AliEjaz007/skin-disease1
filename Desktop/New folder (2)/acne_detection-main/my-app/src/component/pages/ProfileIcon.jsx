// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../../firebase/firebaseConfig'; // Adjust the import path as necessary
// import './ProfileIcon.css';

// const ProfileIcon = () => {
//   const navigate = useNavigate();
  
//   const handleProfileClick = () => {
//     navigate('/Profile');
//   };

//   return (
//     <div className="profile-icon-container" onClick={handleProfileClick}>
//       <div className="profile-icon">
//         {auth.currentUser?.email?.charAt(0).toUpperCase() || 'U'}
//       </div>
//     </div>
//   );
// };

// export default ProfileIcon;