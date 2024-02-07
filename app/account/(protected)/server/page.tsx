import { currentUser } from '@/lib/auth';
import { UserInfo } from '../_components/user-info';

const ServerPage = async () => {
  const user = await currentUser();
  return (
    <div className='w-1/2 min-w-[400px] md:min-w-[600px] md:max-w-[600px]'>
      <UserInfo user={user} label='Server component' />
    </div>
  );
};

export default ServerPage;
