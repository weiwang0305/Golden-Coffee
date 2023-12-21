'use client';
import { useEffect, useState } from 'react';
import CoffeeBox from './coffeeBox';
import { Data } from './types';

const getData = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
  );
  const datas = await res.json();
  return datas;
};

const CoffeeView = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const callGetData = async () => {
      const data = await getData();
      setDatas(data);
    };
    callGetData();
  });

  return (
    <div className='grid-rows-auto grid-cols-3 grid grid-flow-row gap-x-5 justify-evenly justify-items-center'>
      {datas.map((data: Data, index: number) => (
        <CoffeeBox key={index} data={data} />
      ))}
    </div>
  );
};
export default CoffeeView;
