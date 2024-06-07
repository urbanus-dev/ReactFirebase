import './App.css';
import React from 'react';
import { useState } from 'react';
import { getAuth ,signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyBoj626yWUYZua2koMSZ0sIpdCGM73zIcQ",
  authDomain: "reactauth-46d20.firebaseapp.com",
  projectId: "reactauth-46d20",
  storageBucket: "reactauth-46d20.appspot.com",
  messagingSenderId: "731109382717",
  appId: "1:731109382717:web:5f4768cf82f13bb1552854"
};


function App() {

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const app = initializeApp(firebaseConfig)

  const auth = getAuth(app);

  const loginUser = () =>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      alert('Sign in successful')
    })
    .catch((e)=>{
      const  message = e.message
      alert(message)
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <input
        type='text'
        value={email}
        onChange ={(event) => setEmail(event.target.value)}
        />
        <input
        type='text'
        value={password}
        onChange = {(event) => setPassword(event.target.value)}
        />

        <button onClick={loginUser}>LOGIN</button>
      </header>
    </div>
  );
}

export default App;
