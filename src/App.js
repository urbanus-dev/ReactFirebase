// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from './login';
import Register from './components/register';
import Hello from './components/classhello';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<LoginUser />} /> 
            <Route path="/register" element={<Register />} />
             <Route path="/login" element={<LoginUser />} />
             <Route path="/classhello" element={<Hello />} />
          </Routes><br /> 
        </header>
      </div>
    </Router>
  );
}

export default App;

//npm install react-router-dom