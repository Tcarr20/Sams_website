import firebase from 'firebase/app';
import 'firebase/storage';


var firebaseConfig = {
  apiKey: "AIzaSyCM0nf9JEn-Jb4s8K9eIyR91GP5qfkdMwM",
  authDomain: "sams-portfolio-99866.firebaseapp.com",
  databaseURL: "https://sams-portfolio-99866.firebaseio.com",
  projectId: "sams-portfolio-99866",
  storageBucket: "sams-portfolio-99866.appspot.com",
  messagingSenderId: "938295949095",
  appId: "1:938295949095:web:fcfcef98b2d54e4ae4db02"
};
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage()

 export  {
   storage, firebase as default
 }
