import "./home.css";
import { Link } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";

export default function Home() {
  return (
    <div className="home">
      <div className="homeWrapper">
        <div className="homeTop">
          <h2 className="homeTitle">Admission Dashboard</h2>
          <span className="homeWelcome">
            Hello, Victor Ogunniran | Saturday, 27th Aug. 2022
          </span>
        </div>
        <div className="homeBoxWrapper">
          <div className="homeBox1">
            <span className="homeBoxTitle">UD APPLICATION</span>
            <div className="homeBoxLiWrapper">
              <span className="homeLinkTitle">Admission Open</span>
              <Link to="/undergraduateApplication" className="homeLink">
                <li className="homeLinkBtn">
                  <ArrowForward className="homeLinkIcon" />
                  <span className="homeLinkText">Apply Now</span>
                </li>
              </Link>
              <Link to="/pdsApplication" className="homeReadmore">
                Readmore
              </Link>
            </div>
          </div>
          <div className="homeBox1">
            <span className="homeBoxTitle">DP APPLICATION</span>
            <div className="homeBoxLiWrapper">
              <span className="homeLinkTitle">Admission Open</span>
              <Link to="/undergraduateApplication" className="homeLink">
                <li className="homeLinkBtn">
                  <ArrowForward className="homeLinkIcon" />
                  <span className="homeLinkText">Apply Now</span>
                </li>
              </Link>
              <Link to="/pdsApplication" className="homeReadmore">
                Readmore
              </Link>
            </div>
          </div>
           <div className="homeBox2">
            <span className="homeBoxTitle2">PG APPLICATION</span>
            <div className="homeBoxLiWrapper">
              <span className="homeLinkTitle2">Admission Close</span>
              <Link to="/undergraduateApplication" className="homeLink">
                <li className="homeLinkBtn">
                  <ArrowForward className="homeLinkIcon2" />
                  <span className="homeLinkText2">Apply Now</span>
                </li>
              </Link>
              <Link to="/pdsApplication" className="homeReadmore">
                Readmore
              </Link>
            </div>
          </div>
        </div>
        
        <div className="homeBoxWrapper">
          <div className="homeBox1">
            <span className="homeBoxTitle">UD APPLICATION</span>
            <div className="homeBoxLiWrapper">
              <span className="homeLinkTitle">Admission Open</span>
              <Link to="/undergraduateApplication" className="homeLink">
                <li className="homeLinkBtn">
                  <ArrowForward className="homeLinkIcon" />
                  <span className="homeLinkText">Apply Now</span>
                </li>
              </Link>
              <Link to="/pdsApplication" className="homeReadmore">
                Readmore
              </Link>
            </div>
          </div>
          <div className="homeBox2">
            <span className="homeBoxTitle2">PG APPLICATION</span>
            <div className="homeBoxLiWrapper">
              <span className="homeLinkTitle2">Admission Close</span>
              <Link to="/undergraduateApplication" className="homeLink">
                <li className="homeLinkBtn">
                  <ArrowForward className="homeLinkIcon2" />
                  <span className="homeLinkText2">Apply Now</span>
                </li>
              </Link>
              <Link to="/pdsApplication" className="homeReadmore">
                Readmore
              </Link>
            </div>
          </div>
          <div className="homeBox1">
            <span className="homeBoxTitle">SC APPLICATION</span>
            <div className="homeBoxLiWrapper">
              <span className="homeLinkTitle">Admission Open</span>
              <Link to="/undergraduateApplication" className="homeLink">
                <li className="homeLinkBtn">
                  <ArrowForward className="homeLinkIcon" />
                  <span className="homeLinkText">Apply Now</span>
                </li>
              </Link>
              <Link to="/pdsApplication" className="homeReadmore">
                Readmore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
