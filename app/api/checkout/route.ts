import { stripeProductSchema } from '@/components/types';
import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: stripeProductSchema) => product.active === true
  );
  return availableProducts;
};
export const POST = async (request: any) => {
  const { cart } = await request.json();

  let activeProducts = await getActiveProducts();

  try {
    for (const product of cart) {
      // console.log(product);
      const stripeProduct = await activeProducts?.find(
        (prod: stripeProductSchema) => prod.name === product.product_name
      );

      if (stripeProduct === undefined) {
        const prod = await stripe.products.create({
          name: product.product_name,
          default_price_data: {
            unit_amount: Number(product.price) * 100,
            currency: 'usd',
          },
        });
      }
    }
  } catch (error) {
    console.error('Error in creating a new product', error);
  }

  activeProducts = await getActiveProducts();
  let stripeItems = [];

  for (const product of cart) {
    const stripeProduct = activeProducts?.find(
      (prod: stripeProductSchema) => prod.name === product.product_name
    );

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct.default_price,
        quantity: product.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  // console.log(session);

  return NextResponse.json({ url: session.url });
};
