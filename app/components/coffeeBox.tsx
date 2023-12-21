import { Data } from './types';
import Image from 'next/image';

const CoffeeBox = ({ data }: { data: Data }) => {
  return (
    <div className='mb-10'>
      <div className='flex justify-center rounded-md'>
        <Image
          className='rounded-md'
          src={data.image}
          alt='Coffee Image'
          width={200}
          height={200}
        />
      </div>
      <div className='flex justify-between mt-3'>
        <div>{data.name}</div>
        <div className='bg-[#BEE3CC] text-[#1B1D1F] text-xs flex justify-center items-center p-1 rounded-md'>
          {data.price}
        </div>
      </div>
      <div className='flex flex-start'>
        <Image
          src={'/Star_fill.svg'}
          alt='Star-filled image'
          width={20}
          height={25}
        />
        {data.rating}({data.votes} votes)
      </div>
    </div>
  );
};
export default CoffeeBox;
