import CoffeeView from '../components/coffeeView';

const CafePage = () => {
  return (
    <div className='h-full w-full'>
      <div className='relative w-5/6 z-1 m-auto rounded-3xl'>
        <div className='p-5'>
          <h1 className='flex justify-center text-2xl '>Our Collection</h1>
          <div className='flex justify-center text-sm h-2/6 w-full'>
            <h4 className='flex justify-center text-center text-sm h-2/6 w-3/6'>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roasst types and origins, expertly roassted in
              small batches and shipped fresh weekly.
            </h4>
          </div>
        </div>
        <div>
          <CoffeeView />
        </div>
      </div>
    </div>
  );
};
export default CafePage;
