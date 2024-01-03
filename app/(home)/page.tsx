import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-4/5 h-2/5 relative m-auto'>
        <Image
          src={'/background-wide.jpg'}
          alt='Coffee background'
          fill={true}
          quality={100}
          className='m-auto'
        />
      </div>
      <div className='text-4xl flex justify-center align-middle flex-nowrap mt-[100px]'>
        Where every coffee taste like
      </div>
      <div className='text-4xl flex justify-center align-middle flex-row'>
        gold.
      </div>
      <div className='mt-[100px] w-4/5 m-auto flex flex-row gap-5 grow'>
        <div className='flex-1'>
          <div className='flex justify-center'>
            <Image
              src={'/bakery.jpg'}
              alt='bakehouse'
              width={300}
              height={300}
            />
          </div>
          <p className='text-center text-2xl p-1'>The Bakery</p>
          <p className='text-center text-l flex-wrap p-3'>
            Specializing in homemade croissants, muffins, macaroons, bagels,
            pies, and more.
          </p>
        </div>
        <div className='flex-1'>
          <div className='flex justify-center'>
            <Image
              src={'/goldencoffee.jpg'}
              alt='picture of golden coffee'
              width={300}
              height={300}
            />
          </div>
          <p className='text-center text-2xl p-1'>The Cafe</p>
          <p className='text-center text-l flex-wrap p-3'>
            Coffee shop featuring pastries, a large breakfast and lunch menu,
            and a large seating area.
          </p>
        </div>
        <div className='flex-1'>
          <div className='flex justify-center'>
            <Image
              src={'/foodtrucks.jpg'}
              alt='picture of food truck'
              width={300}
              height={300}
            />
          </div>
          <p className='text-center text-2xl p-1'>The Food Truck</p>
          <p className='text-center text-l flex-wrap p-3'>
            A food truck featuring a wide variety of pastries, pastries and
            small breakfast items for on the go.
          </p>
        </div>
      </div>

      <div className='w-full mt-[100px] m-auto bg-[#f2e9e4] p-10'>
        <div className='flex justify-evenly align-middle'>
          <div className='flex flex-col justify-center'>
            <div className='text-center'>
              <p className='text-2xl font-bold p-5'>OUR STORY</p>
              <p className='text-3xl font-extrabold p-3'>
                About Golden Coffee Cafe
              </p>
              <p className='font-extrabold text-3xl mb-3'>...</p>
              <div className='w-[400px] flex justify-center m-auto'>
                <p>
                  Golden Coffee House is a new independent cafe founded by a
                  pair of longtime Toronto coffee veterans.
                </p>
              </div>
              <p className='mt-4 hover:bg-slate-200 active:bg-slate-100 cursor-pointer'>
                <Link href='/ourstory'>READ MORE →</Link>
              </p>
            </div>
          </div>
          <div>
            <Image
              src={'/owner_picture.jpg'}
              alt='Owner picture'
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
