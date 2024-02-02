'use client';

import { UserButton } from '@/components/auth/user-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className='bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm'>
      <div className='flex gap-x-2'>
        <Button
          asChild
          variant={pathname === '/account/server' ? 'default' : 'outline'}
        >
          <Link href='/account/server'>Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/account/client' ? 'default' : 'outline'}
        >
          <Link href='/account/client'>Client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/account/admin' ? 'default' : 'outline'}
        >
          <Link href='/account/Admin'>Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/account/settings' ? 'default' : 'outline'}
        >
          <Link href='/account/settings'>Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};

export default NavBar;
