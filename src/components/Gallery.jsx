import React, { useState, useEffect, memo } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img_1 from "../assets/images/gallary_1.png";
import img_2 from "../assets/images/gallary_2.png";
import img_3 from "../assets/images/gallary_3.png";
import img_4 from "../assets/images/gallary_4.png";
import img_5 from "../assets/images/gallary_5.png";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const gallery = [
    { id: 1, image: img_1 },
    { id: 2, image: img_2 },
    { id: 3, image: img_3 },
    { id: 4, image: img_4 },
    { id: 5, image: img_5 },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [gallery.length]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
  };

  const getImageScale = (index) => {
    const distance = Math.abs(index - activeIndex);
    const totalImages = gallery.length;
    
    // Handle circular distance for better scaling
    const circularDistance = Math.min(distance, totalImages - distance);
    
    if (circularDistance === 0) return 'scale-110'; // Active image - largest
    if (circularDistance === 1) return 'scale-95';  // Adjacent images - medium
    return 'scale-75'; // Corner images - smallest
  };

  const getImageOpacity = (index) => {
    const distance = Math.abs(index - activeIndex);
    const totalImages = gallery.length;
    const circularDistance = Math.min(distance, totalImages - distance);
    
    if (circularDistance === 0) return 'opacity-100';
    if (circularDistance === 1) return 'opacity-80';
    return 'opacity-50';
  };

  const getImageZIndex = (index) => {
    const distance = Math.abs(index - activeIndex);
    const totalImages = gallery.length;
    const circularDistance = Math.min(distance, totalImages - distance);
    
    return 30 - circularDistance * 10; // Return number, not string
  };

  return (
    <div>
      <div className="px-4 py-4 bg-transparent">
        <div className="flex flex-col justify-center items-center mb-8">
          <p className="font-lato font-bold text-[48px] text-black leading-[32px] mb-4">Gallery</p>
          <p className="font-main font-normal text-[16px] text-black leading-[27px] w-[680px] text-center">
            Discover tailored categories designed to simplify your search, explore
            diverse options, and find exactly what you need effortlessly
          </p>
        </div>

        <div className="w-full max-w-full mx-auto px-12 py-8 bg-red-500">
          <div className="relative h-[200px] flex items-center justify-center overflow-hidden">
            {/* Images Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {gallery.map((galleryItem, index) => {
                const position = index - activeIndex;
                let translateX = position * 180; // Base spacing between images
                
                // Adjust positioning for better visual distribution
                if (Math.abs(position) > 2) {
                  translateX = position > 0 ? 850 : -550;
                }

                return (
                  <div
                    key={galleryItem.id}
                    className={`absolute transition-all duration-500 ease-in-out cursor-pointer
                      ${getImageScale(index)} ${getImageOpacity(index)}
                      hover:scale-105`}
                    style={{
                      transform: `translateX(${translateX}px)`,
                      zIndex: getImageZIndex(index)
                    }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img
                      src={galleryItem.image}
                      alt={`Slide ${index + 1}`}
                      className="w-[200px] h-[200px] object-cover rounded-xl shadow-lg border-4 border-white"
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 
                bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200
                hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 
                bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200
                hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-4">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-7 h-7 bg-black rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Image Info */}
          <div className="text-center  mt-4">
            <p className="text-gray-600">
              Image {activeIndex + 1} of {gallery.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Gallery);