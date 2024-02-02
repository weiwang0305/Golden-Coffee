'use server';

import * as z from 'zod';

import prisma from '@/lib/prisma';
import { SettingsSchema } from '@/schemas';
import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();
  if (!user) {
    return { error: 'Unauthorized' };
  }
  const databaseUser = await getUserById(user.id);
  if (!databaseUser) {
    return { error: 'Unauthorized' };
  }

  await prisma.user.update({
    where: { id: databaseUser.id },
    data: {
      ...values,
    },
  });

  return { success: 'Settings Updated' };
};
