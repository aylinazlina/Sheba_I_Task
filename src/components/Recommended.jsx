import React from "react";
import recom_1 from "../assets/images/recommended_1.png";
import recom_2 from "../assets/images/recom_2.png";
import recom_3 from "../assets/images/recommend_3.png";
import recome_4 from "../assets/images/recom_4.png";

const Recommended = () => {
  return (
    <div>
      <section className="bg-transparent px-2 py-4">
        <div className="px-2 py-2 ml-5 mr-5 bg-transparent">
          <p className="font-lato font-bold text-[42px] leading-[32px] flex justify-center items-center mb-12">
            Recommended
          </p>
         <div className="flex flex-wrap justify-around">
             <div className="max-w-[301px] max-h-[375px] px-2 py-4 bg-recommend_card rounded-xl shadow-lg">
            <img src={recom_1} className="ml-1 mt-2" />
            <p className="font-lato font-bold text-[14px] leading-[23px] ml-7 mt-3 mb-4 ">
              Plumbing & Sanitary Services
            </p>
          </div>
            <div className="max-w-[301px] max-h-[375px] px-2 py-4 bg-recommend_card rounded-xl shadow-lg">
            <img src={recom_2} className="ml-1 mt-2" />
            <p className="font-lato font-bold text-[14px] leading-[23px] ml-7 mt-3 mb-4 ">
              Plumbing & Sanitary Services
            </p>
          </div>
            <div className="max-w-[301px] max-h-[375px] px-2 py-4 bg-recommend_card rounded-xl shadow-lg">
            <img src={recom_3} className="ml-1 mt-2" />
            <p className="font-lato font-bold text-[14px] leading-[23px] ml-7 mt-3 mb-4 ">
              Plumbing & Sanitary Services
            </p>
          </div>
            <div className="max-w-[304px] max-h-[375px] px-2 py-4 bg-recommend_card rounded-xl shadow-lg">
            <img src={recome_4} className="ml-1 mt-2" />
            <p className="font-lato font-bold text-[14px] leading-[23px] ml-7 mt-3 mb-4 ">
              Plumbing & Sanitary Services
            </p>
          </div>
         </div>
        </div>
      </section>
    </div>
  );
};

export default Recommended;
