import React from 'react';
import { Row, Col, Image, Jumbotron } from 'react-bootstrap';

import ContactUs from './contact-us';

import CleaningImg from './../../assets/images/cleaning.png';
import CarWashImg from './../../assets/images/car-wash.png';
import './style.css';


const Home = () => {
    return (
        <div>
            <Row>
                <Col xs={12} className="homeContaint1">
                    <Image src={CleaningImg} responsive />
                    <div className="home-container1-text">
                        <h1>GIVE YOUR CAR SOME SHINE</h1>
                        <h3>WATER-LESS CAR CLEANING PROFESSIONALS SERVING OMAN</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} >
                    <Jumbotron className="home-container2">
                        <h4>Save Water, Give Water</h4>
                        <h5>With every wash Smart Concept saves water for those in need</h5>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="home-container3">
                    <Jumbotron>
                        <Row className="home-container3-row">
                            <Col xs={12} >
                                <h1>Why Choose Us?</h1>
                            </Col>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={0} md={2} />
                                    <Col xs={6} md={2} style={{ display: 'flex' }}>
                                        <div className="line-seperator" />
                                        <h4>Complete Water-Less Solution</h4>
                                    </Col>
                                    <Col xs={6} md={2} style={{ display: 'flex' }}>
                                        <div className="line-seperator" />
                                        <h4>Environment Friendly Cleaning</h4>
                                    </Col>
                                    <Col xs={6} md={2} style={{ display: 'flex' }}>
                                        <div className="line-seperator" />
                                        <h4>Parking Lot Remains Clean, Stain-Free & Dry</h4>
                                    </Col>
                                    <Col xs={6} md={2} style={{ display: 'flex' }}>
                                        <div className="line-seperator" />
                                        <h4>Available At Your Premises</h4>
                                    </Col>
                                    <Col xs={0} md={2} />
                                </Row>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col xs={12} >
                    <Jumbotron className="home-container2">
                        <h1>Our Service</h1>
                        <div>
                            <Image src={CarWashImg} responsive />
                            <span>Car Wash</span>
                        </div>
                    </Jumbotron>

                </Col>
            </Row>
            <Row>
                <Col xs={12} >
                    <Jumbotron className="home-container2">
                        <h1>Contact Us for a free Quote!</h1>
                        <ContactUs />
                    </Jumbotron>

                </Col>
            </Row>
        </div>
    );
}

export default Home;