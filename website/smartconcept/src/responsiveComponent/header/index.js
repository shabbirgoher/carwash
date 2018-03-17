import React from 'react';
import { Navbar, NavItem, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './style.css';
import Logo from './../../assets/images/company-logo.png';
const Header = () => {
    return (
        <div>
            <Navbar>
                <Nav pullRight>
                    <Navbar.Text className="headerTel">
                        <span>123-456-7890</span>
                    </Navbar.Text>
                </Nav>
            </Navbar>
            <Navbar collapseOnSelect className="companyLabel">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Image src={Logo} responsive/>
                        <span>SMART CONCEPT</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer exact to="/" activeStyle={{ background: 'transparent' }}>
                            <NavItem style={{ backgroundColorx: 'transparent' }}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer exact to="/new-appointment" >
                            <NavItem>Book Now</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
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