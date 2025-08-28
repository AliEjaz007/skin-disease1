import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC5WhQtDUZbOH2EvN5S-0aV3E4bMEsoA_Q",
  authDomain: "acne-detection-fyp-99ee2.firebaseapp.com",
  projectId: "acne-detection-fyp-99ee2",
  storageBucket: "acne-detection-fyp-99ee2.firebasestorage.app",
  messagingSenderId: "763696700511",
  appId: "1:763696700511:web:73b870156883d0198a8fea",
  measurementId: "G-ZLSX6ZP45Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { auth, db, analytics, app };
export const storage = getStorage(app);