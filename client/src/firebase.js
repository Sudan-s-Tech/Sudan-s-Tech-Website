// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBZcYk5D7djzJU6wQUga83_0fnxe3msddQ",
    authDomain: "sudan-s-tech.firebaseapp.com",
    projectId: "sudan-s-tech",
    storageBucket: "sudan-s-tech.appspot.com",
    messagingSenderId: "583419550385",
    appId: "1:583419550385:web:08bbee8738ecb3ea50e090",
    measurementId: "G-VK9QBDMK8D"
  };
  const firebaseApp = firebase.initializeApp
  (firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth , provider}