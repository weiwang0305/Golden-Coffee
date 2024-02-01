'use client';

import { signOut } from 'next-auth/react';
import { useCurrentUser } from '@/hooks/use-current-user';

const SettingsPage = () => {
  const user = useCurrentUser();

  //Can also use signout from auth.ts in a server action if you want to perform server actions during ogout
  const handleSignOut = () => {
    signOut();
  };

  return (
    <div>
      <form>
        <button type='submit' onClick={handleSignOut}>
          Sign out
        </button>
      </form>
    </div>
  );
};
export default SettingsPage;
