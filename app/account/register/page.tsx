const SignUpPage = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex justify-center'>
        <div className='flex flex-col m-auto gap-5'>
          <div>Create account</div>
          <input placeholder='First name'></input>
          <input placeholder='Last name'></input>
          <input placeholder='Email'></input>
          <input placeholder='Password'></input>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
