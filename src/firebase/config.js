// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/storage'
    

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDszMh9v08xHMmen3n0x_hgq14AJJNpczk",
    authDomain: "olxclone-d7432.firebaseapp.com",
    projectId: "olxclone-d7432",
    storageBucket: "olxclone-d7432.appspot.com",
    messagingSenderId: "32780868670",
    appId: "1:32780868670:web:396e51d650a921a9ad856f",
    measurementId: "G-SZSL7VNV1R"
  };

  export default  firebase.initializeApp(firebaseConfig)