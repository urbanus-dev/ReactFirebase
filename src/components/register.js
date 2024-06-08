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
            alert('loginSuccefull');
            navigate('/login');
           })
           
           .catch((error)=>{
            const message=error.message;
            alert(message)
           });
          };
          
              return(
        <div className="register">
            <form>
             <input type="text"
             placeholder="fname"
             value={fname}
             onChange={(e)=>setName(e.target.value)}
             />
              <input type="text"
             placeholder="gmail"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
              <input type="number"
             placeholder="phone"
             value={phone}
             onChange={(e)=>setPhone(e.target.value)}
             />
              <input type="text"
             placeholder="pwd"
             value={passWord}
             onChange={(e)=>setPassword(e.target.value)}
             />
            </form><br></br>
             <button onClick={CreateUser}> ocliRegister</button>
        </div>
    )
}
export default Register;