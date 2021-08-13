import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   // add your config here
   // this is to test if I can make commits
});

const auth = firebase.auth();

export default auth;