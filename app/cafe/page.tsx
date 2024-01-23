import CoffeeView from '../components/coffeeView';
import prisma from '@/lib/prisma';

const CafePage = async () => {
  const classicdata = await prisma.coffee.findMany({
    where: {
      type: 'classic',
    },
    orderBy: [
      {
        name: 'desc',
      },
    ],
  });

  const seasonaldata = await prisma.coffee.findMany({
    where: {
      type: 'seasonal',
    },
    orderBy: [
      {
        name: 'desc',
      },
    ],
  });
  return (
    <div>
      <CoffeeView classicdata={classicdata} seasonaldata={seasonaldata} />
    </div>
  );
};
export default CafePage;
