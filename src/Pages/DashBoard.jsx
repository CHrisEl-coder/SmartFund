import SideBar from "../Components/SideBar"
import User from "../Components/User"
import Package from "../Components/PackagePlan"
import '../Styles/dashBoard.css'


export default function DashBoard() {

 
  return (
    <div className="mainDiv">
       <SideBar />
       <Package />
       <User />
    </div>
  )
}
