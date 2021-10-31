import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDO-lyDZEs6sV8MB79FyUISC_KUUbKJE6k",
  authDomain: "brosis-5c7c1.firebaseapp.com",
  projectId: "brosis-5c7c1",
  storageBucket: "brosis-5c7c1.appspot.com",
  messagingSenderId: "96921636606",
  appId: "1:96921636606:web:69fc7f8981e47c12e6dfaf",
  measurementId: "G-3C493GZQ27"
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

