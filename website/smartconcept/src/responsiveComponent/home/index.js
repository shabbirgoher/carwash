import React from 'react';
import { Row, Col } from 'react-bootstrap';

import CleaningImg from './../../assets/images/cleaning.png';
const Home = () => {
    return (
        <Col xs={12} className="homeContaint1">
            <Row >
                <img src={CleaningImg}/>
            </Row>
        </Col>);
    ;
}

export default Home;