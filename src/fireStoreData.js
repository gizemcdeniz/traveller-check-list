import * as firebase from 'firebase';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBAUtwRuqtpV-H-iGjeiauTdM5JU_aSmac",
    authDomain: "traveller-check-list.firebaseapp.com",
    databaseURL: "https://traveller-check-list.firebaseio.com",
    projectId: "traveller-check-list",
    storageBucket: "traveller-check-list.appspot.com",
    messagingSenderId: "288192544858",
    appId: "1:288192544858:web:2ef616ab28ec68fd0bd863",
    measurementId: "G-12FVK2F4JL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase.firestore();