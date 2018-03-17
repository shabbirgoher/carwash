import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './style.css';

const Footer = () => {
    return (
        <Row className="footer">
            <Col xs={12}>
                <Row>
                    <Col xs={12} md={2} />
                    <Col xs={12} md={4}>
                        <section>
                            <h4>Our Company</h4>
                            <p>
                                Smart Concept International is a premium Water less car cleaning services. We stand apart due to our focus on innovation, convenience & Eco-friendly practices. Through our proven method we are able to safely remove dirt, grime, and tar without harming your vehicle’s paint.
                            </p>
                        </section>
                    </Col>
                    <Col xs={12} md={2}>
                        <section>
                            <h5>Head Office</h5>
                            <p>
                                500 Terry Francois Street San Francisco, CA 94158
                                <hr />
                                123-456-7890
                                <br />
                                info@smartconceptinternational.com
                            </p>
                        </section>
                    </Col>
                    <Col xs={12} md={2}>
                        <section>
                            <h5>Operating Hours</h5>
                            <p>
                                500 Terry Francois Street San Francisco, CA 94158
                                <hr />
                                123-456-7890
                                <br />
                                info@smartconceptinternational.com
                            </p>
                        </section>
                    </Col>
                    <Col xs={12} md={2} />
                </Row>
            </Col>
        </Row>
    );
}

export default Footer;