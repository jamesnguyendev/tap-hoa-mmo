"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const SlidePulse = () => {
  const images = ["/images/2.webp", "/images/2.webp", "/images/2.webp"];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  return (
    <div
      {...swipeHandlers}
      className="group relative w-full overflow-hidden rounded-2xl shadow-lg select-none  "
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-28"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={src}
              width={1500}
              height={1500}
              alt={`Slide ${index + 1}`}
              className="w-full  object-contain"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 hover:bg-white text-black rounded-full shadow flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 hover:bg-white text-black rounded-full shadow flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidePulse;
