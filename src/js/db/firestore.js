// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// const config = {
//   apiKey: "AIzaSyAPK8FA9iVmLozcNqeQD4Z2aVQIFRFALSE",
//   authDomain: "electron-chat-51296.firebaseapp.com",
//   projectId: "electron-chat-51296",
//   storageBucket: "electron-chat-51296.appspot.com",
//   messagingSenderId: "301868068473",
//   appId: "1:301868068473:web:10ade82abbaae504e42ea8",
//   measurementId: "G-TED8LBX5PX",
// };

// Initialize Firebase
const app = initializeApp(config);

export default getFirestore(app);
