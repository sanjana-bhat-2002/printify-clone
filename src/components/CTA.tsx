
import Carousel from "./Carousel";
import { perks } from "../lib/static-data";
interface FeatureSlideProps {
  image: string;
  mainHeading: string;
  subHeading: string;
  description: string;
}

const FeatureSlide = ({
  image,
  mainHeading,
  subHeading,
  description,
}: FeatureSlideProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 md:px-8">
      <img src={image} alt="" className="rounded-full w-32 h-32" />
      <h2 className="text-lg text-green-500 font-bold">{mainHeading}</h2>
      <h3 className="text-2xl font-bold text-black">{subHeading}</h3>
      <p className="text-center w-1/2 text-gray-600">{description}</p>
    </div>
  );
};
const CTA = () => {
  
  return (
    <>
      <section className="lg:mx-24 mt-16">
        <div className="p-4">
          <div className="h-full border-2 border-gray-200 sm:border-0 border-opacity-60 rounded-lg overflow-hidden sm:flex justify-center items-start">
            <div className="h-full">
              <img
                className="object-cover lg:h-96 h-full w-full  object-center"
                src="https://printify.com/pfh/media/clothes-mobile-Q6UN6X6P.webp"
                alt="blog"
              />
            </div>
            <div className="p-6 lg:ml-16 lg:w-1/2">
              <h1 className="title-font text-3xl font-bold text-gray-900 mb-3">
                Easily add your design to a wide range of products
              </h1>
              <p className="mb-3 text-gray-600">
                With our free design tools, you can easily add your custom
                designs to t-shirts, mugs, phone cases, and hundreds of other
                products.
              </p>
              <div className="flex items-center flex-wrap ">
                <a className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">
                  All products
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-4 p-6 md:flex-row">
        <div className="hidden md:flex">
          {perks.map((item) => (
            <div className="flex flex-col items-center justify-center mt-16 md:px-8 md:w-1/3">
              <img src={item.image} alt="" className="rounded-full w-32 h-32" />
              <h2 className="text-lg text-green-500 font-bold">
                {item.mainHeading}
              </h2>
              <h3 className="text-2xl font-bold text-black">
                {item.subHeading}
              </h3>
              <p className="text-center text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex md:hidden">
          <Carousel
            slides={perks.map((feature, index) => (
              <FeatureSlide
                key={index}
                image={feature.image}
                mainHeading={feature.mainHeading}
                subHeading={feature.subHeading}
                description={feature.description}
              />
            ))}
          />
        </div>
      </section>
    </>
  );
};

export default CTA;
