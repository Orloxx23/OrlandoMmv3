import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "orlandomm-a7f82.firebaseapp.com",
  projectId: "orlandomm-a7f82",
  storageBucket: "orlandomm-a7f82.appspot.com",
  messagingSenderId: "466044976324",
  appId: "1:466044976324:web:d501d6aca1c613ecfcdd91",
  measurementId: "G-4W9DFCJGZ7",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
