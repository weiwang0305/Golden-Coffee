'use server';

import * as z from 'zod';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { getUserByEmail } from '@/lib/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, password, firstname, lastname } = validatedFields.data;
  const hashedPasword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: 'Email already in use' };
  }

  await prisma.user.create({
    data: {
      firstname,
      email,
      password: hashedPasword,
      lastname,
    },
  });

  return { success: 'User created!' };
};
