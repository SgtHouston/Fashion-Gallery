// npm install firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"
// import { onSnapshot, collection, query, getDocs, where, orderBy } from "firebase/firestore";
// import { store } from './redux/store'
// import { actionSetPosts } from './redux/actions/posts';



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

export default firebase