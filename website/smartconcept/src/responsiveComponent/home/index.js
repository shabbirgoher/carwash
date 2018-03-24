import React from 'react';
import { Row, Col, Image, Jumbotron, Carousel, CarouselItem } from 'react-bootstrap';

import ContactUs from './contact-us';

import CleaningImg1 from './../../assets/images/cleaning1.png';
import CleaningImg2 from './../../assets/images/cleaning2.png';
import Services1Img from './../../assets/images/service-trolley.png';
import Services2Img from './../../assets/images/service-tyre-polish.png';
import Services3Img from './../../assets/images/service-rim.png';
import Services4Img from './../../assets/images/service-body-polish.png';
import Services5Img from './../../assets/images/service-micro-fiber.png';
import Services6Img from './../../assets/images/service-professional.png';
import Services7Img from './../../assets/images/service-flexible.png';
import './style.css';


const Home = () => {
    return (
        <div>
            <Row>
                <Col xs={12} className="homeContaint1">
                    <Jumbotron>
                        <h1>GIVE YOUR CAR SOME SHINE</h1>
                        <h3>Water-Less Car Cleaning Professionals Serving Oman</h3>
                    </Jumbotron>
                </Col>
                <Col xs={12} className="homeContaint1">
                    <Carousel className="homeCarousel" indicators={false} controls={false} pauseOnHover={false} interval={1000}>
                        <Carousel.Item>
                            <Image src={CleaningImg1} responsive />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={CleaningImg2} responsive />
                        </Carousel.Item>
                    </Carousel>
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
                        <Row>
                            <Col xs={12} >
                                <h1>Our Service</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Row>
                                <Col xs={0} md={2} />
                                <Col xs={12} md={4}>
                                    <Image src={Services1Img} responsive />
                                </Col>
                                <Col xs={12} md={4}>
                                    <Image src={Services2Img} responsive />
                                </Col>
                                <Col xs={0} md={2} />
                            </Row>
                            <Row>
                                <Col xs={0} md={2} />
                                <Col xs={12} md={4}>
                                    <Image src={Services3Img} responsive />
                                </Col>
                                <Col xs={12} md={4}>
                                    <Image src={Services4Img} responsive />
                                </Col>
                                <Col xs={0} md={2} />
                            </Row>
                            <Row>
                                <Col xs={0} md={2} />
                                <Col xs={12} md={4}>
                                    <Image src={Services5Img} responsive />
                                </Col>
                                <Col xs={12} md={4}>
                                    <Image src={Services6Img} responsive />
                                </Col>
                                <Col xs={0} md={2} />
                            </Row>
                            <Row>
                                <Col xs={0} md={4} />
                                <Col xs={12} md={4}>
                                    <Image src={Services7Img} responsive />
                                </Col>
                                <Col xs={0} md={4} />
                            </Row>
                        </Row>
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