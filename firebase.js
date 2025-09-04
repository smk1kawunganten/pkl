// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW5b9av9cBHh5AqEnxicBMIP0me-Goy_I",
  authDomain: "epkl-c628b.firebaseapp.com",
  projectId: "epkl-c628b",
  storageBucket: "epkl-c628b.firebasestorage.app",
  messagingSenderId: "41559318468",
  appId: "1:41559318468:web:3711f4da0f7087d683ce91",
  measurementId: "G-ZFWBRF40KQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);