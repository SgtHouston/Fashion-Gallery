// npm install firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"




const firebaseApp = initializeApp({
    apiKey: "AIzaSyDHUDUtIKzUrJ94AAcHM1ka_dQVPe7OEIs",
    authDomain: "slr-couture.firebaseapp.com",
    projectId: "slr-couture",
    storageBucket: "slr-couture.appspot.com",
    messagingSenderId: "43500100878",
    appId: "1:43500100878:web:dc0d14629d3c130130cb5f",
    measurementId: "G-EYM1JPVCZP"
});

export const db = getFirestore(firebaseApp);

// // Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage();

// // Create a storage reference from our storage service
// const storageRef = ref(storage);

export default firebase