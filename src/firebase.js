import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDdDHRSE7sia8nOftwNNjjWW0OmZjig1ys",
    authDomain: "slack-clone-a24a3.firebaseapp.com",
    projectId: "slack-clone-a24a3",
    storageBucket: "slack-clone-a24a3.appspot.com",
    messagingSenderId: "352734075007",
    appId: "1:352734075007:web:9d8f3e54d26a01a7eb074a"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
  export default db;