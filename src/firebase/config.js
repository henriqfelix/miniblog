import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyBxrcv3Hf7nqDZSei811r0ARfcycXwSQ",
  authDomain: "miniblog-21875.firebaseapp.com",
  projectId: "miniblog-21875",
  storageBucket: "miniblog-21875.appspot.com",
  messagingSenderId: "688634569836",
  appId: "1:688634569836:web:2c85f0101de8a745522449",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
