'use client';

interface SettingButtonProps {
  children?: React.ReactNode;
}

export const SettingButton = ({ children }: SettingButtonProps) => {
  return <span className='cursor-pointer'>{children}</span>;
};
