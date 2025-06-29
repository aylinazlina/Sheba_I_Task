import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img_1 from "../assets/images/YourHome.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../commoncomponents/Button";
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
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        <div className="px-2 py-4 mx-auto max-w-7xl bg-transparent">
          <p className="font-lato font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[32px] text-center mb-8">
            For Your Home
          </p>
          {/* slick slider */}
          <div className="slider-container">
            <Slider {...settings}>
              {item.map((data, idx) => (
                <div className="p-2 sm:p-4 md:p-6" key={idx}>
                  <div className="bg-transparent  w-full max-w-[306px] h-[200px] sm:h-[250px] md:h-[290px] rounded-lg flex justify-center items-center cursor-pointer relative mx-auto">
                    <img
                      src={data.img}
                      className="w-full h-full object-contain rounded-lg"
                      alt="Your Home"
                    />
                    <div className="px-1 py-1 bg-transparent absolute bottom-[10%] left-1/2 -translate-x-1/2">
                      <Button
                        btnDesign="px-2 py-1 sm:px-4 sm:py-2 bg-gray-300 text-white rounded-lg font-lato font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[24px]"
                        btnContent={"Plumbing and Sanitary Services"}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* slick slider */}
        </div>
      </section>
    </div>
  );
};

export default YourHome;
