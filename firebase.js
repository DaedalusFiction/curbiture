import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlTDwWWB_VNJovqmLuRgLPe61IbPf97Uw",
    authDomain: "curbiture-34969.firebaseapp.com",
    projectId: "curbiture-34969",
    storageBucket: "curbiture-34969.appspot.com",
    messagingSenderId: "417687321307",
    appId: "1:417687321307:web:a647f1a989eb820a0deafe",
    measurementId: "G-NXV0KGQHF7",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
