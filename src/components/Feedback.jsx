import React from "react";
import img_1 from "../assets/images/Feedback_1.png";
import img_2 from "../assets/images/Feedback_2.png";
import img_3 from "../assets/images/Quotes.png";
import img_4 from "../assets/images/Quotes_2.svg";

const Feedback = () => {
  return (
    <div className="px-2 sm:px-4 md:px-8 py-8 sm:py-10 bg-white mt-8 sm:mt-16 mb-8 sm:mb-12">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6 sm:mb-8 px-2 sm:px-4">
        <h2 className="font-lato font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight sm:leading-[48px] md:leading-[58px] mb-3 sm:mb-4 text-center">
          CLIENT FEEDBACK'S
        </h2>
        <p className="font-font_Inter font-normal text-xs sm:text-sm md:text-base lg:text-[16px] leading-relaxed sm:leading-[24px] md:leading-[30px] text-gray-300 max-w-full sm:max-w-[790px] text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some.
        </p>
      </div>

      {/* Feedback Cards Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-2 sm:px-4 py-4 bg-transparent">
        {/* Left Quote Card */}
        <div className="bg-transparent rounded-lg w-full sm:w-[250px] h-auto sm:h-[220px] px-4 py-6 sm:px-2 sm:py-4 relative border border-gray-100 shadow-sm mb-4 lg:mb-0">
          <p className="mt-4 sm:mt-8 text-gray-200 font-font_Inter font-normal text-xs sm:text-sm md:text-[16px] leading-relaxed sm:leading-[22px] md:leading-[26px] opacity-80">
            eligendi quas. Inventore et nihil. pora minima sed rerum dolores hic
            quis. eaque ratione.quis similique.
          </p>
          <img
            src={img_3}
            className="absolute top-[5%] right-0 opacity-10 w-12 sm:w-16 md:w-20"
            alt="Quote decoration"
          />
        </div>

        {/* Main Feedback Card */}
        <div className="px-4 sm:px-6 py-6 sm:py-8 bg-transparent rounded-lg w-full max-w-full lg:max-w-[754px] flex flex-col sm:flex-row gap-4 justify-around items-center shadow-lg border-2 border-purple-500">
          <img
            src={img_2}
            className="w-20 sm:w-24 md:w-28 h-auto"
            alt="Client profile"
          />
          <div className="flex flex-col ml-0 sm:ml-4 relative w-full sm:w-auto">
            <img
              src={img_4}
              className="w-6 sm:w-8 md:w-[50px] h-6 sm:h-8 md:h-[50px] absolute right-0 top-[-10%] sm:top-[-20%]"
              alt="Quote icon"
            />
            <p className="w-full sm:w-[300px] md:w-[386px] font-main text-xs sm:text-sm md:text-[16px] font-normal leading-relaxed sm:leading-[22px] md:leading-[27px] text-gray-400">
              Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam
              rerum id rerum beatae. Quas rerum iste necessitatibus. At
              voluptates ad magnam blanditiis excepturi expedita aut. Aut
              repellat inventore qui minima illum est.
            </p>
            <p className="font-font_Inter font-bold text-xs sm:text-sm md:text-[16px] leading-tight sm:leading-[17px] md:leading-[19px] mt-3 sm:mt-4">
              Kyle Merwin
            </p>
            <p className="font-font_Inter font-normal text-[11px] sm:text-xs md:text-[14px] text-gray-300">
              CO-owner
            </p>
          </div>
        </div>

        {/* Right Decoration Image */}
        <div className="hidden lg:block rounded-lg">
          <img
            src={img_1}
            className="opacity-20 w-full h-auto max-w-[220px]"
            alt="Decoration"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
