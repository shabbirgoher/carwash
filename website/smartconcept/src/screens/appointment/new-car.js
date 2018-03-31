import React, { Component } from 'react'
import {
    Row,
    Col,
    FormGroup,
    InputGroup,
    FormControl,
    Button,
    Modal,
    Grid
} from 'react-bootstrap';

import InputalidationMessage from './../../components/inputalidationMessage';
import { AppointmentService } from './../../services/appointmentService';
import './style.css';
import './modal.css';
const brands = [
    'Alfa Romeo', 'Abarth', 'Acura', 'Arrinera', 'Aixam', 'Ariel', 'Audi', 'Aston Martin', 'Bugatti', 'Bentley',
    'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Citroen', 'Caterham', 'Chrysler', 'Corvette', 'Dacia', 'Dodge',
    'Daewoo', 'Daihatsu', 'Elfin', 'Fiat', 'Ferrari', 'Fisker', 'Ford', 'Gaz', 'Geely', 'Gillet', 'GMC', 'Ginetta',
    'Gumpert', 'Great Wall', 'Honda', 'Hennessey', 'Holden', 'Hyundai', 'Hummer', 'Infiniti', 'Isuzu', 'Jeep',
    'Jaguar', 'Joss', 'Koenigsegg', 'Kia', 'Lada', 'Lexus', 'Lamborghini', 'Land Rover', 'Landcruiser', 'Lemosin',
    'Lincoln', 'Lotus', 'Luxgen Mahindra', 'Lancia', 'Maruti Suzuki', 'Maserati', 'Maybach', 'Mazda', 'Mclaren',
    'Mercedes Benz', 'Mitsubishi', 'Mercedes Benz', 'Morgan Motor', 'Mini', 'Mosler', 'Mustang', 'Nissan Motors',
    'Noble Automotive', 'Opel', 'Pagani', 'Panoz', 'Perodua', 'Peugeot', 'Piaggio', 'Pininfarina', 'Porsche',
    'Proton', 'Range Rover', 'Renault', 'Reva', 'Rimac Automobili', 'Rolls Royce', 'Ruf Automobile', 'Saab',
    'Scania', 'Scion', 'Seat', 'Shelby', 'Skoda', 'Smart', 'Spyker Cars', 'Ssangyong', 'SSC', 'Suzuki', 'Subaru',
    'Tata', 'Tatra', 'Tesla', 'Think', 'Toyota', 'Tramontana', 'Troller', 'TVR', 'UAZ', 'Vandenbrink Design',
    'Vauxhall', 'Vector Motors', 'Venturi', 'Vauxhall', 'Volkswagen', 'Volvo', 'Wiesmann', 'Zagato', 'Zaz', 'Zil'];
function isAlphanumeric(value) {
    var letters = /^[0-9a-zA-Z\s]+$/;
    return value && value.match(letters);
}

