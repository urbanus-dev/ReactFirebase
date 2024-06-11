// LoginUser.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { MdOutlineMail } from 'react-icons/md';
import { FaLock, FaRegEyeSlash } from 'react-icons/fa';
import LimoImage from '/home/urbanus/learn/school/src/image.png';
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
      <div>
      <div className="top-bar bg-blue-950 py-2 border-lime-400 flex justify-items-center" > 
      <img src={LimoImage} alt="Limo" className="w-20 h-20 rounded-full bg-blue-950" />
      <div className="text-blue-500 font-bold ml-4 mt-7">
        <h1>STRIXBOARD</h1>
        </div>
      </div>
      <section className='flex justify-center items-center h-screen bg-white'>

      <div className="m-auto Login, font-bold, align-text-top border-2 p-4 rounded-xl border-gray-400 bg-white" >
        <h2 className='text-white text-center'>Login</h2><br/><br/>
        <legend className='text-white'>Email</legend>
        <div className='relative '>
          <MdOutlineMail className='absolute left-3 top-3.5 text-blue-500" '/>
        <input
        className='border-2 border-blue-500 px-9 py-2  rounded-xl w-full'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <br />
        <legend className='text-white'>Password</legend>
        <div className='relative'>
        <FaRegEyeSlash className='absolute right-3 top-3.5' />
        <FaLock className="absolute left-3 top-3.5" />
        <input
        className='border-2 border-blue-500 p-2 rounded-xl w-full px-9 py-2'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <br /> 
        <br />
        <button onClick={handleLogin} className='text-white bg-blue-500 p-2 rounded-xl w-full'>LOGIN</button>
        <br />
       <div > 
        <section className='flex justify-center items-center  bg-white-500'>
       <div className="border-t border-gray-400 flex-grow mr-3"></div>
        <Link to="/register" className='text-center text-black'> Register here</Link>
        <div className="border-t border-gray-400 flex-grow ml-3"></div>
        </section>
        </div>
      </div>
      </section>
      <footer className="footer bg-blue-950 p-5 mt-auto">
        <div  />
        <div>
        <h2 className="text-white">STRIXBOARD</h2>
        </div>
        </footer>
      </div>
    );
  };

  export default LoginUser;
