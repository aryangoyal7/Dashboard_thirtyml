import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

const SubmissionForm = () => {
  const [Stag_price, setParam1] = useState("");
  const [Couple_price, setParam2] = useState("");
  const [Lady_price, setParam3] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/bookings", {
        Stag_price,
        Couple_price,
        Lady_price,
      });
      console.log(response.data); // handle the response as needed
    } catch (error) {
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
      <Button type="submit" variant="contained" color="primary">
        Submit New prices
      </Button>
    </form>
  );
};

export default SubmissionForm;
