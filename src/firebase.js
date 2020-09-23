import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   // add your config here
});

const auth = firebase.auth();

export default auth;