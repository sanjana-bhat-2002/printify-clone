import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  slides: React.ReactNode[]; // Accept an array of React nodes (can be components or any other content)
}

export default function Carousel({ slides }: CarouselProps) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden flex flex-col justify-center items-center">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((content, index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center">
            {" "}
            {/* Ensures each slide is full width and does not shrink */}
            {content}
          </div>
        ))}
      </div>

      <div className="h-full w-full sm:w-3/4 lg:w-1/2 justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <ChevronLeft className="text-gray-600" />
        </button>
        <button onClick={nextSlide}>
          <ChevronRight className="text-gray-600" />
        </button>
      </div>

      <div className="py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-2 h-2 cursor-pointer ${
              i === current ? "bg-green-500" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
