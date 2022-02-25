// npm install firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDHUDUtIKzUrJ94AAcHM1ka_dQVPe7OEIs",
    authDomain: "slr-couture.firebaseapp.com",
    projectId: "slr-couture",
    storageBucket: "slr-couture.appspot.com",
    messagingSenderId: "43500100878",
    databaseURL: "gs://slr-couture.appspot.com/",
    appId: "1:43500100878:web:dc0d14629d3c130130cb5f",
    measurementId: "G-EYM1JPVCZP"
});

// Generates a user identity without requiring the user to make a profile
const auth = getAuth();
signInAnonymously(auth)
    .then(() => {
        // Signed in..
        console.log()
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        console.log(errorCode,errorMessage)
    });

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid)
        // ...
    } else {
        // User is signed out
        // ...
    }
});

export const db = getFirestore(firebaseApp);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);

export default firebase