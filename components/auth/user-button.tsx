'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { SettingButton } from '@/components/auth/settingButton';
import { IoSettingsOutline } from 'react-icons/io5';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaUser } from 'react-icons/fa';
import { useCurrentUser } from '@/hooks/use-current-user';
import { LogoutButton } from './logout-button';
import { ExitIcon } from '@radix-ui/react-icons';

export const UserButton = () => {
  const user = useCurrentUser();
  console.log(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={user?.image || undefined} />
          <AvatarFallback className='bg-white'>
            <FaUser size={17}></FaUser>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <SettingButton>
          <DropdownMenuItem>
            <IoSettingsOutline className='h-4 w-4 mr-2' />
            Settings
          </DropdownMenuItem>
        </SettingButton>
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className='h-4 w-4 mr-2' />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
