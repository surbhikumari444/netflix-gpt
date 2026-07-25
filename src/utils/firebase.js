// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASdk6w5p2E0M6lVm09Oipwb9Y4nFoyMS0",
  authDomain: "netflix-2712.firebaseapp.com",
  projectId: "netflix-2712",
  storageBucket: "netflix-2712.firebasestorage.app",
  messagingSenderId: "182844590366",
  appId: "1:182844590366:web:b00c7c9085925aa8cfe10f",
  measurementId: "G-8FYRSL5RLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
