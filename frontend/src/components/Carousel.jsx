import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
const slides = [
  {
    url: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661320934473-c0c39ec03ba2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="hidden md:block w-screen h-[500px] m-auto px-1 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
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
