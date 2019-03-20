import React from "react";
import { Elements } from "react-stripe-elements";
import InjectedCheckoutForm from "./CheckoutForm";
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Pricing from './Pricing';
function PaymentForm() {
  return (
    <React.Fragment>
       <Grid item xs={12} md={12}>
      <Pricing/>
        Payment method
        </Grid>
      <Grid container spacing={24}>
        <Grid item xs={12} md={12}>
        <Elements>
          <InjectedCheckoutForm/>
        </Elements>
        </Grid>
  
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;