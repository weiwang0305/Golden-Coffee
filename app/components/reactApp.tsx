import Image from 'next/image';
import Header from './header';
import CoffeeView from './coffeeView';

const ReactApp = () => {
  return (
    <div className='h-screen w-full'>
      <div className='relative w-5/6 z-1 m-auto rounded-3xl'>
        <Header />
        <div>
          <CoffeeView />
        </div>
      </div>
    </div>
  );
};

export default ReactApp;
