'use client';
import { useEffect, useState } from 'react';
import CoffeeBox from './coffeeBox';
import { DrinkItem } from './types';

const CoffeeView = ({ data }: { data: DrinkItem[] }) => {
  const [originaldata, setOriginalData] = useState(data);
  const [currentSelection, setCurrentSelection] = useState(originaldata);

  console.log(currentSelection);
  return (
    <div>
      <div className='flex justify-center'>
        <button
          className='border rounded-md mt-2 mr-4 p-2 mb-8 hover:bg-gray-700'
          onClick={() => setCurrentSelection(originaldata)}
        >
          All Products
        </button>
        <button className='border rounded-md mt-2 ml-4 p-2 mb-8 hover:bg-gray-700'>
          Available Now
        </button>
      </div>
      <div className='grid-rows-1 grid gap-x-5 justify-evenly justify-items-center '>
        {currentSelection.map((currentdata: DrinkItem, index: number) => (
          <CoffeeBox
            key={index}
            id={currentdata.id}
            name={currentdata.name}
            description={currentdata.description}
            hotprice={currentdata.hotprice}
            coldsmprice={currentdata.coldsmprice}
            coldlgprice={currentdata.coldlgprice}
            rating={currentdata.rating}
            votes={currentdata.votes}
            image={currentdata.image}
          />
        ))}
      </div>
    </div>
  );
};
export default CoffeeView;
