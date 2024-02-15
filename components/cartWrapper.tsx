import Image from 'next/image';

interface CartWrapperProps {
  product_name: string;
  price: number;
  image: string;
  quantity: number;
}

export const CartWrapper = ({
  product_name,
  price,
  image,
  quantity,
}: CartWrapperProps) => {
  return (
    <div className='m-2 flex justify-between'>
      <div className='relative h-[50px] w-[50px]'>
        <Image
          alt={`${product_name}`}
          src={`/menu/${image}.jpg`}
          sizes='100vw'
          fill
        ></Image>
      </div>
      <span>{product_name}</span>
      <span>{price}</span>
      <span>{quantity}</span>
    </div>
  );
};
