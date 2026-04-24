import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxXDeVSslUF9OwnV35Wg1iIp99qZeihUo",
  authDomain: "ieee-espol.firebaseapp.com",
  projectId: "ieee-espol",
  storageBucket: "ieee-espol.firebasestorage.app",
  messagingSenderId: "303791700787",
  appId: "1:303791700787:web:08bf7de728a21f73099c46"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };