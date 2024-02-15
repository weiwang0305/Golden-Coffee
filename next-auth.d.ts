import NextAuth, { type DefaultSession } from 'next-auth';
import { productSchema } from './components/types';

export type ExtendedUser = DefaultSession['user'] & {
  role: ADMIN | USER;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  cart: productSchema[];
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
