// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqS7j0Chsgb7knw-s6TdfoPtXDh1xox5Q",
  authDomain: "farm2table-f0a12.firebaseapp.com",
  projectId: "farm2table-f0a12",
  storageBucket: "farm2table-f0a12.appspot.com",
  messagingSenderId: "691573444900",
  appId: "1:691573444900:web:f52a7c7ace803e21b963b1",
  measurementId: "G-79HS3PE3LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);