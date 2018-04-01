import React, { Component } from 'react'
import { Row, Col, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

import InputalidationMessage from './../../components/inputalidationMessage';
import { AppointmentService } from './../../services/appointmentService';
import NewCar from './new-car';
import './style.css';

export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carId: props.carId,
            cars: [],
            errorMessage: '',
            showModal: false,
            loading: false
        }
    }
    componentDidMount() {
        this.fetchCars();
    }
    getCarBrandValidationState = () => {
        return this.state.carId && this.state.carId !== 'None' ? 'success' : 'error';
    }

    fetchCars() {
        AppointmentService.cars()
            .then((response) => this.setState({ cars: response.cars }))
            .catch((err) => this.setState({ errorMessage: err.message || 'Unable to fetch data', loading: false }));
    }
    handleModalClose = () => {
        this.setState({
            showModal: false
        });
        this.fetchCars();
    }
    next = (e) => {
        e.preventDefault()
        if (this.hasError(this.getCarBrandValidationState)) {
            this.setState({ errorMessage: 'Please correct the above details', loading: false });
            return;
        }
        var data = {
            car: this.state.cars.find(car => car.carId === this.state.carId)
        }
        this.props.saveValues(data)
        this.props.nextStep()
    }
    hasError(callback) {
        return callback() !== 'success';
    }
    render() {
        return <Row>
            <Col xs={12}>
                <form onSubmit={this.login}>
                    <Row>
                        <Col xs={12}>
                            <FormGroup className="appointment-form-group" controlId="carId"
                                validationState={this.getCarBrandValidationState()}>
                                <InputGroup className="appointment-input">
                                    <FormControl componentClass="select" placeholder="Car brand" className="input-box"
                                        onChange={event => this.setState({ carId: event.target.value })} value={this.state.carId}>
                                        <option value="None">select car brand</option>
                                        {this.state.cars.map((car, index) => {
                                            return (<option key={car.carId} value={car.carId}>{car.licenceNo + " " + car.carBrand}</option>);
                                        })}
                                    </FormControl>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                </form>
                <Row style={{ display: 'block' }}>
                    <Col xs={8} />
                    <Col xs={4}>
                        <Button bsStyle="link" onClick={() => this.setState({ showModal: true })}>Add new car</Button>
                    </Col>
                </Row>
                <Row style={{ display: 'block' }} className="appointment-container-btn">
                    <Col xs={4} />
                    <Col xs={4}>
                        <Button onClick={this.next} disabled={this.state.loading}>Next</Button>
                    </Col>
                    <Col xs={4} />
                    <Col xs={12}>
                        <InputalidationMessage message={this.state.errorMessage} />
                    </Col>
                </Row>

            </Col>
            <NewCar show={this.state.showModal} handleClose={this.handleModalClose} />
        </Row>
    }
}