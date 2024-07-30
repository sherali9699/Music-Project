import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CustomPrevArrow = ({ onClick }) => (
  <div className="hero-prev-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faArrowLeft} size="2x" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="hero-next-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faArrowRight} size="2x" />
  </div>
);

const getSliderSettings = ({ showDots, showArrows, autoplay, autoplaySpeed, scrollOnSmallScreens }) => ({
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: showArrows ? <CustomNextArrow /> : null,
    prevArrow: showArrows ? <CustomPrevArrow /> : null,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed || 3000, // Default speed is 3000ms
    responsive: [
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: !scrollOnSmallScreens, // Disable infinite scrolling on large screens
          dots: showDots,
        },
      },
      {
        breakpoint: 768, // Medium devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: !scrollOnSmallScreens, // Disable infinite scrolling on medium screens
          dots: showDots,
        },
      },
      {
        breakpoint: 480, // Small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true, // Always enable infinite scrolling on small screens
          dots: showDots,
        },
      },
    ],
  });
  
  

  const CustomSlider = ({ showDots, showArrows, autoplay = false, autoplaySpeed, scrollOnSmallScreens = true, children }) => {
    const settings = getSliderSettings({ showDots, showArrows, autoplay, autoplaySpeed, scrollOnSmallScreens });
  
    return <Slider {...settings}>{children}</Slider>;
  };
  
export default CustomSlider;
  


