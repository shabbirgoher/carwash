import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import InputalidationMessage from './../inputalidationMessage';
import './style.css';

const brands = ['None',
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

export default class ChooseVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carBrand: 'None',
            carBrandError: '',
            carModel: '',
            carModelError: '',
            carType: 'None',
            carTypeError: '',
            licenceNo: '',
            licenceNoError: '',
            carColor: '',
            carColorError: '',
            errorMessage: '',
            vehicle: props.vehicle
        }
    }

    setVehicle(vehicle){
        this.setState({
            vehicle: vehicle
        });
        this.props.updateVehicle(vehicle);
    }

    carBrandChange = (event) => {
        const carBrand = event.target.value;
        var vehicle = this.state.vehicle;
        vehicle.carBrand = carBrand;
        vehicle.validateCarBrand();
        this.setVehicle(vehicle);
    }
    carModelChange = (event) => {
        const carModel = event.target.value;
        var vehicle = this.state.vehicle;
        vehicle.carModel = carModel;
        vehicle.validateCarModel();
        this.setVehicle(vehicle);
    }
    carTypeChange = (event) => {
        const carType = event.target.value;
        var vehicle = this.state.vehicle;
        vehicle.carType = carType;
        vehicle.validateCarType();
        this.setVehicle(vehicle);        
    }
    licenceNoChange = (event) => {
        const licenceNo = event.target.value;
        var vehicle = this.state.vehicle;
        vehicle.licenceNo = licenceNo;
        vehicle.validateLicenceNo();
        this.setVehicle(vehicle);        
    }
    carColorChange = (event) => {
        const carColor = event.target.value;
        var vehicle = this.state.vehicle;
        vehicle.carColor = carColor;
        vehicle.validateCarColor();
        this.setVehicle(vehicle);        
    }
    render() {
        return (
            <div className="appointmentContainer">
                <form>
                    <FormGroup>
                        <ul>
                            <li>
                                <ControlLabel>Car Brand</ControlLabel>
                            </li>
                            <li>
                                <FormControl autoFocus componentClass="select" onChange={this.carBrandChange} value={this.state.vehicle.carBrand}>
                                    {brands.map((item, index) => {
                                        return (< option value={item} key={index} >{item}</option>);
                                    })}
                                </FormControl>
                            </li>
                            <li>
                                <InputalidationMessage message={this.state.vehicle.carBrandError} />
                            </li>
                        </ul>
                    </FormGroup>
                    <FormGroup>
                        <ul>
                            <li>
                                <ControlLabel>Car Model</ControlLabel>
                            </li>
                            <li>
                                <FormControl autoFocus type="text" onChange={this.carModelChange}  value={this.state.vehicle.carModel}/>
                            </li>
                            <li>
                                <InputalidationMessage message={this.state.vehicle.carModelError} />
                            </li>
                        </ul>
                    </FormGroup>
                    <FormGroup>
                        <ul>
                            <li>
                                <ControlLabel>Car Type</ControlLabel>
                            </li>
                            <li>
                                <FormControl autoFocus componentClass="select" type="select" onChange={this.carTypeChange}  value={this.state.vehicle.carType}>
                                    <option value="None">None</option>
                                    <option value='SUV'>SUV</option>
                                    <option value='SALOON'>SALOON</option>
                                </FormControl>
                            </li>
                            <li>
                                <InputalidationMessage message={this.state.vehicle.carTypeError} />
                            </li>
                        </ul>
                    </FormGroup>
                    <FormGroup>
                        <ul>
                            <li>
                                <ControlLabel>Licence Plate</ControlLabel>
                            </li>
                            <li>
                                <FormControl autoFocus type="text" onChange={this.licenceNoChange}  value={this.state.vehicle.licenceNo}>

                                </FormControl>
                            </li>
                            <li>
                                <InputalidationMessage message={this.state.vehicle.licenceNoError} />
                            </li>
                        </ul>
                    </FormGroup>
                    <FormGroup>
                        <ul>
                            <li>
                                <ControlLabel>Colour</ControlLabel>
                            </li>
                            <li>
                                <FormControl autoFocus type="text" onChange={this.carColorChange} value={this.state.vehicle.carColor}>

                                </FormControl>
                            </li>
                            <li>
                                <InputalidationMessage message={this.state.vehicle.carColorError} />
                            </li>
                        </ul>
                    </FormGroup>
                </form>
            </div>
        );
    }
}