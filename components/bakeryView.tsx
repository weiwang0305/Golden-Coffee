'use client';

import { useEffect, useState, useTransition } from 'react';
import { MenuItem } from './types';
import MenuView from './menuView';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';
import { Separator } from './ui/separator';
import { updateCart } from '@/actions/cart';
import { ExtendedUser } from '@/next-auth';
import { useCurrentUser } from '@/hooks/use-current-user';

const BakeryView = ({
  data,
  user,
}: {
  data: MenuItem[];
  user?: ExtendedUser;
}) => {
  const [category, setCategory] = useState('pastries');
  // const [error, setError] = useState<string | undefined>('');
  // const [success, setSuccess] = useState<string | undefined>('');
  const [originaldata, setCurrentData] = useState(data);
  const [currentSelection, setCurrentSelection] = useState(originaldata);
  const [isPending, startTransition] = useTransition();
  const [cart, setCart] = useState(user?.cart);

  const handleAddCart = (itemId: string) => {
    startTransition(() => {
      updateCart(itemId)
        .then((data) => {
          if (data.success) {
            setCart(user?.cart);
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
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                <Separator />
                <div>
                  {cart?.map((c,i) => (
                    <div key={i}>
                      {c.}
                      </div>  
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BakeryView;
