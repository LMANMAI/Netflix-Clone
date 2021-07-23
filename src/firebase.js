import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjQXB-Muvq7C8MbND8TIvXOimUIFvudnI",
    authDomain: "netflix-clone-bcbd2.firebaseapp.com",
    projectId: "netflix-clone-bcbd2",
    storageBucket: "netflix-clone-bcbd2.appspot.com",
    messagingSenderId: "1023792374975",
    appId: "1:1023792374975:web:c5ea6168c8335ae515120a",
    measurementId: "G-1BWLEJQ6LP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
  