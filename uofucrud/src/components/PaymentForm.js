import React from "react";
import { Elements } from "react-stripe-elements";
import InjectedCheckoutForm from "./CheckoutForm";
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function PaymentForm() {
  return (
    <React.Fragment>
      
        Payment method
     
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
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