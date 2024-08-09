import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/31_Bansuri Workshop with Ustad Hanif Khan/1000x1000/DSC09780.jpg";
import im2 from "../assets/images/event-assets/31_Bansuri Workshop with Ustad Hanif Khan/1000x1000/DSC09787.jpg";
import im3 from "../assets/images/event-assets/31_Bansuri Workshop with Ustad Hanif Khan/1000x1000/DSC09840.jpg";
import im4 from "../assets/images/event-assets/31_Bansuri Workshop with Ustad Hanif Khan/1000x1000/DSC09882.jpg";


function Ev31() {
  return (
    <>
      <Helmet>
        <title>
        Bansuri Workshop with Ustad Hanif Khan - Center for South Asian Music 
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
                Bansuri Workshop with Ustad Hanif Khan
                </h1>
                <span className="dateonBanner">Dated: 29/Feb/2024</span>
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
                The Center hosted a bansuri workshop with Ustad Hanif Khan in the Khawaja Mashooqullah Music Room. 
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
                  <a data-fancybox="gallery" href={im2}>
                    <img src={im2} width="" height="" alt="Event 1" />
                  </a>
                  <a data-fancybox="gallery" href={im3}>
                    <img src={im3} width="" height="" alt="Event 1" />
                  </a>
                  <a data-fancybox="gallery" href={im4}>
                    <img src={im4} width="" height="" alt="Event 1" />
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

export default Ev31;
