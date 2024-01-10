'use client';

interface MenuItem {
  name: string;
  ingredients: string;
  price: number;
}

const MenuView = ({ name, ingredients, price }: MenuItem) => {
  return (
    <div>
      <p>{name}</p>
      <p>{ingredients}</p>
      <p>{price}</p>
    </div>
  );
};
export default MenuView;
