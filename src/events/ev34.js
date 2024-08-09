import React from "react";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/34_Awards Night/1000x1000/(1292).jpg";
import im2 from "../assets/images/event-assets/34_Awards Night/1000x1000/(1314).jpg";
import im3 from "../assets/images/event-assets/34_Awards Night/1000x1000/(582).jpg";
import im4 from "../assets/images/event-assets/34_Awards Night/1000x1000/DSC07283.jpg";
import im5 from "../assets/images/event-assets/34_Awards Night/1000x1000/DSC07354.jpg";


function Ev34() {
  return (
    <>
      <Helmet>
        <title>
        Awards Night - Center for South Asian Music 
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
                Awards Night
                </h1>
                <span className="dateonBanner">Dated: 30/May/2024</span>
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
                The HU Orchestra led by the founding director for the Center for South Asian Music, Yousuf Kerai, and the esteemed Ustads from the Khwaja Mashooqullah room, took center stage to honor the distinguished batch of 2024. Their performance featured a composition in Raag Kalawati, a song and composition in Raag Kirwani, and a unique fusion of Western style in Raag Kirwani, incorporating Beethoven's piece Für Elise. 
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Ev34;
