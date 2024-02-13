'use server';

import { getBakeryItemById } from '@/data/menu';
import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { PrismaClient } from '@prisma/client';

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
  console.log(bakeryItem);
  console.log(databaseUser);
};
