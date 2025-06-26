import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img_1 from "../assets/images/YourHome.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../commoncomponents/Button"
const YourHome = () => {
  const item = [
    {
      id: 1,
      img: img_1,
    },
    {
      id: 2,
      img: img_1,
    },
    {
      id: 3,
      img: img_1,
    },

    {
      id: 4,
      img: img_1,
    },
    {
      id: 5,
      img: img_1,
    },
     {
      id: 6,
      img: img_1,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //react slick slider customArrows
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "w-[40px] h-[40px] animate-pulse absolute right-0 top-1/2 -translate-y-1/2  rounded-full "
        }
        style={{
          ...style,
          display: "block",
          padding: "20px",
          background: "purple",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <div>
          <IoIosArrowForward className="text-white  text-2xl cursor-grab" />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "w-[40px] h-[40px] animate-pulse shadow-2xl absolute left-0 top-1/2 -translate-y-1/2 rounded-full z-10"
        }
        style={{
          ...style,
          display: "block",
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <IoIosArrowBack className="text-white  text-2xl cursor-grab" />
      </div>
    );
  }
  return (
    <div>
      <section className="px-2 py-4 bg-purple">
        <div className="px-2 py-4 ml-5 mr-5 bg-transparent">
            <p className="font-lato font-bold text-[42px] leading-[32px]  text-center mb-8">For Your Home</p>
          
            {/* slick slider */}

            <div className="slider-container">
              <Slider {...settings}>
                {item.map((data) => (
                  <div className="p-6 ">
                    <div className="bg-transparent shadow-lg w-[306px] h-[290px] rounded-lg flex justify-center items-center cursor-pointer relative">
                      <img
                        src={data.img}
                        className="w-full h-full  object-contain "
                      />
                      <div className="px-1 py-1 bg-transparent absolute bottom-[10%]">

                        <Button btnDesign="px-4 py-2 bg-gray-300 text-white rounded-lg font-lato font-normal text-[16px] leading-[24px]" btnContent={"Plumbing and Sanitary Services"}/>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              {/* slick slider */}
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default YourHome;
