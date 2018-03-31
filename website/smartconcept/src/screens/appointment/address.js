import React, { Component } from 'react'
import { Row, Col, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

import InputalidationMessage from './../../components/inputalidationMessage';
import { AppointmentService } from './../../services/appointmentService';
import './style.css';

function isAlphanumeric(value) {
    var letters = /^[0-9a-zA-Z\s]+$/;
    return value && value.match(letters);
}
export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            building: props.address.building,
            parkingNumber: props.address.parkingNumber,
            apartment: props.address.apartment,
            buildings: [],
            errorMessage: '',
            showModal: false,
            loading: false
        }
    }
    componentDidMount() {
        this.fetchBuildings();
    }
    fetchBuildings() {
        AppointmentService.buildings()
            .then((response) => this.setState({ buildings: response }))
            .catch((err) => this.setState({ errorMessage: err.message || 'Unable to fetch data', loading: false }));
    }
    getBuildingValidationState = () => {
        return this.state.building && this.state.building !== 'None' ? 'success' : 'error';
    }
    getParkingNumberValidationState = () => {
        return isAlphanumeric(this.state.parkingNumber) ? 'success' : 'error';
    }
    getAppartmentValidationState = () => {
        return isAlphanumeric(this.state.apartment) ? 'success' : 'error';
    }
    next = (e) => {
        e.preventDefault()
        if (this.hasError([this.getBuildingValidationState, this.getParkingNumberValidationState, this.getAppartmentValidationState])) {
            this.setState({ errorMessage: 'Please correct the above details', loading: false });
            return;
        }
        var data = {
            address: {
                building: this.state.building,
                parkingNumber: this.state.parkingNumber,
                apartment: this.state.apartment
            }
        }
        this.props.saveValues(data)
        this.props.nextStep()
    }
    hasError(callbacks) {
        return !callbacks.every(callback => callback() === 'success');
    }
    previous = (e) => {
        e.preventDefault()
        var data = {
            address: {
                building: this.state.building,
                parkingNumber: this.state.parkingNumber,
                apartment: this.state.apartment
            }
        }
        this.props.saveValues(data)
        this.props.previousStep()
    }

    render() {
        return <Row>
            <Col xs={12}>
                <form onSubmit={this.login}>
                    <Row>
                        <Col xs={12}>
                            <FormGroup className="appointment-form-group" controlId="building"
                                validationState={this.getBuildingValidationState()}>
                                <InputGroup className="appointment-input">
                                    <FormControl componentClass="select" placeholder="Select your building" className="input-box"
                                        onChange={event => this.setState({ building: event.target.value })} value={this.state.building}>
                                        <option value="None">Select your building</option>
                                        {this.state.buildings.map((building, index) => {
                                            return (<option key={building} value={building}>{building}</option>);
                                        })}
                                    </FormControl>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup className="appointment-form-group" controlId="parkingNumber" validationState={this.getParkingNumberValidationState()}>
                                <InputGroup className="appointment-input">
                                    <FormControl type="text" placeholder="Parking number" className="input-box"
                                        onChange={event => this.setState({ parkingNumber: event.target.value.trim() })} value={this.state.parkingNumber} />
                                </InputGroup>
                                <FormControl.Feedback />
                            </FormGroup>
                            <FormGroup className="appointment-form-group" controlId="apartment" validationState={this.getAppartmentValidationState()}>
                                <InputGroup className="appointment-input">
                                    <FormControl type="text" placeholder="Your appartment" className="input-box"
                                        onChange={event => this.setState({ apartment: event.target.value.trim() })} value={this.state.apartment} />
                                </InputGroup>
                                <FormControl.Feedback />
                            </FormGroup>
                        </Col>
                    </Row>
                </form>
                <Row style={{ display: 'block' }} className="appointment-container-btn">
                    <Col xs={4}>
                        <Button onClick={this.previous} disabled={this.state.loading}>Prev</Button>
                    </Col>
                    <Col xs={4} />
                    <Col xs={4}>
                        <Button onClick={this.next} disabled={this.state.loading}>Next</Button>
                    </Col>
                    <Col xs={12}>
                        <InputalidationMessage message={this.state.errorMessage} />
                    </Col>
                </Row>
            </Col>
        </Row>;
    }
}