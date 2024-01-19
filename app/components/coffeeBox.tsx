import { Data } from './types';
import Image from 'next/image';

const CoffeeBox = ({ data }: { data: Data }) => {
  return (
    <div className='mb-10'>
      <div className='flex justify-center rounded-md'>
        <Image
          className='rounded-md w-[250px] h-[175px]'
          src={data.image}
          alt='Coffee Image'
          width={250}
          height={175}
        />
      </div>
      <div className='flex justify-between mt-3'>
        <div className=''>{data.name}</div>
        <div className='bg-[#BEE3CC] text-[#1B1D1F] text-sm flex justify-center items-center p-1 rounded-md'>
          {data.price}
        </div>
      </div>
      <div className='flex flex-start'>
        <Image
          src={'/Star_fill.svg'}
          alt='Star-filled image'
          width={20}
          height={25}
          className='m-0'
        />
        {data.rating}
        <span className='text-[#6F757C] text-xs flex justify-center items-center pl-1'>
          ({data.votes} votes)
        </span>
      </div>
    </div>
  );
};
export default CoffeeBox;
