"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categoryItem } from "@/lib/contants";
import React, { useState } from "react";
import FilterButton from "./FilterButton";
import RecommendButton from "./RecommendButton";

const ProductStrip = () => {
  const [checked, setChecked] = useState<number | null>(null);
  // const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsFixed(window.scrollY >= 200);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className={`grid grid-cols-3  xl:grid-cols-5 bg-white w-full place-items-end items-center sm:pt-6 pb-1 z-5 px-5`}
      // ${isFixed ? "fixed top-12 z-50  " : "sticky top-10 "}
    >
      <div className="relative w-full xl:col-span-4 col-span-2">
        <div className="absolute top-0 left-0 w-8 h-full bg-white z-10 content-['']"></div>
        <div className="absolute top-0 right-0 w-12 h-full bg-white z-10 content-['']"></div>
        <Carousel className="">
          <CarouselContent className="md:ml-10 md:first:ml-0 ml-5">
            {categoryItem.map((item, index) => (
              <CarouselItem key={index} className="pl-4 basis-auto">
                <div
                  className={`p-1 flex flex-col justify-center border-b-2 hover:border-gray-300 cursor-pointer items-center gap-3 ${
                    checked === index
                      ? "border-b-2-gray-900"
                      : "border-transparent"
                  }`}
                  onClick={() => setChecked(index)}
                >
                  <item.icon className="text-gray-600 size-5" />
                  <span className="text-md font-normal text-gray-600 line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white z-50" />
          <CarouselNext className="bg-white z-50" />
        </Carousel>
      </div>
      <div className=" flex lg:flex-row flex-col justify-center items-center gap-2 md:gap-2.5 mt-5 xl:mt-0 z-10 ">
        <FilterButton />
        <RecommendButton />
      </div>
    </div>
  );
};

export default ProductStrip;
