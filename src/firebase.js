import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAy6W-Ftf8Og0V_t2k5QsSMIEIwpJ670Lg",
  authDomain: "db-a7ef2.firebaseapp.com",
  projectId: "db-a7ef2",
  storageBucket: "db-a7ef2.appspot.com",
  messagingSenderId: "134442289343",
  appId: "1:134442289343:web:ab386ee7e7aa0b2ae05e0a",
  measurementId: "G-D2VF9X4VNS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };