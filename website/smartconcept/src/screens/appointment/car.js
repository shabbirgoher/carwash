import React, { Component } from 'react'

import { Row, Col, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

import './style.css';

export default class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carBrand: props.car.carBrand,
            carModel: props.car.carModel,
            carType: props.car.carType,
            licenceNo: props.car.licenceNo,
            carColor: props.car.carColor,
            errorMessage: ''
        }
    }
    render() {
        return <Row>
            <Col xs={12} >
                <FormGroup controlId="carName">
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="car" /></InputGroup.Addon>
                        
                    </InputGroup>
                    <FormControl.Feedback />
                </FormGroup>
            </Col>
        </Row>
    }
}