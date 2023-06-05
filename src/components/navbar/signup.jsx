import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

const SignupComponent = () => {
  const [clubname, setClubname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      clubname,
      phonenumber,
      password,
    };

    try {
      await axios.post("/api/signup", data);

      // Redirect to the home page after successful signup.
      window.location.href = "/";
    } catch (error) {
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

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignupComponent;
