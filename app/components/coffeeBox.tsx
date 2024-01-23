import Image from 'next/image';
import { DrinkItem } from './types';

const CoffeeBox = ({
  id,
  name,
  description,
  hotprice,
  coldsmprice,
  coldlgprice,
  rating,
  votes,
  image,
  type,
}: DrinkItem) => {
  console.log(
    id,
    name,
    description,
    hotprice,
    coldsmprice,
    coldlgprice,
    rating,
    votes,
    image,
    type
  );
  return (
    <div className='mb-10 text-center'>
      <div className='flex justify-center rounded-md'>
        <Image
          className='rounded-md w-[450px] h-[333px] relative'
          src={`/coffee/${image}.jpg`}
          alt={`${name} picture`}
          width={500}
          height={400}
        />
      </div>

      <p className='text-xl font-bold tracking-wider'>{name}</p>
      <p className='text-base font-light tracking-wider'>{description}</p>
      <p className='text-lg font-bold tracking-wide p-2'>
        H: {hotprice} C:{coldsmprice}/{coldlgprice}
      </p>

      <div className='flex justify-center align-middle'>
        <Image
          src={'/Star_fill.svg'}
          alt='Star-filled image'
          width={20}
          height={25}
          className='m-0'
        />
        <span className='items-center'></span>
        {rating}
      </div>
      <span className='text-[#6F757C] text-xs flex justify-center pl-1 items-end'>
        ({votes} votes)
      </span>
    </div>
  );
};
export default CoffeeBox;
