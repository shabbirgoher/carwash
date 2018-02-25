import React from 'react';
import { Link } from "react-router-dom";

import "./style.css";

const NavigationBar = () => (
    <div>
        <div className="nav-container">
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                <li style={{ margin: 5 }}><Link to="/">Home</Link></li>
                <li style={{ margin: 5 }}><Link to="/about">About</Link></li>
                <li style={{ margin: 5 }}><Link to="/our-goal">Our Goal</Link></li>
                <li style={{ margin: 5 }}><Link to="/contact-us">Conact us</Link></li>
            </ul>
        </div>
        <hr />
    </div>
)

export default NavigationBar;