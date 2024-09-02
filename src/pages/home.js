// Import React and necessary components and styles
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import VideoPauseHero from "../components/VideoPauseHero"; // Import VideoPauseHero componen
import VideoPopup from "../components/VideoPopup";

import CustomSlider from "../components/custom-slider";
import CustomSlider2 from '../components/custom-slide2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// Import images for various sections
import abtImg1 from "../assets/images/about/home-abt-1.webp";
import abtImg2 from "../assets/images/about/home-abt-2.webp";
import abtImg3 from "../assets/images/about/home-abt-3.webp";
import academicOfferingsImg1 from "../assets/images/acaOffering/academic-offerings-1.webp";
import academicOfferingsImg2 from "../assets/images/acaOffering/academic-offerings-2.webp";
import mrImg1 from "../assets/images/home/mr-1.webp";
import mrImg2 from "../assets/images/home/mr-2.webp";
import mrImg3 from "../assets/images/home/mr-3.webp";
import eventImg1 from "../assets/images/event-assets/31_Bansuri Workshop with Ustad Hanif Khan/Thumbnail.jpg";
import eventImg2 from "../assets/images/event-assets/32_The Evolution of Khayal/Thumbnail.jpg";
import eventImg3 from "../assets/images/event-assets/33_Echoes of Tradition - The Art of Tabla Solo with Ustad Shahbaz Hussain/Thumbnail.jpg";
import eventImg4 from "../assets/images/event-assets/34_Awards Night/Thumnail.jpg";


const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>
          Center fot South Asian Music - Center for South Asian Music
        </title>
        <link rel="canonical" href="https://habib.edu.pk/dev-music/" />
      </Helmet>

      
      <VideoPopup/>
      {/* Render the VideoPauseHero component */}

      {/* About Section */}
      <section className="abtSec padSec top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="globalHeadingWrap">
                <h1 className="globalHeading">About</h1>
                <p>
                  Experience the fusion of culture and education at the Center for South Asian Music at Habib University. Our Music Room provides immersive learning opportunities, complemented by courses that culminate in the pioneering South Asian Music Minor. Dive into the historical, mathematical, and performance dimensions, as we strive to revive cultural heritage and nurture interdisciplinary understanding.
                </p>
                <Link className="globalBtn borderBtn" to="/about">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="home-event-pics">
          {isMobile && (<ul className="abtImagesWrap">
            <li>
              <img src={abtImg1} alt="Music Room interior" />
            </li>
            <li>
              <img src={abtImg2} alt="Music Room instruments" />
            </li>
            <li>
              <img src={abtImg3} alt="Music Room practice session" />
            </li>
          </ul>)}
            {!isMobile && (
              <div className='carous'>
              <CustomSlider showDots={true} showArrows={false} autoplay={true} autoplaySpeed={5000} scrollOnSmallScreens={true}>
                <div className="hoverImgBox">                
                    <div className="imgWrap">
                      <img src={abtImg1} alt="Khayal concert event" />
                    </div>                
                </div>
                <div className="hoverImgBox">                
                    <div className="imgWrap">
                      <img src={abtImg2} alt="Ghazal Kay Rang event" />
                    </div>                
                </div>
                <div className="hoverImgBox">              
                    <div className="imgWrap">
                      <img src={abtImg3} alt="Folk music program" />
                    </div>              
                </div>
              </CustomSlider>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Academic Offerings Section */}
      <section className="AcaOffSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading two">Academic Offerings</h2>
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
          <div className="home-event-pics">
          {isMobile && (<ul className="abtImagesWrap">
            <li>
              <img src={academicOfferingsImg1} alt="Music Room interior" />
            </li>
            <li>
              <img src={academicOfferingsImg2} alt="Music Room instruments" />
            </li>
          </ul>)}
            {!isMobile && (
              <div className='carous'>
              <CustomSlider showDots={true} showArrows={false} autoplay={true} autoplaySpeed={5000} scrollOnSmallScreens={true}>
                <div className="hoverImgBox">                
                    <div className="imgWrap">
                      <img src={academicOfferingsImg1} alt="Khayal concert event" />
                    </div>                
                </div>
                <div className="hoverImgBox">                
                    <div className="imgWrap">
                      <img src={academicOfferingsImg2} alt="Ghazal Kay Rang event" />
                    </div>                
                </div>
              </CustomSlider>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Khawaja Mashooqullah Music Room Section */}
      <section className="mrSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading two">
                  Khawaja Mashooqullah Music Room
                </h2>
                <Link className="globalBtn borderBtn" to="/music-room">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="home-event-pics">
          {isMobile && (<ul className="abtImagesWrap">
            <li>
              <img src={mrImg1} alt="Music Room interior" />
            </li>
            <li>
              <img src={mrImg2} alt="Music Room instruments" />
            </li>
            <li>
              <img src={mrImg3} alt="Music Room practice session" />
            </li>
          </ul>)}
          
            {!isMobile && (
              <div className='carous'>
              <CustomSlider showDots={true} showArrows={false} autoplay={true} autoplaySpeed={5000} scrollOnSmallScreens={true}>
                <div className="hoverImgBox">                
                    <div className="imgWrap">
                      <img src={mrImg1} alt="Khayal concert event" />
                    </div>                
                </div>
                <div className="hoverImgBox">                
                    <div className="imgWrap">
                      <img src={mrImg2} alt="Ghazal Kay Rang event" />
                    </div>                
                </div>
                <div className="hoverImgBox">              
                    <div className="imgWrap">
                      <img src={mrImg3} alt="Folk music program" />
                    </div>              
                </div>
              </CustomSlider>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="eventSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading two">Events</h2>
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
            <div className='carous'>
            <CustomSlider2 showDots={false} showArrows={true} autoplay={true} autoplaySpeed={5000} scrollOnSmallScreens={true}>
            
              <Link to={"/events/awards-night-30-may-2024"}>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={eventImg4} alt="Awards Night" />
                  </div>
                  <div className="overImgText">
                    <h3>Awards Night</h3>
                    <h4>DATE: 30/May/2024</h4>
                  </div>
                </div>             
              </div>
              </Link>

              <Link to={'/events/echoes-of-tradition-the-art-of-tabla-solo-with-ustad-shahbaz-hussain-07-mar-2024'}>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={eventImg3} alt="Echoes of Tradition: The Art of Tabla Solo with Ustad Shahbaz Hussain" />
                  </div>
                  <div className="overImgText">
                    <h3>Echoes of Tradition: The Art of Tabla Solo with Ustad Shahbaz Hussain</h3>
                    <h4>07/Mar/2024</h4>
                  </div>
                </div>
              </div>
              </Link>
              <Link to={'/events/the-evolution-of-khayal-05-mar-2024'}>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={eventImg2} alt="The Evolution of Khayal" />
                  </div>
                  <div className="overImgText">
                    <h3>The Evolution of Khayal</h3>
                    <h4>DATE: 05/Mar/2024</h4>
                  </div>
                </div>
              </div>
              </Link>
              <Link to={'/events/bansuri-workshop-with-ustad-hanif-khan-29-feb-2024'}>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={eventImg1} alt="Bansuri Workshop with Ustad Hanif Khan" />
                  </div>
                  <div className="overImgText">
                    <h3>Bansuri Workshop with Ustad Hanif Khan</h3>
                    <h4>DATE: 29/Feb/2024</h4>
                  </div>
                </div>
              </div>
              </Link>
            </CustomSlider2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
