import "./topbar.css";
import Avatar from "/src/assets/avatar.webp";
import { Search } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarHead">
          <input
            type="text"
            placeholder="Search For....."
            className="topbarSearch"
          />
          <Search className="topbarSearchIcon" />
          <div className="topbarWelAvatar">
            <span className="topbarWelcome">Welcome, Venk Olatiloye</span>
            <img src={Avatar} alt="" className="topbarAvatar" />
          </div>
        </div>
      </div>
    </div>
  );
}
