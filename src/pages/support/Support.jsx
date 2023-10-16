import React from "react";
import "./support.css"
import SearchIcon from '@mui/icons-material/Search';
import SportsVolleyballOutlinedIcon from '@mui/icons-material/SportsVolleyballOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import TwitterIcon from '@mui/icons-material/Twitter';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

export default function Support() {
    return (
        <div className="support">
            <div className="supportWrapper">
                <div className="supportHead">
                    <h1 className="supportTitle">How can we help?</h1>
                    <div className="supportSearch">
                        <span>
                            <SearchIcon className="SearchIcon" />
                            <input type="text" id="search" name="search" className="searchInput" placeholder="Search our Support"/>
                            <button className="searchBtn">Search</button>
                        </span>
                        
                    </div>
                    <div className="supportSection">
                        <div className="supportItem">
                            <SportsVolleyballOutlinedIcon />
                            <p>Getting Started</p>
                            <KeyboardArrowRightIcon />
                        </div>
                        <div className="supportItem">
                            <PaymentIcon />
                            <p>How to make Payment</p>
                            <KeyboardArrowRightIcon />
                        </div>
                        <div className="supportItem">
                            <AccountCircleIcon />
                            <p>Account & Profile</p>
                            <KeyboardArrowRightIcon />
                        </div>
                        <div className="supportItem">
                            <WatchLaterIcon />
                            <p>How to check Admission Status</p>
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>
                    <div className="supportSection2">
                        <div className="section2Item">
                            <TwitterIcon />
                            <h3>Contact us on Twitter</h3>
                            <p>Message us on Twitter. We will contact you directly</p>
                            <button><a href="https://twitter.com/waleakaje" target="_blank">Tweet us</a></button>
                        </div>
                        <div className="section2Item">
                            <PermPhoneMsgIcon />
                            <h3>Give us a Call</h3>
                            <p>Take us over the phone for additional help</p>
                            <button><a href="https://wa.me/+2348143249436" target="_blank">Call Now</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
