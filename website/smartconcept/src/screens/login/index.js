import React from 'react';
import { Route, Link, NavLink } from "react-router-dom";
import { Row, Col, Button, Image } from 'react-bootstrap';

import Login from './login';
//import BackgroundImage from './../../assets/images/car-background.png'
import './style.css';

const LinkButton = (props) => <NavLink {...props} 
    style={{color: 'rgba(15, 147, 254, 1)'}}
    activeStyle={{backgroundColor: 'rgba(15, 147, 254, 1)', color: '#DEFF4F'}}>
    <Button bsSize="large" block>
        {props.text}
    </Button>
</NavLink>

const imgUrl = './../../assets/images/car-background.png';
const styles = {
    container: {
        backgroundImage: 'url('+ imgUrl + ')',
        backgroundSize: 'cover'
    }
}

const LoginScreen = ({ match }) => (
    <Col xs={12} className="login-container" style={styles.container}>
        {/* <Image src={BackgroundImage} responsive style={{width: '100%', height: '100%'}}/> */}
        <Row className="login-container-row">
            <Col md={4} />
            <Col md={4} >
                <div>
                    <div>
                        <Route exact path={`${match.url}/sign-in`} component={Login} />
                        <Route path={`${match.url}/register`} component={Login} />
                        <Route path={`${match.url}/forgot-password`} component={Login} />
                    </div>
                    <ul class="list-unstyled">
                        <li>
                            <LinkButton to={`${match.url}/sign-in`} text="Sign In" />
                        </li>
                        <li>
                            <LinkButton to={`${match.url}/register`} text="Register" />
                        </li>
                        <li>
                            <LinkButton to={`${match.url}/forgot-password`} text="Forgot password" />
                        </li>
                    </ul>
                </div>
            </Col>
            <Col md={4} />
        </Row>
    </Col>
)

export default LoginScreen;