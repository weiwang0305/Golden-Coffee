'use server';

import prisma from '@/lib/prisma';
import { getUserByEmail } from '@/data/user';
import {
  getVerificationTokenById,
  getVerificationTokenByToken,
} from '@/data/verification-token';

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: 'Token does not exist' };
  }
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: 'Token has expired!' };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: 'Email does not exist' };
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  const existingVerificationToken = await getVerificationTokenById(
    existingUser.id
  );
  if (existingVerificationToken) {
    await prisma.verificationToken.delete({
      where: { id: existingUser.id },
    });
  }

  return { success: 'Email verified' };
};
