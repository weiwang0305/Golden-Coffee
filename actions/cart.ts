'use server';

import { getCartByUserId } from '@/data/cart';
import { getBakeryItemById } from '@/data/menu';
import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';
import prisma from '@/lib/prisma';

export const updateCart = async (itemId: string) => {
  const user = await currentUser();

  if (!user) {
    return { error: 'Please login' };
  }

  const databaseUser = await getUserById(user.id);

  if (!databaseUser) {
    return { error: 'User does not exist' };
  }

  const bakeryItem = await getBakeryItemById(itemId);

  if (!bakeryItem) {
    return { error: 'Invalid Item' };
  }

  const existingCart = await prisma.cart.findFirst({
    where: { userId: user.id },
    include: { products: true },
  });

  if (!existingCart) {
    const updatedCart = await prisma.cart.create({
      data: {
        userId: databaseUser.id,
        products: {
          create: [
            {
              product_id: bakeryItem.id,
              quantity: 1,
              product_name: bakeryItem.name,
              description: bakeryItem.description,
              price: bakeryItem.price,
              type: bakeryItem.type,
              image: bakeryItem.image,
            },
          ],
        },
      },
    });
    console.log('there was no existing cart');
    return { success: 'Cart Updated' };
  } else {
    const itemIndex = existingCart?.products.findIndex(
      (p) => p.product_id === bakeryItem.id
    );
    if (itemIndex > -1) {
      const itemId = existingCart.products[itemIndex].id;
      await prisma.products.update({
        where: { id: itemId },
        data: { quantity: { increment: 1 } },
      });
      console.log('found item, returning updated cart');
      return { success: 'Cart Updated' };
    } else {
      const updatedCart = await prisma.cart.update({
        where: { id: existingCart.id },
        data: {
          products: {
            create: [
              {
                product_id: bakeryItem.id,
                quantity: 1,
                product_name: bakeryItem.name,
                description: bakeryItem.description,
                price: bakeryItem.price,
                type: bakeryItem.type,
                image: bakeryItem.image,
              },
            ],
          },
        },
      });
      console.log('did not find item, returning updated cart');
      return { success: 'Cart Updated' };
    }
  }
};

export const getCart = async (userId: string) => {
  const cart = await getCartByUserId(userId);
  return cart;
};

export const incrementCartItem = async (itemId: string) => {
  const user = await currentUser();
  if (!user) {
    return { error: 'Please log in' };
  }
  const existingCart = await prisma.cart.findFirst({
    where: { userId: user.id },
    include: { products: true },
  });
  if (!existingCart) {
    return { error: 'Cart does not exist' };
  }

  const itemIndex = existingCart.products.findIndex(
    (p) => p.product_id === itemId
  );
  if (itemIndex > -1) {
    const id = existingCart.products[itemIndex].id;
    await prisma.products.update({
      where: { id },
      data: { quantity: { increment: 1 } },
    });
  }
  console.log(itemIndex);
  return { success: 'Cart Updated' };
};

export const decrementCartItem = async (itemId: string) => {
  const user = await currentUser();
  if (!user) {
    return { error: 'Please log in' };
  }
  const existingCart = await prisma.cart.findFirst({
    where: { userId: user.id },
    include: { products: true },
  });
  if (!existingCart) {
    return { error: 'Cart does not exist' };
  }

  const itemIndex = existingCart.products.findIndex(
    (p) => p.product_id === itemId
  );
  if (itemIndex > -1) {
    const id = existingCart.products[itemIndex].id;
    await prisma.products.update({
      where: { id },
      data: { quantity: { increment: -1 } },
    });
  }
  console.log(itemIndex);
  return { success: 'Cart Updated' };
};
