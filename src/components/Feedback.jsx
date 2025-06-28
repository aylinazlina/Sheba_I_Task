import React from "react";
import img_1 from "../assets/images/Feedback_1.png";
import img_2 from "../assets/images/Feedback_2.png";
import img_3 from "../assets/images/Quotes.png";
import img_4 from "../assets/images/Quotes_2.svg";

const Feedback = () => {
  return (
    <div className="px-4 sm:px-2 py-8 sm:py-4 bg-white mt-10 sm:mt-20 mb-8 sm:mb-10">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6 sm:mb-8 px-4">
        <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-[48px] leading-tight sm:leading-[58px] mb-3 sm:mb-4 text-center">
          CLIENT FEEDBACK'S
        </h2>
        <p className="font-font_Inter font-normal text-sm sm:text-base md:text-[16px] leading-relaxed sm:leading-[30px] text-gray-300 max-w-full sm:max-w-[790px] text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some.
        </p>
      </div>

      {/* Feedback Cards Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-4 sm:px-2 py-4 bg-transparent">
        {/* Left Quote Card */}
        <div className="bg-transparent rounded-lg w-full sm:w-[250px] h-auto sm:h-[220px] px-4 py-6 sm:px-2 sm:py-4 relative border border-gray-100 shadow-sm">
          <p className="mt-4 sm:mt-8 text-gray-200 font-font_Inter font-normal text-sm sm:text-[16px] leading-relaxed sm:leading-[26px] opacity-80">
            eligendi quas. Inventore et nihil. pora minima sed rerum dolores
            hic quis. eaque ratione.quis similique.
          </p>
          <img 
            src={img_3} 
            className="absolute top-[5%] right-0 opacity-10 w-16 sm:w-auto" 
            alt="Quote decoration"
          />
        </div>

        {/* Main Feedback Card */}
        <div className="px-4 sm:px-6 py-6 sm:py-8 bg-transparent rounded-lg w-full max-w-full lg:max-w-[754px] flex flex-col sm:flex-row gap-4 justify-around items-center shadow-lg border-2 border-purple-500">
          <img 
            src={img_2} 
            className="w-24 sm:w-auto h-auto" 
            alt="Client profile"
          />
          <div className="flex flex-col ml-0 sm:ml-4 relative w-full sm:w-auto">
            <img 
              src={img_4} 
              className="w-8 sm:w-[50px] h-8 sm:h-[50px] absolute right-0 top-[-15%] sm:top-[-30%]" 
              alt="Quote icon"
            />
            <p className="w-full sm:w-[386px] font-main text-sm sm:text-[16px] font-normal leading-relaxed sm:leading-[27px] text-gray-400">
              Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam
              rerum id rerum beatae. Quas rerum iste necessitatibus. At
              voluptates ad magnam blanditiis excepturi expedita aut. Aut
              repellat inventore qui minima illum est.
            </p>
            <p className="font-font_Inter font-bold text-sm sm:text-[16px] leading-tight sm:leading-[19px] mt-3 sm:mt-4">
              Kyle Merwin
            </p>
            <p className="font-font_Inter font-normal text-xs sm:text-[14px] text-gray-300">
              CO-owner
            </p>
          </div>
        </div>

        {/* Right Decoration Image */}
        <div className="hidden lg:block rounded-lg">
          <img 
            src={img_1} 
            className="opacity-20 w-full h-auto" 
            alt="Decoration"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;