'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Barlow } from 'next/font/google';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';

const barlow700 = Barlow({
  weight: '700',
  subsets: ['latin'],
});

const barlow600 = Barlow({
  weight: '600',
  subsets: ['latin'],
});

const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <div className='text-4xl flex justify-center align-middle flex-nowrap mt-[100px] text-center'>
        WHERE EVERY COFFEE TASTE LIKE
      </div>
      <div className='text-4xl flex justify-center align-middle flex-row'>
        GOLD.
      </div>
      <div className='mt-[100px] w-4/5 m-auto flex flex-col gap-5 grow md:flex-row lg:flex-row'>
        <div className='flex-1'>
          <div className='flex justify-center transform hover:scale-105 transition-all'>
            <Link href='/bakery'>
              <Image
                src={'/bakery.jpg'}
                alt='bakehouse'
                width={300}
                height={300}
                className='rounded-lg w-auto h-auto'
                priority
              />
            </Link>
          </div>
          <p className='text-center text-2xl p-1'>The Bakery</p>
          <p className='text-center text-l flex-wrap p-3'>
            Specializing in homemade croissants, muffins, macaroons, bagels,
            pies, and more.
          </p>
        </div>
        <div className='flex-1'>
          <div className='flex justify-center transform hover:scale-105 transition-all'>
            <Link href='/cafe'>
              <Image
                src={'/goldencoffee.jpg'}
                alt='picture of golden coffee'
                width={300}
                height={300}
                className='rounded-lg w-auto h-auto'
                priority
              />
            </Link>
          </div>
          <p className='text-center text-2xl p-1'>The Cafe</p>
          <p className='text-center text-l flex-wrap p-3'>
            Coffee shop featuring pastries, a large breakfast and lunch menu,
            and a large seating area.
          </p>
        </div>
        <div className='flex-1'>
          <div className='flex justify-center transform hover:scale-105 transition-all'>
            <Link href='/foodtruck'>
              <Image
                src={'/foodtrucks.jpg'}
                alt='picture of food truck'
                width={300}
                height={300}
                className='rounded-lg w-auto h-auto'
                priority
              />
            </Link>
          </div>
          <p className='text-center text-2xl p-1'>The Food Truck</p>
          <p className='text-center text-l flex-wrap p-3'>
            A food truck featuring a wide variety of pastries, pastries and
            small breakfast items for on the go.
          </p>
        </div>
      </div>

      <div className='w-full mt-[100px] m-auto bg-[#f2e9e4] p-10'>
        <div className='flex justify-evenly align-middle flex-col md:flex-row lg:flex-row'>
          <div className='flex flex-col justify-center'>
            <div className='text-center'>
              <p className='text-2xl font-bold p-5'>OUR STORY</p>
              <p className='text-3xl font-extrabold p-3'>
                About Golden Coffee Cafe
              </p>
              <p className='font-extrabold text-3xl mb-3'>...</p>
              <div className='w-3/4 flex justify-center m-auto'>
                <p>
                  Golden Coffee House is a new independent cafe founded by a
                  pair of longtime NYC coffee veterans.
                </p>
              </div>
              <p className='mt-4'>
                <Button asChild className='cursor-pointer'>
                  <Link href='/ourstory'>READ MORE →</Link>
                </Button>
              </p>
            </div>
          </div>
          <div className='p-5 sm:m-auto md:mx-0'>
            <Image
              src={'/owner_picture.jpg'}
              alt='Owner picture'
              width={400}
              height={400}
              className='rounded-lg'
            />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center p-5'>
        <Carousel className='w-2/4' plugins={[Autoplay({ delay: 5000 })]}>
          <CarouselContent>
            <CarouselItem className=''>
              <div className='relative h-[600px] overflow-hidden'>
                <Image
                  alt='coffee machine'
                  src={'/carousel1.jpg'}
                  sizes='100vw'
                  fill
                  objectFit='cover'
                  quality={100}
                  className='m-auto'
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className=''>
              <div className='relative h-[600px] overflow-hidden'>
                <Image
                  alt='barista making coffee'
                  src={'/carousel2.jpg'}
                  sizes='100vw'
                  fill
                  objectFit='cover'
                  quality={100}
                  className='m-auto'
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className=''>
              <div className='relative h-[600px] overflow-hidden'>
                <Image
                  alt='latte sitting on table'
                  src={'/carousel3.jpg'}
                  sizes='100vw'
                  fill
                  objectFit='cover'
                  quality={100}
                  className='m-auto'
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className=''>
              <div className='relative h-[600px] overflow-hidden'>
                <Image
                  alt='life is short, enjoy your coffee'
                  src={'/carousel4.jpg'}
                  sizes='100vw'
                  fill
                  objectFit='cover'
                  quality={100}
                  className='m-auto'
                ></Image>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
export default HomePage;
