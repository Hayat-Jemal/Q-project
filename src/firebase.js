// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9rTx_TNRTsX-HSsMcaVkYzAzhKTviYXs",
  authDomain: "new-project-10bf3.firebaseapp.com",
  projectId: "new-project-10bf3",
  storageBucket: "new-project-10bf3.appspot.com",
  messagingSenderId: "153566732162",
  appId: "1:153566732162:web:b03806bd7a6b044481399b",
  measurementId: "G-67K48Y5TFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db , auth};