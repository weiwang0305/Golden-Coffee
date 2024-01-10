'use client';

import { useEffect, useState } from 'react';
import { MenuItem } from './types';
import MenuView from './menuView';

const BakeryView = ({ data }: { data: MenuItem[] }) => {
  const [category, setCategory] = useState('pastries');
  const [currentSelection, setCurrentSelection] = useState(data);

  return (
    <div className='text-center'>
      <div>
        <div>Menu</div>
        <p>
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
          />
        ))}
      </div>
    </div>
  );
};

export default BakeryView;
