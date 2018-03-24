import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Car from './car';
import Address from './address';
import Package from './package';
import Days from './days';

import './style.css'

export default class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: {},
            address: {},
            package: {},
            days: [],
            step: 1
        }
    }

    render() {
        var Step;
        switch (this.state.step) {
            case 1:
                Step = <Car car = {this.state.car}/>;
                break;
            case 2:
                Step = Address;
                break;
            case 3:
                Step = Package;
                break;
            case 4:
                Step = Days;
                break;
        }

        return <Row className="appointment-container">
            <Col xs={0} md={4} />
            <Col xs={12} md={4}>
                {Step}
            </Col>
            <Col xs={0} md={4} />
        </Row>
    }
}