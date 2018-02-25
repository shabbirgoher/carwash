import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from "./../navigationBar";
import About from "./../about";

const Home = () => <h1>Home</h1>

const App = () => (
  <div>
    <Router>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 6 }}>
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </Router>
  </div>
)

export default App;