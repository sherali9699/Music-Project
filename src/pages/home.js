// Import React and necessary components and styles
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import "../assets/css/stylesheet.css"; // Import general stylesheet
// import '../assets/css/responsive.css';
import VideoPauseHero from "../components/VideoPauseHero"; // Import VideoPauseHero component
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


// Import images for various sections
import abtImg1 from "../assets/images/about/home-abt-1.webp";
import abtImg2 from "../assets/images/about/home-abt-2.webp";
import abtImg3 from "../assets/images/about/home-abt-3.webp";
import academicOfferingsImg1 from "../assets/images/acaOffering/academic-offerings-1.webp";
import academicOfferingsImg2 from "../assets/images/acaOffering/academic-offerings-2.webp";
import mrImg1 from "../assets/images/home/mr-1.webp";
import mrImg2 from "../assets/images/home/mr-2.webp";
import mrImg3 from "../assets/images/home/mr-3.webp";
import eventImg1 from "../assets/images/events/event-card-1.webp";
import eventImg2 from "../assets/images/events/event-card-2.webp";
import eventImg3 from "../assets/images/events/event-card-3.webp";

// Custom Arrow Components
// const PrevArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={`${className} custom-arrow custom-prev-arrow`} onClick={onClick}>
//       <FontAwesomeIcon icon={faLongArrowAltLeft} />
//     </div>
//   );
// };

// const NextArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={`${className} custom-arrow custom-next-arrow`} onClick={onClick}>
//       <FontAwesomeIcon icon={faLongArrowAltRight} />
//     </div>
//   );
// };
// Custom arrow components
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
const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Medium devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="home">
      <Helmet>
        <title>
          Center fot South Asian Music - Center for South Asian Music
        </title>
      </Helmet>

      <VideoPauseHero />
      {/* Render the VideoPauseHero component */}

      {/* About Section */}
      <section className="abtSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading">About</h2>
                <p>
                Experience the fusion of culture and education at the Center for South Asian Music at Habib University. Our Music Room provides immersive learning opportunities, complemented by courses that culminate in the pioneering South Asian Music Minor. Dive into the historical, mathematical, and performance dimensions, as we strive to revive cultural heritage and nurture interdisciplinary understanding.
                </p>
                <Link className="globalBtn borderBtn" to="/about">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <ul className="abtImagesWrap">
            <li>
              <img src={abtImg1} alt="Cultural fusion at Habib University" />
            </li>
            <li>
              <img src={abtImg2} alt="Immersive learning opportunities" />
            </li>
            <li>
              <img src={abtImg3} alt="South Asian Music Minor" />
            </li>
          </ul>
        </div>
      </section>

      {/* Academic Offerings Section */}
      <section className="AcaOffSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading">Academic Offerings</h2>
                <p>
                Embark on a journey of musical exploration and academic inquiry with our diverse array of courses. From diving into the intricacies of South Asian musical genres to exploring the musical landscape elsewhere, our courses blend theory with practice to offer immersive learning experiences. Led by esteemed instructors and rooted in interdisciplinary approaches, our courses aim to cultivate a profound understanding and appreciation of music's cultural and historical significance.
                </p>
                <Link
                  className="globalBtn borderBtn"
                  to="/academic-offerings"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <ul className="abtImagesWrap">
            <li>
              <img
                src={academicOfferingsImg1}
                alt="Musical exploration course"
              />
            </li>
            <li>
              <img
                src={academicOfferingsImg2}
                alt="Interdisciplinary musical study"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* Khawaja Mashooqullah Music Room Section */}
      <section className="mrSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading">
                  Khawaja Mashooqullah Music Room
                </h2>
                <Link className="globalBtn borderBtn" to="/music-room">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <ul className="abtImagesWrap">
            <li>
              <img src={mrImg1} alt="Music Room interior" />
            </li>
            <li>
              <img src={mrImg2} alt="Music Room instruments" />
            </li>
            <li>
              <img src={mrImg3} alt="Music Room practice session" />
            </li>
          </ul>
        </div>
      </section>

      {/* Events Section */}
      <section className="eventSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading">Events</h2>
                <p>
                Take a glimpse into our annual events, ranging from soulful Khayal concerts to the melodies of Ghazal Kay Rang and captivating folk music programs. As a highlight, our Music Room orchestra culminates the academic year by serenading the graduating batch at their awards nights, creating moments of celebration and appreciation.
                </p>
                <Link className="globalBtn borderBtn" to="/events">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="home-event-pics">
            <Slider {...settings}>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={eventImg1} alt="Khayal concert event" />
                  </div>
                  <div className="overImgText">
                    <h3>Week of Welcome: Musical Evening</h3>
                    <h4>DATE: 12/3/2024</h4>
                  </div>
                </div>
              </div>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={eventImg2} alt="Ghazal Kay Rang event" />
                  </div>
                  <div className="overImgText">
                    <h3>Week of Welcome: Musical Evening</h3>
                    <h4>DATE: 12/3/2024</h4>
                  </div>
                </div>
              </div>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={eventImg3} alt="Folk music program" />
                  </div>
                  <div className="overImgText">
                    <h3>Week of Welcome: Musical Evening</h3>
                    <h4>DATE: 12/3/2024</h4>
                  </div>
                </div>
              </div>
            </Slider>
            {/* <ul className="customArrows heroSliderArrows">
               <li className="hero-prev-arrow"><i className="faLongArrowAltLeft"></i></li>
               <li className="hero-next-arrow"><i className="faLongArrowAltRight"></i></li>
            </ul> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
