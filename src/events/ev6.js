import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/06_Week of Welcome/1000x1000/DSC02006.jpg";
import im2 from "../assets/images/event-assets/06_Week of Welcome/1000x1000/DSC02016.jpg";
import im3 from "../assets/images/event-assets/06_Week of Welcome/1000x1000/DSC02310.jpg";
import im4 from "../assets/images/event-assets/06_Week of Welcome/1000x1000/DSC02329.jpg";
import im5 from "../assets/images/event-assets/06_Week of Welcome/1000x1000/DSC_0111.jpg";
import im6 from "../assets/images/event-assets/06_Week of Welcome/1000x1000/DSC_0377.jpg";



function Ev6() {
  return (
    <>
      <Helmet>
        <title>Week of Welcome: Musical Evening  - Center for South Asian Music</title>
        <link rel="canonical" href="https://habib.edu.pk/dev-music/events/week-of-welcome-musical-evening-12-mar-2021" />
      </Helmet>

      {/* Header */}
      <div className="event-inner-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">Week of Welcome: Musical Evening </h1>
                <span className="dateonBanner">Dated: 12/Mar/2021 </span>
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
                The Habib University Orchestra, led by the Music Instructors from the Khawaja Mashooqullah Music Room celebrated the Week of Welcome for the incoming class of 2025, highlighting musical talent and the institution's values of collaboration, creativity, and community.
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
                  <a data-fancybox="gallery" href={im6}>
                    <img src={im6} width="" height="" alt="Event 5" />
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

export default Ev6;
