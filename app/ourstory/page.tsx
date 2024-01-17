import Image from 'next/image';

const OurStoryPage = () => {
  return (
    <div>
      <div className='flex justify-center align-middle mt-10 '>
        <div className='flex flex-col w-1/4 my-auto'>
          <div className='text-xl tracking-widest p-2'>OUR BEGINNING</div>
          <div className='w-full p-2'>
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
      <div className='mt-5'>
        <div className='flex justify-center align-middle'>
          <div className='w-2/4 h-[400px] relative'>
            <Image
              src={'/brewing-coffee2.jpg'}
              alt='brewing'
              fill={true}
              priority
              quality={100}
            />
          </div>
        </div>
        <div className='flex flex-col mb-10'>
          <div className='flex justify-center align-middle'>
            <div className='w-2/4 p-2'>
              Having spent years honing their craft in some of the city's most
              iconic coffee establishments, Alex and Mia envisioned Golden
              Coffee House as a sanctuary for those who appreciate the nuanced
              flavors of a perfectly brewed cup. Their expertise was not only in
              the science of coffee but also in understanding the communal
              spirit that a great cafe embodies.
            </div>
          </div>
          <div className='flex justify-center align-middle mt-5'>
            <div className='w-1/4 h-[620px] relative'>
              <Image
                src={'/coffee-pic.jpg'}
                alt='coffee picture'
                fill={true}
                quality={100}
              />
            </div>
            <div className='w-1/4 px-2'>
              The cafe's name, "Golden Coffee," was chosen to reflect the warmth
              and richness of both the beverage and the inviting atmosphere they
              aimed to cultivate. The duo meticulously curated a menu featuring
              a diverse selection of ethically sourced beans, each cup telling a
              story of its origin. From the robust notes of South American
              blends to the subtle complexities of African beans, every sip
              transported customers to the far reaches of the coffee-growing
              regions. The interior of Golden Coffee House was a blend of modern
              elegance and rustic charm. Warm wooden tones, comfortable seating,
              and soft lighting created an inviting ambiance. The walls adorned
              with local artwork and photographs told the tales of the city they
              called home. Golden Coffee House quickly became a gathering place
              for the diverse tapestry of New Yorkers. Business professionals
              found solace in a quiet corner to catch up on emails, artists
              sought inspiration over a latte, and friends reunited over shared
              pots of specialty blends. Alex and Mia's cafe became a microcosm
              of the city's vibrant energy—a place where conversations flowed as
              freely as the aromatic brews. As the sun set over the city that
              never sleeps, Golden Coffee House continued to be a beacon of
              warmth, community, and, of course, the golden elixir that fueled
              the dreams and aspirations of its patrons. In the heart of the
              concrete jungle, Alex and Mia had created a golden oasis where
              every cup told a story, and every sip was a moment of pure bliss.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurStoryPage;
