import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCE5V7ceLrg2lthXc9-Z1syNdwJVFhLyl8",
  authDomain: "image-gallery-dc68e.firebaseapp.com",
  projectId: "image-gallery-dc68e",
  storageBucket: "image-gallery-dc68e.appspot.com",
  messagingSenderId: "192647839432",
  appId: "1:192647839432:web:b7edb188468d199487effd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export {auth, storage, db};
