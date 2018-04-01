import React, { Component } from 'react'
import { Row, Col, Button, Panel, FormGroup, Checkbox } from 'react-bootstrap';

import HeadingSpan from './heading-span';
import InputalidationMessage from './../../components/inputalidationMessage';
import './style.css';

const days = [
    'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
];

export default class Days extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packageDaysPerWeek: props.package.packageDaysPerWeek,
            errorMessage: '',
            days: [],
            loading: false
        }
    }

    prev = (e) => {
        e.preventDefault();
        this.props.previousStep();
    }
    next = (e) => {
        e.preventDefault();
        const days = this.state.days;
        if(days.length !== this.state.packageDaysPerWeek){
            this.setState({ errorMessage: 'You can select max ' + this.state.packageDaysPerWeek + ' days', loading: false });
            return;
        }
        var data = {
            days: days
        }
        this.props.saveValues(data);
        this.props.nextStep();
    }
    checkBoxClicked = (value) => {
        var days = this.state.days;
        if (days.includes(value))
            days = days.filter(day => day !== value);
        else if (this.state.days.length >= this.state.packageDaysPerWeek) {
            alert("You can select max " + this.state.packageDaysPerWeek + " days");
            return;
        }
        else
            days.push(value);
        this.setState({ days: days });
    }
    render() {
        return <Row>
            <Col xs={12}>
                <form onSubmit={this.next}>
                    <Row>
                        <Panel className="package-panel">
                            <Panel.Heading className="package-panel-heading">
                                <Row>
                                    <Col xs={12}><HeadingSpan text={'Select any ' + this.state.packageDaysPerWeek + ' days'} /></Col>
                                </Row>
                            </Panel.Heading>
                            <Panel.Body className="package-panel-body">
                                <FormGroup>
                                    {days.map(
                                        (value) =>
                                            <Row className="days-table">
                                                <Col xs={2} />
                                                <Col xs={6} className="days-table" style={{ alignItems: 'flex-start' }}>
                                                    <Checkbox
                                                        onChange={() => this.checkBoxClicked(value)}
                                                        checked={this.state.days.includes(value)}
                                                        key={value}
                                                    >{value}</Checkbox>
                                                </Col>
                                                <Col xs={4} />
                                            </Row>
                                    )}
                                </FormGroup>
                            </Panel.Body>
                        </Panel>
                    </Row>
                    <Row style={{ display: 'block' }} className="appointment-container-btn">
                        <Col xs={4}>
                            <Button onClick={this.prev} disabled={this.state.loading}>Prev</Button>
                        </Col>
                        <Col xs={4} />
                        <Col xs={4}>
                            <Button onClick={this.next} disabled={this.state.loading}>Next</Button>
                        </Col>
                        <Col xs={12}>
                            <InputalidationMessage message={this.state.errorMessage} />
                        </Col>
                    </Row>
                </form>
            </Col>

        </Row>
    }
}