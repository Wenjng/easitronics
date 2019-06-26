import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCdkdgzEeQIrriZbC1Is2nMBwI-8BvyhCY",
    authDomain: "easitronics-45674.firebaseapp.com",
    databaseURL: "https://easitronics-45674.firebaseio.com",
    projectId: "easitronics-45674",
    storageBucket: "",
    messagingSenderId: "731388387307",
    appId: "1:731388387307:web:b69f32c33d2d49c2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({});

  export default firebase
