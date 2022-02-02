const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J6xgHSESXaaSIoECtiebRSNQXuRjxUGXaZNHrBYPXpp01dOxEC1NBI12KydkVMdgqX6oCr6J3reNHE1gQ74u0Lh00UMBnhoOv"
);


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

const chargeCustomer = async (customerId) => {
  // Lookup the payment methods available for the customer
  const paymentMethods = await stripe.paymentMethods.list({
    customer: customerId,
    type: "card"
  });
  // Charge the customer and payment method immediately
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "usd",
    customer: customerId,
    payment_method: paymentMethods.data[0].id,
    off_session: true,
    confirm: true
  });
  if (paymentIntent.status === "succeeded") {
    console.log("✅ Successfully charged card off session");
  }
}




app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const customer = await stripe.customers.create({
    name: 'Jenny Rosen',
    address: {
      line1: '510 Townsend St',
      postal_code: '98140',
      city: 'San Francisco',
      state: 'CA',
      country: 'US',
    }
  });
  const paymentIntent = await stripe.paymentIntents.create({
    customer: customer.id,
    setup_future_usage: 'off_session',
    amount: total, // subunits of the currency
    currency: "usd",
    description: 'selling services',
  });

  

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

