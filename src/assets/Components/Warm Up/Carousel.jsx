import React from "react";
import C1 from "/car1.png";
import C2 from "/car2.png";
import C3 from "/car3.png";
import C4 from "/car4.png";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Carousel = () => {
  return (
    <div className="carousel w-full h-[350px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={C1} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide4"
            className="btn btn-circle bg-green-600 text-white text-xl"
          >
            <FaAngleLeft />
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-green-600 text-white text-xl"
          >
            <FaAngleRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={C2} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            className="btn btn-circle bg-green-600 text-white text-xl"
          >
            <FaAngleLeft />
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-green-600 text-white text-xl"
          >
            <FaAngleRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={C3} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            className="btn btn-circle bg-green-600 text-white text-xl"
          >
            <FaAngleLeft />
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-green-600 text-white text-xl"
          >
            <FaAngleRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={C4} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            className="btn btn-circle bg-green-600 text-white text-xl"
          >
            <FaAngleLeft />
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-green-600 text-white text-xl"
          >
            <FaAngleRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
