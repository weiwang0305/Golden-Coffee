'use client';

import { useCurrentUser } from '@/hooks/use-current-user';
import { UserInfo } from '../_components/user-info';

const ServerPage = () => {
  const user = useCurrentUser();
  return (
    <div>
      <UserInfo user={user} label='User Info' />
    </div>
  );
};

export default ServerPage;
