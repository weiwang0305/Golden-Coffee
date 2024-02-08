import BakeryView from '../../components/bakeryView';
import prisma from '@/lib/prisma';

import { currentUser } from '@/lib/auth';

const BakeryPage = async () => {
  const data = await prisma.menu.findMany({
    orderBy: [
      {
        type: 'desc',
      },
    ],
  });
  const user = await currentUser();

  return <BakeryView data={data} user={user} />;
};
export default BakeryPage;
