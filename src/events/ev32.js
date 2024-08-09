import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/32_The Evolution of Khayal/28_Lec Demo with Ustad Raza Ali Khan (5th March 2024).jpg";


function Ev32() {
  return (
    <>
      <Helmet>
        <title>
        The Evolution of Khayal - Center for South Asian Music 
        </title>
      </Helmet>

      {/* Header */}
      <div
        className="event-inner-header"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">
                The Evolution of Khayal
                </h1>
                <span className="dateonBanner">Dated: 05/Mar/2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section className="mrSec padSec top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="bannerInnerDetais">
                <p>
                The Center for South Asian Music in collaboration with the Comparative Humanities program and All Pakistan Music Conference (APMC) hosted Ustad Raza Ali Khan and Ustad Shahbaz Hussain for a performance lecture on Khayal.               
                 </p>
              </div>
              <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                  },
                }}
              >
                <div className="gallery-container">
                  <a data-fancybox="gallery" href={im1}>
                    <img src={im1} width="" height="" alt="Event 1" />
                  </a>                             
                </div>
              </Fancybox>
            </div>
            <div className="eve-button-conatin mt-1" >
                <Link to={"/events"}>
                  <span className="globalBtn borderBtn">Back</span>
                  </Link>
                </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ev32;
