import React from 'react';
import { Link } from "react-router-dom";

import "./style.css";
import { AuthService } from "./../../services/authService";

const NavigationBar = () => {
    var Component;
    if (AuthService.isAuthenticated()) {
        Component =
        <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
            <li style={{ margin: 5 }}><Link to="/new-appointment">Book Appointment</Link></li>
        </ul>;
    }
    else {
        Component =
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                <li style={{ margin: 5 }}><Link to="/login">Login</Link></li>
                <li style={{ margin: 5 }}><Link to="/register">Register</Link></li>
            </ul>;
    }
    return (
        <div className="nav-container">
            <div className="nav-content-left">
                <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                    <li style={{ margin: 5 }}><Link to="/">Home</Link></li>
                    <li style={{ margin: 5 }}><Link to="/about">About</Link></li>
                    <li style={{ margin: 5 }}><Link to="/our-goal">Our Goal</Link></li>
                    <li style={{ margin: 5 }}><Link to="/contact-us">Conact us</Link></li>
                </ul>
            </div>
            <div className="nav-content-right">
                {Component}
            </div>
            <hr />
        </div>
    )
}
//new-appointment
export default NavigationBar;