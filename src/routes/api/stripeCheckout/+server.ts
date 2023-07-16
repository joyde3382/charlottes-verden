import type { RequestHandler } from "./$types";
import Stripe from 'stripe';

const SECRET_STRIPE_KEY = "sk_test_51KtFY4KhpM5UkxoPnMpWMFHA0yt56hGP22ggj36JgAkVeEI3bGh8Q0bKNG8T2EVxqbUuHcpc0TrMaPDuOcY4fPAu004B5T8199";
const stripe = new Stripe(SECRET_STRIPE_KEY, {
    apiVersion: "2022-11-15"
});


// localhost:5173/api/stripeCheckout

// POST /stripeCheckout data: items
// return -> url created by Stripe for our user to use

export const POST: RequestHandler = async ({request}) => {
    // items: [ {id: "1", quantity: 4}, {id: "2", quantity: 1}]
    const data = await request.json();
    const items = data.items;

    /*
        we have: [ {id: "1", quantity: 4}, {id: "2", quantity: 1}]
        stripe wants: [ {price "1", quantity: 4}, {price: "2", quantity: 1}]
    */

    let lineItems : any = [];
    items.forEach((item: any) => {
        lineItems.push( { price: item.id, quantity: item.quantity })
    });

    // it gives us a url for the person to check out with
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
    });

    return new Response(
        JSON.stringify({ url: session.url }), // frontedn will get this url to redirect
        {
            status: 200,
            headers: { 'content-type': 'application/json' }
        }
    )
}