'use client';

import { useEffect, useState } from 'react';
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
import { getCart } from '@/actions/cart';

const BakeryView = ({ data }: { data: MenuItem[] }) => {
  const [category, setCategory] = useState('pastries');
  const [originaldata, setCurrentData] = useState(data);
  const [currentSelection, setCurrentSelection] = useState(originaldata);

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
                <div></div>
              </SheetContent>
            </Sheet>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BakeryView;
