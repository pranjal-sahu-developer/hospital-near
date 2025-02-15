import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDXfT7Inj0q77fhGr7gyYobmtZf6kMC6cI",
  authDomain: "loginauth-9cf67.firebaseapp.com",
  projectId: "loginauth-9cf67",
  storageBucket: "loginauth-9cf67.firebasestorage.app",
  messagingSenderId: "192393796002",
  appId: "1:192393796002:web:c90682253911d8460d7afb"
};

// Initialize Firebase
/*const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error during Google sign-in:", error);
    throw error;
  }
};*/
// services/firebase.js

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider)
    .then((result) => result.user)
    .catch((error) => {
      console.error("Google Sign-In Error:", error);
      throw error;
    });
};