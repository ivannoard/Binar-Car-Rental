import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyAvyeAJiXL0B93KJ3g-gF0-XKxOo_qCk7E",

  authDomain: "binarcarrental.firebaseapp.com",

  projectId: "binarcarrental",

  storageBucket: "binarcarrental.appspot.com",

  messagingSenderId: "754491305749",

  appId: "1:754491305749:web:d34f924f640b1a046d831c"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
