import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5WaiyG0MtQFGRiRCN6jODyIJk1NVNTZE",
    authDomain: "salbuy-db.firebaseapp.com",
    databaseURL: "https://salbuy-db.firebaseio.com",
    projectId: "salbuy-db",
    storageBucket: "",
    messagingSenderId: "238779676396",
    appId: "1:238779676396:web:91338968f4601eaafa97c9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
//   export const firestore = firestore.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;