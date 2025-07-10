"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    images: [
      {
        src: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Summer fashion model 1",
      },
      {
        src: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Summer fashion model 2",
      },
      {
        src: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Summer fashion model 3",
      },
    ],
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    images: [
      {
        src: "https://images.pexels.com/photos/994468/pexels-photo-994468.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Winter fashion model 1",
      },
      {
        src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Winter fashion model 2",
      },
      {
        src: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Winter fashion model 3",
      },
    ],
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    images: [
      {
        src: "https://images.pexels.com/photos/157675/fashion-men-s-elements-magazine-sex-157675.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Spring fashion model 1",
      },
      {
        src: "https://images.pexels.com/photos/1852445/pexels-photo-1852445.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Spring fashion model 2",
      },
      {
        src: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Spring fashion model 3",
      },
    ],
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-700 h-full"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-screen h-full flex flex-col xl:flex-row ${slide.bg}`}
          >
            <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-6 2xl:gap-12 text-center px-4">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-bold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-6 hover:bg-gray-800 transition">
                  Shop Now
                </button>
              </Link>
            </div>

            <div className="h-1/2 xl:h-full xl:w-1/2 flex gap-2 p-2">
              {slide.images.map((image, idx) => (
                <div
                  key={idx}
                  className="flex-1 relative aspect-[3/4] overflow-hidden rounded-md"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ring-2 ring-gray-400 transition-transform ${
              current === index ? "bg-black scale-125" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
