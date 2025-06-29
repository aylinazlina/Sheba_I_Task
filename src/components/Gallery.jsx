import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img_1 from "../assets/images/gallary_1.png"
import img_2 from "../assets/images/gallary_2.png"
import img_3 from "../assets/images/gallary_3.png"
import img_4 from "../assets/images/gallary_4.png"
import img_5 from "../assets/images/gallary_5.png"

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  // Sample images - you can replace these with your actual images
  const gallery = [
    { id: 1, image: img_1, title: "Moving Service 1" },
    { id: 2, image: img_2, title: "Moving Service 2" },
    { id: 3, image: img_3, title: "Moving Service 3" },
    { id: 4, image: img_4, title: "Moving Service 4" },
    { id: 5, image: img_5, title: "Moving Service 5" },
  ];

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

  // Show all images in a row, style them according to their position relative to activeIndex
  const getImageStyle = (index) => {
    const baseStyle = {
      position: "absolute",
      top: "50%",
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      borderRadius: "16px",
      cursor: index !== activeIndex ? "pointer" : "default",
      overflow: "hidden",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
      opacity: 1,
      zIndex: 1,
      background: "#fff",
      display: "block",
    };

    const total = gallery.length;
    let rel = index - activeIndex;
    if (rel < -Math.floor(total / 2)) rel += total;
    if (rel > Math.floor(total / 2)) rel -= total;

    // Layout for 5 images: -2 (far left), -1 (left), 0 (center), 1 (right), 2 (far right)
    if (rel === -2 || rel === 3) {
      return {
        ...baseStyle,
        width: "160px",
        height: "240px",
        left: "-60px",
        transform: "translateY(-50%) scale(0.8)",
        zIndex: 1,
        opacity: 0.6,
        clipPath: "inset(0 40% 0 0)",
      };
    }
    if (rel === -1 || rel === 4) {
      return {
        ...baseStyle,
        width: "200px",
        height: "300px",
        left: "15%",
        transform: "translateY(-50%) scale(0.9)",
        zIndex: 2,
        opacity: 0.8,
      };
    }
    if (rel === 0) {
      return {
        ...baseStyle,
        width: "280px",
        height: "380px",
        left: "50%",
        transform: "translate(-50%, -50%) scale(1)",
        zIndex: 3,
        opacity: 1,
        boxShadow: "0 12px 48px rgba(0, 0, 0, 0.2)",
      };
    }
    if (rel === 1 || rel === -4) {
      return {
        ...baseStyle,
        width: "200px",
        height: "300px",
        right: "15%",
        left: "auto",
        transform: "translateY(-50%) scale(0.9)",
        zIndex: 2,
        opacity: 0.8,
      };
    }
    if (rel === 2 || rel === -3) {
      return {
        ...baseStyle,
        width: "160px",
        height: "240px",
        right: "-60px",
        left: "auto",
        transform: "translateY(-50%) scale(0.8)",
        zIndex: 1,
        opacity: 0.6,
        clipPath: "inset(0 0 0 40%)",
      };
    }
    // For more than 5 images, hide others
    return { display: "none" };
  };

  const handleImageClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover tailored categories designed to simplify your search,
            explore diverse options, and find exactly what you need effortlessly
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative h-[450px] overflow-hidden">
            {/* Images */}
            {gallery.map((item, index) => (
              <div
                key={item.id}
                style={getImageStyle(index)}
                onClick={() => handleImageClick(index)}
                className="group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  draggable={false}
                  style={{ background: "#fff" }}
                />
                {/* Remove black overlay for non-active images */}
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 
                bg-white/90 hover:bg-white p-4 rounded-full shadow-xl transition-all duration-200
                hover:scale-110 hover:shadow-2xl group"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 
                bg-white/90 hover:bg-white p-4 rounded-full shadow-xl transition-all duration-200
                hover:scale-110 hover:shadow-2xl group"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-blue-500 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="text-center mt-6">
            <p className="text-gray-500 font-medium">
              {activeIndex + 1} / {gallery.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;