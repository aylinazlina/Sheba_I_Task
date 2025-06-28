import React from "react";
import { memo } from 'react'
import bannerDesign from "../assets/images/bannerbackgroundDesign.png";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../commoncomponents/Button";
import Image_2 from "../assets/images/image_1.png"
import Image_3 from "../assets/images/image_2.png"
import Image_4 from "../assets/images/image_3.png"
import Image_1 from "../assets/images/image_4.png"

const Banner = () => {
  return (
    <div className="w-full">
      <section className="px-2 py-4 bg-white w-full">
        <div className="px-2 py-2 mx-auto bg-main_color rounded-xl relative max-w-[1800px]">
          <img 
            src={bannerDesign} 
            className="w-full h-auto object-cover"
            alt="Banner background"
          />
          <div className="flex flex-col lg:flex-row leftAndRightContentWrapper w-full px-4 lg:px-0">
            {/* ============ banner left part =======*/}
            <div className="Overlay bannerLeftWrapper py-4 bg-transparent lg:absolute lg:top-[20%] w-full lg:w-[50%]">
              <h1 className="text-3xl md:text-5xl lg:text-[58px] font-lato font-bold leading-tight lg:leading-[70px] text-white">
                Simplify Your World Achieve More
              </h1>
              <p className="font-main text-light text-base md:text-lg lg:text-[20px] text-white leading-snug lg:leading-[32px] w-full lg:w-[90%] mt-2">
                Streamline tasks, manage schedules, and access smart solutions
                designed to simplify your life. Boost productivity effortlessly
                with a personal assistant that keeps you organized, focused, and
                always one step ahead
              </p>

              <div className="flex flex-col sm:flex-row items-start justify-items-start mt-4 gap-4">
                <button className="w-full sm:w-[150px] h-[50px] rounded-sm text-[16px] font-font_Inter cursor-pointer bg-white text-black relative flex items-center justify-center">
                  <IoLocationOutline className="font-bold text-[18px] text-black mr-2" />
                  Location
                </button>

                <form className="w-full sm:w-auto sm:flex-1">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative w-full">
                    <input
                      type="search"
                      id="default-search"
                      className="w-full px-4 py-3 md:px-8 md:py-4 text-[16px] font-font_Inter text-light leading-[19px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Service Search..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <p className="font-font_Inter text-white font-medium text-[16px] leading-[32px]">
                  Popular Searches :
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    btnDesign={"p-2 bg-black rounded-2xl cursor-pointer text-white"}
                    btnContent={"Shifting"}
                  />
                  <Button
                    btnDesign={"p-2 bg-black rounded-2xl cursor-pointer text-white"}
                    btnContent={"Beauty"}
                  />
                  <Button
                    btnDesign={"p-2 bg-black rounded-2xl cursor-pointer text-white"}
                    btnContent={"Home Service"}
                  />
                </div>
              </div>
            </div>

            {/* ========= banner Right part ======== */}

            <div className="bannerRightWrapper grid grid-cols-2 gap-2 sm:gap-4 bg-transparent py-4 lg:py-2 lg:px-2 lg:absolute lg:top-[10%] lg:right-[5%] xl:right-[10%]">
              <div className="flex flex-col gap-2 sm:gap-4">
                <div className="w-full h-[100px] sm:h-[130px] md:h-[150px] lg:h-[130px] xl:h-[184px] bg-transparent rounded overflow-hidden">
                  <img src={Image_1} className="w-full h-full object-cover" alt="Service 1"/>
                </div>
                <div className="w-full h-[140px] sm:h-[180px] md:h-[200px] lg:h-[180px] xl:h-[256px] bg-transparent rounded overflow-hidden">
                  <img src={Image_3} className="w-full h-full object-cover" alt="Service 3"/>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:gap-4 mt-4 sm:mt-8 lg:mt-8">
                <div className="w-full h-[140px] sm:h-[180px] md:h-[200px] lg:h-[180px] xl:h-[256px] bg-transparent rounded overflow-hidden">
                  <img src={Image_2} className="w-full h-full object-cover" alt="Service 2"/>
                </div>
                <div className="w-full h-[100px] sm:h-[130px] md:h-[150px] lg:h-[130px] xl:h-[184px] bg-transparent rounded overflow-hidden">
                  <img src={Image_4} className="w-full h-full object-cover" alt="Service 4"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Banner);