'use client';

import { useState } from 'react';

const BakeryView = () => {
  const [category, setCategory] = useState('pastries');

  return (
    <div>
      <div>
        <div>Menu</div>
        <p>
          Please ask about modifying items for dietary restrictions and
          allergies. Many items can be made gluten or dairy free, vegan or
          vegetarian upon request.
        </p>
      </div>

      <div>{}</div>
    </div>
  );
};

export default BakeryView;
