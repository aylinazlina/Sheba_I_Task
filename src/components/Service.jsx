import React from "react";
import serviceDesign from "../assets/images/serviceDesign.png";
import serviceImage from "../assets/images/service_ImageRightPart.png";

const Service = () => {
  return (
    <section className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-transparent mb-6">
      <div className="relative bg-service_color rounded-xl overflow-hidden">
        <img 
          src={serviceDesign} 
          alt="Service background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 relative">
            {/* App Buttons */}
            <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col items-center lg:items-start space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* App Store Button */}
                <button
                  type="button"
                  className="flex items-center px-4 py-2 bg-black hover:bg-[#222] active:bg-black text-white rounded-lg text-base sm:text-lg transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#fff"
                    className="mr-2"
                    viewBox="0 0 22.773 22.773"
                  >
                    <path d="M15.769 0h.162c.13 1.606...z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] sm:text-xs font-medium leading-none">
                      Download on the
                    </p>
                    <span className="text-sm sm:text-base font-semibold">App Store</span>
                  </div>
                </button>

                {/* Google Play Button */}
                <button
                  type="button"
                  className="flex items-center px-4 py-2 bg-black hover:bg-[#222] active:bg-black text-white rounded-lg text-base sm:text-lg transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#fff"
                    className="mr-2"
                    viewBox="0 0 64 64"
                  >
                    <path fill="#57cef3" d="M7 3v58l33-29z" />
                    <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" />
                    <path fill="#48ff48" d="M36 32 7 3h4l34 20z" />
                    <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" />
                    <path fill="#f33" d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z" />
                    <path fill="#0779e4" d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z" />
                    <path fill="#314a52" d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] sm:text-xs font-medium leading-none">
                      Get it on
                    </p>
                    <span className="text-sm sm:text-base font-semibold">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-6 sm:mt-8">
              <h2 className="text-center lg:text-left font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-tight max-w-full lg:max-w-[600px]">
                Get your service from our app
              </h2>
              <p className="mt-3 text-center lg:text-left text-sm sm:text-base text-black leading-relaxed max-w-full lg:max-w-[600px]">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.
              </p>
            </div>
          </div>

          {/* Right Section Image */}
          <div className="hidden lg:flex w-1/2 h-full items-center justify-end pr-6">
            <img 
              src={serviceImage}
              alt="Service App"
              className="w-full h-auto object-contain max-w-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
