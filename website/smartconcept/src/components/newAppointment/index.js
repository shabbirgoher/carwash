import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel, HelpBlock } from "react-bootstrap";

import Slider from './../slider';
import ChooseVehicle from './chooseVehicle';
import ChooseAddress from './chooseAddress';
import ChoosePackage from './choosePackage';
import ChooseDays from './chooseDays';

import Vehicle from './../../models/vehicle';
import Address from './../../models/address';
import Package from './../../models/package';
import Days from './../../models/days';

export default class NewAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicle: Vehicle,
            address: Address,
            package: Package,
            days: Days
        }
    }
    onUpdateVehicle = (vehicle) => {
        this.setState({
            vehicle: vehicle
        });
    }
    chooseVehicleNext = () => {
        const vehicle = this.state.vehicle;
        const isValid = vehicle.validate();
        this.setState({
            vehicle: vehicle
        });
        return isValid;
    }
    chooseAddressNext = () => {
        return this.state.address.validate();        
    }
    choosePackageNext = () => {
        return this.state.package.validate();
    }
    submit = () => {
        return this.state.days.validate();
    }
    render() {
        return <Slider
            components={[
                <ChooseVehicle vehicle={this.state.vehicle} next={this.chooseVehicleNext} updateVehicle={this.onUpdateVehicle}/>,
                <ChooseAddress next={this.chooseAddressNext}/>,
                <ChoosePackage next={this.choosePackageNext}/>,
                <ChooseDays submit={this.submit}/>
            ]} />
    }
}