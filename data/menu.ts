import prisma from '@/lib/prisma';

export const getBakeryItemById = async (bakeryItemId: string) => {
  try {
    const bakeryItem = await prisma.menu.findUnique({
      where: { id: bakeryItemId },
    });
    return bakeryItem;
  } catch {
    return null;
  }
};
