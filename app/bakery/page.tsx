import BakeryView from '../components/bakeryView';
import prisma from '@/lib/prisma';

const BakeryPage = async () => {
  const data = await prisma.menu.findMany({});

  return <BakeryView data={data} />;
};
export default BakeryPage;
