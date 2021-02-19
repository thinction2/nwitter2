import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACxLn1dMLTzeBu4t1r9NNBAxQWzGCj4cw",
  authDomain: "nwitter2-a56cd.firebaseapp.com",
  projectId: "nwitter2-a56cd",
  storageBucket: "nwitter2-a56cd.appspot.com",
  messagingSenderId: "915160592052",
  appId: "1:915160592052:web:1de9e5f57916ce6b3c71e1",
  measurementId: "G-NK8DDTN17J",
};

firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
