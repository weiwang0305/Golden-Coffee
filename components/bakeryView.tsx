'use client';

import { useState, useTransition, useMemo, useCallback } from 'react';
import { MenuItem, productSchema } from './types';
import MenuView from './menuView';
import { incrementCartItem, decrementCartItem } from '@/actions/cart';

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
import { debounce } from 'lodash';

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleIncrement = useCallback(
    debounce((product_id: string) => {
      incrementCartItem(product_id).then((data) => {
        if (data.success) {
          if (user) {
            getCart(user.id).then(
              (data: productSchema[] | undefined | null) => {
                if (data) {
                  setCart(data);
                } else {
                  setCart([]);
                }
              }
            );
          }
        } else if (data.error) {
          console.log(data.error);
        }
      });
    }, 300),
    [user, getCart, setCart]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleDecrement = useCallback(
    debounce((product_id: string) => {
      decrementCartItem(product_id).then((data) => {
        if (data.success) {
          if (user) {
            getCart(user.id).then(
              (data: productSchema[] | undefined | null) => {
                if (data) {
                  setCart(data);
                } else {
                  setCart([]);
                }
              }
            );
          }
        } else if (data.error) {
          console.log(data.error);
        }
      });
    }, 300),
    [user, getCart, setCart]
  );

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
                      product_id={c.product_id}
                      price={c.price}
                      image={c.image}
                      quantity={c.quantity}
                      debouncedHandleIncrement={debouncedHandleIncrement}
                      debouncedHandleDecrement={debouncedHandleDecrement}
                    />
                  ))}
                  <div>Estimated Total: ${calculateTotal}</div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <div className='w-full relative'>
                      <Link
                        className='bg-black text-white px-3 py-2 absolute'
                        href='/checkout'
                      >
                        Checkout
                      </Link>
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
