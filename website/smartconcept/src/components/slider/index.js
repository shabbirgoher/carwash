import React, { Component } from 'react';
import { Button } from "react-bootstrap";

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            components: []
        }
    }

    next = (index) => {
        this.setState({ active: ++index });
    }

    back = (index) => {
        this.setState({ active: --index });
    }

    render() {
        const components = this.props.components;
        const componentsToDisplay = components.map((component, index) =>
            <div style={componentWrapperCss}>
                <div>
                    {component}
                </div>
                <div>
                {
                    index !== components.length - 1
                        ?
                        <Button
                            block
                            bsSize="large"
                            style={{width: 'fit-content', margin: '5px', backgroundColor: '#03A9F4'}}
                            onClick={() => component.props.next() && this.next(index)}
                        >
                            NEXT
                        </Button>
                        : null
                }
                {
                    index !== 0
                        ?
                        <Button
                            block
                            bsSize="large"
                            style={{width: 'fit-content', margin: '5px', backgroundColor: '#03A9F4'}}                            
                            onClick={() => this.back(index)}
                        >
                            Back
                        </Button>
                        : null
                }
                </div>
            </div>
        );
        return (
            <div>{componentsToDisplay[this.state.active]}</div>
        );
    }
}

const componentWrapperCss = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
} 