import React from "react";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/19_Listening Through the Times with Nizar Lalani/1000x1000/DSC05984.jpg";
import im2 from "../assets/images/event-assets/19_Listening Through the Times with Nizar Lalani/1000x1000/DSC05985.jpg";
import im3 from "../assets/images/event-assets/19_Listening Through the Times with Nizar Lalani/1000x1000/DSC05988.jpg";
import im4 from "../assets/images/event-assets/19_Listening Through the Times with Nizar Lalani/1000x1000/DSC05997.jpg";
import im5 from "../assets/images/event-assets/19_Listening Through the Times with Nizar Lalani/1000x1000/DSC06021.jpg";
import im6 from "../assets/images/event-assets/19_Listening Through the Times with Nizar Lalani/1000x1000/DSC06094.jpg";


function Ev19() {
  return (
    <>
      <Helmet>
        <title>
        Listening Through the Times with Nizar Lalani - Center for South Asian Music
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
                Listening Through the Times with Nizar Lalani
                </h1>
                <span className="dateonBanner">Dated: 26/Jan/2023</span>
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
                The Center and the Comparative Humanities program hosted "Listening Through the Times" with Nizar Lalani, a renowned music producer from Karachi, in conversation with former Assistant Professor of Practice, Daniyal Ahmed.
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
                  <a data-fancybox="gallery" href={im6}>
                    <img src={im6} width="" height="" alt="Event 1" />
                  </a>
                </div>
              </Fancybox>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ev19;
