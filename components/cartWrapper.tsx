'use client';
import { ExtendedUser } from '@/next-auth';
import { Separator } from './ui/separator';
import { CartTable } from './cartTable';
import { useState, useEffect } from 'react';
import { productSchema } from './types';
import { getCart } from '@/actions/cart';

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

  console.log(cart);
  return (
    <div>
      <h1>Cart</h1>
      <Separator />
      <table className='m-auto'>
        <thead>
          <tr>
            <th>
              <span>Item</span>
            </th>
            <th>
              <span>Detail</span>
            </th>
            <th>
              <span>Price</span>
            </th>
            <th>
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
  );
};
