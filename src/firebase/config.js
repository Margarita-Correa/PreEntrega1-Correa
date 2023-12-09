// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVR9CS3iOAICCg_korFv6Rm0CelU1YajQ",
  authDomain: "pequenaalpaca-25b8b.firebaseapp.com",
  projectId: "pequenaalpaca-25b8b",
  storageBucket: "pequenaalpaca-25b8b.appspot.com",
  messagingSenderId: "632244912898",
  appId: "1:632244912898:web:d8f73e4a184f4829df381b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConection = () => app