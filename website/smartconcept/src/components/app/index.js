import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "./../navigationBar";
import About from "./../about";
import Home from "./../home";
import OurGoal from "./../our-goal";
import Contactus from "./../contact-us";
import LoginScreen from "./../Login";
import LogOut from "./../logOut";
import PrivateRoute from './../privateRoute';
import NewAppointment from './../newAppointment';

import './App.css';

const App = () => (
  <div>
    <Router>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: 1 }}>
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={LoginScreen} />
          <PrivateRoute path="/new-appointment" component={NewAppointment} />
          <PrivateRoute path="/sign-out" component={LogOut} />
        </div>
      </div>
    </Router>
  </div>
)

export default App;