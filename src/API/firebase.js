import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC68ZBVtLmJ6xhor-7prEnIT5kdpmHcXAY",
  authDomain: "sigp-bc09e.firebaseapp.com",
  projectId: "sigp-bc09e",
  storageBucket: "sigp-bc09e.appspot.com",
  messagingSenderId: "1000210335750",
  appId: "1:1000210335750:web:f46e2e6238ca48726f9b87"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
