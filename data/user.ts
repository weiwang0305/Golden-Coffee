import prisma from '../lib/prisma';

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
      include: { cart: true },
    });
    return user;
  } catch {
    return null;
  }
};
