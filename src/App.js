import './App.css';
import ChatRoom from './comps/ChatRoom';
import SignIn from './comps/SignIn';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyDB_2uhfYJNeA5RSHbZZG7JLaTAOmeY95o",
    authDomain: "chat-app-45d6e.firebaseapp.com",
    projectId: "chat-app-45d6e",
    storageBucket: "chat-app-45d6e.appspot.com",
    messagingSenderId: "523153698221",
    appId: "1:523153698221:web:6e3a1a0203f76b95654524"

})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div>
        {user ? <ChatRoom /> : <SignIn />}
      </div>
    </div>
  );
}


export default App;
