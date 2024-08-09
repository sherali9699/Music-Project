import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/30_Khayal Se Ghazal Tak/1000x1000/DSC00011.jpg";
import im2 from "../assets/images/event-assets/30_Khayal Se Ghazal Tak/1000x1000/DSC00037.jpg";
import im3 from "../assets/images/event-assets/30_Khayal Se Ghazal Tak/1000x1000/DSC09929.jpg";
import im4 from "../assets/images/event-assets/30_Khayal Se Ghazal Tak/1000x1000/DSC09978-2.jpg";
import im5 from "../assets/images/event-assets/30_Khayal Se Ghazal Tak/1000x1000/DSC09997.jpg";


function Ev30() {
  return (
    <>
      <Helmet>
        <title>
        Khayal Se Ghazal Tak - Center for South Asian Music 
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
                Khayal Se Ghazal Tak
                </h1>
                <span className="dateonBanner">Dated: 27/Feb/2024</span>
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
                The Center for South Asian Music in collaboration with Library Information Commons hosted a book launch and concert by Ustad Shahid Hamid. 
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
                  <a data-fancybox="gallery" href={im5}>
                    <img src={im5} width="" height="" alt="Event 1" />
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

export default Ev30;
