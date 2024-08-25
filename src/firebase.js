import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaX7mMFLbhUAlR32Szexi_9Z06n6bzJcc",
  authDomain: "notesapp-64792.firebaseapp.com",
  projectId: "notesapp-64792",
  storageBucket: "notesapp-64792.appspot.com",
  messagingSenderId: "722975089273",
  appId: "1:722975089273:web:ae2067b0168efd010aaaa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
