import Image from 'next/image';

interface CartTableProps {
  product_id: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  product_name: string;
}

export const CartTable = ({
  product_id,
  description,
  image,
  price,
  quantity,
  product_name,
}: CartTableProps) => {
  return (
    <tr>
      <td>
        <div>
          {/* <div className='relative w-[70px] h-[70px]'>
            <Image
              src={`/menu/${image}.jpg`}
              alt={`${product_name}`}
              sizes='100vw'
              fill
            ></Image>
          </div> */}
          <div className='flex justify-center items-center w-full text-sm'>
            {product_name}
          </div>
        </div>
      </td>
      <td>
        <div className='text-sm flex justify-start items-center w-full'>
          {description}
        </div>
      </td>
      <td>
        <div className='text-sm text-center'>{price}</div>
      </td>
      <td>
        <div className='text-center'>{quantity}</div>
      </td>
    </tr>
  );
};
