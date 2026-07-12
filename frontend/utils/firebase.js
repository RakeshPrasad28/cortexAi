// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexai-9b9ee.firebaseapp.com",
  projectId: "cortexai-9b9ee",
  storageBucket: "cortexai-9b9ee.firebasestorage.app",
  messagingSenderId: "533743455634",
  appId: "1:533743455634:web:1149b74f20faa9219d454b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();