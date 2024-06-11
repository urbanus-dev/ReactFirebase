// // src/components/register.js
// import React, { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { initializeApp } from 'firebase/app';
// import { Link } from 'react-router-dom';
// const firebaseConfig = {
//     apiKey: "AIzaSyBoj626yWUYZua2koMSZ0sIpdCGM73zIcQ",
//     authDomain: "reactauth-46d20.firebaseapp.com",
//     projectId: "reactauth-46d20",
//     storageBucket: "reactauth-46d20.appspot.com",
//     messagingSenderId: "731109382717",
//     appId: "1:731109382717:web:5f4768cf82f13bb1552854"
//   };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const registerUser = () => {
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           alert('User registered successfully');
//           navigate('/login'); 
//         })
//         .catch((error) => {
//           const message = error.message;
//           alert(message);
//         });
//     };

//     return (
//       <div className="register">
//         <h2>Register</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="phone"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={registerUser}>Register</button><br/>
//         <Link to="/login" style={{color:'red',fontSize: '18px' }}>login here</Link><br></br>
//         <Link to="/counter">counter</Link>
//       </div>
//     );
//   };

//   export default Register;
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaLock, FaPhoneAlt, FaRegEyeSlash} from "react-icons/fa";
import limoImage from '../images/limo.png';
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
const Register=()=>{
          const[email,setEmail]=useState('');
          const[fname,setName]=useState('');
          const[phone,setPhone]=useState('');
          const[passWord,setPassword]=useState('');
          const navigate=useNavigate();
          
          const CreateUser=()=>{
           createUserWithEmailAndPassword(auth,email,passWord)
           .then((userCredential)=>{
            alert('Account created successfully');
            navigate('/login');
           })
           
           .catch((error)=>{
            const message=error.message;
            alert(message)
           });
          };
          
              return(
                <div>
              <div className="top-bar bg-blue-950 py-2 border-lime-400 flex justify-items-center" > 
              <img src={limoImage} alt="Limo" className="w-20 h-20 rounded-full bg-blue-950" />
              <div className="text-blue-500 font-bold ml-4 mt-7">
                <h1>STRIXBOARD</h1>
                </div>
              </div>
            <section className='flex justify-center items-center h-screen bg-white flex-grow' > 
           <div className='m-auto Login, font-bold, align-text-top border-2 p-4 rounded-xl border-gray-400 bg-white'>
            <h2 className='text-blue-500 text-center'>Create Account</h2><br/>
            <form>
                <div className="relative">
                <IoMdPersonAdd className="absolute left-3 top-3.5" />
             <input type="text" className="border-2 border-blue-500 p-2 rounded-xl w-full px-9"
             placeholder="SurName"
             value={fname}
             onChange={(e)=>setName(e.target.value)}
             />
             </div>
             <br />
             <br />
             <div className="relative">
             <MdOutlineMail className='absolute left-3 top-3.5 text-blue-500" '/>
            <input
            className='border-2 border-blue-500 px-9 py-2  rounded-xl w-full'
             placeholder="Email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
             </div>
             <br />
             <br />
             <div>
             <div className="relative">
             <FaPhoneAlt className="absolute left-3 top-3.5" />
              <input type="number" className="border-2 border-blue-500 p-2 rounded-xl w-full px-9"
             placeholder="phone"
             value={phone}
             onChange={(e)=>setPhone(e.target.value)}
             />
             </div>
             </div>
             <br />
             <br />
             <div className="relative">
             <FaRegEyeSlash className='absolute right-3 top-3.5' />
             <FaLock className="absolute left-3 top-3.5" />
              <input type="text"
                className="border-2 border-blue-500 p-2 rounded-xl w-full px-9"
             placeholder="Password"
             value={passWord}
             onChange={(e)=>setPassword(e.target.value)}
             />
             </div>
             <br />
            </form><br></br>
             <button  onClick={CreateUser} className='bg-blue-500 text-white p-2 w-full rounded-xl'>Register</button>
             <br/>
            <div>
            <section className='flex justify-center items-center  bg-white-500'>
            <div className="border-t border-gray-400 flex-grow mr-3"></div>
            <Link to="/login" className='text-center text-black'> Sign In</Link>
             <div className="border-t border-gray-400 flex-grow ml-3"></div>
        </section>
             </div>
        </div>
        </section>
        <footer className="footer bg-blue-950 p-8 mt-auto">
        <div  />
        <div>
        <h2 className="text-white">STRIXBOARD</h2>
        </div>
        </footer>
        </div>
    )
}
export default Register;