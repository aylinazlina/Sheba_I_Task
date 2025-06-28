import React from "react";
import WorksbackDesign from "../assets/images/WorksDesign.png";

const Works = () => {
  return (
    <div className="px-12 py-12 bg-transparent">
      <div className="px-12 py-50 bg-gray-100 relative">
        <img src={WorksbackDesign} />

        <div className="ml-5 mr-5 bg-transparent rounded-r-md absolute top-[5%] left-[25%]">
          <div className="flex flex-col justify-center items-center mt-8">
            <p className="font-lato font-bold text-[48px] leading-[58px] mb-4">
              HOW IT WORKS
            </p>
            <p className="font-main font-normal text-[16px] leading-[27px] w-[651px] text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some.
            </p>
          </div>
        </div>

        {/* card_1 */}
        <div className="bg-transparent px-4 py-8 mr-5  ml-5 absolute top-[18%] left-[7%]">
          <div className="bg-white w-[426px] h-[286px] rounded-xl flex flex-col justify-center items-center">
            <div className="w-[70px] h-[70px] bg-gray-200 rounded-full relative">
              <div className="w-[45px] h-[45px] rounded-full bg-black absolute top-[18%] left-[15%] ">
                <p className="text-white font-font_Inter font-semibold text-[32px] text-center">
                  1
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-[24px] mt-4">
              LOREM IPSUM
            </p>
            <p className="font-main font-normal text-[16px] leading-[27px] ml-6 mr-6 w-[340px] text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
        </div>

          {/* arrow svg created by arrow svg generator and position thik korsi className diea in svg */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 800"
          className="absolute  top-[17%] left-[32%] w-[500px] h-[400px]"
        >
          <g
            stroke-width="10"
            stroke="hsl(231, 100%, 64%)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="31.5 50"
          >
            <path
              d="M250 250Q450 350 550 550 "
              marker-end="url(#SvgjsMarker1006)"
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
        <div className="bg-transparent px-4 py-8 mr-5  ml-5 absolute top-[34%] right-[7%]">
          <div className="bg-white w-[426px] h-[286px] rounded-xl flex flex-col justify-center items-center">
            <div className="w-[70px] h-[70px] bg-gray-200 rounded-full relative">
              <div className="w-[45px] h-[45px] rounded-full bg-black absolute top-[18%] left-[15%] ">
                <p className="text-white font-font_Inter font-semibold text-[32px] text-center">
                  2
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-[24px] mt-4">
              LOREM IPSUM
            </p>
            <p className="font-main font-normal text-[16px] leading-[27px] ml-6 mr-6 w-[340px] text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 800"
          className="absolute top-[47%] left-[29%] w-[500px] h-[400px] "
        >
          <g
            stroke-width="10"
            stroke="hsl(231, 100%, 64%)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="31.5 50"
            transform="rotate(95, 400, 400)"
          >
            <path
              d="M250 250Q450 350 550 550 "
              marker-end="url(#SvgjsMarker1031)"
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
        <div className="bg-transparent px-4 py-8 mr-5  ml-5 absolute top-[55%] left-[7%] ">
          <div className="bg-white w-[426px] h-[286px] rounded-xl flex flex-col justify-center items-center">
            <div className="w-[70px] h-[70px] bg-gray-200 rounded-full relative">
              <div className="w-[45px] h-[45px] rounded-full bg-black absolute top-[18%] left-[15%] ">
                <p className="text-white font-font_Inter font-semibold text-[32px] text-center">
                  3
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-[24px] mt-4">
              LOREM IPSUM
            </p>
            <p className="font-main font-normal text-[16px] leading-[27px] ml-6 mr-6 w-[340px] text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 800"
          className="absolute top-[60%] left-[29%] w-[500px] h-[400px]"
        >
          <g
            stroke-width="10"
            stroke="hsl(231, 100%, 64%)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="31.5 50"
            transform="matrix(1,0,0,1,44,-60)"
          >
            <path
              d="M250 250Q450 350 550 550 "
              marker-end="url(#SvgjsMarker1186)"
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
        <div className="bg-transparent px-4 py-8 mr-5  ml-5 absolute top-[75%] right-[6%]">
          <div className="bg-white w-[426px] h-[286px] rounded-xl flex flex-col justify-center items-center">
            <div className="w-[70px] h-[70px] bg-gray-200 rounded-full relative">
              <div className="w-[45px] h-[45px] rounded-full bg-black absolute top-[18%] left-[15%] ">
                <p className="text-white font-font_Inter font-semibold text-[32px] text-center">
                  4
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-[24px] mt-4">
              LOREM IPSUM
            </p>
            <p className="font-main font-normal text-[16px] leading-[27px] ml-6 mr-6 w-[340px] text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
