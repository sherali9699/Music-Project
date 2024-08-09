import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/28_Ghazal Kay Rang/1000x1000/DSC08841.jpg";
import im2 from "../assets/images/event-assets/28_Ghazal Kay Rang/1000x1000/DSC08865.jpg";
import im3 from "../assets/images/event-assets/28_Ghazal Kay Rang/1000x1000/DSC08869.jpg";
import im4 from "../assets/images/event-assets/28_Ghazal Kay Rang/1000x1000/DSC08888.jpg";
import im5 from "../assets/images/event-assets/28_Ghazal Kay Rang/1000x1000/DSC08898.jpg";


function Ev28() {
  return (
    <>
      <Helmet>
        <title>
        Ghazal Kay Rang - Center for South Asian Music 
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
                Ghazal Kay Rang
                </h1>
                <span className="dateonBanner">Dated: 25/Jan/2024</span>
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
                The Center hosted its 4th in the Ghazal Kay Rang series for some soulful renditions of ghazals by Intezar Hussain, accompanied by Islamuddin Meer sahib on harmonium and Yousuf Kerai on Tabla.  
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

export default Ev28;
