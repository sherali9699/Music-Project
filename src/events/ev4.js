import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/04/1000x1000/Hab-0575.jpg";
import im2 from "../assets/images/event-assets/04/1000x1000/Hab-9491.jpg";
import im3 from "../assets/images/event-assets/04/1000x1000/IMG_0547.jpg";
import im4 from "../assets/images/event-assets/04/1000x1000/IMG_0559.jpg";
import im5 from "../assets/images/event-assets/04/1000x1000/IMG_9911.jpg";




function Ev4() {
  return (
    <>
      <Helmet>
        <title>Awards Night  - Center for South Asian Music</title>
        <link rel="canonical" href="https://habib.edu.pk/dev-music/events/awards-night-14-june-2019" />
      </Helmet>

      {/* Header */}
      <div className="event-inner-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">Awards Night </h1>
                <span className="dateonBanner">Dated: 14/June/2019</span>
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
                With just 9 months of dedicated training, under the guidance of musical maestros, students of the HU Orchestra gave an enthralling musical performance. Led by our faculty member and musician Yousuf Kerai, the performance at the Awards Night embodied the sheer hard work and dedication of the orchestra, which was greatly appreciated and applauded by the audience, comprising the graduating Class of 2019 and other members of the Habib community.
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

export default Ev4;
