import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { firestore } from "firebase/app";
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBjgGOVzQAySU-YxESQvq7fOr1tlndQmMU",
  authDomain: "cart-c4312.firebaseapp.com",
  projectId: "cart-c4312",
  storageBucket: "cart-c4312.appspot.com",
  messagingSenderId: "1054917385623",
  appId: "1:1054917385623:web:bced7dc5b65ec13b4f38d2"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// export {firebaseConfig};