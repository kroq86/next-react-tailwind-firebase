import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA95OrcHoSlhpvrAWsEmFUehVs_qN9fj_A",
    authDomain: "next-storage-f5c62.firebaseapp.com",
    projectId: "next-storage-f5c62",
    storageBucket: "next-storage-f5c62.appspot.com",
    messagingSenderId: "862630774392",
    appId: "1:862630774392:web:8fda87686004afad1b4f8d",
    measurementId: "G-MR6262BH9D"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage};