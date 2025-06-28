import React from "react";
import {memo} from 'react'
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
    const category = [
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
        <section className="px-4 py-8 md:py-12 bg-transparent w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-[48px] font-lato font-bold leading-tight md:leading-[48px]">
                    Explore Our Categories
                </h2>
                <p className="font-main font-normal text-sm md:text-base lg:text-[16px] leading-relaxed md:leading-[27px] mt-4 md:mt-6 max-w-2xl mx-auto">
                    Discover tailored categories designed to simplify your search,
                    explore diverse options, and find exactly what you need effortlessly
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mt-8 md:mt-12">
                    {category.map((item) => (
                        <div 
                            key={item.id}
                            className="w-full aspect-square max-w-[194px] mx-auto bg-white relative rounded-lg shadow-md hover:shadow-xl cursor-pointer hover:border-2 hover:border-purple-400 transition-all duration-300"
                        >
                            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-2 text-center font-font_Inter font-semibold text-sm md:text-base lg:text-[18px] leading-tight">
                                {item.title}
                            </p>
                            <p className="absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-font_Inter text-gray-400 font-light text-xs md:text-sm lg:text-[16px]">
                                Listing
                            </p>
                        </div>
                    ))}
                </div>

                <Button 
                    btnDesign={"px-6 py-2 md:px-8 md:py-3 bg-black text-white rounded font-font_Inter font-normal text-base md:text-lg lg:text-[18px] mt-8 md:mt-12 cursor-pointer hover:bg-gray-800 transition-colors duration-300"} 
                    btnContent={"View More"}
                />
            </div>
        </section>
    );
};

export default memo(Categories);