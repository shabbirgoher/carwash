import React from 'react';
import { Link } from "react-router-dom";

import "./style.css";

const NavigationBar = () => (
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
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                <li style={{ margin: 5 }}><Link to="/login">Login</Link></li>
                <li style={{ margin: 5 }}><Link to="/register">Register</Link></li>
            </ul>
        </div>
        <hr />
    </div>
)

export default NavigationBar;