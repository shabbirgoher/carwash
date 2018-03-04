import React, {Component} from 'react';

import './style.css';

export default class ChooseDays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPackage: '',
            numberOfDays: 0,
            errorMessage: ''
        };
    }

    render() {
        return (
            <div className="appointmentContainer">
                ChooseDays
            </div>
        );
    }
}