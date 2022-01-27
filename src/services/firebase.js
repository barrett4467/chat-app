import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDB_2uhfYJNeA5RSHbZZG7JLaTAOmeY95o",
    authDomain: "chat-app-45d6e.firebaseapp.com",
    projectId: "chat-app-45d6e",
    storageBucket: "chat-app-45d6e.appspot.com",
    messagingSenderId: "523153698221",
    appId: "1:523153698221:web:6e3a1a0203f76b95654524"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
