// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; //add Authoritation module
import {getStorage} from "firebase/storage" //add Storage module
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGiJgc2jx95odXDYAq7_ZQMDwEPQzIK_o",
  authDomain: "tuguiajamundi.firebaseapp.com",
  projectId: "tuguiajamundi",
  storageBucket: "tuguiajamundi.appspot.com",
  messagingSenderId: "1312166233",
  appId: "1:1312166233:web:bb557e255b51e2e8a43c48",
  measurementId: "G-849Z5GE0TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app); //init analitic
const auth = getAuth(app); //init authoritation
const firebaseStorage = getStorage(app);//init storage

export{app, auth, firebaseStorage} //export all modules