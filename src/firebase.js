import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCpmNse7sl5z6OnlAvI75bqCTTu9T7YA70",
    authDomain: "slack-clone-2ad62.firebaseapp.com",
    projectId: "slack-clone-2ad62",
    storageBucket: "slack-clone-2ad62.appspot.com",
    messagingSenderId: "124345499731",
    appId: "1:124345499731:web:b693978f20ff690cccc6a6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};