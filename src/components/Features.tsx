const Features = () => {
  const features = [
    {
      image: "/higher-profits.svg",
      heading: "Higher Profits",
      description:
        "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
    },
    {
      image: "/robust-scaling.svg",
      heading: "Robust Scaling",
      description:
        "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
    },
    {
      image: "/best-selection.svg",
      heading: "Best Selection",
      description:
        "With 900+ products and top quality brands, you can choose the best products for your business.",
    },
  ];
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
