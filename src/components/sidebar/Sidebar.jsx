import "./sidebar.css";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { Home, Beenhere, AccountBalance, SupportAgent, Https, Logout } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <img src={Logo} alt="" className="sidebarLogo" />
        <h2 className="sidebarTitle">
          LAUTECH <br /> Admission Portal
		  <hr className="sidebarLine"/>
        </h2>
        <ul className="sidebarUlList">
          <Link to="/" className="sidebarLink">
            <li className="sidebarList">
              <Home className="sidebarIcon" />
              Dashboard
            </li>
          </Link>
          <Link to="/status" className="sidebarLink">
            <li className="sidebarList">
              <Beenhere className="sidebarIcon" />
              Admission Status
            </li>
          </Link>
          <Link to="/payments" className="sidebarLink">
            <li className="sidebarList">
              <AccountBalance className="sidebarIcon" />
              Payments
            </li>
          </Link>
          <Link to="/support" className="sidebarLink">
            <li className="sidebarList">
              <SupportAgent className="sidebarIcon" />
              Support
            </li>
          </Link>
          <Link to="/changePassword" className="sidebarLink">
            <li className="sidebarList">
              <Https className="sidebarIcon" />
              Change Password
            </li>
          </Link>
          <Link to="/logout" className="sidebarLink">
            <li className="sidebarList">
              <Logout className="sidebarIcon" />
              Logout
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
