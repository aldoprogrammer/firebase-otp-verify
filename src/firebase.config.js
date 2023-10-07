// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIFr6bMhFYMCINkU-y0r5KBJOZuxTM4t4",
  authDomain: "otp-verification-45b81.firebaseapp.com",
  projectId: "otp-verification-45b81",
  storageBucket: "otp-verification-45b81.appspot.com",
  messagingSenderId: "818598981491",
  appId: "1:818598981491:web:9cd41a64a2e72bbf0f5f06",
  measurementId: "G-1WDZHLH3JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)