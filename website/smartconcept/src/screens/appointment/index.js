import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import Car from './car';
import Address from './address';
import Package from './package';
import Days from './days';
import { AppointmentService } from './../../services/appointmentService';
import InputalidationMessage from './../../components/inputalidationMessage';

import './style.css'

export default class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carId: '',
            car: {},
            address: {},
            package: {},
            days: [],
            step: 1,
            redirectToConfirmation: false,
            errorMessage: ''
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

    submit = () => {
        const data = {
            carId: this.state.car.carId,
            address: this.state.address,
            package: this.state.package,
            days: this.state.days
        }
        AppointmentService.bookAppointment(data)
            .then((response) => this.setState({ redirectToConfirmation: true, loading: false }))
            .catch((err) => this.setState({ errorMessage: err.message || 'Unable to save data', loading: false }));
    }

    render() {
        if (this.state.redirectToConfirmation) {
            return <Redirect to={{
                pathname: 'new-appointment/confirmation',
                state: {
                    object: {
                        car: this.state.car,
                        address: this.state.address,
                        package: this.state.package,
                        days: this.state.days
                    }
                }
            }} />
        }
        var Step;
        switch (this.state.step) {
            case 1:
                Step = <Car carId={this.state.car.carId} saveValues={this.saveValues} nextStep={this.nextStep} />;
                break;
            case 2:
                Step = <Address address={this.state.address} saveValues={this.saveValues}
                    nextStep={this.nextStep} previousStep={this.previousStep} />;
                break;
            case 3:
                Step = <Package saveValues={this.saveValues}
                    nextStep={this.nextStep} previousStep={this.previousStep} />;
                break;
            case 4:
                Step = <Days package={this.state.package} saveValues={this.saveValues}
                    nextStep={this.submit} previousStep={this.previousStep} />;
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
            <Row>
                <Col xs={12}>
                    <InputalidationMessage message={this.state.errorMessage} />
                </Col>
            </Row>

        </Col>
    }
}