export default class NewCar extends Component {
    constructor(props) {
        super(props);
        this.state = this.resetState;
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            show: nextProps.show
        };
    }
    
    resetState = {
        carBrand: '',
        carModel: '',
        carType: '',
        licenceNo: '',
        carColor: '',
        errorMessage: '',
        loading: false,
        show: false
    }
    handleClose = () => {
        this.props.handleClose();        
        this.setState(this.resetState);
    }

    handleShow = () => {
        this.setState({ show: true });
    }
    componentDidMount() {
        this.setState({ loading: false });
    }
    getCarBrandValidationState = () => {
        return this.state.carBrand !== 'None' ? 'success' : 'error';
    }
    getCarModelValidationState = () => {
        return isAlphanumeric(this.state.carModel) ? 'success' : 'error';
    }
    getCarTypeValidationState = () => {
        return this.state.carType !== 'None' ? 'success' : 'error';
    }
    getLicenceNoValidationState = () => {
        return isAlphanumeric(this.state.licenceNo) ? 'success' : 'error';
    }
    getCarColorValidationState = () => {
        return isAlphanumeric(this.state.carColor) ? 'success' : 'error';
    }
    registerCar = (event) => {
        this.setState({ errorMessage: '', loading: true });
        event.preventDefault();
        if (this.hasError(this.getCarBrandValidationState)
            || this.hasError(this.getCarModelValidationState)
            || this.hasError(this.getCarTypeValidationState)
            || this.hasError(this.getLicenceNoValidationState)
            || this.hasError(this.getCarColorValidationState)) {
            this.setState({ errorMessage: 'Please correct the above details', loading: false });
            return;
        }
        AppointmentService.registerCar({
            carBrand: this.state.carBrand, carModel: this.state.carModel,
            carType: this.state.carType, licenceNo: this.state.licenceNo, carColor: this.state.carColor
        })
            .then((response) => this.setState({ loading: false }))
            .catch((err) => this.setState({ errorMessage: err.message || 'Unable to save data', loading: false }));
    }
    hasError(callback) {
        return callback() !== 'success';
    }
    render() {
        return <div>
            <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="modal-container">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid fluid={true}>
                        <Row>
                            <Col xs={12}>
                                <form onSubmit={this.registerCar}>
                                    <Row>
                                        <Col xs={12}>
                                            <FormGroup className="appointment-form-group" controlId="carBrand"
                                                validationState={this.getCarBrandValidationState()}>
                                                <InputGroup className="appointment-input">
                                                    <FormControl componentClass="select" placeholder="Car brand" className="input-box"
                                                        onChange={event => this.setState({ carBrand: event.target.value })} >
                                                        <option value="None">select car brand</option>
                                                        {brands.map((item, index) => {
                                                            return (<option key={index} value={item}>{item}</option>);
                                                        })}
                                                    </FormControl>
                                                </InputGroup>
                                                <FormControl.Feedback />
                                            </FormGroup>
                                            <FormGroup controlId="carModel" validationState={this.getCarModelValidationState()}>
                                                <InputGroup className="appointment-input">
                                                    <FormControl type="text" placeholder="Car model" className="input-box"
                                                        onChange={event => this.setState({ carModel: event.target.value.trim() })} />
                                                </InputGroup>
                                                <FormControl.Feedback />
                                            </FormGroup>
                                            <FormGroup controlId="carType" className="appointment-form-group"
                                                validationState={this.getCarTypeValidationState()}>
                                                <InputGroup className="appointment-input">
                                                    <FormControl componentClass="select" placeholder="Car type" className="input-box"
                                                        onChange={event => this.setState({ carType: event.target.value })} >
                                                        <option value="None">select car type</option>
                                                        <option value="SUV">SUV</option>
                                                        <option value="SALOON">SALOON</option>
                                                    </FormControl>
                                                </InputGroup>
                                                <FormControl.Feedback />
                                            </FormGroup>
                                            <FormGroup controlId="licenceNo" validationState={this.getLicenceNoValidationState()}>
                                                <InputGroup className="appointment-input">
                                                    <FormControl type="text" placeholder="Licence number" className="input-box"
                                                        onChange={event => this.setState({ licenceNo: event.target.value.trim() })} />
                                                </InputGroup>
                                                <FormControl.Feedback />
                                            </FormGroup>
                                            <FormGroup controlId="carColor" validationState={this.getCarColorValidationState()}>
                                                <InputGroup className="appointment-input">
                                                    <FormControl type="text" placeholder="Car color" className="input-box"
                                                        onChange={event => this.setState({ carColor: event.target.value.trim() })} />
                                                </InputGroup>
                                                <FormControl.Feedback />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row style={{ display: 'block' }}>
                                        <Col xs={8} />
                                        <Col xs={4} className="modal-button">
                                            <Button type="submit" disabled={this.state.loading}>Done</Button>
                                        </Col>
                                        <Col xs={12}>
                                            <InputalidationMessage message={this.state.errorMessage} />
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Grid>
                </Modal.Body>
                <Modal.Footer className="modal-button">
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    }
}