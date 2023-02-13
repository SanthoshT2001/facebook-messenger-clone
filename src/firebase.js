//import firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHIYTz9xT5fVCvxN-HHsTApg0p79htCPw",
    authDomain: "facebook-messenger-sisy.firebaseapp.com",
    projectId: "facebook-messenger-sisy",
    storageBucket: "facebook-messenger-sisy.appspot.com",
    messagingSenderId: "335704760308",
    appId: "1:335704760308:web:7e95f4afb206d5dfdee3a1",
    measurementId: "G-CF8NDTQQ4D"
  });

const db = firebaseApp.firestore();
export default db;
