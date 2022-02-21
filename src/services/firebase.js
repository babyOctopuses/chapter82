// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB3lsZaMm3-VPIxJxufjLg0Xjf_g8O0-FE",
//   authDomain: "chapter-9-binar.firebaseapp.com",
//   projectId: "chapter-9-binar",
//   storageBucket: "chapter-9-binar.appspot.com",
//   messagingSenderId: "74565565452",
//   appId: "1:74565565452:web:62d071f82fc24db7618229",
//   measurementId: "G-QV8X92DQ67",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import * as firebase from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

firebase.initializeApp({
  apiKey: "AIzaSyB3lsZaMm3-VPIxJxufjLg0Xjf_g8O0-FE",
  authDomain: "chapter-9-binar.firebaseapp.com",
  projectId: "chapter-9-binar",
  storageBucket: "chapter-9-binar.appspot.com",
  messagingSenderId: "74565565452",
});

export default firebase;

// database/firebaseDb.js
// import * as firebase from "./firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyB3lsZaMm3-VPIxJxufjLg0Xjf_g8O0-FE",
//   authDomain: "chapter-9-binar.firebaseapp.com",
//   projectId: "chapter-9-binar",
//   storageBucket: "chapter-9-binar.appspot.com",
//   messagingSenderId: "74565565452",
//   appId: "1:74565565452:web:62d071f82fc24db7618229",
//   measurementId: "G-QV8X92DQ67",
// };
// firebase.initializeApp(firebaseConfig);
// export default firebase;
