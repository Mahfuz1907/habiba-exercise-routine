import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import S1 from "/sl1.png";
import S2 from "/sl2.png";
import S3 from "/sl3.png";
import S4 from "/sl4.png";
import S5 from "/sl5.png";

const Sliding = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={S1} alt="" className="w-full h-[350px]" />
      </div>
      <div>
        <img src={S2} alt="" className="w-full h-[350px]" />
      </div>
      <div>
        <img src={S3} alt="" className="w-full h-[350px]" />
      </div>
      <div>
        <img src={S4} alt="" className="w-full h-[350px]" />
      </div>
      <div>
        <img src={S5} alt="" className="w-full h-[350px]" />
      </div>
    </Slider>
  );
};

export default Sliding;
