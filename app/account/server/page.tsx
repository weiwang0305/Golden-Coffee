import { currentUser } from '@/lib/auth';

const ServerPage = () => {
  const user = currentUser();
  return <div>{JSON.stringify(user)}</div>;
};

export default ServerPage;
