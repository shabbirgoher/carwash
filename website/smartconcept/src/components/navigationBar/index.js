import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./style.css";

const NavigationBar = () => (
    <div>
        <div className="nav-container">
            <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                <li style={{ margin: 5 }}><Link to="/">Home</Link></li>
                <li style={{ margin: 5 }}><Link to="/about">About</Link></li>
            </ul>
        </div>
        <hr />
    </div>
)

export default NavigationBar;