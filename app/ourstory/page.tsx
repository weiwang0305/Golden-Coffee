import Image from 'next/image';

const OurStoryPage = () => {
  return (
    <div>
      <div className='flex justify-center align-middle mt-10 gap-5'>
        <div className='flex flex-col w-1/4 my-auto'>
          <div className='text-xl tracking-widest'>OUR BEGINNING</div>
          <div className='w-full'>
            In the bustling heart of New York City, amidst the towering
            skyscrapers and the constant hum of city life, emerged the Golden
            Coffee House—a haven for coffee enthusiasts seeking refuge from the
            urban chaos. This charming independent cafe was the brainchild of a
            dynamic duo, both seasoned veterans of the vibrant New York coffee
            scene.
          </div>
        </div>
        <div className='w-1/4'>
          <Image
            src={'/mia-picture.jpg'}
            alt='picture of mia'
            width={500}
            height={500}
            quality={100}
          />
        </div>
      </div>
      <div>
        <div className='flex justify-center align-middle'>
          <div className='w-2/4 h-[400px] relative grow-0 shrink-0'>
            <Image
              src={'/owner_picture.jpg'}
              alt='mary greeting'
              fill={true}
              priority
              quality={100}
            />
          </div>
        </div>
        <div className='flex justify-center align-middle'>
          <div className='w-2/4'>
            Having spent years honing their craft in some of the city's most
            iconic coffee establishments, Alex and Mia envisioned Golden Coffee
            House as a sanctuary for those who appreciate the nuanced flavors of
            a perfectly brewed cup. Their expertise was not only in the science
            of coffee but also in understanding the communal spirit that a great
            cafe embodies.
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurStoryPage;
