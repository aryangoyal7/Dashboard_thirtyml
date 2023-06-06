import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

const SignupComponent = () => {
  const [clubname, setClubname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!clubname || !phonenumber || !password) {
      setError("Please fill in all fields");
      return;
    }

    const data = {
      clubname,
      phonenumber,
      password,
    };

    try {
      const response = await axios.post("/api/Clubusers/registerClub", data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setError(null);
      // Redirect to the home page after successful signup.
      window.location.href = "/";
    } catch (error) {
      setError("An error occurred during signup. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <TextField
        label="Club Name"
        value={clubname}
        onChange={(e) => setClubname(e.target.value)}
      />

      <TextField
        label="Phone Number"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p>{error}</p>}

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignupComponent;
