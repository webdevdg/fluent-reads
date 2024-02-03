// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBE-396zdHi_Pq0NnqiSOzMTKDLEcV1VT0",
    authDomain: "next-fluentreads.firebaseapp.com",
    projectId: "next-fluentreads",
    storageBucket: "next-fluentreads.appspot.com",
    messagingSenderId: "982188267411",
    appId: "1:982188267411:web:50c061b9082c0cad613a66",
    measurementId: "G-BZDJM2TKM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestoredb = getFirestore(app);

export {firestoredb};