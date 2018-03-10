import React from 'react';
import { Row, Col, Image, Jumbotron, Carousel } from 'react-bootstrap';

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
                        <h3>Reliable car cleaning professionals serving Oman</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} >
                    <Jumbotron className="home-container2">
                        <h4>Call Now  123-456-7890</h4>
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
                                        <h4>
                                            Certified Professional Cleaners
                                    </h4>
                                    </Col>
                                    <Col xs={6} md={2} style={{ display: 'flex' }}>
                                        <div className="line-seperator" />
                                        <h4>
                                            Environmentally Friendly Cleaning
                                    </h4>
                                    </Col>
                                    <Col xs={6} md={2} style={{ display: 'flex' }}>
                                        <div className="line-seperator" />
                                        <h4>
                                            100% Satisfaction Guaranteed
                                    </h4>
                                    </Col>
                                    <Col xs={6} md={2} style={{ display: 'flex' }}>
                                        <div className="line-seperator" />
                                        <h4>
                                            Available Evenings & Weekends
                                    </h4>
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
            <Row style={{ backgroundColor: '#DEFF4F' }}>
                <Col xs={12} className="home-container5">
                    <Carousel>
                        <Carousel.Item >
                            <Col xs={1} md={2} />
                            <Col xs={10} md={8}>
                                <Jumbotron>
                                    <h5>Nicole Garcia</h5>
                                    <p>
                                        “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”
                                    </p>
                                </Jumbotron>
                            </Col>
                            <Col xs={1} md={2} />
                        </Carousel.Item>
                        <Carousel.Item >
                            <Col xs={1} md={2} />
                            <Col xs={10} md={8}>
                                <Jumbotron>
                                    <h5>Christopher Davis</h5>
                                    <p>
                                        “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”
                                    </p>
                                </Jumbotron>
                            </Col>
                            <Col xs={1} md={2}/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <Col xs={1} md={2} />
                            <Col xs={10} md={8}>
                                <Jumbotron>
                                    <h5>Robert Harris</h5>
                                    <p>
                                        “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”
                                    </p>
                                </Jumbotron>
                            </Col>
                            <Col xs={1} md={2} />
                        </Carousel.Item>

                    </Carousel>
                </Col>
            </Row>
        </div>
    );
}

export default Home;