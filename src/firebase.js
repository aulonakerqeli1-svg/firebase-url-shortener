import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc7dWFiIxaLTcObdfg1mI4GRpsAceUWcA",
  authDomain: "url-shortener-6ac1f.firebaseapp.com",
  projectId: "url-shortener-6ac1f",
  storageBucket: "url-shortener-6ac1f.firebasestorage.app",
  messagingSenderId: "1000093464687",
  appId: "1:1000093464687:web:fefda315c2bddb622ab59a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);