'use server';

import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';

export const updateCart = async () => {
  const user = await currentUser();
  if (!user) {
    return { error: 'Please login' };
  }
  const databaseUser = await getUserById(user.id);
  console.log(databaseUser);
};
