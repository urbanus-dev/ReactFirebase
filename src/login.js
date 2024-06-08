// LoginUser.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBoj626yWUYZua2koMSZ0sIpdCGM73zIcQ",
    authDomain: "reactauth-46d20.firebaseapp.com",
    projectId: "reactauth-46d20",
    storageBucket: "reactauth-46d20.appspot.com",
    messagingSenderId: "731109382717",
    appId: "1:731109382717:web:5f4768cf82f13bb1552854"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert('Sign in successful');
          navigate('/classhello');
        })
        .catch((e) => {
          const message = e.message;
          alert(message);
        });
    };

    return (
      <div className="Login">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>LOGIN</button>
        <Link to="/register">Register here</Link>
      </div>
    );
  };

  export default LoginUser;
