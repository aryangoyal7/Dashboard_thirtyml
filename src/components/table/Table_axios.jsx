import { useState, useEffect } from 'react';
import "./table.scss";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import jwt_decode from 'jwt-decode';

const List_axios = () => {
  const [bookings, setBookings] = useState([]);
  // const [rows, setRows] = useState([]);

  useEffect(() => {
      const fetchBookings = async () => {
        try {
          // Get the access token from the cookie
          const accessToken = document.cookie;
          console.log("ACCESS: ", document.cookie)
          const decodedToken = jwt_decode(accessToken);
          const clubID = decodedToken.user.id;
          console.log("USER ID: ", decodedToken.user);
          const response = await axios.get(
            `http://localhost:5005/api/bookings/club/${clubID}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          setBookings(response.data.bookings);
          console.log(response.data.bookings);
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      };
  
      fetchBookings();
    }, []);
    console.log("MY BOOKINGS",bookings[0]?.ClubID)
    /*
    const fetchData = async () => {
      const result = await axios.get('/api/bookings'); // replace with your API endpoint
      setRows(result.data);
    };
    fetchData();
  }, []);
  */
  

  // const fetchBookings = async () => {
  //   const response = await axios.get('/api/bookings', { // replace with your API endpoint
  //     params: {
  //       ClubId: 'ClubId',
  //     }
  //   });
  //   setRows(response.data);
  // };
  // fetchBookings();
// }, []);





  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell className="tableCell">Club ID</TableCell> */}
            <TableCell className="tableCell">Customer Name</TableCell>
            <TableCell className="tableCell">Booking type</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Mobile Number</TableCell>
            <TableCell className="tableCell">Time</TableCell>
            {/* <TableCell className="tableCell">Amount</TableCell> */}
            {/* <TableCell className="tableCell">Payment Method</TableCell> */}
            {/* <TableCell className="tableCell">Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.length === 0? (<>
          No BOOKINGS FOUND
          </>):(<>
          
          {bookings.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">{row.clubname}</TableCell>
              <TableCell className="tableCell">{row.bookingType}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              {/* <TableCell className="tableCell">
                <span className={`status Approved`}>Status</span>
              </TableCell> */}
            </TableRow>
          ))}
          </>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List_axios;
