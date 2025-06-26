import React from "react";
import WorksbackDesign from "../assets/images/WorksDesign.png";

const Works = () => {
  return (
    <div>
      <div className="px-4 py-4 bg-gray-100 relative">
        <img src={WorksbackDesign} />

        <div className="ml-5 mr-5 bg-purple-500 rounded-r-md absolute top-[10%] left-[25%]">
          <div className="flex flex-col justify-center items-center mt-8">
            <p className="font-lato font-bold text-[48px] leading-[58px]">
              HOW IT WORKS
            </p>
            <p className="font-main font-normal text-[16px] leading-[27px] w-[651px] text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some.
            </p>
          </div>
        </div>
        <div className="bg-amber-400 px-4 py-8 mr-5  ml-5 absolute top-[28%]">
            <div className="bg-white w-[426px] h-[286px] rounded-xl flex flex-col justify-center items-center">
                <div className="w-[70px] h-[70px] bg-gray-200 rounded-full relative">
                    <div className="w-[45px] h-[45px] rounded-full bg-black absolute top-[18%] left-[15%] ">
                        <p className="text-white font-font_Inter font-semibold text-[32px] text-center">1</p>
                    </div>
                </div>
                <p className="font-lato font-semibold text-[24px] mt-4">LOREM IPSUM</p>
                <p className="font-main font-normal text-[16px] leading-[27px] ml-6 mr-6 w-[340px] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                
          </div>
      </div>

      <div className="bg-red-500 px-4 py-8 mr-5  ml-5 absolute top-[48%]">
            <div className="bg-white w-[426px] h-[286px] rounded-xl flex flex-col justify-center items-center">
                <div className="w-[70px] h-[70px] bg-gray-200 rounded-full relative">
                    <div className="w-[45px] h-[45px] rounded-full bg-black absolute top-[18%] left-[15%] ">
                        <p className="text-white font-font_Inter font-semibold text-[32px] text-center">1</p>
                    </div>
                </div>
                <p className="font-lato font-semibold text-[24px] mt-4">LOREM IPSUM</p>
                <p className="font-main font-normal text-[16px] leading-[27px] ml-6 mr-6 w-[340px] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                
          </div>
      </div>


      <div className="bg-blue-500 px-4 py-8 mr-5  ml-5 absolute top-[58%]">
            <div className="bg-white w-[426px] h-[286px] rounded-xl flex flex-col justify-center items-center">
                <div className="w-[70px] h-[70px] bg-gray-200 rounded-full relative">
                    <div className="w-[45px] h-[45px] rounded-full bg-black absolute top-[18%] left-[15%] ">
                        <p className="text-white font-font_Inter font-semibold text-[32px] text-center">1</p>
                    </div>
                </div>
                <p className="font-lato font-semibold text-[24px] mt-4">LOREM IPSUM</p>
                <p className="font-main font-normal text-[16px] leading-[27px] ml-6 mr-6 w-[340px] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                
          </div>
      </div>

      
    </div>
    </div>
  );
};

export default Works;
