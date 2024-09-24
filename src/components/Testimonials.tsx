import React from "react";
import Carousel from "./Carousel";

interface TestimonialSlideProps {
  image: string;
  name: string;
  designation: string;
  testimonial: string;
}

const TestimonialSlide = ({
  image,
  name,
  designation,
  testimonial,
}: TestimonialSlideProps) => {
  return (
    <div className="mx-16 rounded-xl w-1/2 mb-8 max-w-md  p-8 flex flex-col gap-8 items-start justify-center mt-8 md:px-8 bg-white">
      <div className="flex items-center justify-center gap-8">
        <img src={image} className="w-12 h-12 rounded-xl" alt="" />
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-lg font-bold">{name}</h2>
          <h3 className="text-green-500 font-medium">{designation}</h3>
        </div>
      </div>
      <p className="text-gray-600">{testimonial}</p>
    </div>
  );
};
const Testimonials = () => {
  const testimonials = [
    {
      image: "/higher-profits.svg",
      name: "John Doe",
      designation: "Etsy Merchant",
      testimonial:
        " We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
    },
    {
      image: "/higher-profits.svg",
      name: "John Doe",
      designation: "Etsy Merchant",
      testimonial:
        " We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
    },
    {
      image: "/higher-profits.svg",
      name: "John Doe",
      designation: "Etsy Merchant",
      testimonial:
        " We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
    },
  ];
  return (
    <section className=" bg-gray-100">
      <div className="flex mx-8 p-8 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Trusted by over 8M sellers around the world
        </h1>
        <p className="text-gray-600 w-full text-center">
          Whether you are just getting started or run an enterprise-level
          e-commerce business, we do everything we can to ensure a positive
          merchant experience.
        </p>
      </div>

      <Carousel
        slides={testimonials.map((testimonial, index) => (
          <TestimonialSlide
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            designation={testimonial.designation}
            testimonial={testimonial.testimonial}
          />
        ))}
      />
    </section>
  );
};

export default Testimonials;
