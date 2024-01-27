'use client';

import { register } from '@/actions/action';
import bcrypt from 'bcrypt';

export const SignupForm = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const entries = Object.fromEntries(data.entries());
    console.log(entries);
  };

  return (
    <div className='w-full h-full'>
      <div className='flex justify-center p-5 mt-10'>
        <form
          className='flex flex-col m-auto gap-5 px-20 py-5 w-[500px]'
          onSubmit={onSubmit}
        >
          <div className='text-center font-bold text-4xl'>Create account</div>
          <div className='relative'>
            <input
              type='text'
              className='px-4 py-1 w-full h-[40px] outline-none focus:border-b-2 peer'
              name='firstname'
              required
            />
            <label
              className='absolute top-2 left-3 flex peer-focus:text-xs peer-focus:-top-4 transition-all peer-valid:text-xs peer-valid:-top-4'
              htmlFor='firstname'
            >
              First name
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              className='px-4 py-1 w-full h-[40px] outline-none focus:border-b-2 peer'
              name='lastname'
              required
            />
            <label
              className='absolute top-2 left-3 peer-focus:text-xs peer-focus:-top-4 transition-all peer-valid:text-xs peer-valid:-top-4'
              htmlFor='lastname'
            >
              Last name
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              className='px-4 py-1 w-full h-[40px] outline-none focus:border-b-2 peer'
              name='email'
              required
            />
            <label
              className='absolute top-2 left-3 peer-focus:text-xs peer-focus:-top-4 transition-all peer-valid:text-xs peer-valid:-top-4'
              htmlFor='email'
            >
              Email
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              className='px-4 py-1 w-full h-[40px] outline-none focus:border-b-2 peer'
              name='password'
              required
            />
            <label
              className='absolute top-2 left-3 peer-focus:text-xs peer-focus:-top-4 transition-all peer-valid:text-xs peer-valid:-top-4'
              htmlFor='password'
            >
              Password
            </label>
          </div>

          <button
            className='m-auto border rounded-lg w-[100px] h-[40px] bg-[#22223b] text-white'
            type='submit'
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
