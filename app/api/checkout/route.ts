import { stripeProductSchema } from '@/components/types';
import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const getActiveProducts = async () => {
  const checkProducts = await stripe.product.list();
  const availableProducts = checkProducts.data.filter(
    (product: stripeProductSchema) => product.active === true
  );
  return availableProducts;
};
export const POST = async (request: any) => {
  const { cart } = await request.json();

  return NextResponse.json({ url: '' });
};
