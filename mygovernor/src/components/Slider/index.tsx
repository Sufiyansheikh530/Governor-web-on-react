"use client";

import React, { Component, ReactNode } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ImagesCarousel extends Component {
  render(): ReactNode {
    const data = [
      { img: "/slideShow1.jpg", title: "Students learning Web3 basics" },
      { img: "/slideShow2.jpg", title: "First meeting with the President" },
      { img: "/slideShow3.jpg", title: "President launching the PIAIC website" },
      { img: "/slideShow4.jpg", title: "President launching the PIAIC website" },
      { img: "/slideShow5.jpg", title: "President launching the PIAIC website" },
      { img: "/slideShow6.jpg", title: "President launching the PIAIC website" },
      { img: "/slideShow7.jpg", title: "President launching the PIAIC website" },
      { img: "/slideShow8.jpg", title: "President launching the PIAIC website" },
      
    ];

    const settings = {
      dots: true,
      dotsClass: "slick-dots line-indicator",
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
      customPaging: (i: number) => (
        <div className="mt-2 text-xs opacity-0">{i}</div>
      ),
    };

    return (
      <div className="mt-10 w-full">
        <Slider {...settings} className="w-full">
          {data.map((value, index) => (
            <div
              className="px-3 lg:px-1 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none"
              key={index}
            >
              <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                <Image
                  src={value.img}
                  alt={value.title}
                  layout="responsive" // Use layout for responsive handling
                  width={1000} // Replace with your preferred width
                  height={600} // Replace with your preferred height
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
