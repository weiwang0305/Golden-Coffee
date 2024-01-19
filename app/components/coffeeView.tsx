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
  }, []);

  const getAllProduct = async () => {
    const newData = await getData();
    setDatas(newData);
  };

  const getAvailableNow = async () => {
    let newData = await getData();
    newData = newData.filter((data: Data) => data.available === true);
    setDatas(newData);
  };
  console.log(datas);
  return (
    <div>
      <div className='flex justify-center'>
        <button
          className='border rounded-md mt-2 mr-4 p-2 mb-8 hover:bg-gray-700'
          onClick={getAllProduct}
        >
          All Products
        </button>
        <button
          className='border rounded-md mt-2 ml-4 p-2 mb-8 hover:bg-gray-700'
          onClick={getAvailableNow}
        >
          Available Now
        </button>
      </div>
      <div className='grid-rows-1 grid gap-x-5 justify-evenly justify-items-center '>
        {datas.map((data: Data, index: number) => (
          <CoffeeBox key={index} data={data} />
        ))}
      </div>
    </div>
  );
};
export default CoffeeView;
