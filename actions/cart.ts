'use server';

import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';

export const getCart = async () => {
  const user = await currentUser();
  if (!user) {
    return { error: 'Please login' };
  }
  const databaseUser = await getUserById(user.id);
  if (databaseUser?.cart) {
    return databaseUser.cart;
  }
};
