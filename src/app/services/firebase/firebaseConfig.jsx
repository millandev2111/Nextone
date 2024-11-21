import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCManLgvSY4yUH0Txr9nnEJBT5a99ANblE",
  authDomain: "nextone-1a7e0.firebaseapp.com",
  projectId: "nextone-1a7e0",
  storageBucket: "nextone-1a7e0.firebasestorage.app",
  messagingSenderId: "915515195354",
  appId: "1:915515195354:web:ed5439ffbe1eac6a004ae3",
  measurementId: "G-9B8B12YL4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app