//

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, db } from "../../firebase/firebaseConfig";
// import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
// import { updateEmail, updateProfile, signOut, deleteUser, onAuthStateChanged } from "firebase/auth";
// import axios from "axios";
// import "./Profile.css";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     dob: "",
//     photoURL: ""
//   });
//   const [image, setImage] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [showImageMenu, setShowImageMenu] = useState(false);
//   const [authInitialized, setAuthInitialized] = useState(false);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setShowImageMenu(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         try {
//           const docRef = doc(db, "users", user.uid);
//           const docSnap = await getDoc(docRef);

//           if (docSnap.exists()) {
//             const data = docSnap.data();
//             const profileRes = await axios.get(`http://localhost:5000/get-profile-image/${user.uid}`);
//             const profileImage = profileRes.data.imageBase64 ? `data:${profileRes.data.contentType};base64,${profileRes.data.imageBase64}` : "";

//             setUserData({
//               firstName: data.firstName || "",
//               lastName: data.lastName || "",
//               email: user.email || "",
//               phone: data.phone || "",
//               dob: data.dob || "",
//               photoURL: profileImage
//             });
//             setImage(profileImage);
//           } else {
//             setErrors({ fetch: "Profile data not found. Please create your profile." });
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//           setErrors({ fetch: "Failed to load profile data. Please try again." });
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         navigate("/login");
//       }
//       setAuthInitialized(true);
//     });

//     return () => unsubscribe();
//   }, [navigate]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//       setImageFile(file);
//     }
//     setShowImageMenu(false);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//     const phoneRegex = /^\+92\d{10}$/;

//     if (!userData.firstName.trim()) {
//       newErrors.firstName = "First name is required";
//     }
//     if (!emailRegex.test(userData.email.trim())) {
//       newErrors.email = "Please enter a valid email address";
//     }
//     if (userData.phone && !phoneRegex.test(userData.phone)) {
//       newErrors.phone = "Please enter a valid phone number";
//     }
//         if (userData.dob) {
//       const dob = new Date(userData.dob);
//       const today = new Date();
//       const minAgeDate = new Date();
//       minAgeDate.setFullYear(today.getFullYear() - 13);

