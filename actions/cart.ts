'use server';

import { getBakeryItemById } from '@/data/menu';
import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';
import prisma from '@/lib/prisma';
import * as z from 'zod';
import { NewCartSchema } from '@/schemas';

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
    await prisma.cart.create({
      data: {
        userId: databaseUser.id,
        products: {
          create: [
            {
              product_id: bakeryItem.id,
              quantity: 1,
            },
          ],
        },
      },
    });
  }

  console.log(existingCart?.products[0].product_id);
};
