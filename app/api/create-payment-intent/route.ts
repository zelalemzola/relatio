import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
export async function POST(request:NextRequest){
  try {
    const {amount} = await request.json();
    const paymentIntent = await stripe.paymentIntents.create({
      amount:amount,
      currency:'usd',
      automatic_payment_methods:{enabled:true}
    })
    return new Response(JSON.stringify({clientSecret:paymentIntent.client_secret}),{
      status:200
    })
  } catch (error) {
     return  NextResponse.json({error: `Interal Server Error: ${error}`},{
      status:500
    })
  }
}