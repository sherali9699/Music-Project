import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/25_Karoonjhar Mountains - World Heritage Site or Granite Reserve/1000x1000/C0016T01.jpg";
import im2 from "../assets/images/event-assets/25_Karoonjhar Mountains - World Heritage Site or Granite Reserve/1000x1000/C0027T01.jpg";
import im3 from "../assets/images/event-assets/25_Karoonjhar Mountains - World Heritage Site or Granite Reserve/1000x1000/DSC00005.jpg";
import im4 from "../assets/images/event-assets/25_Karoonjhar Mountains - World Heritage Site or Granite Reserve/1000x1000/DSC00037.jpg";


function Ev25() {
  return (
    <>
      <Helmet>
        <title>
        Karoonjhar Mountains: World Heritage Site or Granite Reserve - Center for South Asian Music 
        </title>
        <link rel="canonical" href="https://habib.edu.pk/dev-music/events/karoonjhar-mountains-world-heritage-site-or-granite-reserve-19-oct-2023" />
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
                Karoonjhar Mountains: World Heritage Site or Granite Reserve
                </h1>
                <span className="dateonBanner">Dated: 19/Oct/2023</span>
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
                The Comparative Humanities Program, in collaboration with the Center for South Asian Music, hosted a Panel Discussion followed by a musical performance by Faqeer Zulfiqar on the Borendo, with Yousuf Kerai on tabla.  
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

export default Ev25;
