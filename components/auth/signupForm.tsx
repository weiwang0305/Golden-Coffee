'use client';

import * as z from 'zod';
import { LoginSchema } from '@/schemas';
import { Login } from '@/actions/action';
import bcrypt from 'bcrypt';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';

export const SignupForm = () => {
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className='w-full h-full'>
      <div className='flex justify-center p-5 mt-10'>
        {/* <form
          className='flex flex-col m-auto gap-5 px-20 py-5 w-[500px]'
          onSubmit={form.handleSubmit(() => {})}
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
        </form> */}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <div className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='john.doe@example.com'
                        type='email'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='******' type='password' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message='' />
            <FormSuccess message='' />
            <Button type='submit' className='w-full'>
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
