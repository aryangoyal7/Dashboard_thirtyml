import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SubmissionForm = () => {
  const [Stag_price, setParam1] = useState("");
  const [Couple_price, setParam2] = useState("");
  const [Lady_price, setParam3] = useState("");

  console.log(document.cookie.split(";")[1])
  console.log(document.cookie)
  const handleSubmit = async (e) => {
    const accessToken = document.cookie;
  
    const decodedToken = jwt_decode(accessToken);
    console.log("decodedToken", decodedToken.user);
    e.preventDefault();
    try {
      axios.defaults.headers.common["Authorization"] = document.cookie.split(";")[1];
      console.log("AXIOSSSS: ",axios.defaults.headers.common["Authorization"])
      console.log("TRYING")
      const response = await axios.put(`https://server.thirtyml.in/api/bookings/${decodedToken.user.id}`,
      {
        "ClubID": decodedToken.user.id,
        "ClubName": decodedToken.user.ClubName,
        "StagPrice": Stag_price,
        "CouplePrice": Couple_price,
        "LadyPrice": Lady_price
      },
      {
        headers:{
          // "authorization": 'Bearer '+document.cookie.split(";")[1],
          Authorization: document.cookie
        }
      },);
      toast("Booking Successfull!");
      console.log("HEY TEHEREL ",response.data); // handle the response as needed
    } catch (error) {
      
      toast("Booking Failed!");
      console.error(error);
    }
  };
    
    // fetch this by first adding filter by params


  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Stag_price"
        variant="outlined"
        fullWidth
        margin="normal"
        value={Stag_price}
        onChange={(e) => setParam1(e.target.value)}
      />
      <TextField
        label="Couple_price"
        variant="outlined"
        fullWidth
        margin="normal"
        value={Couple_price}
        onChange={(e) => setParam2(e.target.value)}
      />
      <TextField
        label="Lady_price"
        variant="outlined"
        fullWidth
        margin="normal"
        value={Lady_price}
        onChange={(e) => setParam3(e.target.value)}
      />
      <ToastContainer />
      <Button type="submit" variant="contained" color="primary">
        Submit New prices
      </Button>
    </form>
  );
};

export default SubmissionForm;
