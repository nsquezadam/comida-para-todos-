import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCupKQYD5qxbNkjpenbNjQLRB2bYqPD4oM",
  authDomain: "comida-para-todos-9fe1e.firebaseapp.com",
  databaseURL: "https://comida-para-todos-9fe1e.firebaseio.com",
  projectId: "comida-para-todos-9fe1e",
  storageBucket: "comida-para-todos-9fe1e.appspot.com",
  messagingSenderId: "654675197801",
  appId: "1:654675197801:web:d2fb386dc82f78152b07f8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
