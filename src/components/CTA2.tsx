

const CTA2 = () => {
  return (
    <div className="relative bg-teal-900 mx-8 mt-16 max-w-xl sm:mx-auto rounded-2xl">
      <div className="flex flex-col items-start justify-center py-12 px-6  text-white md:w-1/2">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold">Make Money, Risk-Free</h1>
          <p className="text-left mt-6">
            You pay for fulfillment only when you make a sale
          </p>
        </div>

        <div className="bg-teal-950 w-full flex flex-col justify-center items-center my-4 p-6 rounded-2xl gap-4">
          <div className="flex justify-between items-center w-full">
            <p>You sell a t-shirt</p>
            <p>$ 30</p>
          </div>

          <div className="flex justify-between items-center w-full ">
            <p>You pay for its production</p>
            <p className="whitespace-nowrap">$ 12</p>
          </div>

          <div className="flex justify-between items-center w-full text-xl font-semibold text-green-500 pt-8 border-t border-gray-500">
            <p>Your Profit</p>
            <p>$ 18</p>
          </div>
        </div>
        <button className="inline-flex items-center text-white font-semibold bg-green-500 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
          Start Selling
        </button>
        <p className="text-gray-400 text-sm mt-8">
          100% Free to use · 900+ Products · Largest print network
        </p>
      </div>

      <div className="absolute -right-2 z-50 -bottom-2 hidden md:flex">
        <img
          src="/lady-with-money.PNG"
          alt=""
          className="object-cover w-64 h-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default CTA2;
