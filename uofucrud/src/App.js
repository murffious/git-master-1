import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login.js";
import { StripeProvider } from "react-stripe-elements";
import Checkout from "./components/Checkout.js"
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard"
import AboutUs from './components/AboutUs';
import Landing from './components/Landing';
class App extends Component {
  render() {
    return (
      <div className="App">
     <StripeProvider apiKey="pk_test_5OqAkvdfZkAygURoxEMAVHYd">
          <BrowserRouter>
          <div>
            {/* <Header /> */}
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dash" component={Dashboard} />
          </div>
        </BrowserRouter>
          </StripeProvider> 
      </div>
    );
  }
}

export default App;
