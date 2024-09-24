import { Check, CirclePlay } from "lucide-react";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";
const Hero = () => {
  const heroItems = [
    "100% Free to use",
    "900+ High-Quality Products",
    "Largest global print network",
  ];
  return (
    <section className="text-gray-600 body-font bg-[url('https://printify.com/pfh/media/background-IAMAETLT.svg')] bg-no-repeat lg:bg-right bg-bottom mb-8">
      <div className="container mx-auto flex xl:px-48 pt-36 md:flex-row flex-col center">
        <div className="lg:flex-grow px-16 md:px-0 md:w-1/2 flex flex-col md:items-start md:mb-0 items-center text-left">
          <div className="flex flex-col justify-center items-start">
            <h1 className="title-font sm:text-4xl text-3xl  lg:text-6xl mb-4 font-bold text-gray-900">
              Create and Sell Custom Products
            </h1>
            <ul className="flex flex-col justify-center items-start gap-2">
              {heroItems.map((item) => (
                <li className="flex justify-start items-center text-left gap-1">
                  <Check className="text-green-500" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>

            <div className="flex justify-center items-center mt-8 w-full sm:w-3/4 md:w-full lg:w-3/4">
              <button className="text-md w-1/2 font-semibold flex justify-center items-center text-white bg-green-500  border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded">
                Start for free
              </button>
              <button className="ml-4 text-md w-1/2 flex justify-center items-center gap-2 text-gray-700 border border-gray-400 py-2 px-2 focus:outline-none hover:text-green-500 rounded">
                <CirclePlay className="w-5 h-5 text-gray-600" />
                How it works
              </button>
            </div>
            <p className="text-left mt-8 text-green-500 font-semibold">
              Trusted by over 8M sellers around the world
            </p>
          </div>
        </div>
        <div className="sm:w-3/4 lg:w-3/4 w-full md:ml-0">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