//       if (isNaN(dob.getTime())) {
//         newErrors.dob = "Invalid date format";
//       } else if (dob > today) {
//         newErrors.dob = "Date of Birth cannot be in the future";
//       } else if (dob > minAgeDate) {
//         newErrors.dob = "You must be at least 13 years old";
//       }
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const uploadProfileImageToMongo = async (userId) => {
//     if (!imageFile) return;
//     const formData = new FormData();
//     formData.append("image", imageFile);
//     formData.append("userId", userId);
//     try {
//       await axios.post("http://localhost:5000/upload-profile-image", formData);
//     } catch (error) {
//       console.error("Failed to upload image to MongoDB", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setLoading(true);
//     try {
//       const user = auth.currentUser;
//       if (!user) throw new Error("No authenticated user");
//       await updateProfile(user, {
//         displayName: `${userData.firstName} ${userData.lastName}`
//       });
//       if (user.email !== userData.email) {
//         await updateEmail(user, userData.email);
//       }
//       const userRef = doc(db, "users", user.uid);
//       await updateDoc(userRef, {
//         firstName: userData.firstName,
//         lastName: userData.lastName,
//         email: userData.email,
//         phone: userData.phone,
//         dob: userData.dob,
//         updatedAt: new Date()
//       });
//       await uploadProfileImageToMongo(user.uid);
//       setSuccess("Profile updated successfully!");
//       setTimeout(() => setSuccess(""), 3000);
//     } catch (error) {
//       console.error("Profile update error:", error);
//       setErrors({ submit: error.message });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteAccount = async () => {
//     if (!window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
//       return;
//     }

//     setLoading(true);
//     try {
//       const user = auth.currentUser;
//       if (!user) throw new Error("No user is signed in");

//       // Delete Firestore document
//       const userRef = doc(db, "users", user.uid);
//       await deleteDoc(userRef);

//       // Delete auth user
//       await deleteUser(user);

//       // Sign out and redirect
//       await signOut(auth);
//       navigate("/login");
//       setSuccess("Account deleted successfully!");
//     } catch (error) {
//       console.error("Account deletion error:", error);
//       if (error.code === "auth/requires-recent-login") {
//         setErrors({ delete: "Please log out and log back in to delete your account" });
//       } else {
//         setErrors({ delete: error.message });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout error:", error);
//       setErrors({ logout: error.message });
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData(prev => ({ ...prev, [name]: value }));
//   };

//   const toggleImageMenu = () => {
//     setShowImageMenu(!showImageMenu);
//   };

//   const handleViewPhoto = () => {
//     if (image) {
//       window.open(image, '_blank');
//     }
//     setShowImageMenu(false);
//   };
//  if (!authInitialized || loading) {
//     return (
//       <div className="profile-container">
//         <div className="loading-spinner"></div>
//       </div>
//     );
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-box">
//         {/* Status Messages */}
//         {success && <div className="top-success">{success}</div>}
//         {Object.values(errors).map((error, index) => (
//           <div key={index} className="top-error">{error}</div>
//         ))}

//         <h1 className="profile-title">My Profile</h1>

//         {/* Avatar Section */}
//         <div className="avatar-section">
//           <div className="avatar-upload" onClick={toggleImageMenu}>
//             {image ? (
//               <img src={image} alt="avatar" className="avatar-preview" />
//             ) : (
//               <div className="avatar-icon">
//                 {userData.firstName.charAt(0) || "👤"}
//               </div>
//             )}
//             <div className="edit-overlay">✏️</div>
//           </div>

//           {showImageMenu && (
//             <div className="image-menu" ref={menuRef}>
//               <button
//                 type="button"
//                 onClick={handleViewPhoto}
//                 disabled={!image}
//               >
//                 View Photo
//               </button>
//               <label className="upload-photo-label">
//                 Upload Photo
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   style={{ display: 'none' }}
//                 />
//               </label>
//             </div>
//           )}

//           <h3 className="avatar-name">
//             {userData.firstName} {userData.lastName}
//           </h3>
//         </div>

//         {/* Profile Form */}
//         <form className="profile-form" onSubmit={handleSubmit}>
//           <div className="form-row">
//             <div className="form-group">
//               <label>First Name *</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={userData.firstName}
//                 onChange={handleInputChange}
//                 placeholder="First name"
//                 required
//                 className={errors.firstName ? "input-error" : ""}
//               />
//               {errors.firstName && <p className="error-text">{errors.firstName}</p>}
//             </div>

//             <div className="form-group">
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={userData.lastName}
//                 onChange={handleInputChange}
//                 placeholder="Last name"
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label>Email *</label>
//             <input
//               type="email"
//               name="email"
//               value={userData.email}
//               onChange={handleInputChange}
//               placeholder="Email"
//               required
//               className={errors.email ? "input-error" : ""}
//             />
//             {errors.email && <p className="error-text">{errors.email}</p>}
//           </div>

//           <div className="form-group">
//             <label>Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={userData.phone}
//               onChange={handleInputChange}
//               placeholder="Phone number"
//               className={errors.phone ? "input-error" : ""}
//             />
//             {errors.phone && <p className="error-text">{errors.phone}</p>}
//           </div>

//           <div className="form-group">
//             <label>Date of Birth</label>
//             <input
//               type="date"
//               name="dob"
//               value={userData.dob}
//               onChange={handleInputChange}
//               className={errors.dob ? "input-error" : ""}
//             />
//             {errors.dob && <p className="error-text">{errors.dob}</p>}
//           </div>

//           {/* Action Buttons */}
//           <div className="profile-actions">
//             <button
//               type="submit"
//               className="profile-save-btn"
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className="button-spinner"></span>
//               ) : (
//                 "Save Changes"
//               )}
//             </button>
//             <button
//               type="button"
//               className="profile-delete-btn"
//               onClick={handleDeleteAccount}
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className="button-spinner"></span>
//               ) : (
//                 "Delete Account"
//               )}
//             </button>
//           </div>

//           <div className="logout-section">
//             <button
//               type="button"
//               className="profile-logout-btn"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebaseConfig";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import {
    updateEmail,
    updateProfile,
    signOut,
    deleteUser,
    onAuthStateChanged,
} from "firebase/auth";
import "./Profile.css";
import axios from "axios";

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        photoURL: "",
    });
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(true);
    const [showImageMenu, setShowImageMenu] = useState(false);
    const [authInitialized, setAuthInitialized] = useState(false);

    const [imageFile, setImageFile] = useState(null); // 🔁 New state to store selected file
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowImageMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Fetch user data on component mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const docRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        const data = docSnap.data();

                        let profileImage = "";
                        try {
                            const profileRes = await axios.get(
                                `http://localhost:5000/get-profile-image/${user.uid}`
                            );
                            profileImage = profileRes.data.imageBase64
                                ? `data:${profileRes.data.contentType};base64,${profileRes.data.imageBase64}`
                                : user.photoURL || "";
                        } catch (imgError) {
                            console.warn("Profile image not found in MongoDB:", imgError);
                            profileImage = user.photoURL || "";
                        }

                        setUserData({
                            firstName: data.firstName || "",
                            lastName: data.lastName || "",
                            email: user.email || "",
                            phone: data.phone || "",
                            dob: data.dob || "",
                            photoURL: profileImage,
                        });

                        setImage(profileImage);
                    } else {
                        setErrors({
                            fetch: "Profile data not found. Please create your profile.",
                        });
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                    setErrors({
                        fetch: "Failed to load profile data. Please try again.",
                    });
                } finally {
                    setLoading(false);
                }
            } else {
                navigate("/login");
            }
            setAuthInitialized(true);
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
            setImageFile(file);
        }
        setShowImageMenu(false);
    };
    const uploadProfileImageToMongo = async (userId) => {
        if (!imageFile) return;
        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("userId", userId);
        try {
            await axios.post("http://localhost:5000/upload-profile-image", formData);
        } catch (error) {
            console.error("Failed to upload image to MongoDB", error);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const phoneRegex = /^\+92\d{10}$/;

        if (!userData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!emailRegex.test(userData.email.trim())) {
            newErrors.email = "Please enter a valid email address";
        }

        if (userData.phone && !phoneRegex.test(userData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (userData.dob) {
            const dob = new Date(userData.dob);
            const today = new Date();
            const minAgeDate = new Date();
            minAgeDate.setFullYear(today.getFullYear() - 13);

            if (isNaN(dob.getTime())) {
                newErrors.dob = "Invalid date format";
            } else if (dob > today) {
                newErrors.dob = "Date of Birth cannot be in the future";
            } else if (dob > minAgeDate) {
                newErrors.dob = "You must be at least 13 years old";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            const user = auth.currentUser;
            if (!user) throw new Error("No authenticated user");

            // Update Firebase Auth profile
            await updateProfile(user, {
                displayName: `${userData.firstName} ${userData.lastName}`,
            });

            // Update email if changed
            if (user.email !== userData.email) {
                await updateEmail(user, userData.email);
            }

            // Update Firestore document
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phone: userData.phone,
                dob: userData.dob,
                updatedAt: new Date(),
            });
            await uploadProfileImageToMongo(user.uid);

            setSuccess("Profile updated successfully!");
            setTimeout(() => setSuccess(""), 3000);
        } catch (error) {
            console.error("Profile update error:", error);
            setErrors({ submit: error.message });
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAccount = async () => {
        if (
            !window.confirm(
                "Are you sure you want to delete your account? This action cannot be undone."
            )
        ) {
            return;
        }

        setLoading(true);
        try {
            const user = auth.currentUser;
            if (!user) throw new Error("No user is signed in");

            // Delete Firestore document
            const userRef = doc(db, "users", user.uid);
            await deleteDoc(userRef);

            // Delete auth user
            await deleteUser(user);

            // Sign out and redirect
            await signOut(auth);
            navigate("/login");
            setSuccess("Account deleted successfully!");
        } catch (error) {
            console.error("Account deletion error:", error);
            if (error.code === "auth/requires-recent-login") {
                setErrors({
                    delete: "Please log out and log back in to delete your account",
                });
            } else {
                setErrors({ delete: error.message });
            }
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
            setErrors({ logout: error.message });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const toggleImageMenu = () => {
        setShowImageMenu(!showImageMenu);
    };

    const handleViewPhoto = () => {
        if (image) {
            window.open(image, "_blank");
        }
        setShowImageMenu(false);
    };

    if (!authInitialized || loading) {
        return (
            <div className="profile-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-box">
                {/* Status Messages */}
                {success && <div className="top-success">{success}</div>}
                {Object.values(errors).map((error, index) => (
                    <div key={index} className="top-error">
                        {error}
                    </div>
                ))}

                <h1 className="profile-title">My Profile</h1>

                {/* Avatar Section */}
                <div className="avatar-section">
                    <div className="avatar-upload" onClick={toggleImageMenu}>
                        {image ? (
                            <img src={image} alt="avatar" className="avatar-preview" />
                        ) : (
                            <div className="avatar-icon">
                                {userData.firstName.charAt(0) || "👤"}
                            </div>
                        )}
                        <div className="edit-overlay">✏️</div>
                    </div>

                    {showImageMenu && (
                        <div className="image-menu" ref={menuRef}>
                            <button type="button" onClick={handleViewPhoto} disabled={!image}>
                                View Photo
                            </button>
                            <label className="upload-photo-label">
                                Upload Photo
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: "none" }}
                                />
                            </label>
                        </div>
                    )}

                    <h3 className="avatar-name">
                        {userData.firstName} {userData.lastName}
                    </h3>
                </div>

                {/* Profile Form */}
                <form className="profile-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={userData.firstName}
                                onChange={handleInputChange}
                                placeholder="First name"
                                required
                                className={errors.firstName ? "input-error" : ""}
                            />
                            {errors.firstName && (
                                <p className="error-text">{errors.firstName}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={userData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last name"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            required
                            className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={userData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone number"
                            className={errors.phone ? "input-error" : ""}
                        />
                        {errors.phone && <p className="error-text">{errors.phone}</p>}
                    </div>

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={userData.dob}
                            onChange={handleInputChange}
                            className={errors.dob ? "input-error" : ""}
                        />
                        {errors.dob && <p className="error-text">{errors.dob}</p>}
                    </div>

                    {/* Action Buttons */}
                    <div className="profile-actions">
                        <button
                            type="submit"
                            className="profile-save-btn"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="button-spinner"></span>
                            ) : (
                                "Save Changes"
                            )}
                        </button>
                        <button
                            type="button"
                            className="profile-delete-btn"
                            onClick={handleDeleteAccount}
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="button-spinner"></span>
                            ) : (
                                "Delete Account"
                            )}
                        </button>
                    </div>

                    <div className="logout-section">
                        <button
                            type="button"
                            className="profile-logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
