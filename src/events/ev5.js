import React from "react";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/05_Week of Welcome - Musical Evening/1000x1000/IMG_2042.jpg";
import im2 from "../assets/images/event-assets/05_Week of Welcome - Musical Evening/1000x1000/IMG_2106.jpg";
import im3 from "../assets/images/event-assets/05_Week of Welcome - Musical Evening/1000x1000/IMG_2111.jpg";
import im4 from "../assets/images/event-assets/05_Week of Welcome - Musical Evening/1000x1000/IMG_2171.jpg";
import im5 from "../assets/images/event-assets/05_Week of Welcome - Musical Evening/1000x1000/IMG_2179.jpg";



function Ev5() {
  return (
    <>
      <Helmet>
        <title>Week of Welcome: Musical Evening  - Center for South Asian Music</title>
      </Helmet>

      {/* Header */}
      <div className="event-inner-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">Week of Welcome: Musical Evening </h1>
                <span className="dateonBanner">Dated: 30/Aug/2019</span>
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
                Habib University orchestra welcomed Class of 2023 with a presentation of the Raag Hansdhun. The orchestra, consisting of 30 students, performed alongside revered music maestros.
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Ev5;
