import prisma from '@/lib/prisma';

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const resetToken = await prisma.passwordResetToken.findFirst({
      where: { email },
    });
    return resetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
    });
    return resetToken;
  } catch {
    return null;
  }
};
