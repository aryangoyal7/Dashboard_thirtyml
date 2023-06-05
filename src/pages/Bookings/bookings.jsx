import List from "../../components/table/Table";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const bookings = () => {
    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
       
      
          <div className="listContainer">
                    <div className="listTitle">All bookings</div>
                    <List/>
          
            
          </div>
        </div>
      </div>
    );
  };
  
  export default bookings;
  