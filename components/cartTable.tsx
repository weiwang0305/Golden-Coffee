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
        <div className='relative w-[70px] h-[70px]'>
          <Image
            src={`/menu/${image}.jpg`}
            alt={`${product_name}`}
            sizes='100vw'
            fill
          ></Image>
          {product_name}
        </div>
      </td>
      <td>
        <div>{description}</div>
      </td>
      <td>
        <div>{price}</div>
      </td>
      <td>
        <div>{quantity}</div>
      </td>
    </tr>
  );
};
