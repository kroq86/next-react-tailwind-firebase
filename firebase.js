import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "add",
    authDomain: "add",
    projectId: "add",
    storageBucket: "add",
    messagingSenderId: "add",
    appId: "add",
    measurementId: "add"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage};
