import React, { Component } from 'react'
import { Row, Col, Button, Panel } from 'react-bootstrap';

import InputalidationMessage from './../../components/inputalidationMessage';
import './style.css';

const HeadingSpan = ({ text }) => {
    return <span className="package-span">{text}</span>
}
const PackageButton = ({ children, onClick }) => {
    return <Button className="package-button" onClick={onClick}>{children}</Button>
}
export default class Package extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packageDays: '',
            packagePeriods: '',
            errorMessage: '',
            loading: false
        }
    }
    previous = (e) => {
        e.preventDefault()
        this.props.previousStep()
    }
    next = (packageDays, packagePeriods) => {
        var data = {
            packageDays: packageDays,
            packagePeriods: packagePeriods
        }
        this.props.saveValues(data);
        this.props.nextStep();
    }
    render() {
        return <Row>
            <Col xs={12}>
                <Row>
                    <Panel className="package-panel">
                        <Panel.Heading className="package-panel-heading">
                            <Row>
                                <Col xs={12}><HeadingSpan text="Basic Package" /></Col>
                                <Col xs={12}><HeadingSpan text="8 car washes a month" /></Col>
                            </Row>
                        </Panel.Heading>
                        <Panel.Body className="package-panel-body">
                            <Row className="package-table">
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('8', '1')}><p>1 Month</p><p>OMR 16</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('8', '3')}><p>3 Month</p><p>OMR 48</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('8', '6')}><p>6 Month</p><p>OMR 90</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('8', '12')}><p>12 Month</p><p>OMR 180</p></PackageButton>
                                </Col>
                            </Row>
                        </Panel.Body>
                    </Panel>

                    <Panel className="package-panel">
                        <Panel.Heading className="package-panel-heading">
                            <Row>
                                <Col xs={12}><HeadingSpan text="Advance Package" /></Col>
                                <Col xs={12}><HeadingSpan text="12 car washes a month" /></Col>
                            </Row>
                        </Panel.Heading>
                        <Panel.Body className="package-panel-body">
                            <Row className="package-table">
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('12', '1')}><p>1 Month</p><p>OMR 19</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('12', '3')}><p>3 Month</p><p>OMR 57</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('12', '6')}><p>6 Month</p><p>OMR 108</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('12', '12')}><p>12 Month</p><p>OMR 208</p></PackageButton>
                                </Col>
                            </Row>
                        </Panel.Body>
                    </Panel>
                    <Panel className="package-panel">
                        <Panel.Heading className="package-panel-heading">
                            <Row>
                                <Col xs={12}><HeadingSpan text="Daily Package" /></Col>
                                <Col xs={12}><HeadingSpan text="26 car washes a month" /></Col>
                            </Row>
                        </Panel.Heading>
                        <Panel.Body className="package-panel-body">
                            <Row className="package-table">
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('26', '1')}><p>1 Month</p><p>OMR 37</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('26', '3')}><p>3 Month</p><p>OMR 110</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('26', '6')}><p>6 Month</p><p>OMR 210</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next('26', '12')}><p>12 Month</p><p>OMR 404</p></PackageButton>
                                </Col>
                            </Row>
                        </Panel.Body>
                    </Panel>
                </Row>
                <Row style={{ display: 'block' }} className="appointment-container-btn">
                    <Col xs={4} />
                    <Col xs={4}>
                        <Button onClick={this.previous} disabled={this.state.loading}>Prev</Button>
                    </Col>
                    <Col xs={4} />
                    <Col xs={12}>
                        <InputalidationMessage message={this.state.errorMessage} />
                    </Col>
                </Row>
            </Col>

        </Row>
    }
}