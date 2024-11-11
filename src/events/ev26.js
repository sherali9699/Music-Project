import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/26_Ghazal Kay Rang/1000x1000/DSC09216.jpg";
import im2 from "../assets/images/event-assets/26_Ghazal Kay Rang/1000x1000/DSC09282.jpg";
import im3 from "../assets/images/event-assets/26_Ghazal Kay Rang/1000x1000/DSC09318.jpg";
import im4 from "../assets/images/event-assets/26_Ghazal Kay Rang/1000x1000/DSC09346.jpg";
import im5 from "../assets/images/event-assets/26_Ghazal Kay Rang/1000x1000/DSC09451.jpg";


function Ev26() {
  return (
    <>
      <Helmet>
        <title>
        Ghazal Kay Rang - Center for South Asian Music 
        </title>
        <link rel="canonical" href="https://habib.edu.pk/music/events/ghazal-kay-rang-26-oct-2023" />
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
                <span className="dateonBanner">Dated: 26/Oct/2023</span>
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
                The Center hosted its 3rd in the Ghazal Kay Rang series featuring some soulful renditions of ghazals by Dr. Shams Rashdi, accompanied by Altaf Hussain on harmonium and Amjad Hussain on tabla.
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

export default Ev26;
