import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCYx-OIGGW41et2pjPn2SbFxlinbwGY4Mw",
    authDomain: "tinder-1d789.firebaseapp.com",
    databaseURL: "https://tinder-1d789.firebaseio.com",
    projectId: "tinder-1d789",
    storageBucket: "tinder-1d789.appspot.com",
    messagingSenderId: "73570593969",
    appId: "1:73570593969:web:0fbc5fff28aaa66a6d8690",
    measurementId: "G-9B71PPCQRL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;