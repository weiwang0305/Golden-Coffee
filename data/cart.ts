import prisma from '@/lib/prisma';

export const getCartByUserId = async (userId: string) => {
  try {
    const cart = await prisma.cart.findFirst({
      where: { userId },
      include: {
        products: {
          orderBy: {
            product_name: 'asc',
          },
        },
      },
      orderBy: {},
    });
    return cart?.products;
  } catch {
    return null;
  }
};
