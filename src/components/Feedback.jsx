import React from "react";
import img_1 from "../assets/images/Feedback_1.png";
import img_2 from "../assets/images/Feedback_2.png";
import img_3 from "../assets/images/Quotes.png";
import img_4 from "../assets/images/Quotes_2.svg";

const Feedback = () => {
  return (
    <div>
      <div className="px-2 py-4 bg-white mt-20 mb-10">
        <div className="flex flex-col items-center mb-8">
          <p className="font-lato font-bold text-[48px] leading-[58px] mb-4 ">
            CLIENT FEEDBACK'S
          </p>
          <p className="font-font_Inter font-normal text-[16px] leading-[30px] text-gray-300 w-[790px] text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some.
          </p>
        </div>

        <div className="px-2 py-4 bg-transparent flex justify-between  ">
          <div className="bg-trasnparent rounded-lg w-[250px] h-[220px]  px-2 py-4 relative">
            <p className="mt-8 text-gray-200 font-font_Inter font-normal text-[16px] leading-[26px] opacity-80">
              {" "}
              eligendi quas. Inventore et nihil. pora minima sed rerum dolores
              hic quis. eaque ratione.quis similique.
            </p>
            <img src={img_3} className="absolute top-[5%] right-[0] opacity-10" />
          </div>

          <div className="px-6 py-8 bg-transparent rounded-lg max-w-[754px] flex middleWrapperFull justify-around items-center shadow-lg border-2 border-purple-500">
            <img src={img_2} />
            <div className="flex flex-col ml-4 relative">
              <img src={img_4} className="w-[50px] h-[50px]  absolute right-0 top-[-30%]"/>
              <p className="w-[386px] font-main text-[16px] font-normal leading-[27px] text-gray-400">
                Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam
                rerum id rerum beatae. Quas rerum iste necessitatibus. At
                voluptates ad magnam blanditiis excepturi expedita aut. Aut
                repellat inventore qui minima illum est.
              </p>
              <p className="font-font_Inter font-bold text-[16px] leading-[19px] mt-4 ">
                Kyle Merwin
              </p>
              <p className="font-font_Inter font-normal text-[14px] text-gray-300">
                CO-owner
              </p>
            </div>
          </div>

          <div className="rounded-lg top-[10%]">
            <img src={img_1} className="opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
