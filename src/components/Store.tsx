
const Store = () => {
  return (
    <section className="py-16 mx-6">
      <div className="flex-col justify-center items-center hidden lg:flex">
        <h1 className="text-4xl font-bold mb-6">Connect your store</h1>
        <p className="text-gray-600">
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>

        <div className="p-8 relative h-[500px] mt-8 w-full lg:w-2/3 bg-[url('https://printify.com/pfh/media/stores-background-QSGENTOX.svg')] bg-no-repeat bg-cover bg-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl w-32 h-32 bg-green-500 rounded-2xl flex justify-center items-center">
            <img
              className="w-12 h-20"
              src="https://printify.com/pfh/media/printify-E3TBSF5R.svg"
              alt=""
            />
          </div>

          <div className="absolute top-0 left-56 shadow-2xl w-32 h-32 bg-white rounded-2xl flex justify-center items-center">
            <img
              className="w-24 h-24"
              src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
              alt=""
            />
          </div>

          <div className="absolute top-0 right-0 shadow-2xl w-32 h-32 bg-white rounded-2xl flex justify-center items-center">
            <img
              className="w-24 h-24"
              src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
              alt=""
            />
          </div>

          <div className="absolute bottom-6 right-0 shadow-2xl w-32 h-32 bg-white rounded-2xl flex justify-center items-center">
            <img
              className="w-24 h-24"
              src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
              alt=""
            />
          </div>

          <div className="absolute bottom-48 right-16 shadow-2xl w-32 h-32 bg-white rounded-2xl flex justify-center items-center">
            <img
              className="w-24 h-24"
              src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
              alt=""
            />
          </div>

          <div className="absolute -bottom-8 right-80 shadow-2xl w-32 h-32 bg-white rounded-2xl flex justify-center items-center">
            <img
              className="w-24 h-24"
              src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
              alt=""
            />
          </div>

          <div className="absolute -bottom-8 left-80 shadow-2xl w-32 h-32 bg-white rounded-2xl flex justify-center items-center">
            <img
              className="w-24 h-24"
              src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
              alt=""
            />
          </div>

          <div className="absolute bottom-36 left-64 shadow-2xl w-32 h-32 bg-white rounded-2xl flex justify-center items-center">
            <img
              className="w-24 h-24"
              src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
              alt=""
            />
          </div>

          <div className="absolute bottom-16 left-2 shadow-2xl w-32 h-32 bg-white rounded-2xl flex justify-center items-center">
            <img
              className="w-24 h-24"
              src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className='rounded-2xl mt-48 mx-auto w-3/4 bg-green-100 flex flex-col justify-between items-start gap-8 md:flex-row p-12 bg-[url("https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg")] bg-no-repeat bg-contain bg-bottom md:bg-right'>
        <p className="text-green-900 text-lg font-bold">
          Are you a large business looking for custom solutions?
        </p>
        <button className="bg-white border p-3 rounded-md hover:text-green-500">
          Talk to sales
        </button>
      </div>




      <div className="flex flex-wrap justify-center items-center gap-6 mt-16 lg:hidden">
      {Array.from({ length: 9 }).map((_, i) => (
        <div className="shadow-gray-300 shadow-md w-32 h-32 bg-white rounded-2xl flex justify-center items-center">
        <img
          className="w-24 h-24"
          src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
          alt=""
          key={i}
        />
      </div>
      ))}
      </div>
    </section>
  );
};

export default Store;
