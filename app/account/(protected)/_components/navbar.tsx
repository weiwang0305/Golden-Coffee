'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className='bg-secondary flex justify-between items-center p-4 mt-5 rounded-xl w-1/2 min-w-[400px] md:min-w-[600px] md:max-w-[600px] shadow-sm'>
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
          <Link href='/account/admin'>Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/account/settings' ? 'default' : 'outline'}
        >
          <Link href='/account/settings'>Settings</Link>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
