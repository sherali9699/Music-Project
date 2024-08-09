import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/03/1000x1000/DSC05231.jpg";
import im2 from "../assets/images/event-assets/03/1000x1000/DSC05528.jpg";
import im3 from "../assets/images/event-assets/03/1000x1000/DSC05818.jpg";
import im4 from "../assets/images/event-assets/03/1000x1000/DSC05889.jpg";
import im5 from "../assets/images/event-assets/03/1000x1000/Untitled-1.jpg";





function Ev3() {
  return (
    <>
      <Helmet>
        <title>Raag Time - Center for South Asian Music</title>
      </Helmet>

      {/* Header */}
      <div className="event-inner-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">Raag Time</h1>
                <span className="dateonBanner">Dated: 05/Mar/2019</span>
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
                An event dedicated to the celebration of the South Asian aesthetic tradition, Raag Time provided a platform to the students of music to present ragas, and for the audience to acquaint themselves with their cultural inheritance. The electrifying student performances featured bandish and geet, all of which was well-received by an excited audience.
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

export default Ev3;
