import prisma from '@/lib/prisma';

export const getCartByUserId = async (userId: string) => {
  try {
    const cart = await prisma.cart.findFirst({
      where: { userId },
    });
    return cart;
  } catch {
    return null;
  }
};
