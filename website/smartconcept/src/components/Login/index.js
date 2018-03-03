import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import "./style.css";
import Login from './login';
import Register from './register';
import ForgotPassword from './forgotPassword';

const selectedColor = '#03A9F4';
const unselectedColor = '#f5f5f5';

function getColor() {
    return {
        signIn: unselectedColor,
        register: unselectedColor,
        forgotPassword: unselectedColor
    }
}
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        var color = getColor();
        color.signIn = selectedColor;
        this.state = {
            color: color
        }
    }

    linkClicked = (linkName) => {
        var color = getColor();
        color[linkName] = selectedColor;
        this.setState({
            color: color
        });
    }

    render() {
        return (
            <div className="Login">
                <ul style={HeaderCss}>
                    <li style={{...LinkCss, ...{backgroundColor: this.state.color.signIn}}}>
                        <Link to={`${this.props.match.url}`}>Sign In</Link>
                    </li>
                    <li style={{...LinkCss, ...{backgroundColor: this.state.color.register}}}>
                        <Link to={`${this.props.match.url}/register`}>Register</Link>
                    </li>
                    <li style={{...LinkCss, ...{backgroundColor: this.state.color.forgotPassword}}}>
                        <Link to={`${this.props.match.url}/forgot-password`}>Forgot password</Link>
                    </li>
                </ul>

                <div>
                    <Route exact path='/sign-in' render={(props => <Login {...props} activate={() => this.linkClicked('signIn')}/>)}/>
                    <Route path='/sign-in/register' render={ props => <Register {...props} activate={() => this.linkClicked('register')}/>}/>
                    <Route path='/sign-in/forgot-password' render={ props => <ForgotPassword {...props} activate={() => this.linkClicked('forgotPassword')}/>}/>
                </div>
            </div>
        )
    }
}

const HeaderCss = {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'center'
}

const LinkCss = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: '5px',
    alignItems: 'center',
    textAlign: 'center',
}