const Header = () => {
  return (
    <div className='p-5'>
      <h1 className='flex justify-center text-2xl '>Our Collection</h1>
      <div className='flex justify-center text-sm h-2/6 w-full'>
        <h4 className='flex justify-center text-center text-sm h-2/6 w-3/6'>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roasst types and origins, expertly roassted in small batches
          and shipped fresh weekly.
        </h4>
      </div>
      <div className='flex justify-center'>
        <button className='border rounded-md mt-3 mr-4 p-2'>
          All Products
        </button>
        <button className='border rounded-md mt-3 ml-4 p-2'>
          Available Now
        </button>
      </div>
    </div>
  );
};

export default Header;
