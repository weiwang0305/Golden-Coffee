'use client';
import { ExtendedUser } from '@/next-auth';
import { Separator } from './ui/separator';
import { CartTable } from './cartTable';
import { useState, useEffect, useMemo } from 'react';
import { productSchema } from './types';
import { getCart } from '@/actions/cart';
import { Button } from './ui/button';
import { navigateSuccess } from '@/actions/navigate';

interface CartWrapperProps {
  user?: ExtendedUser;
}

export const CartWrapper = ({ user }: CartWrapperProps) => {
  const [cart, setCart] = useState<productSchema[]>([]);

  useEffect(() => {
    if (user) {
      getCart(user.id).then((data: productSchema[] | null | undefined) => {
        if (data) {
          setCart(data);
        }
      });
    }
  }, [user]);

  const calculateTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cart]);

  const handleCheckout = async () => {
    try {
      // console.log(cart);
      await fetch('https://goldencoffee.shop/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart: cart }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (response.url) {
            navigateSuccess(response.url);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='flex justify-center items-center p-10'>
        <table className='w-full'>
          <caption className='text-left'>
            <h2 className='text-2xl lg:text-3xl'>Cart</h2>
          </caption>
          <thead>
            <tr className='w-full'>
              <th className='w-1/2'>
                <span>Item</span>
              </th>
              <th className='w-1/4'>
                <span>Detail</span>
              </th>
              <th className='w-1/8'>
                <span>Price</span>
              </th>
              <th className='w-1/8'>
                <span>Qty</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((c, i) => (
              <CartTable
                key={i}
                product_id={c.product_id}
                description={c.description}
                image={c.image}
                price={c.price}
                quantity={c.quantity}
                product_name={c.product_name}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className='w-full p-10 text-sm'>
        <h1 className='text-lg'>Order Summary</h1>
        <Separator />
        <div className='flex justify-between mt-2'>
          <span className='tracking-widest'>Subtotal:</span>
          <span className='tracking-widest'>${calculateTotal}</span>
        </div>
        <div className='flex justify-between'>
          <span className='tracking-widest'>SHIPPING</span>
          <span className='tracking-widest'>TO BE DETERMINED</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span className='tracking-widest'>TAXES</span>
          <span className='tracking-widest'>TO BE DETERMINED</span>
        </div>
        <Separator />
        <div className='flex justify-between mt-2'>
          <span className='tracking-widest'>ESTIMATED TOTAL</span>
          <span className='tracking-widest'>${calculateTotal}</span>
        </div>
      </div>
      <div className='w-5/6 m-auto p-5'>
        <button
          className='w-full bg-black text-white p-3 uppercase'
          onClick={handleCheckout}
        >
          Continue to Checkout
        </button>
      </div>
    </>
  );
};
