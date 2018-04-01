import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Row, Col, Button, Panel } from 'react-bootstrap';

import HeadingSpan from './heading-span';

export default class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            object: {
                car: {},
                address: {},
                package: {},
                days: []
            },
            goHome: false
        }
    }
    componentDidMount() {
        if(this.props.location.state && this.props.location.state.object)
            this.setState({ object: this.props.location.state.object });
    }
               
    goHome = () => {
        this.setState({goHome: true})
    }
    render() {
        if (!this.props.location.state || !this.props.location.state.object)
            return <Redirect to="/new-appointment" />
        if(this.state.goHome)
            return <Redirect to="/" />
        return <Col xs={12} className="appointment-container">
            <Row className="appointment-container-row">
                <Col xs={4} />
                <Col xs={4} className="confirmation-content">
                    <Panel className="package-panel">
                        <Panel.Heading className="package-panel-heading">
                            <Row>
                                <Col xs={12}><HeadingSpan text="Vehicle details" /></Col>
                            </Row>
                        </Panel.Heading>
                        <Panel.Body className="package-panel-body">
                            <Row className="confirmation-table">
                                <Col xs={6} md={3}>
                                    <h5>Brand</h5>
                                </Col>
                                <Col xs={6} md={3}>
                                    <span>{this.state.object.car.carBrand}</span>
                                </Col>
                                <Col xs={6} md={3}>
                                    <h5>Car Model </h5>
                                </Col>
                                <Col xs={6} md={3}>
                                    <span>{this.state.object.car.carModel}</span>
                                </Col>
                            </Row>
                            <Row className="confirmation-table">
                                <Col xs={6} md={3}>
                                    <h5>Car type</h5>
                                </Col>
                                <Col xs={6} md={3}>
                                    <span>{this.state.object.car.carType}</span>
                                </Col>
                                <Col xs={6} md={3}>
                                    <h5>License No</h5>
                                </Col>
                                <Col xs={6} md={3}>
                                    <span>{this.state.object.car.licenceNo}</span>
                                </Col>
                            </Row>
                            <Row className="confirmation-table">
                                <Col md={3} />
                                <Col xs={6} md={3}>
                                    <h5>Color</h5>
                                </Col>
                                <Col xs={6} md={3}>
                                    <span>{this.state.object.car.carColor}</span>
                                </Col>
                                <Col md={3} />
                            </Row>
                        </Panel.Body>
                    </Panel>
                    <Panel className="package-panel">
                        <Panel.Heading className="package-panel-heading">
                            <Row>
                                <Col xs={12}><HeadingSpan text="Address details" /></Col>
                            </Row>
                        </Panel.Heading>
                        <Panel.Body className="package-panel-body">
                            <Row className="confirmation-table">
                                <Col xs={6} md={3}>
                                    <h5>Building</h5>
                                </Col>
                                <Col xs={6} md={3}>
                                    <span>{this.state.object.address.building}</span>
                                </Col>
                                <Col xs={6} md={3}>
                                    <h5>Parking no</h5>
                                </Col>
                                <Col xs={6} md={3}>
                                    <span>{this.state.object.address.parkingNumber}</span>
                                </Col>
                            </Row>
                            <Row className="confirmation-table">
                                <Col md={3} />
                                <Col xs={6} md={3} >
                                    <h5>Appartment</h5>
                                </Col>
                                <Col xs={6} md={3} >
                                    <span>{this.state.object.address.apartment}</span>
                                </Col>
                                <Col md={3} />
                            </Row>
                        </Panel.Body>
                    </Panel>
                    <Panel className="package-panel">
                        <Panel.Heading className="package-panel-heading">
                            <Row>
                                <Col xs={12}><HeadingSpan text="Package details" /></Col>
                            </Row>
                        </Panel.Heading>
                        <Panel.Body className="package-panel-body">
                            <Row className="confirmation-table">
                                <Col xs={6} md={3}>
                                    <h5>Package type</h5>
                                </Col>
                                <Col xs={6} md={3}>
                                    <span>{this.state.object.package.type}</span>
                                </Col>
                                <Col xs={6} md={3}>
                                    <h5>Month(s)</h5>
                                </Col>
                                <Col xs={6} md={3}>
                                    <span>{this.state.object.package.packagePeriods}</span>
                                </Col>
                            </Row>
                        </Panel.Body>
                    </Panel>
                    <Panel className="package-panel">
                        <Panel.Heading className="package-panel-heading">
                            <Row>
                                <Col xs={12}><HeadingSpan text="Days" /></Col>
                            </Row>
                        </Panel.Heading>
                        <Panel.Body className="package-panel-body">
                            <Row className="confirmation-table">
                                <Col xs={12}>
                                    <span>{this.state.object.days.join(", ")}</span>
                                </Col>
                            </Row>
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col xs={4} />
            </Row>
            <Row style={{ display: 'block' }} className="appointment-container-btn">
                <Col xs={4} />
                <Col xs={4}>
                    <Button onClick={this.goHome}>Home</Button>
                </Col>
                <Col xs={4} />
            </Row>
            <Row />
        </Col>
    }
}