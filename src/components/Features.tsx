import { features } from "../lib/static-data";

const Features = () => {
  
  return (
    <section className="flex flex-col justify-center items-center gap-4 p-6  md:flex-row">
      {features.map((item) => (
        <div className="flex flex-col items-center justify-center gap-4 md:px-8">
          <img src={item.image} alt="" className="rounded-full w-32 h-32" />
          <h2 className="text-2xl font-bold text-black">{item.heading}</h2>
          <p className="text-center text-gray-600">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
