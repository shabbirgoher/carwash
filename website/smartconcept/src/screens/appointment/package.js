import React, { Component } from 'react'
import { Row, Col, Button, Panel } from 'react-bootstrap';

import InputalidationMessage from './../../components/inputalidationMessage';
import './style.css';
import HeadingSpan from './heading-span';

const PackageButton = ({ children, onClick }) => {
    return <Button className="package-button" onClick={onClick}>{children}</Button>
}
export default class Package extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packageDays: 0,
            packageDaysPerWeek: 0,
            packagePeriods: 0,
            errorMessage: '',
            loading: false
        }
    }
    previous = (e) => {
        e.preventDefault()
        this.props.previousStep()
    }
    next = (packageDays, packageDaysPerWeek, packagePeriods, type) => {
        var data = {
            package: {
                packageDays: packageDays,
                packageDaysPerWeek: packageDaysPerWeek,
                packagePeriods: packagePeriods,
                type: type
            }
        };
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
                                    <PackageButton onClick={() => this.next(8, 2, 1, 'Basic')}><p>1 Month</p><p>OMR 16</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next(8, 2, 3, 'Basic')}><p>3 Month</p><p>OMR 48</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next(8, 2, 6, 'Basic')}><p>6 Month</p><p>OMR 90</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next(8, 2, 12, 'Basic')}><p>12 Month</p><p>OMR 180</p></PackageButton>
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
                                    <PackageButton onClick={() => this.next(12, 3, 1, 'Advance')}><p>1 Month</p><p>OMR 19</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next(12, 3, 3, 'Advance')}><p>3 Month</p><p>OMR 57</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next(12, 3, 6, 'Advance')}><p>6 Month</p><p>OMR 108</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next(12, 3, 12)}><p>12 Month</p><p>OMR 208</p></PackageButton>
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
                                    <PackageButton onClick={() => this.next(26, 6, 1, 'Daily')}><p>1 Month</p><p>OMR 37</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next(26, 6, 3, 'Daily')}><p>3 Month</p><p>OMR 110</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next(26, 6, 6, 'Daily')}><p>6 Month</p><p>OMR 210</p></PackageButton>
                                </Col>
                                <Col xs={6} md={3}>
                                    <PackageButton onClick={() => this.next(26, 6, 12, 'Daily')}><p>12 Month</p><p>OMR 404</p></PackageButton>
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