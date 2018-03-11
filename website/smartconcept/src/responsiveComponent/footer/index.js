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
                                I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
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