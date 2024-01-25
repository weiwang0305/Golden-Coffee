import Image from 'next/image';

const OurStoryPage = () => {
  return (
    <div className='mb-10 md:w-4/5 md:m-auto'>
      <div className='flex justify-center align-middle mt-10 flex-col md:flex-row md:w- '>
        <div className='flex flex-col w-full my-auto'>
          <div className='text-3xl tracking-widest p-2 font-bold'>
            OUR BEGINNING
          </div>
          <div className='w-full p-2'>
            <p>
              In the bustling heart of New York City, amidst the towering
              skyscrapers and the constant hum of city life, emerged the Golden
              Coffee House—a haven for coffee enthusiasts seeking refuge from
              the urban chaos. This charming independent cafe was the brainchild
              of a dynamic duo, both seasoned veterans of the vibrant New York
              coffee scene.
            </p>
            <br></br>
            <p>
              Having spent years honing their craft in some of the city`&apos;`s
              most iconic coffee establishments, Alex and Mia envisioned Golden
              Coffee House as a sanctuary for those who appreciate the nuanced
              flavors of a perfectly brewed cup. Their expertise was not only in
              the science of coffee but also in understanding the communal
              spirit that a great cafe embodies.
            </p>
          </div>
        </div>
        <div className='w-full h-[400px] my-auto relative overflow-hidden'>
          <Image
            src={'/nyc.jpg'}
            alt='picture of new york city'
            fill
            sizes='(min-width: 780px) 40vw, 100vw'
            quality={100}
            className='object-cover hover:opacity-75'
          />
        </div>
      </div>
      <div>
        <div className='flex justify-center align-middle'>
          <div className='w-full min-h-[500px] max-h-[600px] relative'>
            <Image
              src={'/brewing-coffee2.jpg'}
              alt='brewing'
              fill
              sizes='(min-width: 780px) 80vw, 100vw'
              objectFit='cover'
              priority
              quality={100}
              className='hover:opacity-75'
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-center align-middle'>
            <div className='w-1/2 min-h-[500px] max-h-[600px] relative '>
              <Image
                src={'/coffee-pic-copy.jpg'}
                alt='coffee picture'
                fill
                sizes='(min-width: 780px) 40vw, 50vw'
                objectFit='cover'
                quality={100}
                className='hover:opacity-75'
              />
            </div>
            <div className='w-1/2 p-2 my-auto text-lg'>
              The cafe`&apos;`s name, Golden Coffee, was chosen to reflect the
              warmth and richness of both the beverage and the inviting
              atmosphere they aimed to cultivate. The duo meticulously curated a
              menu featuring a diverse selection of ethically sourced beans,
              each cup telling a story of its origin. From the robust notes of
              South American blends to the subtle complexities of African beans,
              every sip transported customers to the far reaches of the
              coffee-growing regions.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex w-full justify-center'>
          <div className='min-h-[500px] w-full relative'>
            <Image
              src={'/warm-cafe.jpg'}
              alt='warm cafe picture'
              fill
              sizes='(min-width: 780px) 80vw, 100vw'
              objectFit='cover'
              quality={100}
              className='hover:opacity-75'
            />
          </div>
        </div>
        <div className='flex w-full justify-center'>
          <div className='flex w-full flex-col text-center'>
            The interior of Golden Coffee House was a blend of modern elegance
            and rustic charm. Warm wooden tones, comfortable seating, and soft
            lighting created an inviting ambiance. The walls adorned with local
            artwork and photographs told the tales of the city they called home.
            Golden Coffee House quickly became a gathering place for the diverse
            tapestry of New Yorkers. Business professionals found solace in a
            quiet corner to catch up on emails, artists sought inspiration over
            a latte, and friends reunited over shared pots of specialty blends.
            Alex and Mia`&apos;`s cafe became a microcosm of the city`&apos;`s
            vibrant energy—a place where conversations flowed as freely as the
            aromatic brews. As the sun set over the city that never sleeps,
            Golden Coffee House continued to be a beacon of warmth, community,
            and, of course, the golden elixir that fueled the dreams and
            aspirations of its patrons.
            <p className='text-center text-2xl tracking-widest p-2 mt-5'>
              In the heart of the concrete jungle, Alex and Mia had created a
              golden oasis where every cup told a story, and every sip was a
              moment of pure bliss.
            </p>
            <div className='m-auto w-3/4 min-h-[500px] relative'>
              <Image
                src={'/happy-person-story.jpg'}
                alt='person smiling'
                fill
                sizes='(min-width: 780px) 60vw, 75vw'
                objectFit='cover'
                quality={100}
                className='hover:opacity-75'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurStoryPage;
