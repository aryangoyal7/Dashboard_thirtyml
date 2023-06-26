import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"
// import SubmissionForm from "../../components/datatable/change_pricing"
import ListAxios from "../../components/table/Table_axios"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar />
        <ListAxios/>
        
        
      </div>
    </div>
  )
}

export default List