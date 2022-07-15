import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDLcYaFRMyyA3m-Vq3_m1qbCiazSTtEyA0",
    authDomain: "itss-gomoku.firebaseapp.com",
    projectId: "itss-gomoku",
    storageBucket: "itss-gomoku.appspot.com",
    messagingSenderId: "850015171483",
    appId: "1:850015171483:web:05d3ee505be3d0d384e73e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage(app);