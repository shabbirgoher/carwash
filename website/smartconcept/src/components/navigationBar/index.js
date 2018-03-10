import React from 'react';
import { Link } from "react-router-dom";

import "./style.css";
import { AuthService } from "./../../services/authService";
import CompanyLogo from './../../assets/images/company-logo.png'
const NavigationBar = () => {
    // var Component;
    // if (AuthService.isAuthenticated()) {
    //     Component =
    //         <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
    //             <li style={{ margin: 5 }}><Link to="/new-appointment">Book Appointment</Link></li>
    //             <li style={{ margin: 5 }}><Link to="/sign-out">Sign Out</Link></li>
    //         </ul>;
    // }
    // else {
    //     Component =
    //         <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
    //             <li style={{ margin: 5 }}><Link to="/sign-in">Sign In</Link></li>
    //         </ul>;
    // }
    return (
        <div className="navHeader">
            <div className="nav-tel">
            <span>123-456-7890</span>
            </div>
            <div className="nav-container">
                <div className="nav-content-left">
                    <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                        <li style={{ margin: 5 }}>
                            <img src={CompanyLogo} style={{ width: '42px', height: '48px', objectFit: 'fill' }} />
                        </li>
                        <li style={{ margin: 5 }}>
                            <span>SMART CONCEPT</span>
                        </li>
                    </ul>
                </div>
                <div className="nav-content-right">
                    <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                        <li style={{ margin: 5 }}><Link to="/">Home</Link></li>
                    </ul>
                    <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                        <li style={{ margin: 5 }}><Link to="/"><span>Book Now</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
//new-appointment
export default NavigationBar;