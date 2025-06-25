import React from "react";
import img_1 from "../assets/images/Cate_1.svg"
import img_2 from "../assets/images/cat_2.svg"
import img_3 from "../assets/images/cat_3.svg"
import img_4 from "../assets/images/cat_4.svg"
import img_5 from "../assets/images/cat_5.png"
import img_7 from "../assets/images/cat_7.png"
import img_8 from "../assets/images/cate_8.svg"
import img_9 from "../assets/images/cat_9.png"
import img_10 from "../assets/images/cat_10.svg"
import img_11 from "../assets/images/cat_11.svg"
import img_12 from "../assets/images/cat_12.svg"
import Button from "../commoncomponents/Button"


const Categories = () => {


    const category=[
        {
            id:1,
            image:img_1,
            title:"Maid Service",
        },
           {
            id:2,
            image:img_2,
            title:"Clean Solutions",
        },
           {
            id:3,
            image:img_3,
            title:"Shifting",
        },
           {
            id:4,
            image:img_4,
            title:"AC Repair",
        },
           {
            id:5,
            image:img_5,
            title:"Health & Care",
        },
           {
            id:6,
            image:img_1,
            title:"Maid Service",
        },
           {
            id:7,
            image:img_7,
            title:"Car Rental",
        },
           {
            id:8,
            image:img_8,
            title:"Trips & Travels",
        },
           {
            id:9,
            image:img_9,
            title:"Driver Service",
        },
           {
            id:10,
            image:img_10,
            title:"Men's Care",
        },
           {
            id:11,
            image:img_11,
            title:"Pest Control",
        },
           {
            id:12,
            image:img_12,
            title:"Gadget Repair",
        },


    ]


  return (
    <div>
      <section className="px-2 py-4 bg-transparent">
        <div className="px-2 py-4 ml-5 mr-5 bg-transparent text-center">
          <p className="font-lato font-bold text-[48px] leading-[32px]">
            Explore Our Categories
          </p>
          <p className="font-main font-normal text-[16px] leading-[27px] mt-8 max-w-[700px] mx-auto">
            Discover tailored categories designed to simplify your search,
            explore diverse options, and find exactly what you need effortlessly
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {category ?.map((item)=>( <div className="w-[194px] h-[180px] bg-white  relative mt-16 rounded shadow-lg hover:border-2 hover:border-purple-400">
            <img src={item.image} className="top-[10%] left-[35%] absolute"/>
            <p className="font-font_Inter font-semibold text-[18px] leading-[36px] absolute top-[50%] left-[23%]">{item.title}</p>
            <p className="font-font_Inter text-gray-400 font-light text-[16px] leading-[36px] absolute top-[65%] left-[32%]">Listing</p>


          </div>))}
           
          </div>

          <Button btnDesign={"px-6 py-2 bg-black text-white rounded font-font_Inter font-normal text-[18px] mt-8"} btnContent={"View More"}/>

        </div>
      </section>
    </div>
  );
};

export default Categories;
