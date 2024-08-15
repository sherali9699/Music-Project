import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/07_Khayal - Imagination in Sound/1000x1000/DSC_0606.jpg";
import im2 from "../assets/images/event-assets/07_Khayal - Imagination in Sound/1000x1000/DSC_0608.jpg";
import im3 from "../assets/images/event-assets/07_Khayal - Imagination in Sound/1000x1000/DSC_0629.jpg";
import im4 from "../assets/images/event-assets/07_Khayal - Imagination in Sound/1000x1000/DSC_0634.jpg";
import im5 from "../assets/images/event-assets/07_Khayal - Imagination in Sound/1000x1000/DSC_0642.jpg";




function Ev7() {
  return (
    <>
      <Helmet>
        <title>Khayal: Imagination in Sound  - Center for South Asian Music</title>
        <link rel="canonical" href="https://habib.edu.pk/dev-music/events/khayal-imagination-in-sound-16-nov-2021" />
      </Helmet>

      {/* Header */}
      <div className="event-inner-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading"> Khayal: Imagination in Sound </h1>
                <span className="dateonBanner">Dated: 16/Nov/2021 </span>
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
                The Center for South Asian Music hosted its inaugural Khayal Concert featuring Muhammad Aizaz Sohail on vocals and Liaquat Homayoun on the Rubab.
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
                    <img src={im2} width="" height="" alt="Event 2" />
                  </a>
                  <a data-fancybox="gallery" href={im3}>
                    <img src={im3} width="" height="" alt="Event 3" />
                  </a>
                  <a data-fancybox="gallery" href={im4}>
                    <img src={im4} width="" height="" alt="Event 4" />
                  </a>
                  <a data-fancybox="gallery" href={im5}>
                    <img src={im5} width="" height="" alt="Event 5" />
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

export default Ev7;
