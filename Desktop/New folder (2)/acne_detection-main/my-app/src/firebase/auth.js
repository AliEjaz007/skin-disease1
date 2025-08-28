// // // src/firebase/auth.js
// // import { 
// //     signInWithEmailAndPassword,
// //     GoogleAuthProvider, 
// //     signInWithPopup,
// //     signOut 
// //   } from 'firebase/auth';
// //   import { auth } from './firebaseConfig';
  
// //   export const emailLogin = async (email, password) => {
// //     try {
// //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
// //       if (!userCredential.user.emailVerified) {
// //         await signOut(auth);
// //         throw new Error("Please verify your email before logging in.");
// //       }
      
// //       return { success: true, user: userCredential.user };
// //     } catch (error) {
// //       return { success: false, error: error.message };
// //     }
// //   };
  
// //   export const googleLogin = async () => {
// //     try {
// //       const provider = new GoogleAuthProvider();
// //       const result = await signInWithPopup(auth, provider);
// //       return { success: true, user: result.user };
// //     } catch (error) {
// //       return { success: false, error: error.message };
// //     }
// //   };















// import { 
//   signInWithEmailAndPassword,
//   GoogleAuthProvider, 
//   signInWithPopup,
//   signOut,
//   setPersistence,
//   browserSessionPersistence,
//   onAuthStateChanged
// } from 'firebase/auth';
// import { auth, db } from './firebaseConfig';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { createContext, useContext, useState, useEffect } from 'react';

// // Configure Google provider
// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({
//   prompt: 'select_account'
// });

// // Set session persistence
// setPersistence(auth, browserSessionPersistence);

// // Authentication functions
// const emailLogin = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
//     if (!userCredential.user.emailVerified) {
//       await signOut(auth);
//       throw new Error("Please verify your email before logging in.");
//     }
    
//     return { success: true, user: userCredential.user };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// };

// const googleLogin = async () => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider);
//     const user = result.user;
    
//     // Check/create user document in Firestore
//     const userRef = doc(db, "users", user.uid);
//     const docSnap = await getDoc(userRef);
    
//     if (!docSnap.exists()) {
//       await setDoc(userRef, {
//         uid: user.uid,
//         email: user.email,
//         displayName: user.displayName,
//         photoURL: user.photoURL,
//         firstName: user.displayName?.split(' ')[0] || '',
//         lastName: user.displayName?.split(' ')[1] || '',
//         createdAt: new Date(),
//         lastLogin: new Date(),
//         provider: 'google'
//       });
//     } else {
//       await setDoc(userRef, {
//         lastLogin: new Date()
//       }, { merge: true });
//     }
    
//     return { success: true, user };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// };

// // Auth Context
// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   return useContext(AuthContext);
// };

// // Single export object at the end
// export {
//   AuthProvider,
//   useAuth,
//   emailLogin,
//   googleLogin
// };












import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, db } from './firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

setPersistence(auth, browserSessionPersistence);

const emailSignUp = async (email, password, fullName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send verification email
    await sendEmailVerification(user);

    // Save user info to Firestore
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: fullName,
      photoURL: '',
      firstName: fullName.split(' ')[0] || '',
      lastName: fullName.split(' ')[1] || '',
      createdAt: new Date(),
      lastLogin: new Date(),
      provider: 'email'
    });

    return { success: true, message: 'Signup successful. Verification email sent.' };
  } catch (error) {
    console.error("Signup Error:", error.message);
    return { success: false, error: error.message };
  }
};

const emailLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (!userCredential.user.emailVerified) {
      await signOut(auth);
      throw new Error("Please verify your email before logging in.");
    }
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        firstName: user.displayName?.split(' ')[0] || '',
        lastName: user.displayName?.split(' ')[1] || '',
        createdAt: new Date(),
        lastLogin: new Date(),
        provider: 'google'
      });
    } else {
      await setDoc(userRef, { lastLogin: new Date() }, { merge: true });
    }
    return { success: true, user };
  } catch (error) {
    console.error("Google Login Error:", error.code, error.message, error.customData);
    return { success: false, error: error.message };
  }
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export {
  AuthProvider,
  useAuth,
  emailLogin,
  googleLogin,
  emailSignUp 
};