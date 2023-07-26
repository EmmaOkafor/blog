// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDLUe32CVJlwKEXu8-aInc6PlhL1xcc3y8",
//   authDomain: "blogpost-fe0f6.firebaseapp.com",
//   projectId: "blogpost-fe0f6",
//   storageBucket: "blogpost-fe0f6.appspot.com",
//   messagingSenderId: "1015521362271",
//   appId: "1:1015521362271:web:124422103eb8d9144136ea",
//   measurementId: "G-0HS18D0TX8"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const fb = getAnalytics(app);
// export default fb;


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDLUe32CVJlwKEXu8-aInc6PlhL1xcc3y8",
  authDomain: "blogpost-fe0f6.firebaseapp.com",
  projectId: "blogpost-fe0f6",
  storageBucket: "blogpost-fe0f6.appspot.com",
  messagingSenderId: "1015521362271",
  appId: "1:1015521362271:web:124422103eb8d9144136ea",
  measurementId: "G-0HS18D0TX8"
});

const fb = firebase;

export default fb;
