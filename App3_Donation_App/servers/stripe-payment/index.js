import express from 'express';
import Stripe from "stripe";
import { STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY } from "./constants.js";

const stripePublishableKey = STRIPE_PUBLISHABLE_KEY
const stripeSecretKey = STRIPE_SECRET_KEY


const app = express();

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    const { email, currency, amount } = req.body;
    const stripe = new Stripe(stripeSecretKey, {
        apiVersion: '2020-08-27'
    })
    const customer = await stripe.customers.create({ email })
    const params = {
        amount: parseInt(amount),
        currency,
        customer: customer.id,
        payment_method_options: {
            card: {
                request_three_d_secure: 'automatic'
            }
        },
        payment_method_types: []
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create(params);
        return res.send({
            clientSecret: paymentIntent.client_secret
        })
    }
    catch (error) {
        console.log(error);
        return res.send({
            error: error.raw.message
        })
    }
})

app.listen(3000, () => console.log(`Node server listening on port 3000!`));