import React, { useState } from 'react';
import axios from 'axios';
import "./login.css";
import { useNavigate } from 'react-router-dom';

const LoginModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false); // Track login status

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5005/api/Clubusers/loginClub', {
        username,
        mobileNumber,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setError(null);
      setLoggedIn(true); // Set login status to true
      // Redirect to the home route
      navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5005/api/Clubusers/registerClub', {
        username,
        mobileNumber,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setError(null);
      setLoggedIn(true); // Set login status to true
      // Redirect to the home route
      navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  // Render null if user is already logged in
  if (isLoggedIn) {
    return null;
  }

  return (
    <div className="modal">
      <h2>{isLogin ? 'Log in' : 'Register'}</h2>
      <div className="form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input type="text" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="error">{error}</p>}
        <button onClick={() => {
          if (isLogin) {
            handleLogin();
          } else {
            handleRegister();
          }
        }}>{isLogin ? 'Log in' : 'Register'}</button>
        <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Register' : 'Log in'}</button>
      </div>
    </div>
  );
};

export default LoginModal;
