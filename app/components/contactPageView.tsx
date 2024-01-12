'use client';

import { Pacifico } from 'next/font/google';
import Image from 'next/image';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

const ContactPageView = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const message = document.querySelector('textarea');
    const result = [];
    for (let i = 0; i < inputs.length; i++) {
      result.push(inputs[i].value);
    }
    result.push(message?.value);
    console.log(result);
  };

  return (
    <div className='w-full h-full'>
      <div className='w-full h-[700px] relative'>
        <Image
          src={'/contact-page-image.jpg'}
          alt='cafe background'
          fill={true}
          priority
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
        <form
          className='grid grid-cols-[400px_400px] grid-rows-[20px_20px_360px] gap-7'
          onSubmit={handleContactSubmit}
        >
          <div className='relative'>
            <input
              className='w-full h-[30px] pl-2 outline-none focus:border-b-2 peer'
              type='text'
              name='firstname'
              id='firstname'
              required
            ></input>
            <span className='absolute top-1 left-3 peer-focus:text-xs peer-focus:-top-4 transition-all peer-valid:text-xs peer-valid:-top-4'>
              First name
            </span>
          </div>
          <div className='relative'>
            <input
              className='w-full h-[30px] pl-2 outline-none focus:border-b-2 peer'
              type='text'
              name='lastname'
              id='lastname'
              required
            ></input>
            <span className='absolute top-1 left-3 peer-focus:text-xs peer-focus:-top-4 transition-all peer-valid:text-xs peer-valid:-top-4'>
              Last name
            </span>
          </div>
          <div className='relative'>
            <input
              className='w-full h-[30px] pl-2 outline-none peer'
              type='text'
              name='email'
              id='email'
              required
            ></input>
            <span className='absolute top-1 left-3 peer-focus:text-xs peer-focus:-top-4 transition-all peer-valid:text-xs peer-valid:-top-4'>
              Email
            </span>
          </div>
          <div className='relative'>
            <input
              className='w-full h-[30px] pl-2 outline-none peer'
              type='text'
              name='website'
              id='website'
              required
            ></input>
            <span className='absolute top-1 left-3 peer-focus:text-xs peer-focus:-top-4 transition-all peer-valid:text-xs peer-valid:-top-4'>
              Website
            </span>
          </div>
          <div className='relative col-span-2'>
            <textarea
              className='w-full h-full px-2 outline-none peer resize-none'
              name='message'
              id='message'
              required
            />
            <span className='absolute top-0 left-3 peer-focus:text-xs peer-focus:-top-4 transition-all peer-valid:text-xs peer-valid:-top-4'>
              Message
            </span>
          </div>
          <button
            type='submit'
            className='border rounded-lg w-[100px] h-[40px] bg-[#22223b] text-white m-0'
          >
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactPageView;
