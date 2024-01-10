'use client';
import { MenuItem } from './types';

const MenuView = ({ name, description, price }: MenuItem) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};
export default MenuView;
