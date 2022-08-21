// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq7gb-gynENLD0TrDKl0z7opziZP002C0",
  authDomain: "sitefreela-43f64.firebaseapp.com",
  projectId: "sitefreela-43f64",
  storageBucket: "sitefreela-43f64.appspot.com",
  messagingSenderId: "520234222892",
  appId: "1:520234222892:web:67442f24bdf65119ba5889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {app, auth, db, storage};