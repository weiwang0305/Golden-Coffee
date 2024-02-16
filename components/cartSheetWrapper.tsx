import Image from 'next/image';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { CiTrash } from 'react-icons/ci';

interface CartSheetWrapperProps {
  product_name: string;
  price: number;
  image: string;
  quantity: number;
}

export const CartSheetWrapper = ({
  product_name,
  price,
  image,
  quantity,
}: CartSheetWrapperProps) => {
  return (
    <>
      <div className='m-2 flex justify-between w-full'>
        <div className='relative w-[70px] h-[70px]'>
          <Image
            alt={`${product_name}`}
            src={`/menu/${image}.jpg`}
            sizes='100vw'
            fill
          ></Image>
        </div>
        <div className='flex flex-col justify-center items-center w-[100px]'>
          <span className='text-sm text-center'>{product_name}</span>
          <div className='outline m-2 h-1/2 w-[100px] flex justify-center items-center'>
            <Button variant='ghost'>-</Button>
            <span className='p-1 text-xs'>{quantity}</span>
            <Button variant='ghost'>+</Button>
          </div>
        </div>
        <div className='flex flex-col justify-between items-center'>
          <div className='w-[50px] flex justify-center items-center text-sm'>
            {price}
          </div>
          <div>
            <CiTrash />
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
