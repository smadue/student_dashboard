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
                            <div className="supportText">
                                <SportsVolleyballOutlinedIcon className="supportIcon"/>
                                <p>Getting Started</p>
                            </div>
                            <KeyboardArrowRightIcon className="supportArrow"/>
                        </div>
                        <div className="supportItem">
                            <div className="supportText">
                                <PaymentIcon className="supportIcon"/>
                                <p>How to make Payment</p>
                            </div>
                            <KeyboardArrowRightIcon className="supportArrow"/>
                        </div>
                        <div className="supportItem">
                            <div className="supportText">
                                <AccountCircleIcon className="supportIcon"/>
                                <p>Account & Profile</p>
                            </div>
                            <KeyboardArrowRightIcon className="supportArrow"/>
                        </div>
                        <div className="supportItem">
                            <div className="supportText">
                                <WatchLaterIcon className="supportIcon"/>
                                <p>How to check Admission Status</p>
                            </div>
                            <KeyboardArrowRightIcon className="supportArrow"/>
                        </div>
                    </div>
                    
                    <div className="supportSection2">
                        <div className="section2Item">
                            <TwitterIcon className="section2ItemIcon"/>
                            <h3>Contact us on Twitter</h3>
                            <p>Message us on Twitter. We will contact you directly</p>
                            <button><a href="https://twitter.com/waleakaje" target="_blank">Tweet us</a></button>
                        </div>
                        <div className="section2Item">
                            <PermPhoneMsgIcon className="section2ItemIcon"/>
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
