import "./admission.css";
import { Search } from "@mui/icons-material";

export default function Admission() {
  return (
	<div className="admission">
    <div className="admissionWrapper">
      <div className="admissionContainer">
        <div className="admissionTitle">
          <h2>Your Profile</h2>
          <p><b>Hi Victor</b> Welcome to your Admission Status Page where you verify your current admission status<br></br> as applied on the school portal</p>
          <button className="admissionBtn">Confirm Status</button>
        </div>
        <div className="admissionImg">
          <img src="./src/assets/vec.jpg" alt="vectorimg" className="admissionVec"/>
        </div>
      </div>
    </div>

    
  </div>
  )
}
