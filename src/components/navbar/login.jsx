import React, { useState } from 'react';
import axios from 'axios';
import "./login.css";

const LoginModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [clubname, setClubname] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  /*
    Note that this example assumes that the server is already set up to handle
    authentication using JWT, and that it has API endpoints at /api/login and
    /api/register that accept POST requests with a JSON payload containing a\
    username, mobile number, and password field.
  */

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://35.192.171.200/api/Clubusers/loginClub', {
        clubname,
        mobileNumber,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setError(null);
      // do something with the token, like redirect to dashboard page
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://35.192.171.200/api/Clubusers/registerClub', {
        clubname,
        mobileNumber,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setError(null);
      // do something with the token, like redirect to dashboard page
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="modal">
      <h2>{isLogin ? 'Log in' : 'Register'}</h2>
      <div className="form">
        <label htmlFor="username">Clubname</label>
        <input type="text" id="username" value={clubname} onChange={(e) => setClubname(e.target.value)} />
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input type="text" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="error">{error}</p>}
        <button onClick={isLogin ? handleLogin : handleRegister}>{isLogin ? 'Log in' : 'Register'}</button>
        <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Register' : 'Log in'}</button>
      </div>
    </div>
  );
};

export default LoginModal;
