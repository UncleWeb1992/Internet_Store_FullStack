import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    "./img/slider/slider1.png",
    "./img/slider/slider2.png",
    "./img/slider/slider3.png",
    "./img/slider/slider4.png",
    "./img/slider/slider5.png",
  ];

  return (
    // <div className="container">
    <div className="slider">
      <Slider {...options}>
        {images.map((img) => (
          <img key={img} src={img} alt="slider_images" />
        ))}
      </Slider>
    </div>
    // </div>
  );
};

export default Carousel;
