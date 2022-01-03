// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjwUUCLOZ9XiA86OIiAfXtpXTKGtG6DJw",
  authDomain: "teste-crud-react-238b1.firebaseapp.com",
  projectId: "teste-crud-react-238b1",
  storageBucket: "teste-crud-react-238b1.appspot.com",
  messagingSenderId: "14094358285",
  appId: "1:14094358285:web:45f8b0aa74e6cf24018244"
};

// Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig)

export default fireDb.database().ref()