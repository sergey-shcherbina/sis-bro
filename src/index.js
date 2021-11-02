import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDgNLCs-CgFYURfEkYfo71GQSQkmlG6Hn0",
  authDomain: "perm-537bc.firebaseapp.com",
  projectId: "perm-537bc",
  storageBucket: "perm-537bc.appspot.com",
  messagingSenderId: "882535708452",
  appId: "1:882535708452:web:cae4390342d94cccafa5b1"
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{firebase, auth, firestore}}>
    <App />,
  </Context.Provider>,
  document.getElementById('root')
);

