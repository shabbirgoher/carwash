import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "./../navigationBar";
import About from "./../about";
import Home from "./../home";
import OurGoal from "./../our-goal";
import Contactus from "./../contact-us";
import Login from "./../Login";
import PrivateRoute from './../privateRoute';
import NewAppointment from './../newAppointment';

const App = () => (
  <div>
    <Router>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 6 }}>
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/our-goal" component={OurGoal} />
          <Route path="/contact-us" component={Contactus} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/new-appointment" component={NewAppointment} />
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </Router>
  </div>
)

export default App;