const SignUpPage = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-center p-5 mt-10'>
        <div className='flex flex-col m-auto gap-5 px-20 py-5 w-[500px]'>
          <div className='text-center font-bold text-4xl'>Create account</div>
          <input placeholder='First name'></input>
          <input placeholder='Last name'></input>
          <input placeholder='Email'></input>
          <input placeholder='Password'></input>

          <button className='m-auto border rounded-lg w-[100px] h-[40px] bg-[#22223b] text-white'>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
