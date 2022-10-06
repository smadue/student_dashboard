import "./admission.css";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";

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

    <div className="admissionChart">
      <Chart data={userData} title="Admitted Students Chart" dataKey="Admitted"/>
    </div>

    <div className="admissionProfile">
      <div className="admissionProfileWrapper">
        <h3 className="admissionProfileTitle">Admission Profile</h3>
        <h4 className="admissionStatus">Admission Status: Not Yet Admitted</h4>
        <div className="admissionDetail">
          <span className="admissionDetailTitle">Application Number: <b>A10243678CF</b></span>
          <span className="admissionDetailTitle">First Name: <b>Olaoluwa</b></span>
          <span className="admissionDetailTitle">Last Name: <b>Victor</b></span>
          <span className="admissionDetailTitle">Surname Name: <b>Ogunniran</b></span>
          <span className="admissionDetailTitle">Course: <b>Pure & Applied Chemistry</b></span>
          <button className="admissionStatusBtn">Accept Admission</button>
        </div>
      </div>
    </div>
  </div>
  )
}
