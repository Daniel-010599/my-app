import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAivaADqXmnDJ5iT3ocoS_5wgTg8Zqm2EU",
    authDomain: "my-web-cd559.firebaseapp.com",
    databaseURL: "https://my-web-cd559.firebaseio.com",
    projectId: "my-web-cd559",
    storageBucket: "my-web-cd559.appspot.com",
    messagingSenderId: "241441672297",
    appId: "1:241441672297:web:e6bc90a9bb5ecd982fa6f8"
  };
  // Initialize Firebase
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();