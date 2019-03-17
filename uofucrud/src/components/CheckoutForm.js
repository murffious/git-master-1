// CheckoutForm.js
import React from "react";
import { injectStripe } from "react-stripe-elements";
import CardSection from "./CardSection";

class CheckoutForm extends React.Component {
  
  handleSubmit = ev => {
 
      this.props.stripe
        .createToken({ name: this.props.email })
        .then(({ token }) => {
          // console.log("Received Stripe token:", token);
          if (token) {
            this.sendTokenToApi(token);
          } else {
            this.setState({
              failure: true
            });
          }
        });
  

  
  };
  async sendTokenToApi(token, companyId) {
    await this.props.billingCardInfo(token, companyId);
    await this.props.successAlert();
    this.setState({
      failure: false
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <br />
        {this.state.failure ? (
          "Please enter a valid credit card to continue."
        ) : null}
        {this.props.validate ? this.handleSubmit() : null}
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
