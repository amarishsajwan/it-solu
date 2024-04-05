import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
const slides = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
];
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    // Auto-change slide every 3 seconds
    const interval = setInterval(nextSlide, 5000);

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className=" md:block h-full w-full relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="flex h-screen w-full bg-center bg-cover bg-no-repeat duration-500"
      ></div>
      <div
        className="hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-1/2 left-5 rounded-full bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        {/* left arrow */}
        <ChevronLeftIcon className="h-5 w-5" />
      </div>
      <div
        className=" hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-1/2 right-5 rounded-full bg-black/20 text-white  cursor-pointer"
        onClick={nextSlide}
      >
        {/* Right arrow */}
        <ChevronRightIcon className="h-5 w-5" />
      </div>
    </div>
  );
}
