// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "xillow-estate.firebaseapp.com",
    projectId: "xillow-estate",
    storageBucket: "xillow-estate.appspot.com",
    messagingSenderId: "97074584326",
    appId: "1:97074584326:web:b7b1daf509c1a253849c87"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);