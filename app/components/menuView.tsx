'use client';
import { MenuItem } from './types';
import Image from 'next/image';

const MenuView = ({ id, name, description, price, type, image }: MenuItem) => {
  return (
    <div className='py-5'>
      <div className='h-[333px] w-[500px] relative m-auto overflow-hidden'>
        <Image
          src={`/menu/${image}.jpg`}
          alt={`${name} picture`}
          height={400}
          width={500}
          quality={100}
        />
      </div>
      <p className='text-xl font-bold tracking-wider'>{name}</p>
      <p className='text-base font-light tracking-wider'>{description}</p>
      <p className='text-xl font-bold'>{price}</p>
    </div>
  );
};
export default MenuView;
