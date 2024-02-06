import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import { Toaster } from 'sonner';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { UserButton } from '@/components/auth/user-button';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { FaBars } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';

const CurrentFont = Barlow({
  weight: '400',
  subsets: ['latin'],
});

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/bakery', label: 'Bakery' },
  { href: '/cafe', label: 'Cafe' },
  { href: '/contact', label: 'Contact' },
];

export const metadata: Metadata = {
  title: 'Golden Coffee',
  description: 'Golden Coffee',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang='en' className='w-screen m-0 p-0 overflow-x-hidden'>
        <body className={`${CurrentFont.className}`}>
          <div className='flex justify-center text-lg bg-[#22223b] text-gray-200 p-1 text-center'>
            <Link href='/account/register'>
              <span className='tracking-widest'>
                <span className=''>
                  Join the Coffee Club ☕! 50% OFF FIRST ORDER!
                </span>
              </span>
            </Link>
          </div>
          <div className='flex flex-col w-4/5 m-auto align-center justify-between md:flex-row lg:flex-row'>
            <div className='w-full'>
              <div className='text-4xl font-black tracking-wider p-1 flex flex-row justify-between items-center md:text-left lg:text-left'>
                <span>
                  <Link className='w-full' href='/'>
                    {' '}
                    Golden Coffee
                  </Link>
                </span>
                <div className='md:hidden'>
                  <Sheet>
                    <SheetTrigger asChild>
                      <FaBars />
                    </SheetTrigger>
                    <SheetContent>
                      <SheetClose asChild>
                        <Link href='/account/login' className=''>
                          <Avatar>
                            <AvatarImage src={session?.user.image || ''} />
                            <AvatarFallback className='bg-white'>
                              <FaUser />
                            </AvatarFallback>
                          </Avatar>
                        </Link>
                      </SheetClose>
                      {navigation.map((nav, i) => (
                        <SheetClose key={i} asChild className='flex flex-col'>
                          <Link href={nav.href}>{nav.label}</Link>
                        </SheetClose>
                      ))}
                    </SheetContent>
                  </Sheet>
                </div>
                <div className='hidden md:block justify-center items-center flex-row'>
                  {session?.user && (
                    <div className='flex flex-row justify-center items-center'>
                      <div className='mx-5'>
                        <UserButton />
                      </div>
                      <div>
                        <FaShoppingCart size={17} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {!session?.user && (
              <>
                <Link href='/account/login' className='hidden md:block'>
                  <Avatar>
                    <AvatarImage src={session?.user.image || ''} />
                    <AvatarFallback className='bg-white'>
                      <FaUser />
                    </AvatarFallback>
                  </Avatar>
                </Link>
              </>
            )}
          </div>

          <nav className=' justify-center flex-row hidden md:flex w-full'>
            {navigation.map((nav, i) => (
              <Button
                asChild
                variant='ghost'
                key={i}
                size='lg'
                className='shadow-sm'
              >
                <Link
                  href={nav.href}
                  className='text-sm font-medium transition-colors'
                >
                  <span className='text-lg'>{nav.label}</span>
                </Link>
              </Button>
            ))}
          </nav>

          <Toaster />
          {children}
          <div className='bg-[#4a4e69] text-[#f2e9e4]'>
            <div className='flex flex-col p-5 justify-between md:flex-row lg:flex-row'>
              <div className='flex flex-row p-5 gap-10 flex-wrap'>
                <div id='location1'>
                  <p>Golden Coffee Cafe @ Java</p>
                  <p>123 Java Street</p>
                  <p>Brewville, CO</p>
                  <p>80123</p>
                  <p>(555)-123-4567</p>
                </div>
                <div id='location2'>
                  <p>Golden Coffee Cafe @ Espresso</p>
                  <p>987 Espresso Avenue</p>
                  <p>Roastington, CA</p>
                  <p>90210</p>
                  <p>(555)-789-0123</p>
                </div>
                <div>
                  <h2>Hours</h2>
                  <p>Everyday</p>
                  <p>7AM - 4PM</p>
                  <h2>Holiday Hours</h2>
                  <p>8AM - 3PM December 23</p>
                  <p>8AM - 3PM December 24</p>
                  <p>CLOSED December 25 - December 28</p>
                  <p>8AM - 3PM December 29</p>
                  <p>8AM - 3PM December 30</p>
                  <p>8AM - 3PM December 31</p>
                  <p>10AM - 2PM January 1</p>
                </div>
              </div>
              <div className='flex-shrink-0 mt-10 md:mt-0 lg:mt-0'>
                <div id='contact'>
                  <div className='flex flex-col'>
                    <div className='flex flex-row gap-4 justify-center'>
                      <div>
                        <Image
                          src={'/icons8-facebook.svg'}
                          alt='fb icon'
                          height={25}
                          width={25}
                          className='bg-d'
                        />
                      </div>
                      <div>
                        <Image
                          src={'/icons8-instagram.svg'}
                          alt='instagram icon'
                          height={25}
                          width={25}
                        />
                      </div>
                      <div>
                        <Image
                          src={'/icons8-tiktok.svg'}
                          alt='tiktok icon'
                          height={25}
                          width={25}
                        />
                      </div>
                      <div>
                        <Image
                          src={'/icons8-twitter.svg'}
                          alt='twitter logo'
                          height={25}
                          width={25}
                          className='grayscale'
                        />
                      </div>
                    </div>
                    <div className='p-5 font-semibold text-gray-200 text-center'>
                      <p>
                        <Link href='/careers'>Careers</Link>
                      </p>
                      <p>
                        <Link href='/contact'>Contact Us</Link>
                      </p>
                      <p>
                        <Link href='/giftcards'>Gift Cards</Link>
                      </p>
                      <p>
                        <Link href='/loyalty'>Loyalty</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
