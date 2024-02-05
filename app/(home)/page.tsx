import Image from 'next/image';
import Link from 'next/link';
import { Barlow } from 'next/font/google';

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
              <p className='mt-4 hover:bg-slate-200 active:bg-slate-100 cursor-pointer'>
                <Link href='/ourstory'>READ MORE →</Link>
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

      <div className='bg-[#fffddd2] w-full'>
        <div className='bg-[#edf6f9]justify-items-center text-center mt-5 bg-[#fffddd2] flex-wrap'>
          <h3 className={`${barlow700.className} text-2xl font-bold`}>
            ORGANIC NATURAL INGREDIENTS AND NO PRESERVATIVES
          </h3>
          <p className={`${barlow700.className} text-5xl p-5`}>
            Make People Happy
          </p>
          <div className='flex w-full p-4 flex-col md:flex-row lg:flex-row'>
            <div className='basis-1/3 p-5 rounded-lg'>
              <div className='h-[160px] w-full overflow-hidden mx-auto'>
                <Image
                  src={'/ethicallysourced.jpg'}
                  alt='Ethically sourced coffee'
                  height={180}
                  width={300}
                  className='rounded-lg m-auto'
                />
              </div>
              <p className={`${barlow600.className} text-xl p-2 font-bold`}>
                Ethically Sourced Goodness:
              </p>
              <p>
                Behold the journey of our ethically sourced coffee beans, a
                testament to our commitment to sustainability. With deep
                relationships with farmers, our beans reflect integrity and
                care, ensuring a cup of coffee that not only tastes good but
                also does good for the planet.
              </p>
            </div>
            <div className='basis-1/3 p-5 rounded-lg'>
              <div className='h-[160px] w-full overflow-hidden mx-auto'>
                <Image
                  src={'/coffee-beans.jpg'}
                  alt='Coffee Beans'
                  height={300}
                  width={300}
                  className='rounded-lg m-auto'
                />
              </div>
              <p className={`${barlow600.className} text-xl p-2 font-bold`}>
                Bean to Brew Brilliance:
              </p>
              <p>
                Explore the heart of Golden Coffee with a glimpse into the world
                of our meticulously selected coffee beans. From cultivation to
                brewing, our dedication to quality shines through, promising a
                joyful experience in every sip. At Golden Coffee, we celebrate
                the pure journey from bean to brew.
              </p>
            </div>
            <div className='basis-1/3 p-5 rounded-lg'>
              <div className='h-[160px] w-full overflow-hidden mx-auto'>
                <Image
                  src={'/happyperson.jpg'}
                  alt='Happy person drinking coffee'
                  height={300}
                  width={300}
                  className='rounded-lg m-auto'
                />
              </div>
              <p className={`${barlow600.className} text-xl p-2 font-bold`}>
                Sip, Smile, Repeat:
              </p>
              <p>
                Experience the joy in every sip with our happy customer enjoying
                the warmth of Golden Coffee. Free from preservatives and crafted
                with organic, natural ingredients, our coffee not only satisfies
                your taste buds but also brings genuine happiness. Elevate your
                mood with every delightful moment of Golden Coffee bliss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
