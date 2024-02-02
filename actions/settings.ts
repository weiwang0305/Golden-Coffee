'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';

import prisma from '@/lib/prisma';
import { SettingsSchema } from '@/schemas';
import { getUserByEmail, getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();
  if (!user) {
    return { error: 'Unauthorized' };
  }
  const databaseUser = await getUserById(user.id);
  if (!databaseUser) {
    return { error: 'Unauthorized' };
  }

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);
    if (existingUser && existingUser.id !== user.id) {
      return { error: 'Email already in use!' };
    }

    const verificationToken = await generateVerificationToken(values.email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: 'Verification email sent!' };
  }

  if (values.password && values.newPassword && databaseUser.password) {
    const passwordsMatch = await bcrypt.compare(
      values.password,
      databaseUser.password
    );
    if (!passwordsMatch) {
      return { error: 'Incorrect password' };
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  await prisma.user.update({
    where: { id: databaseUser.id },
    data: {
      ...values,
    },
  });

  return { success: 'Settings Updated' };
};
