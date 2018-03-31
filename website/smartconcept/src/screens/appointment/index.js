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
            carId: '',
            address: {},
            package: {},
            days: [],
            step: 1
        }
    }
    saveValues = (fields) => {
        this.setState(fields);
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    previousStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }
    render() {
        var Step;
        switch (this.state.step) {
            case 1:
                Step = <Car carId={this.state.carId} saveValues={this.saveValues} nextStep={this.nextStep} />;
                break;
            case 2:
                Step = <Address />;
                break;
            case 3:
                Step = <Package />;
                break;
            case 4:
                Step = <Days />;
                break;
        }

        return <Col xs={12} className="appointment-container">
            <Row className="appointment-container-row">
                <Col xs={0} md={4} />
                <Col xs={12} md={4}>
                    {Step}
                </Col>
                <Col xs={0} md={4} />
            </Row>
        </Col>
    }
}