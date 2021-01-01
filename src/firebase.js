import firebase from "firebase";

const firebaseConfig = {
    apiKey: "your firebase apikey",
    authDomain: "your firebase authDomain",
    projectId: "your firebase project id",
    storageBucket: "your firebase storage detail",
    messagingSenderId: "your firebase id",
    appId: "your firebase app id"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
  export default db;