 import firebase from 'firebase'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBM9fgMv61SeV6tmmqfevDGl3VdJcstgIg",
  authDomain: "tai-reactjs.firebaseapp.com",
  databaseURL: "https://tai-reactjs.firebaseio.com",
  projectId: "tai-reactjs",
  storageBucket: "",
  messagingSenderId: "578556043326",
  appId: "1:578556043326:web:574337a61d2d5ab0"
};

export default function initFirebase() {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
