import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBkesGGTClzeVsAgGOpe1JKdk_FertE3xg",
    authDomain: "crwn-db-8aa0d.firebaseapp.com",
    databaseURL: "https://crwn-db-8aa0d.firebaseio.com",
    projectId: "crwn-db-8aa0d",
    storageBucket: "",
    messagingSenderId: "755338647228",
    appId: "1:755338647228:web:37727aaff948af5e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

