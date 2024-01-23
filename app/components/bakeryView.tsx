'use client';

import { useEffect, useState } from 'react';
import { MenuItem } from './types';
import MenuView from './menuView';
import Image from 'next/image';

const BakeryView = ({ data }: { data: MenuItem[] }) => {
  const [category, setCategory] = useState('pastries');
  const [originaldata, setCurrentData] = useState(data);
  const [currentSelection, setCurrentSelection] = useState(originaldata);

  return (
    <div className='text-center m-auto'>
      <div>
        <div className='text-4xl p-5'>Menu</div>
        <p className='w-[400px] mx-auto my-5'>
          Please ask about modifying items for dietary restrictions and
          allergies. Many items can be made gluten or dairy free, vegan or
          vegetarian upon request.
        </p>
      </div>

      <div>
        {currentSelection.map((current, index) => (
          <MenuView
            key={current.id}
            id={current.id}
            name={current.name}
            description={current.description}
            price={current.price}
            type={current.type}
            image={current.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BakeryView;
