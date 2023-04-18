// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDA8LVcBB6ZuFMGtZZLEh_veJ44WGrNRdE',
//   authDomain: 'house-marketplace-app-fb1d0.firebaseapp.com',
//   projectId: 'house-marketplace-app-fb1d0',
//   storageBucket: 'house-marketplace-app-fb1d0.appspot.com',
//   messagingSenderId: '832068369979',
//   appId: '1:832068369979:web:dce177da9bfc60a4b4e61e',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBewa2HHXii0enjeUYaUybH6lhEOBoTG-A",
  authDomain: "house-market-926a3.firebaseapp.com",
  projectId: "house-market-926a3",
  storageBucket: "house-market-926a3.appspot.com",
  messagingSenderId: "516293927215",
  appId: "1:516293927215:web:c7ff340e99d2a1ff9c81da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();