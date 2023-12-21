import Image from 'next/image';
import Header from './header';
import CoffeeView from './coffeeView';

const ReactApp = () => {
  return (
    <div className='h-screen w-full'>
      <div className='relative w-full h-[300px] z-0'>
        <Image
          src={'/bg-cafe.jpg'}
          alt='Cafe background'
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='relative bg-gray-900 w-5/6 h-4/6 -mt-[120px] z-1 m-auto rounded-3xl'>
        <Header />
        <div>
          <CoffeeView />
        </div>
      </div>
    </div>
  );
};

export default ReactApp;
