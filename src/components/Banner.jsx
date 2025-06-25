import React from "react";
import bannerDesign from "../assets/images/bannerbackgroundDesign.png";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../commoncomponents/Button";
import Image_2 from "../assets/images/image_1.png"
import Image_3 from "../assets/images/image_2.png"
import Image_4 from "../assets/images/image_3.png"
import Image_1 from "../assets/images/image_4.png"

const Banner = () => {
  return (
    <div>
      <section className="px-2 py-4 bg-white">
        <div className="px-2 py-2 ml-5 mr-5 bg-main_color rounded-xl relative">
          <img src={bannerDesign} />
          <div className="flex leftAndRightContentWrapper ">
            {/* ============ banner left part =======*/}
            <div className="Overlay bannerLeftWrapper py-4 ml-5 bg-transparent absolute top-[20%]">
              <h1 className="text-[58px] font-lato font-bold leading-[70px] text-white w-[600px]">
                Simplify Your World Achieve More
              </h1>
              <p className="font-main text-light text-[20px] text-white leading-[32px] w-[668px] mt-2">
                Streamline tasks, manage schedules, and access smart solutions
                designed to simplify your life. Boost productivity effortlessly
                with a personal assistant that keeps you organized, focused, and
                always one step ahead
              </p>

              <div
                className="flex items-start justify-items-start
              mt-4"
              >
                <button className="w-[150px] h-[50px] rounded-sm text-[16px] font-font_Inter cursor-pointer bg-white text-black relative">
                  <IoLocationOutline className="font-bold text-[18px] text-black top-[32%] absolute ml-4" />
                  Location
                </button>

                <form className="ml-4">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="w-full  px-8 py-4 text-[16px] font-font_Inter text-light leading-[19px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex gap-3 mt-4">
                <p className="font-font_Inter text-white font-medium text-[16px] leading-[32px]">
                  Popular Searches :
                </p>
                <div className="flex gap-2">
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

            <div className="bannerRightWrapper flex flex-wrap gap-4 bg-transparent py-2 px-2 absolute top-[10%] left-[60%]">
              <div className="flex flex-col">
                <div className="w-[212px] h-[184px] bg-transparent rounded">
                <img src={Image_1}/>
              </div>
              <div className="w-[212px] h-[256px] bg-transparent mt-4 rounded">
                <img src={Image_3}/>
              </div>
              
              </div>

              <div className="flex flex-col">
                <div className="w-[212px] h-[256px] bg-transparent mt-8 rounded">
                <img src={Image_2}/>
              </div>
              <div className="w-[212px] h-[184px] bg-transparent mt-4 rounded">
                <img src={Image_4}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
