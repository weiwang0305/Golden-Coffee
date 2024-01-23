'use client';
import { useEffect, useState } from 'react';
import CoffeeBox from './coffeeBox';
import { DrinkItem } from './types';
import _ from 'lodash';

const CoffeeView = ({
  classicdata,
  seasonaldata,
}: {
  classicdata: DrinkItem[];
  seasonaldata: DrinkItem[];
}) => {
  const [currentSelection, setCurrentSelection] = useState(classicdata);

  return (
    <div>
      <div className='text-center m-auto'>
        <div>
          <div className='text-4xl p-5'>Our Collection</div>
          <p className='w-[400px] mx-auto my-5'>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roasst types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <button
          className='border rounded-md mt-2 mr-4 p-2 mb-8 hover:bg-gray-700'
          onClick={() => setCurrentSelection(classicdata)}
        >
          All Products
        </button>
        <button
          className='border rounded-md mt-2 ml-4 p-2 mb-8 hover:bg-gray-700'
          onClick={() => setCurrentSelection(seasonaldata)}
        >
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
            type={currentdata.type}
          />
        ))}
      </div>
    </div>
  );
};
export default CoffeeView;
