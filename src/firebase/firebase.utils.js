import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { initializeApp } from "@firebase/app";

const config = {
  apiKey: "AIzaSyCgYvEQrQIiLo8j4ZjYLpqFpT2D9QZciDs",
  authDomain: "crown-db-89bb2.firebaseapp.com",
  projectId: "crown-db-89bb2",
  storageBucket: "crown-db-89bb2.appspot.com",
  messagingSenderId: "266918067628",
  appId: "1:266918067628:web:8848974012e48ca4f5ce09",
  measurementId: "G-EGRE2ZQJF7",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // creating user
    const { displayName, email } = userAuth;
    // User creation time
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        createdAt,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  console.log(snapShot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
