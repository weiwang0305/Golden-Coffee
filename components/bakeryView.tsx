'use client';

import { useState, useTransition, useMemo } from 'react';
import { MenuItem, productSchema } from './types';
import MenuView from './menuView';

import { Button } from './ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from './ui/sheet';
import { Separator } from './ui/separator';
import { updateCart } from '@/actions/cart';
import { ExtendedUser } from '@/next-auth';
import { getCart } from '@/actions/cart';
import { CartSheetWrapper } from './cartSheetWrapper';

import Link from 'next/link';

const BakeryView = ({
  data,
  user,
}: {
  data: MenuItem[];
  user?: ExtendedUser;
}) => {
  const [category, setCategory] = useState('pastries');
  const [originaldata, setCurrentData] = useState(data);
  const [currentSelection, setCurrentSelection] = useState(originaldata);
  const [isPending, startTransition] = useTransition();
  const [cart, setCart] = useState<productSchema[]>([]);

  const handleAddCart = (itemId: string) => {
    startTransition(() => {
      updateCart(itemId)
        .then((data) => {
          if (data.success) {
            if (user) {
              getCart(user.id).then(
                (data: productSchema[] | null | undefined) => {
                  if (data) {
                    setCart(data);
                  } else {
                    setCart([]);
                  }
                }
              );
            }
          }
          if (data.error) {
            console.log('error', user);
          }
        })
        .catch(() => {
          return null;
        });
    });
  };
  const calculateTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cart]);

  return (
    <div className='text-center m-auto'>
      <div>
        <div className='text-4xl p-5'>Menu</div>
        <p className='w-2/4 mx-auto my-5'>
          Please ask about modifying items for dietary restrictions and
          allergies. Many items can be made gluten or dairy free, vegan or
          vegetarian upon request.
        </p>
      </div>

      <div>
        {currentSelection.map((current, index) => (
          <div key={index}>
            <MenuView
              id={current.id}
              name={current.name}
              description={current.description}
              price={current.price}
              type={current.type}
              image={current.image}
            />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  className='text-sm bg-black text-white m-2 uppercase p-6'
                  disabled={isPending}
                  onClick={() => handleAddCart(current.id)}
                >
                  <span className='tracking-wider'>Add to Cart</span>
                  <span className='mx-4'>|</span>
                  <span>{current.price}</span>
                </Button>
              </SheetTrigger>
              <SheetContent className='overflow-scroll'>
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                <Separator />
                <div>
                  {cart?.map((c, i) => (
                    <CartSheetWrapper
                      key={c.product_id}
                      product_name={c.product_name}
                      price={c.price}
                      image={c.image}
                      quantity={c.quantity}
                    />
                  ))}
                  <div>Estimated Total: {calculateTotal}</div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <div className='w-full'>
                      <button className='w-full outline mt-5 bg-black text-white p-2'>
                        <Link href='/checkout'>Checkout</Link>
                      </button>
                    </div>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BakeryView;
