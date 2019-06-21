import stripePackage from "stripe";

app.post("/api/charge", cors(), async function(req, res, next) {
    console.log(req.body.id, req.body.card.name);
 
    // FYI misnamed api route. we don't technically so any charging here.
    const registered_user_email = req.body.card.name;
    try {
      stripe.customers.create(
        {
          description: registered_user_email,
          source: req.body.id // obtained with Stripe.js
        },
        function(err, customer) {
          // asynchronously called
         
          db.BillingProfile.create({
            cardName: registered_user_email,
            // group_id: "test",
            // plan_rate: "10%",
            // plan_type: "default",
            stripeCustomer: customer.id
            // User1Id: 63
            //customer id from stipe call above custome.id or what not
          }).then(function(newBilling) {
           
            UserPaid.update(
              {
                signUpStep: 3
              },
              {
                where: {
                  id: req.body.companyId
                }
              }
            );

            res.status(200).json("ok");
          });
        }
      );
    } catch (e) {
      res.status(400).json({
        error: e.message
      });
    }
  });
