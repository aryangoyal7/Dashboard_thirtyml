import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";
// import Table_axios from "../../components/table/Table_axios";
// import { useEffect } from "react";
// import Axios from 'axios';
import SubmissionForm from "../../components/datatable/change_pricing";

const Home = () => {

//   async function UserData() {
//     // console.log("USE PARAMS: ", hotel);
//     try {
//       const token = document.cookie.split(';')[1].split(" ")[1];
//       const response = await Axios.get(
//         `http://localhost:5005/api/Clubusers/currentClub`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("REQUEST COMPLETED ", response.data);

//     } catch (error) {

//       console.log(error);
//     }
//   }
// useEffect(() => {
//   UserData();
// }, [])

  console.log(document.cookie);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
     
    
        <div className="listContainer">
          <div className="listTitle">Change Pricing</div>
        
          <SubmissionForm/>
        </div>
      </div>
    </div>
  );
};

export default Home;
