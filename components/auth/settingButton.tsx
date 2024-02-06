'use client';
import { navigateSetting } from '@/actions/navigate';

interface SettingButtonProps {
  children?: React.ReactNode;
}

export const SettingButton = ({ children }: SettingButtonProps) => {
  return (
    <span onClick={() => navigateSetting()} className='cursor-pointer'>
      {children}
    </span>
  );
};
