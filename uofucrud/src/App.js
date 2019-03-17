import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login.js";
import { StripeProvider } from "react-stripe-elements";
import Checkout from "./components/Checkout"
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <StripeProvider apiKey="">
      </StripeProvider> */}
       
          {/* <Login/> */}
          <Checkout/>
          {/* <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
