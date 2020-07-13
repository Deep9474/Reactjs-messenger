import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCgCNkw0T5jwn3YOvE6hGdXTbEINLnt8Jg",
    authDomain: "facbook-messenger-clone.firebaseapp.com",
    databaseURL: "https://facbook-messenger-clone.firebaseio.com",
    projectId: "facbook-messenger-clone",
    storageBucket: "facbook-messenger-clone.appspot.com",
    messagingSenderId: "502741640189",
    appId: "1:502741640189:web:27b7b7f2d0c987d2eeaf94",
    measurementId: "G-05YNZ9HM0L"
  });

  const db = firebaseApp.firestore();

  export default db ;