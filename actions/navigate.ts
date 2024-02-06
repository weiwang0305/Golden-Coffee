'use server';

import { redirect } from 'next/navigation';

export const navigateLogin = async () => {
  redirect('/account/login');
};

export const navigateSetting = async () => {
  redirect('/account/settings');
};
