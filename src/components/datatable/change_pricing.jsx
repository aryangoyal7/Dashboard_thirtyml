



import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

const SubmissionForm = () => {
  const [stagPrice, setStagPrice] = useState('');
  const [couplePrice, setCouplePrice] = useState('');
  const [ladyPrice, setLadyPrice] = useState('');
  const [clubID, setClubID] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bookings', {
        Stag_price: stagPrice,
        Couple_price: couplePrice,
        Lady_price: ladyPrice,
        ClubId: clubID,
        MobileNumber: mobileNumber,
        Time: time,
      });
      console.log(response.data); // handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Stag Price"
        variant="outlined"
        fullWidth
        margin="normal"
        value={stagPrice}
        onChange={(e) => setStagPrice(e.target.value)}
      />
      <TextField
        label="Couple Price"
        variant="outlined"
        fullWidth
        margin="normal"
        value={couplePrice}
        onChange={(e) => setCouplePrice(e.target.value)}
      />
      <TextField
        label="Lady Price"
        variant="outlined"
        fullWidth
        margin="normal"
        value={ladyPrice}
        onChange={(e) => setLadyPrice(e.target.value)}
      />
      <TextField
        label="Club ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={clubID}
        onChange={(e) => setClubID(e.target.value)}
      />
      <TextField
        label="Mobile Number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <TextField
        label="Time"
        variant="outlined"
        fullWidth
        margin="normal"
        value={ladyPrice}
        onChange={(e) => setTime(e.target.value)}
      />
      
      <Button type="submit" variant="contained" color="primary">
        Submit New Prices
      </Button>
    </form>
  );
};

export default SubmissionForm;

