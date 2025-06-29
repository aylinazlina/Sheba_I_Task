import React from "react";
import WorksbackDesign from "../assets/images/WorksDesign.png";

const Works = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-12 bg-transparent">
      <div className="px-4 sm:px-8 lg:px-12 py-20 sm:py-32 lg:py-50 bg-gray-100 relative min-h-[800px] sm:min-h-[1000px] lg:min-h-[1200px]">
        {/* Background Image */}
        <img 
          src={WorksbackDesign} 
          className="w-full h-full object-cover"
          alt="Background Design"
        />

        {/* Header Section */}
        <div className="ml-2 mr-2 sm:ml-4 sm:mr-4 lg:ml-5 lg:mr-5 bg-transparent rounded-r-md absolute top-[3%] sm:top-[4%] lg:top-[5%] left-[10%] sm:left-[20%] lg:left-[25%] right-[10%] sm:right-[20%] lg:right-auto">
          <div className="flex flex-col justify-center items-center mt-4 sm:mt-6 lg:mt-8">
            <p className="font-lato font-bold text-[24px] sm:text-[36px] lg:text-[48px] leading-[30px] sm:leading-[44px] lg:leading-[58px] mb-2 sm:mb-3 lg:mb-4 text-center">
              HOW IT WORKS
            </p>
            <p className="font-main font-normal text-[12px] sm:text-[14px] lg:text-[16px] leading-[20px] sm:leading-[24px] lg:leading-[27px] max-w-[280px] sm:max-w-[450px] lg:w-[651px] text-center px-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some.
            </p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-transparent px-2 sm:px-3 lg:px-4 py-4 sm:py-6 lg:py-8 mr-2 ml-2 sm:mr-3 sm:ml-3 lg:mr-5 lg:ml-5 absolute top-[15%] sm:top-[16%] lg:top-[18%] left-[2%] sm:left-[5%] lg:left-[7%]">
          <div className="bg-white w-[280px] sm:w-[320px] lg:w-[426px] h-[200px] sm:h-[240px] lg:h-[286px] rounded-xl flex flex-col justify-center items-center px-2 sm:px-4">
            <div className="w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] bg-gray-200 rounded-full relative">
              <div className="w-[32px] sm:w-[38px] lg:w-[45px] h-[32px] sm:h-[38px] lg:h-[45px] rounded-full bg-black absolute top-[18%] left-[15%]">
                <p className="text-white font-font_Inter font-semibold text-[20px] sm:text-[26px] lg:text-[32px] text-center leading-[32px] sm:leading-[38px] lg:leading-[45px]">
                  1
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-[16px] sm:text-[20px] lg:text-[24px] mt-2 sm:mt-3 lg:mt-4 text-center">
              LOREM IPSUM
            </p>
            <p className="font-main font-normal text-[12px] sm:text-[14px] lg:text-[16px] leading-[18px] sm:leading-[22px] lg:leading-[27px] ml-3 mr-3 sm:ml-4 sm:mr-4 lg:ml-6 lg:mr-6 w-[240px] sm:w-[280px] lg:w-[340px] text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
        </div>

        {/* Arrow 1 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 800"
          className="absolute top-[14%] sm:top-[15%] lg:top-[17%] left-[25%] sm:left-[28%] lg:left-[32%] w-[300px] sm:w-[400px] lg:w-[500px] h-[240px] sm:h-[320px] lg:h-[400px]"
        >
          <g
            strokeWidth="6"
            stroke="hsl(231, 100%, 64%)"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="20 35"
          >
            <path
              d="M250 250Q450 350 550 550"
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

        {/* Card 2 */}
        <div className="bg-transparent px-2 sm:px-3 lg:px-4 py-4 sm:py-6 lg:py-8 mr-2 ml-2 sm:mr-3 sm:ml-3 lg:mr-5 lg:ml-5 absolute top-[28%] sm:top-[31%] lg:top-[34%] right-[2%] sm:right-[5%] lg:right-[7%]">
          <div className="bg-white w-[280px] sm:w-[320px] lg:w-[426px] h-[200px] sm:h-[240px] lg:h-[286px] rounded-xl flex flex-col justify-center items-center px-2 sm:px-4">
            <div className="w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] bg-gray-200 rounded-full relative">
              <div className="w-[32px] sm:w-[38px] lg:w-[45px] h-[32px] sm:h-[38px] lg:h-[45px] rounded-full bg-black absolute top-[18%] left-[15%]">
                <p className="text-white font-font_Inter font-semibold text-[20px] sm:text-[26px] lg:text-[32px] text-center leading-[32px] sm:leading-[38px] lg:leading-[45px]">
                  2
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-[16px] sm:text-[20px] lg:text-[24px] mt-2 sm:mt-3 lg:mt-4 text-center">
              LOREM IPSUM
            </p>
            <p className="font-main font-normal text-[12px] sm:text-[14px] lg:text-[16px] leading-[18px] sm:leading-[22px] lg:leading-[27px] ml-3 mr-3 sm:ml-4 sm:mr-4 lg:ml-6 lg:mr-6 w-[240px] sm:w-[280px] lg:w-[340px] text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
        </div>

        {/* Arrow 2 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 800"
          className="absolute top-[40%] sm:top-[43%] lg:top-[47%] left-[22%] sm:left-[25%] lg:left-[29%] w-[300px] sm:w-[400px] lg:w-[500px] h-[240px] sm:h-[320px] lg:h-[400px]"
        >
          <g
            strokeWidth="6"
            stroke="hsl(231, 100%, 64%)"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="20 35"
            transform="rotate(95, 400, 400)"
          >
            <path
              d="M250 250Q450 350 550 550"
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

        {/* Card 3 */}
        <div className="bg-transparent px-2 sm:px-3 lg:px-4 py-4 sm:py-6 lg:py-8 mr-2 ml-2 sm:mr-3 sm:ml-3 lg:mr-5 lg:ml-5 absolute top-[48%] sm:top-[51%] lg:top-[55%] left-[2%] sm:left-[5%] lg:left-[7%]">
          <div className="bg-white w-[280px] sm:w-[320px] lg:w-[426px] h-[200px] sm:h-[240px] lg:h-[286px] rounded-xl flex flex-col justify-center items-center px-2 sm:px-4">
            <div className="w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] bg-gray-200 rounded-full relative">
              <div className="w-[32px] sm:w-[38px] lg:w-[45px] h-[32px] sm:h-[38px] lg:h-[45px] rounded-full bg-black absolute top-[18%] left-[15%]">
                <p className="text-white font-font_Inter font-semibold text-[20px] sm:text-[26px] lg:text-[32px] text-center leading-[32px] sm:leading-[38px] lg:leading-[45px]">
                  3
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-[16px] sm:text-[20px] lg:text-[24px] mt-2 sm:mt-3 lg:mt-4 text-center">
              LOREM IPSUM
            </p>
            <p className="font-main font-normal text-[12px] sm:text-[14px] lg:text-[16px] leading-[18px] sm:leading-[22px] lg:leading-[27px] ml-3 mr-3 sm:ml-4 sm:mr-4 lg:ml-6 lg:mr-6 w-[240px] sm:w-[280px] lg:w-[340px] text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </div>
        </div>

        {/* Arrow 3 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 800"
          className="absolute top-[52%] sm:top-[56%] lg:top-[60%] left-[22%] sm:left-[25%] lg:left-[29%] w-[300px] sm:w-[400px] lg:w-[500px] h-[240px] sm:h-[320px] lg:h-[400px]"
        >
          <g
            strokeWidth="6"
            stroke="hsl(231, 100%, 64%)"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="20 35"
            transform="matrix(1,0,0,1,35,-50)"
          >
            <path
              d="M250 250Q450 350 550 550"
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

        {/* Card 4 */}
        <div className="bg-transparent px-2 sm:px-3 lg:px-4 py-4 sm:py-6 lg:py-8 mr-2 ml-2 sm:mr-3 sm:ml-3 lg:mr-5 lg:ml-5 absolute top-[65%] sm:top-[69%] lg:top-[75%] right-[2%] sm:right-[4%] lg:right-[6%]">
          <div className="bg-white w-[280px] sm:w-[320px] lg:w-[426px] h-[200px] sm:h-[240px] lg:h-[286px] rounded-xl flex flex-col justify-center items-center px-2 sm:px-4">
            <div className="w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] bg-gray-200 rounded-full relative">
              <div className="w-[32px] sm:w-[38px] lg:w-[45px] h-[32px] sm:h-[38px] lg:h-[45px] rounded-full bg-black absolute top-[18%] left-[15%]">
                <p className="text-white font-font_Inter font-semibold text-[20px] sm:text-[26px] lg:text-[32px] text-center leading-[32px] sm:leading-[38px] lg:leading-[45px]">
                  4
                </p>
              </div>
            </div>
            <p className="font-lato font-semibold text-[16px] sm:text-[20px] lg:text-[24px] mt-2 sm:mt-3 lg:mt-4 text-center">
              LOREM IPSUM
            </p>
            <p className="font-main font-normal text-[12px] sm:text-[14px] lg:text-[16px] leading-[18px] sm:leading-[22px] lg:leading-[27px] ml-3 mr-3 sm:ml-4 sm:mr-4 lg:ml-6 lg:mr-6 w-[240px] sm:w-[280px] lg:w-[340px] text-center">
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