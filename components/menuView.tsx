'use client';
import { MenuItem } from './types';
import Image from 'next/image';
import { Button } from './ui/button';

const MenuView = ({ id, name, description, price, type, image }: MenuItem) => {
  return (
    <div className='py-5'>
      <div className='h-[333px] w-4/5 relative m-auto max-w-[450px] overflow-hidden'>
        <Image
          src={`/menu/${image}.jpg`}
          alt={`${name} picture`}
          fill
          sizes='(min-width: 600px) 434px, 75vw'
          quality={100}
          className='p-2'
        />
      </div>
      <p className='text-2xl font-bold tracking-wider'>{name}</p>
      <p className='text-sm font-light tracking-wider'>{description}</p>
    </div>
  );
};
export default MenuView;
