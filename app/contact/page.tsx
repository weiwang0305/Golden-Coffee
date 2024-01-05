import { Pacifico } from 'next/font/google';
import Image from 'next/image';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

const ContactPage = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-[700px] relative'>
        <Image
          src={'/contact-page-image.jpg'}
          alt='cafe background'
          fill={true}
        />
      </div>
      <div className={`${pacifico.className} mt-10 text-4xl text-center`}>
        Visit our place Once.
      </div>
      <div className='text-center w-[600px] m-auto'>
        <p className='p-5 mt-5 text-gray-800/[0.6]'>
          Please feel free to contact us via our form below if you have any
          questions or concerns. It is our goal and pleasure to make our
          existing and new customers feel right at home. For quickest answers,
          and catering possibilities, please call us directly. We can&apos;t
          wait to see you!
        </p>
      </div>

      <div className='w-[800px] h-full m-auto mb-10'>
        <form className='grid grid-cols-[400px_400px] grid-rows-[20px_20px_360px] gap-5'>
          <div className='relative'>
            <input className='w-full h-[30px]' type='text'></input>
            <span className='absolute top-0 left-3'>First name</span>
          </div>
          <div className='relative'>
            <input className='w-full h-[30px]' type='text'></input>
            <span className='absolute top-0 left-3'>Last name</span>
          </div>
          <div className='relative h-[30px]'>
            <input className='w-full' type='text'></input>
            <span className='absolute top-0 left-3'>Email</span>
          </div>
          <div className='relative h-[30px]'>
            <input className='w-full' type='text'></input>
            <span className='absolute top-0 left-3'>Website</span>
          </div>
          <div className='relative col-span-2'>
            <textarea className='w-full h-full' />
            <span className='absolute top-0 left-3'>Message</span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
