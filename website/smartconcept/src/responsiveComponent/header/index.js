import React from 'react';
import { Link } from "react-router-dom";

import { Row, Col, Navbar, NavItem, Nav, Image } from 'react-bootstrap';

import './style.css';
import Logo from './../../assets/images/company-logo.png';
const Header = () => {
    return (
        <Navbar collapseOnSelect>
            <Row>
                <Col xs={12}>
                    <Nav pullRight>
                        <Navbar.Text className="headerTel">
                            <span>123-456-7890</span>
                        </Navbar.Text>
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="companyLabel">
                    <Navbar.Header>
                        <Navbar.Text>
                            <Image src={Logo} responsive/>
                        </Navbar.Text>
                        <Navbar.Text >
                                <span>SMART CONCEPT</span>
                        </Navbar.Text>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                            <NavItem href="/">
                                Home
                            </NavItem>
                            <NavItem href="/new-appointment">
                                Book Now
                            </NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Col>
            </Row>
        </Navbar>
    );
}

export default Header;

// <Col xs={12} className="header fixed-top">
//             <Row className="headerText">
//                 <Col xs={8} md={10}/>
//                 <Col xs={4} md={2}className="headerTel">
//                     <span>123-456-7890</span>
//                 </Col>
//             </Row>
//             <Row className="headerMenu">
//                 <Col xs={7} md={3} className="headerMenuLeft">
//                     <img src={Logo} style={{ width: '42px', height: '48px', objectFit: 'fill' }} />
//                     <span className="companyLabel">SMART CONCEPT</span>
//                 </Col>
//                 <Col xs={5} md={9} className="headerMenuRight">
//                     <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
//                         <li style={{ margin: 5 }}><Link to="/">Home</Link></li>
//                         <li style={{ margin: 5 }}><Link to="/new-appointment">Book Now</Link></li>
//                     </ul>
//                 </Col>
//             </Row>
//         </Col>