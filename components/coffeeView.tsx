'use client';
import { useState } from 'react';
import CoffeeBox from './coffeeBox';
import { DrinkItem } from './types';
import _ from 'lodash';
import { Button } from './ui/button';

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
            Introducing our coffee collection, a selection of unique coffees
            from different roasst types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <p className='w-2/4 font-bold uppercase m-auto p-5'>
            **Our drinks are important to us, so we do not allow drinks to be
            ordered online. Sorry for the inconvenience.**
          </p>
        </div>
      </div>
      <div className='flex justify-center p-2 mb-5'>
        <div className='flex justify-between w-2/4 md:max-w-[200px]'>
          <Button
            onClick={() => setCurrentSelection(classicdata)}
            variant={'outline'}
          >
            Classic
          </Button>
          <Button
            onClick={() => setCurrentSelection(seasonaldata)}
            variant={'outline'}
          >
            Seasonal
          </Button>
        </div>
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
