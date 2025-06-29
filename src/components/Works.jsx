import React from "react";
import {memo} from "react";
import WorksbackDesign from "../assets/images/WorksDesign.png";

const Works = () => {
  return (
    <div className="px-2 py-6 bg-transparent sm:px-6 md:px-12 md:py-12">
      <div className="px-2 py-6 bg-gray-100 relative sm:px-6 md:px-12 md:py-12">
        <img src={WorksbackDesign} className="w-full object-cover" />

        <div className="mx-2 bg-transparent rounded-r-md relative lg:absolute lg:top-[5%] lg:left-[25%]">
          <div className="flex flex-col flex-wrap justify-center items-center mt-4 md:mt-8">
            <p className="font-lato font-bold text-[24px] leading-[32px] mb-2 sm:text-[28px] sm:leading-[36px] md:text-[48px] md:leading-[58px] md:mb-4">
              HOW IT WORKS
            </p>
            <p className="font-main font-normal text-[13px] leading-[20px] w-full text-center sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[27px] md:w-[651px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some.
            </p>
          </div>
        </div>

        {/* Cards container for mobile */}
        <div className="flex flex-col gap-4 lg:gap-0 lg:block">
          {/* card_1 */}
          <div className="bg-transparent px-2 py-4 mx-2 relative lg:absolute lg:top-[18%] lg:left-[7%] lg:px-4 lg:py-8 lg:mx-5">
            <div className="bg-white w-full max-w-[426px] h-auto rounded-xl flex flex-col justify-center items-center mx-auto py-4 sm:py-6 md:h-[286px]">
              <div className="w-[44px] h-[44px] bg-gray-200 rounded-full relative sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px]">
                <div className="w-[28px] h-[28px] rounded-full bg-black absolute top-[18%] left-[15%] flex items-center justify-center sm:w-[32px] sm:h-[32px] md:w-[45px] md:h-[45px]">
                  <p className="text-white font-font_Inter font-semibold text-[18px] text-center sm:text-[20px] md:text-[32px]">
                    1
                  </p>
                </div>
              </div>
              <p className="font-lato font-semibold text-[16px] mt-2 sm:text-[18px] md:text-[24px] md:mt-4">
                LOREM IPSUM
              </p>
              <p className="font-main font-normal text-[13px] leading-[20px] mx-2 w-full text-center sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[27px] md:mx-6 md:w-[340px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>

          {/* arrow svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            className="hidden lg:block absolute top-[7%] left-[31%] w-[500px] h-[600px]"
          >
            <g
              strokeWidth="10"
              stroke="hsl(231, 100%, 64%)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="31.5 50"
            >
              <path
                d="M250 250Q450 350 550 550 "
                markerEnd="url(#SvgjsMarker1006)"
              ></path>
            </g>
            <defs>
              <marker
                markerWidth="5"
                markerHeight="5"
                refX="2.5"
                refY="2.5"
                viewBox="0 0 5 5"
                orient="auto"
                id="SvgjsMarker1006"
              >
                <polygon
                  points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                  fill="hsl(231, 100%, 64%)"
                ></polygon>
              </marker>
            </defs>
          </svg>

          {/* card_2 */}
          <div className="bg-transparent px-2 py-4 mx-2 relative lg:absolute lg:top-[34%] lg:right-[7%] lg:px-4 lg:py-8 lg:mx-5">
            <div className="bg-white w-full max-w-[426px] h-auto rounded-xl flex flex-col justify-center items-center mx-auto py-4 sm:py-6 md:h-[286px]">
              <div className="w-[44px] h-[44px] bg-gray-200 rounded-full relative sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px]">
                <div className="w-[28px] h-[28px] rounded-full bg-black absolute top-[18%] left-[15%] flex items-center justify-center sm:w-[32px] sm:h-[32px] md:w-[45px] md:h-[45px]">
                  <p className="text-white font-font_Inter font-semibold text-[18px] text-center sm:text-[20px] md:text-[32px]">
                    2
                  </p>
                </div>
              </div>
              <p className="font-lato font-semibold text-[16px] mt-2 sm:text-[18px] md:text-[24px] md:mt-4">
                LOREM IPSUM
              </p>
              <p className="font-main font-normal text-[13px] leading-[20px] mx-2 w-full text-center sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[27px] md:mx-6 md:w-[340px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            className="hidden lg:block absolute top-[37%] left-[30%] w-[500px] h-[600px]"
          >
            <g
              strokeWidth="10"
              stroke="hsl(231, 100%, 64%)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="31.5 50"
              transform="rotate(95, 400, 400)"
            >
              <path
                d="M250 250Q450 350 550 550 "
                markerEnd="url(#SvgjsMarker1031)"
              ></path>
            </g>
            <defs>
              <marker
                markerWidth="5"
                markerHeight="5"
                refX="2.5"
                refY="2.5"
                viewBox="0 0 5 5"
                orient="auto"
                id="SvgjsMarker1031"
              >
                <polygon
                  points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                  fill="hsl(231, 100%, 64%)"
                ></polygon>
              </marker>
            </defs>
          </svg>

          {/* card_3 */}
          <div className="bg-transparent px-2 py-4 mx-2 relative lg:absolute lg:top-[55%] lg:left-[7%] lg:px-4 lg:py-8 lg:mx-5">
            <div className="bg-white w-full max-w-[426px] h-auto rounded-xl flex flex-col justify-center items-center mx-auto py-4 sm:py-6 md:h-[286px]">
              <div className="w-[44px] h-[44px] bg-gray-200 rounded-full relative sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px]">
                <div className="w-[28px] h-[28px] rounded-full bg-black absolute top-[18%] left-[15%] flex items-center justify-center sm:w-[32px] sm:h-[32px] md:w-[45px] md:h-[45px]">
                  <p className="text-white font-font_Inter font-semibold text-[18px] text-center sm:text-[20px] md:text-[32px]">
                    3
                  </p>
                </div>
              </div>
              <p className="font-lato font-semibold text-[16px] mt-2 sm:text-[18px] md:text-[24px] md:mt-4">
                LOREM IPSUM
              </p>
              <p className="font-main font-normal text-[13px] leading-[20px] mx-2 w-full text-center sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[27px] md:mx-6 md:w-[340px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            className="hidden lg:block absolute top-[65%] left-[29%] w-[500px] h-[500px]"
          >
            <g
              strokeWidth="10"
              stroke="hsl(231, 100%, 64%)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="31.5 50"
              transform="matrix(1,0,0,1,44,-60)"
            >
              <path
                d="M250 250Q450 350 550 550 "
                markerEnd="url(#SvgjsMarker1186)"
              ></path>
            </g>
            <defs>
              <marker
                markerWidth="5"
                markerHeight="5"
                refX="2.5"
                refY="2.5"
                viewBox="0 0 5 5"
                orient="auto"
                id="SvgjsMarker1186"
              >
                <polygon
                  points="0,5 1.6666666666666667,2.5 0,0 5,2.5"
                  fill="hsl(231, 100%, 64%)"
                ></polygon>
              </marker>
            </defs>
          </svg>

          {/* card_4 */}
          <div className="bg-transparent px-2 py-4 mx-2 relative lg:absolute lg:top-[75%] lg:right-[6%] lg:px-4 lg:py-8 lg:mx-5">
            <div className="bg-white mb-4 w-full max-w-[426px] h-auto rounded-xl flex flex-col justify-center items-center mx-auto py-4 sm:py-6 md:h-[286px]">
              <div className="w-[44px] h-[44px] bg-gray-200 rounded-full relative sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px]">
                <div className="w-[28px] h-[28px] rounded-full bg-black absolute top-[18%] left-[15%] flex items-center justify-center sm:w-[32px] sm:h-[32px] md:w-[45px] md:h-[45px]">
                  <p className="text-white font-font_Inter font-semibold text-[18px] text-center sm:text-[20px] md:text-[32px]">
                    4
                  </p>
                </div>
              </div>
              <p className="font-lato font-semibold text-[16px] mt-2 sm:text-[18px] md:text-[24px] md:mt-4">
                LOREM IPSUM
              </p>
              <p className="font-main font-normal text-[13px] leading-[20px] mx-2 w-full text-center sm:text-[14px] sm:leading-[22px] md:text-[16px] md:leading-[27px] md:mx-6 md:w-[340px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Works);