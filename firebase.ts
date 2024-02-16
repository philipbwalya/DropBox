import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmapxuIOdbIUKX-DE_ijdGpuoJx8ZfG-I",
  authDomain: "dropbox-prototype.firebaseapp.com",
  projectId: "dropbox-prototype",
  storageBucket: "dropbox-prototype.appspot.com",
  messagingSenderId: "1033381213524",
  appId: "1:1033381213524:web:16e20f8bbfce4d5e8204c1"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };