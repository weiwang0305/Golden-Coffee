import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='w-full h-screen'>
      <div className='w-4/5 h-2/5 relative m-auto'>
        <Image
          src={'/background-wide.jpg'}
          alt='Coffee background'
          fill={true}
          quality={100}
          className='m-auto'
        />
      </div>
      <div>Drink some Coffeee</div>
    </div>
  );
};
export default HomePage;
