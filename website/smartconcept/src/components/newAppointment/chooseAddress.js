import React, {Component} from 'react';

import './style.css';

export default class ChooseAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            building: 'None',
            buildingError: '',
            parkingNumber: '',
            parkingNumberError: '',
            apartment: '',
            apartmentError: '',
            buildings: []
        };
    }

    render() {
        return (
            <div className="appointmentContainer">
                ChooseAddress
            </div>
        );
    }
}