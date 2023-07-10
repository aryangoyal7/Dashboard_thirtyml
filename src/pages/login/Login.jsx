import React, { useState } from 'react';
import axios from 'axios';
import "./login.scss"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [Mobile_number, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [ClubName, setClubName] = useState('');
  const navigate = useNavigate();
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'Mobile_number') {
      setMobileNumber(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    else if (name === 'ClubName') {
      setClubName(value);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create an object with the login data
    const loginData = {
      ClubName,
      Mobile_number,
      password
    };

    axios.post('https://server.thirtyml.in/api/Clubusers/loginClub', loginData, { withCredentials: true })
      .then((response) => {
        // console.log("LOGIN DATA:", loginData);
        // console.log("api response here")
        // Handle the response from the API
        // console.log(response.data.access_token);
        console.log("login successful")
        localStorage.setItem("access_token",response.data.access_token);
        console.log("COOKIE: ", response.data);
        axios.defaults.headers.common["Authorization"] = response.data.access_token;
        console.log("AXIOS: ",axios.defaults.headers.common["Authorization"])
        document.cookie = response.data.access_token;
        // Add your desired logic here for successful login
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        // Add your desired logic here for failed login
      });

    // Clear the input fields
    setMobileNumber('');
    setPassword('');
    setClubName('');
    toast("LOGGED IN!, Redirecting in 5 seconds");
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        {/* <label htmlFor="Mobile_number">Mobile Number:</label> */}

        <TextField type="text" id="ClubName" name="ClubName" value={ClubName} onChange={handleInputChange} label="ClubName" variant="outlined" sx={{margin: "20px"}} />
      </div>
      <div>
        {/* <label htmlFor="Mobile_number">Mobile Number:</label> */}

        <TextField type="text" id="Mobile_number" name="Mobile_number" value={Mobile_number} onChange={handleInputChange} label="Mobile Number" variant="outlined" sx={{margin: "20px"}} />
      </div>
      <div>
        {/* <label htmlFor="password">Password:</label> */}
      <TextField type="password" id="password" name="password" label="Password" value={password} onChange={handleInputChange} variant="outlined" sx={{margin: "20px"}} />
      </div>
      {/* <button type="submit">Login</button> */}
      <Button variant="contained" type="submit" sx={{margin: "20px"}}>Login</Button>
      <ToastContainer />
    </form>
    

  )
}

export default Login